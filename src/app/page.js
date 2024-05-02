import React from "react";
import Head from "next/head";
import Navbar from "./components/navbar/Navbar";
import CarouselMisc from './components/carousel/CarouselMisc'
import Season from './components/season/Season';
import Bundle from './components/bundles/Bundle';
import Agents from './components/agents/Agents';
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
    
      <Head>
        <link  rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    
    <main className="flex min-h-screen flex-col bg-[#0A141E]  items-center  ">
      
      <div className="relative">
        <CarouselMisc />
        <Season />
        <Bundle />
        <Agents />
      </div>

      <Footer />
    </main>
    </>

  );
}
