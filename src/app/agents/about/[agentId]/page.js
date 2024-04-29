"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import CardSkill from "../../../components/card/CardSkill";
import axios from "axios";
// import CardAgent from "../../components/card/CardAgent";

const AboutAgent = () => {
  const [agent, setAgent] = useState([]);
  const [agents, setAgents] = useState([]);
  const router = useRouter();

  // const pathname = usePathname() //return url string
  // const searchParams = useSearchParams() //used for like url/agents?agentId=xxxxx return xxxx
  const params = useParams(); //used for like url/about/[agentId] return {agentId:xxxx}
  const agentId = params.agentId;

  const getAgentDetails = async (agentId) => {
    const response = await axios.get(
      `https://valorant-api.com/v1/agents/${agentId}`,
      { headers: { "Content-Type": "application/json" } }
    );
    const agentData = response.data.data;
    setAgent(agentData);
    console.log(agentData);
  };

  useEffect(() => {
    getAgentDetails(agentId);
  }, [agentId]);

  return (
    <>
      {agent && (
        <main className="relative lg:py-16 min-h-screen  bg-[#0A141ECC] ">
          <Head>
            <title>Valorant - {agent.displayName}</title>
          </Head>

          <Navbar />
          {/* from-[#c7f558] via-[#d56324] to-[#3A2656] */}

          <div
            className={`bg-center md:bg-cover   bg-[url('/assets/images/agent_select.jpg')]  
        relative mt-24 md:m-8 lg:m-12  h-60 overflow-hidden  px-20 py-52 `}
          >
            <div className="relative w-52 mb-5 flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <h2 className="text-6xl text-left text-white">
                {agent.displayName}
              </h2>
            </div>

            <div  className="relative w-52 flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <h2 className="text-6xl text-left text-white">
              {agent.displayName}
              </h2>
            </div>
              <img className="w-60 h-60 scale-105 absolute right-1/4 top-1/2 bottom-1/2 translate-x-24" src={`${agent.bustPortrait}`} />
          </div>
            

          {/* DESCRIPTION */}
          <h2 className="text-5xl text-center font-normal ">DESCRIPTION</h2>
          <div
            className={`relative bg-[#0A141ECC] mb-12
                  md:m-12 lg:m-12  h-20  px-32 py-52 justify-center items-center`}
          >
              <p className="text-5xl text-center font-normal">
                {agent.description}
              </p>
            
          </div>



          {/* AGENT SKILLS */}
          <div
            className={`grid grid-cols-4 gap-2 justify-center items-center bg-[#0A141ECC]
                 mt-12 md:m-8 lg:m-12  h-20 overflow-hidden  px-20 py-52 `}
           > 

            <CardSkill />
           
          </div>


        </main>
      )}
      <Footer />
    </>
  );
};

export default AboutAgent;
