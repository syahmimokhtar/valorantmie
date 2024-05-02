"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CardWeapon from "../components/card/CardWeapon";
import axios from "axios";
import {useRouter} from "next/navigation";

const Weapon = () => {
  const [weapons, setWeapons] = useState([]);
  const router=useRouter();


  const viewWeaponDetails=(id)=>
  {
    router.push(`/weapons/about/${id}`)
  }


  const handleWeapons = async () => {
    try {
      const headers = { "Content-Type": "application/json" };
      const dataUrl = `https://valorant-api.com/v1/weapons`;
      const response = await axios.get(dataUrl, { headers: headers });
      const weaponsData = response.data.data;
      setWeapons(weaponsData);
      console.log(weaponsData);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    handleWeapons();
  }, []);

  return (
    <>
      <Head>
        <title>Valorant - Weapons</title>
      </Head>
      <Navbar />

      <main className="relative flex min-h-screen flex-col bg-[#0A141E] items-center justify-center ">
        <div className="absolute w-full h-full opacity-30 ">
          <img
            src={`/assets/images/weapons.jpg`}
            style={{ width: "1980px", height: "1080px" }}
            className="object-cover "
            alt="buddies"
          />
        </div>

        <div className=" w-full h-full relative  px-12 py-12  mt-12 mb-20 justify-center items-center">
          <div className="md:grid md:grid-cols-4 grid  gap-4 ">
            {weapons &&
              weapons.map((item, index) => (
                
                <CardWeapon key={index} handleClick={()=>viewWeaponDetails(item.uuid)} 
                  displayName={item.displayName}>
                  <img
                    src={item.displayIcon}
                    alt={item.displayName}
                    className="object-fit w-full h-full"
                  />
                 
                </CardWeapon>
              ))}
          </div>
        </div>
      </main>
    
      <Footer />
    </>
  );
};

export default Weapon;
