"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CardAgent from "../components/card/CardAgent";
import axios from "axios";
import { useRouter } from "next/navigation";

const Maps = () => {
  return (
    <>
      <Head>
        <title>Valorant - Maps</title>
      </Head>
      <Navbar />

      <main className="relative flex min-h-screen flex-col bg-[#0A141ECC] items-center justify-center">
        <Image
          priority={true}
          fill
          src={`/assets/images/agent_select.jpg`}
          className="overflow-hidden w-full h-full"
          alt="agent select"
        />

        <div className="relative w-full h-full md:grid md:grid-cols-5 md:gap-3 mt-20 bg-[#0A141ECC] ">
            
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Maps;
