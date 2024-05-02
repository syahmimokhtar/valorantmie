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
        <title>Valorant - Weapons</title>
      </Head>
      <Navbar />

      <main className="relative flex min-h-screen flex-col bg-[#0A141E] items-center justify-center ">
        
      </main>
    
      <Footer />
    </>
  );
};

export default Banner;
