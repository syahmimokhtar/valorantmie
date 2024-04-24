import Image from "next/image";
import React from "react";
import Head from "next/head";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0C0B0B]  items-stretch  ">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="container mt-24 mx-auto py-4 px-12">
        


      </div>

      <Footer />
    </main>
  );
}
