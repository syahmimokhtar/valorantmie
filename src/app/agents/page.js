
"use client";
import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CardAgent from "../components/card/CardAgent";
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AgentsCard = () => {

    const [agents, setAgents]=useState([]);
    const [loading, setLoading]=useState(false);

    const handleAgents=async()=>
    {   
      setLoading(true);
      try{
        const headers={'Content-Type' : 'application/json'}
        const dataUrl=`https://valorant-api.com/v1/agents?isPlayableCharacter=true`;
        const response =await axios.get(dataUrl, {headers:headers})
        const agentData=response.data.data;
        setAgents(agentData)
        console.log(agentData);

      }catch(error)
      {
        console.log('error', error)
      }
      setLoading(false);

    }

    useEffect(()=>
    {
      handleAgents();
    }, []);


  return (

    <>
        <Head>
            <title>Valorant - Agents</title>
        </Head>
        <Navbar />


          <main className="flex min-h-screen flex-col bg-[#0A141ECC] items-center justify-center">
              
                <Image  priority={true} width={2000} height={2000} src={`/assets/images/agent_select.jpg`}  className="overflow-hidden w-full h-full" alt="agent select" />

                <div className="relative w-full h-full md:grid md:grid-cols-5 md:gap-3 mt-20 bg-[#0A141ECC] ">
                    {agents && (agents.map((agent) => (
                        <CardAgent key={agent.uuid} roleIcon={agent.role.displayIcon} imageSrc={agent.background} fullPortraitSrc={agent.fullPortrait} agentName={`${agent.displayName} - ${agent.role.displayName}`} />
                    )))}
                </div>
    
          </main>

          <Footer />



    </>
   
  )
}

export default AgentsCard;

   