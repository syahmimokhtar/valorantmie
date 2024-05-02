"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useParams } from "next/navigation";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import axios from "axios";
import CardAgent from "../../../components/card/CardAgent";


const AboutWeapons = () => {

    const [weapons, setWeapons] = useState({});
    
    const params=useParams();
    const weaponId=params.weaponId;

    const handleWeapons = async () => {
        try {
          const headers = { "Content-Type": "application/json" };
          const dataUrl = `https://valorant-api.com/v1/weapons/${weaponId}`;
          const response = await axios.get(dataUrl, { headers: headers });
          const weaponsData = response.data.data.skins;
          setWeapons(weaponsData);
          console.log(weaponsData)
        } catch (error) {
          console.log("error", error);
        }
      };

      useEffect(()=>{
        handleWeapons();
      }, [weaponId])

  return (
    <>
            <Head>
                <title>Valorant - Weapons</title>
             </Head>
            <Navbar />

           
        <main className="relative lg:py-16 min-h-screen  bg-[#0A141E] ">


                <div className="absolute w-full h-full opacity-30 ">
                            <img
                                src={`/assets/images/weapons.jpg`}
                                style={{ width: "1980px", height: "1080px" }}
                                className="object-cover "
                                alt="weapons"
                            />
               </div>
           
               <div className=" w-full h-full relative  px-12 py-12  mt-12 mb-20 justify-center items-center">
                    <div className="md:grid md:grid-cols-4 grid  gap-2 ">
                    {Array.isArray(weapons) &&
                        weapons.map((item, index) => (
                            <CardAgent key={index} >
                            <img
                                src={item.displayIcon}
                                alt={item.displayName}
                                className="object-fit w-auto h-auto"
                            />
                            <h2 className="text-center text-4xl mt-2">
                                {item.displayName}
                            </h2>
                            </CardAgent>
                        ))}
                    </div>
                 </div>


        </main>

        <Footer />

    
    </>
  )
}

export default AboutWeapons;
