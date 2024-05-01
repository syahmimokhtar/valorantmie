
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
    const router=useRouter();
    
    const handleAgents=async()=>
    {   
      setLoading(true);
      try{
        const headers={'Content-Type' : 'application/json'}
        const dataUrl=`https://valorant-api.com/v1/agents?isPlayableCharacter=true`;
        const response =await axios.get(dataUrl, {headers:headers})
        const agentData=response.data.data;
        setAgents(agentData)
        // console.log(agentData);

      }catch(error)
      {
        console.log('error', error)
      }
      setLoading(false);

    }

    const viewAgentDetail=(id)=>
    {
      router.push(`/agents/about/${id}`)
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


          <main className="relative flex min-h-screen flex-col bg-[#0A141E] items-center justify-center">
              
                <Image  priority={true} fill  src={`/assets/images/agent_select.jpg`}  className="overflow-hidden w-full h-full" alt="agent select" />

                <div className="relative w-full h-full md:grid md:grid-cols-5 md:gap-2 mt-20 bg-[#0A141E] ">
                    {agents && (agents.map((agent) => (
                        <CardAgent key={agent.uuid}  handleClick={()=>viewAgentDetail(agent.uuid) }>
                                       <Image
                                  className="absolute w-8 h-8 top-4 left-64"
                                  src={agent.role.displayIcon}
                                  width={1000}
                                  height={1000}
                                  alt="Role Icon "
                                />
                                <Image
                                  className="absolute w-full h-full object-cover opacity-30 "
                                  src={agent.background} 
                                  width={1000}
                                  height={1000}
                                  alt="Agent Background "
                                />
                                <Image
                                  className="p-2 absolute w-full h-full object-cover transition-transform duration-300 transform hover:-translate-y-2 scale-110 overflow-hidden
                                  filter grayscale hover:grayscale-0"
                                  src={agent.fullPortrait}
                                  width={1000}
                                  height={1000}
                                  alt="Agent"
                                />
                                <div className="relative text-center p-2 mx-auto w-full ">
                                  <h2 className="text-3xl font-normal text-white">{`${agent.displayName} - ${agent.role.displayName}`} </h2>
                                </div>

                        </CardAgent>
                    )))}
                </div>
    
          </main>

          <Footer />



    </>
   
  )
}

export default AgentsCard;

   