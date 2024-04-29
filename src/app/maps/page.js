"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import axios from "axios";
import { useRouter } from "next/navigation";

const Maps = () => {
  const [map, setMap] = useState([]);

  const handleMaps = async () => {
    const urlData = await axios.get(`https://valorant-api.com/v1/maps`, {
      headers: { "Content-Type": "application/json" },
    });
    const response = urlData.data.data.sort();
    setMap(response);
    console.log(response);
  };

  useEffect(() => {
    handleMaps();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % map.length);
  };

  const goToPreviousItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + map.length) % map.length);
  };

  
  return (
    <>
      <Head>
        <title>Valorant - Maps</title>
      </Head>
      <Navbar />

      <main className="relative flex min-h-screen flex-col bg-[#0A141ECC] items-center justify-center">
        <div className="relative w-full h-full mt-4 scale-100">
            {/* {map &&
                map.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1  h-full items-center justify-center"
                  >
                    <img src={`${item.splash}`} alt={`${item.split}`} />
                    <h2 className="relative text-2xl text-center font-normal">
                      {item.displayName}
                    </h2>
                  </div>
                ))} */}
       

             {/* carousel sliders */}
             {/* <div className="carousel-inner w-full h-full relative"> */}

            <div className=" carousel w-full h-full relative overflow-hidden">
                {map &&  map.map((item, index) => (
                <div  key={index} className={`object-fit carousel-item ${index === currentIndex ? 'visible' : 'hidden'}`}>
                    <img
                    src={`${item.splash}`} 
                    className="w-full h-full opacity-50"
                    />

                    <div className="absolute flex flex-col h-96  md:top-80 md:left-24 items-center justify-center">
                        <h2 className=" text-center  font-normal text-7xl md:text-8xl " >{item.displayName}</h2>
                        {item.coordinates===null ? ( <h3 className=" text-center  font-normal text-4xl md:text-4xl mb-20 " >Not Available</h3>) : 
                        ( <h3 className=" text-center  font-normal text-4xl md:text-4xl mb-20 " >{item.coordinates}</h3>)}

                        <img
                            src={`${item.displayIcon}`} 
                            className="md:scale-100 w-96 h-full " alt={`${item.displayName}`}
                         />

                         <p className="p-10 md:text-2xl text-center font-normal">{item.narrativeDescription}</p>

                     </div>
                  
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <button onClick={goToPreviousItem} className="btn btn-circle">
                        ❮
                        </button>
                        <button onClick={goToNextItem} className="btn btn-circle">
                        ❯
                        </button>
                    </div>
                </div>
                    ))}
            </div>


            {/* carousel indicators */}
            <div className="flex justify-center w-full py-2 gap-2">
                
            </div>


        </div>
      </main>

      <Footer />
    </>
  );
};

export default Maps;
