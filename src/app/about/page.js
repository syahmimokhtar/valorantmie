"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from "next/navigation";
import {GithubIcon} from "../../../public/assets/images/github-icon.svg";
import {LinkedinIcon} from "../../../public/assets/images/linkedin-icon.svg";

const AboutMe = () => {
  

  return (
    <>
      <Head>
        <title>Valorant - About Me</title>
      </Head>
      <Navbar />

      <main className="relative flex min-h-screen flex-col bg-[#0A141E] items-center justify-center ">

              <section className="container mx-auto w-full h-full justify-center items-center">
                    
                    <div className="flex flex-col  my-auto mx-auto relative w-full h-full ">
                        <img style={{width:'400px' , height:'400px'}}className=' rounded-full mb-10  container mx-auto border-2 border-white w-80 h-full' src="/assets/images/dp.jpg" />
                        <h2 className='relative text-6xl font-normal text-center whitespace-nowrap'>Syahmi Mokhtar</h2>
                        <h2 className='relative text-3xl font-normal text-center whitespace-nowrap '>Front End Developer</h2>

                        <div className=" relative  mx-auto flex flex-row gap-2">
                          <Link target="_blank" href="https://github.com/syahmimokhtar">
                            <img src="/assets/images/github-icon.svg" alt="Github Icon" />
                          </Link>
                          
                          <Link target="_blank" href="https://www.linkedin.com/in/muhammad-syahmi-118458189/">
                          <img src="/assets/images/linkedin-icon.svg" alt="Linkedin Icon" />
                          </Link>
                        </div>

                    </div>

              </section>
      </main>
    
      <Footer />
    </>
  );
};

export default AboutMe;
