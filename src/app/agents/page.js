
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
              <div className="relative flex w-full h-full items-center overflow-hidden">
                  <Image src={`/assets/images/agent_select.jpg`} width={2000} height={2000} className="w-full h-full opacity-30" alt="agent select" />
              </div>

              <div className="w-full h-full top-24 absolute grid grid-cols-4 gap-2 mt-4 mb-2">
                  {agents && (agents.map((agent) => (
                      <CardAgent key={agent.uuid} imageSrc={agent.background} fullPortraitSrc={agent.fullPortrait} agentName={agent.displayName} />
                  )))}
              </div>


        </main>

        <Footer />

    </>
   
  )
}

export default AgentsCard;

   