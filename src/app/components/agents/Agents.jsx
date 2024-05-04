"use client";
import React from "react";
import Image from "next/image";
import ButtonForm from "../formInput/ButtonForm";
import { useRouter } from "next/navigation";

const Agents = () => {

  const router=useRouter();
  const viewAgents=()=>
  {
    router.push('/agents')
  }

  return (
    <section className="flex relative w-full h-auto  justify-center items-center ">
      <div className="relative flex justify-center items-center h-full  overflow-hidden ">
        <img
          className=" object-cover opacity-20"
          src="/assets/images/agents.jpg"
          alt="agents"
          style={{width:'1980px', height:'1080px'}}
        />


         <div className="absolute justify-center items-center  text-center mt-10 mb-10">
              <div className=" flex flex-col justify-center items-center p-10">
                <h2 className="text-[white] text-center  text-8xl  whitespace-normal mb-2 ">YOUR AGENTS</h2>
                <h2 className="text-[white] text-center  text-6xl  whitespace-normal  mb-2 ">CREATIVITY IS YOUR BEST WEAPON.</h2>
                <p className="text-2xl text-balance mb-5">More than weapons and ammunition, VALORANT includes agents with adaptive, 
                  fast, and lethal skills that create opportunities for you to showcase your shooting mechanics. 
                  Each Agent is unique, just like the highlight moments of each match!</p>
                
              </div>
              <ButtonForm title={`View All Agents Here`} handleClick={viewAgents}/>
          </div>

      </div>

      
    </section>
  );
};

export default Agents;
