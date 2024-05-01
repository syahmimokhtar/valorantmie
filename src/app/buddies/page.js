"use client";
import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CardAgent from "../components/card/CardAgent";
import Button from "../components/button/Button";

import axios from 'axios';

const Buddies = () => {
   
    const [buddies, setBuddies]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Number of buddies to display per page

   

    const handleBuddies=async()=>
    {   
      try{
        const headers={'Content-Type' : 'application/json'}
        const dataUrl=`https://valorant-api.com/v1/buddies`;
        const response =await axios.get(dataUrl, {headers:headers})
        const buddiesData=response.data.data;
        console.log(buddiesData)
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


    const totalPages = Math.ceil(buddies.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, buddies.length);
    const currentBuddies = buddies.slice(startIndex, endIndex);

    const nextPage = () => {
          setCurrentPage(prevPage => (prevPage === totalPages ? 1 : prevPage + 1));
      };

      const prevPage = () => {
          setCurrentPage(prevPage => (prevPage === 1 ? totalPages : prevPage - 1));
      };

  return (
    <> 
    
        <Head>
        <title>Valorant - Gun Buddies</title>
        </Head>
        <Navbar />



        <main className="relative flex min-h-screen flex-col bg-[#0A141E] items-center justify-center ">
           
            <div className="relative w-full h-full overflow-hidden opacity-30 " >
                    <img src={`/assets/images/buddies.jpg`}  style={{width:'1980px', height:'1800px'}} className="object-fit overflow-hidden " alt="buddies" />
            </div>

            <div className="container w-full h-full absolute px-12 py-12 overflow-hidden mt-12 mb-20 justify-center items-center">
                  <div className="absolute md:grid md: grid-cols-4 gap-5  -mx-4 px-4 py-20 ">
                                {currentBuddies.map((buddy, index) => (
                                  <CardAgent key={index}>
                                      <img src={buddy.displayIcon} alt={buddy.displayName} className="w-full h-auto" />
                                       <p className="text-center text-2xl mt-2">{buddy.displayName}</p>
                                  </CardAgent>
                                 
                                ))}
                    </div>


                    <div className="md:left-60 right-12 p-12 flex flex-row   absolute bottom-12   justify-center items-center">
                        <Button title={`Previous <`} handleClick={prevPage} disabled={currentPage === 1} />
                        <Button title={`Next >`} handleClick={nextPage} disabled={currentPage === totalPages} />
                    </div>
                    <p className="absolute bottom-0 right-0 text-2xl text-white mt-4 mr-8">Page {currentPage} of {totalPages}</p>


                
              </div>

  
        </main>

        <Footer />


    </>
  )
}

export default Buddies;