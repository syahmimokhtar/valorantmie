"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../../components/navbar/Navbar";
import Agents from "../../../components/agents/Agents";
import Footer from "../../../components/footer/Footer";
import CardSkill from "../../../components/card/CardSkill";
import axios from "axios";

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
          {/* from-[#c7f558] via-[#d56324] to-[#3A2656] bg-[url('/assets/images/agent_select.jpg') 
        ${gradientColors(`from-bg-[${agent.backgroundGradientColors[0]}] via-bg-[#${agent.backgroundGradientColors[1]}] to-bg-[#${agent.backgroundGradientColors[2]}]`)}
        */}



  
  return (
    <>
      {agent && (
        <main className="relative lg:py-16 min-h-screen  bg-[#0A141E] ">
          <Head>
            <title>Valorant - {agent.displayName}</title>
          </Head>

          <Navbar />


          <div style={{backgroundImage:`url('${agent.background}')`   }}
            className={`flex flex-col bg-center md:bg-cover 
        relative mt-24 md:m-8 lg:m-12  h-60 overflow-hidden  px-20 py-52 `}
          >
            <div className={`flex flex-col  relative w-80 mb-5  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`} >
              <h2 className="text-6xl text-center text-white">
                {agent.displayName}
              </h2>
            </div>

            {agent.role && (
              <div  className="flex flex-col  relative w-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <h2 className="text-6xl text-center text-white">
                {agent.role.displayName}
                </h2>
              </div>
            )}

              <img  className="w-96 h-96 scale-200 absolute right-52 md:top-28 md:bottom-1/2 translate-x-24" src={`${agent.bustPortrait}`} />
          </div>
            

          {/* DESCRIPTION */}
          <h2 className="text-5xl text-center font-normal ">DESCRIPTION</h2>
          <div className={` bg-[#0A141E] mb-12 mt-20 md:m-12 lg:m-12  h-auto  p-20 justify-center items-center`}>
              <p className="text-5xl text-center font-normal">
                {agent.description}
              </p>
            
          </div>



          {/* AGENT SKILLS */}
          <h2 className="text-5xl text-center font-normal ">ABILITIES</h2>
          <div
            className={`relative w-full h-full md:grid md:grid-cols-4 md:gap-1 mt-20 mb-10  bg-[#0A141E]
                `}
           > 

              {agent && agent.abilities && agent.abilities.map((item, index) => (

                <CardSkill key={index} cardColor={`bg-[#1E2C3D]`} skillPicture={`${item.displayIcon}`} 
                skillTitle={item.displayName} skillDesc={item.description}/>
                )) }

          </div>


              {/* ALL AGENTS VIEW SECTION */}

                  <Agents />
        </main>
      )}
      <Footer />
    </>
  );
};

export default AboutAgent;
