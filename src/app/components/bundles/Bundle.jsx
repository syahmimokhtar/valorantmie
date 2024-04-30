"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../button/Button";
const Bundle = () => {
  return (
    <section className="flex relative w-full h-full justify-center items-center ">
        
        <div className="md:grid grid-cols-2 relative justify-center items-center">

        <div className="relative flex flex-col h-full w-full overflow-hidden">
            <img className=" object-cover opacity-20" src="/assets/images/gun_buddies.jpg"alt="buddies"/>
      
          <div className="left-12 top-12 absolute sm:p-24 sm:mx-16 ">
            <div className=" absolute flex flex-col justify-center items-center ">
              <h3 className="text-[white] text-center font-normal text-7xl  whitespace-nowrap mb-5 ">
                GUN BUDDIES
              </h3>
              <Button title={`Look More Buddies `} />
            </div>
          </div>
        </div>

      

        <div className="relative flex flex-col h-full w-full overflow-hidden">
            <img className="opacity-20"src="/assets/images/bundle_pic.jpg" alt="buddies"/>
      
          <div className="left-12 top-12 absolute sm:p-24 sm:mx-16 ">
            <div className=" absolute flex flex-col justify-center items-center ">
              <h3 className="text-[white] text-center font-normal text-7xl  whitespace-nowrap mb-5 ">
                WEAPON SKINS
              </h3>
              <Button title={`View Weapons `} />
            </div>
          </div>

          
        </div>

      </div>
      
    </section>
  );
};

export default Bundle;
