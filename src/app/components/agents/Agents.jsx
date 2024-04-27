"use client";
import React from "react";
import Image from "next/image";
import Button from "../button/Button";
import { useRouter } from "next/navigation";

const Agents = () => {

  const router=useRouter();
  const viewAgents=()=>
  {
    router.push('/agents')
  }

  return (
    <section className="flex relative w-full h-full justify-center items-center ">
      <div className="relative flex justify-center items-center h-full  overflow-hidden xs:overflow-y">
        <Image
          className="opacity-20"
          src="/assets/images/agents.jpg"
          width={2000}
          height={1000}
          alt="agents"
        />


         <div className="absolute justify-center items-center  text-center mt-10 mb-10">
              <div className=" flex flex-col justify-center items-center ">
                <h3 className="text-[white] text-center font-bold md:text-5xl  whitespace-normal mb-2 ">YOUR AGENTS</h3>
                <h3 className="text-[white] text-center font-bold md:text-5xl  whitespace-normal  mb-2 ">CREATIVITY IS YOUR BEST WEAPON.</h3>
                <p className="md:text-2xl text-balance mb-5">More than weapons and ammunition, VALORANT includes agents with adaptive, 
                  fast, and lethal skills that create opportunities for you to showcase your shooting mechanics. 
                  Each Agent is unique, just like the highlight moments of each match!</p>
                
              </div>
              <Button title={`View Agents Here`} handleClick={viewAgents}/>
          </div>

      </div>

      
    </section>
  );
};

export default Agents;
