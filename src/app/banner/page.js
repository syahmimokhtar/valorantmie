"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CardWeapon from "../components/card/CardWeapon";
import axios from "axios";
import {useRouter} from "next/navigation";

const Banner = () => {
  

  return (
    <>
      <Head>
        <title>Valorant - Banner</title>
      </Head>
      <Navbar />

      <main className="relative flex min-h-screen flex-col bg-[#0A141E] items-center justify-center ">


        <div className='md:grid md:grid-cols-2 container mx-auto  relative h-full w-full justify-center items-center'>

              <div className="container mx-auto relative w-80 h-80 bottom-2/3">
                <img className="rounded-xl" src='/assets/images/bannerGenerator/valoCard.png' />
              </div>



              <div className="container mx-auto relative w-80 h-80">
                form
              </div>
              
        </div>
         
      </main>
    
      <Footer />
    </>
  );
};

export default Banner;
