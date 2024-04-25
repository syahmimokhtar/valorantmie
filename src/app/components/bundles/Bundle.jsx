"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../button/Button";
const Bundle = () => {
  return (
    <section className="flex relative w-full h-full justify-center items-center ">
      <div className="md:grid grid-cols-2 relative">
        <div className="relative">
          <Image
            className="opacity-20"
            src="/assets/images/gun_buddies.jpg"
            width={2000}
            height={2000}
            alt="buddies"
          />
          <div className="absolute top-1/4 left-1/3 m-5 text-center">
            <div className=" absolute flex flex-col justify-center items-center ">
              <h3 className="text-[white] text-center font-bold md:text-4xl  whitespace-nowrap  mb-5">
                GUN BUDDIES
              </h3>
              <Button title={`Look More Buddies...`} />
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
          
          <div className="absolute m-5 top-1/4 left-1/3 text-center">
            <div className=" absolute flex flex-col justify-center">
              <h3 className="text-[white] text-center font-bold md:text-4xl whitespace-nowrap m-2 mb-5">
                WEAPON BUNDLES
              </h3>

              <Button title={`View Bundle Skin `} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bundle;
