"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../button/Button";

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
              <h3 className="text-[white] text-center font-bold md:text-4xl  whitespace-nowrap m-2 mb-5">
                GUN BUDDIES
              </h3>

              <Button title={`View`} />
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
              <h3 className="text-[white] text-center font-bold md:text-4xl whitespace-nowrap m-2 mb-5">
                WEAPON BUNDLES
              </h3>

              <Button title={`View`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bundle;
