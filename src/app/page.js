import Image from "next/image";
import React from "react";
import Head from "next/head";
import Navbar from "./components/navbar/Navbar";
import Carousel from './components/carousel/Carousel'
import Season from './components/season/Season';
import Bundle from './components/bundles/Bundle';
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0A141ECC]  items-center  ">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="container mt-24 py-5 ">
      
        <Carousel />
        <Season />
        <Bundle />

      </div>

      <Footer />
    </main>
  );
}
