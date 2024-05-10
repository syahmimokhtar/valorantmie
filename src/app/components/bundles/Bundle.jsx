"use client";
import React, { useState, useEffect } from "react";
import {useRouter} from 'next/navigation';


import ButtonForm from "../formInput/ButtonForm";

const Bundle = () => {

  const router=useRouter();


  return (
    <section className="flex relative w-full h-full justify-center items-center ">
        
        <div className="md:grid grid-cols-2 relative justify-center items-center">

        <div className="relative flex flex-col h-full w-full overflow-hidden">
            <img className=" object-cover h-96 md:h-full opacity-20" src="/assets/images/gun_buddies.jpg"alt="buddies"/>
      
          <div className="md:left-24 top-12 absolute md:p-16 p-6 md:mx-24 mx-4">
            <div className=" absolute flex flex-col justify-center items-center">
              <h3 className="text-[white] text-center font-normal text-7xl  whitespace-nowrap mb-5 ">
                GUN BUDDIES
              </h3>
              <ButtonForm title={`Look More Buddies `} handleClick={()=>router.push(`/buddies`)} />
            </div>
          </div>
        </div>

      

        <div className="relative flex flex-col h-full w-full overflow-hidden">
            <img className=" object-cover  opacity-20  h-96 md:h-full "src="/assets/images/bundle_pic.jpg" alt="buddies"/>
      
            <div className="md:left-24 top-12 absolute md:p-16 p-5 md:mx-24 mx-4">
            <div className=" absolute flex flex-col justify-center items-center ">
              <h3 className="text-[white] text-center font-normal text-7xl  whitespace-nowrap mb-5 ">
                WEAPON SKINS
              </h3>
              <ButtonForm title={`View Weapons `} handleClick={()=>router.push(`/weapons`)} />
            </div>
          </div>

          
        </div>

      </div>
      
    </section>
  );
};

export default Bundle;
