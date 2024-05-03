"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Link from 'next/link';

const AboutMe = () => {

  const baseUrl=`/assets/images/aboutMe`;

  return (
    <>
      <Head>
        <title>Valorant - About Me</title>
      </Head>
      <Navbar />

      <main className="relative flex min-h-screen flex-col bg-[#0A141E] items-center justify-center ">

              <section className="container mx-auto w-full h-full justify-center items-center">
                    
                    <div className="flex flex-col  my-auto mx-auto relative w-full h-full ">
                        <img style={{width:'400px' , height:'400px'}}className=' rounded-full mb-10  container mx-auto border-2 border-white w-80 h-full' src={`${baseUrl}/dp.jpg`} />
                        <h2 className='relative text-6xl font-normal text-center whitespace-nowrap'>Syahmi Mokhtar</h2>
                        <h2 className='relative text-3xl font-normal text-center whitespace-nowrap mb-5'>Front End Developer</h2>

                        <div className=" relative  mx-auto flex flex-row gap-2">
                          <Link target="_blank" href="https://github.com/syahmimokhtar">
                            <img src={`${baseUrl}/github-icon.svg`}  alt="Github Icon" />
                          </Link>
                          <p className="mt-2">github</p>

                          <Link target="_blank" href="https://www.linkedin.com/in/muhammad-syahmi-118458189/">
                          <img src={`${baseUrl}/linkedin-icon.svg`} alt="Linkedin Icon" />
                          
                          </Link>
                          <p className="mt-2">LinkedIn</p>


                          <Link target="_blank" href="https://mie-portfolio.vercel.app/">
                            <img className='text-center w-11' src={`${baseUrl}/briefcase-icon.svg`} alt="My portfolio" />
                            </Link>
                            <p className="mt-2">My Portfolio</p>

                        </div>

                    </div>

              </section>
      </main>
    
      <Footer />
    </>
  );
};

export default AboutMe;
