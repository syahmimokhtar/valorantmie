
"use client";
import React, { useEffect, useState } from "react";
import Head from 'next/head';
import Image from 'next/image'
import { useParams, useRouter , useSearchParams , usePathname } from "next/navigation";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import axios from 'axios';
// import CardAgent from "../../components/card/CardAgent";



const AboutAgent = () => {

    const [agent, setAgent]=useState([]);
    const [agents, setAgents]=useState([]);
    const router=useRouter();
    
    // const pathname = usePathname() //return url string
    // const searchParams = useSearchParams() //used for like url/agents?agentId=xxxxx return xxxx
    const params = useParams() //used for like url/about/[agentId] return {agentId:xxxx}
    const agentId=params.agentId

    const getAgentDetails=async(agentId)=>
    {
        const response=await axios.get(`https://valorant-api.com/v1/agents/${agentId}` , {headers:{"Content-Type" : "application/json"} })
        const agentData=response.data.data;
        setAgent(agentData)
        console.log(agentData)
        console.log(agentData.background)

    }

    useEffect(()=>
    {
        getAgentDetails(agentId);
    },[]);

  return (

    <>
    <Head>
        <title>Valorant - {agent.displayName}</title>
    </Head>
    <Navbar />


      <main className="relative flex min-h-screen flex-col bg-[#0A141ECC] items-center justify-center">


        <section className=' w-full h-96 justify-center items-center overflow-hidden bg-white '>
          {agent.background && (
                <Image  fill={true} src={`${agent.background}`}  quality={100} className="relative w-full h-fulloverflow-hidden" alt="agent select" />
          )};
        </section>
       
      </main>

      <Footer />



</>

  )
}

export default AboutAgent;