"use client";
import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Carousel from "../components/carousel/Carousel";

import axios from 'axios';

const Buddies = () => {
   
    const [buddies, setBuddies]=useState([]);
    
    const handleBuddies=async()=>
    {   
      try{
        const headers={'Content-Type' : 'application/json'}
        const dataUrl=`https://valorant-api.com/v1/buddies`;
        const response =await axios.get(dataUrl, {headers:headers})
        const buddiesData=response.data.data;
        setBuddies(buddiesData)
        console.log(buddiesData);

      }catch(error)
      {
        console.log('error', error)
      }

    }

    

    useEffect(()=>
    {
      handleBuddies();
    }, []);


  return (
    <> 
    
        <Head>
        <title>Valorant - Gun Buddies</title>
        </Head>
        <Navbar />



        <main className="relative flex min-h-screen flex-col bg-[#0A141E] items-center justify-center">
           
            <div className="relative w-full h-full overflow-hidden opacity-30">
                    <img src={`/assets/images/buddies.jpg`}  style={{width:'1980px', height:'1080px'}} className="object-fit overflow-hidden " alt="buddies" />
            </div>


            <div className="relative w-full h-full  bg-[#0A141E] ">
                <Carousel items={buddies}>
                    {buddies.map((item,index) => (
                            <div key={index} className="absolute   h-full w-full justify-center items-center ">
                                <h2 className="text-center text-2xl">{item.displayName}</h2>
                                <img src={item.displayIcon}  className=" object-fit md:h-80 sm:h-80 w-full opacity-80" />

                            </div>
                        ))}
                </Carousel>
            </div>
  
        </main>

        <Footer />


    </>
  )
}

export default Buddies;