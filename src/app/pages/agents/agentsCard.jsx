import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { Footer, Navbar } from "@/components";
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AgentsCard = () => {

    const [agents, setAgents]=useState();

    const handleAgents=async ()=>
    {   
        const headers={'Content-Type' : 'application/json'}
        const dataUrl=`https://valorant-api.com/v1/agents&isPlayableCharacter=true`;
        const response =await axios.get(dataUrl, {headers:headers})
        setAgents(response.data)
        console.log(response);
    }

  return (

    <>
        <Head>
            <title>Valorant - Agents</title>
        </Head>
        <Navbar />

        <section className="flex relative w-full h-full justify-center items-center ">

        </section>

        <Footer />
    </>
   
  )
}

export default AgentsCard;