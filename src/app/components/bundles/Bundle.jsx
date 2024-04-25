"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
const Bundle = () => {
  return (
    <section className="flex relative w-full h-100 justify-center items-center ">
      <div className="grid grid-cols-2 relative">
        <div className="relative">
          <Image
            className="opacity-20"
            src="/assets/images/gun_buddies.jpg"
            width={2000}
            height={2000}
            alt="buddies"
          />
          <div className="absolute top-1/3 left-1/4  transform -translate-x-1/2 -translate-y-1/4 text-center">
            <div className=" absolute flex flex-col justify-center">
                <h3 className="text-[white] text-center font-bold md:text-5xl whitespace-nowrap m-2">
                  GUN BUDDIES
                </h3>
                

                <div className="bg-[#DCD9D4] relative p-1.5">
                        <button className="relative inline-flex items-center justify-center py-3 w-full bottom-1.5 left-1.5  border-black overflow-hidden text-sm bg-black">
                            <span className="relative w-full py-4 px-5 bottom-3 left-3 transition-all ease-in duration-75 font-bold text-black bg-[#DCD9D4] ">
                                View all buddies here
                            </span>
                        </button>
                </div>
            
            </div>
          </div>
        </div>

        

       
            <div className="relative">
            <Image
                className="opacity-20"
                src="/assets/images/bundle_pic.jpg"
                width={2000}
                height={2000}
                alt="buddies"
            />
            <div className="absolute top-1/3 left-1/4  transform -translate-x-1/2 -translate-y-1/4 text-center">
                <div className=" absolute flex flex-col justify-center">
                    <h3 className="text-[white] text-center font-bold md:text-5xl whitespace-nowrap ">
                       WEAPON BUNDLE
                    </h3>

                </div>
            </div>
            </div>

      </div>
    </section>
  );
};

export default Bundle;
