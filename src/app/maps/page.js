"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/carousel/Carousel";
import Footer from "../components/footer/Footer";
import axios from "axios";



const Maps = () => {
  const [map, setMap] = useState([]);

  const handleMaps = async () => {
    const urlData = await axios.get(`https://valorant-api.com/v1/maps`, {
      headers: { "Content-Type": "application/json" },
    });
    const response = urlData.data.data.sort();
    setMap(response);
    // console.log(response);
  };

  useEffect(() => {
    handleMaps();
  }, []);


  
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const goToNextItem = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % map.length);
  // };

  // const goToPreviousItem = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + map.length) % map.length);
  // };



  
  return (
    <>
      <Head>
        <title>Valorant - Maps</title>
       
      </Head>
      <Navbar />

      <main className="relative flex min-h-screen flex-col bg-[#0A141E] items-center justify-center">
        <div className=" mt-4 relative w-full h-full  ">


        <Carousel items={map}>
              {map.map((item,index) => (
                <div key={index} className="relative h-full w-full items-center">
                  <img src={item.splash} style={{ width: '1920px', height: '1080px' }} className=" opacity-30 h-full w-full" />

                  <div className="container mx-auto absolute inset-8	 flex flex-col md:items-center ">
                        <h2 className=" sm:text-center md:text-center font-normal text-7xl md:text-8xl">{item.displayName}</h2>
                        {item.coordinates !== null && (
                          <h2 className=" sm:text-left  md:text-center font-normal text-4xl md:text-4xl mb-20">{item.coordinates}</h2>
                        )}

                      {item.displayIcon !== null && (
                        <div className="md:container md:mx-auto flex flex-col sm:m-5 px-5 py-5 justify-center md:items-center">
                          <img src={`${item.displayIcon}`} className="relative w-96 h-96 mb-5" alt={`${item.displayName}`} />
                          </div>

                      )}

                      {item.narrativeDescription && ( 
                        <div className="md:container md:mx-auto flex flex-col sm:m-5 px-5 py-5 bg-black w-96 bg-opacity-40">
                            <p className="md:text-3xl  md:text-center sm:text-left text-xl  font-normal  ">{item.narrativeDescription}</p>
                        </div>
                          ) } 


                    </div>


                </div>
            ))}
      </Carousel>









{/* 
            { <div className="px-20 mt-28  carousel w-full min-h-screen">
                {map &&  map.map((item, index) => (
                <div  key={index} className={`h-full carousel-item ${index === currentIndex ? 'visible' : 'hidden'}`}>

                    <div className="relative w-full  items-center">
                        <img src={`${item.splash}`} style={{width: '1920px', height: '1080px'}} className="opacity-30 h-full w-full " /> 

                        <div className="container mx-auto absolute inset-8	 flex flex-col md:items-center ">
                              <h2 className=" sm:text-center md:text-center font-normal text-7xl md:text-8xl">{item.displayName}</h2>
                              {item.coordinates !== null && (
                                <h2 className=" sm:text-left  md:text-center font-normal text-4xl md:text-4xl mb-20">{item.coordinates}</h2>
                              )}

                            {item.displayIcon !== null && (
                              <div className="md:container md:mx-auto flex flex-col sm:m-5 px-5 py-5 justify-center md:items-center">
                                <img src={`${item.displayIcon}`} className="relative w-96 h-96 mb-5" alt={`${item.displayName}`} />
                                </div>

                            )}

                            {item.narrativeDescription && ( 
                              <div className="md:container md:mx-auto flex flex-col sm:m-5 px-5 py-5 bg-black w-96 bg-opacity-40">
                                  <p className="md:text-3xl  md:text-center sm:text-left text-xl  font-normal  ">{item.narrativeDescription}</p>
                              </div>
                                ) } 


                          </div>
                            

                      </div>
                </div>
                    ))}
              </div> }


            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button onClick={goToPreviousItem} className="btn btn-circle ">
                    ❮
                    </button>
                    <button onClick={goToNextItem} className="btn btn-circle ">
                    ❯
                    </button>
            </div> */}



        </div>
      </main>

      <Footer />
    </>
  );
};

export default Maps;
