"use client";
import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CardAgent from "../components/card/CardAgent";
import Modal from "../components/modal/Modal";
import Input from "../components/formInput/Input";

import axios from 'axios';

const Bundles = () => {

    const [bundles, setBundles]=useState([]);
    const [isOpen,setIsOpen]=useState(false);
    const[modalData, setModalData]=useState({});
    const [searchQuery, setSearchQuery]=useState("");
    const [filteredBundles, setFilteredBundles]=useState([] );

    const filterItems=(query,items)=>{
      const queryString= query? query.toString().toLowerCase():'';
      return items.filter(item =>
        item && item.displayName && item.displayName.toLowerCase().includes(queryString)
      )
    }

    useEffect(()=>
    {
      setFilteredBundles(filterItems(searchQuery,bundles))
    },[searchQuery, bundles])

    const openModal=(data)=>
    {
        setModalData(data);
        setIsOpen(true)
    }

    
    const closeModal=()=>
    {
        setIsOpen(false)
    }


    const handleBundles=async()=>
    {   
      try{
        const headers={'Content-Type' : 'application/json'}
        const dataUrl=`https://valorant-api.com/v1/bundles`;
        const response =await axios.get(dataUrl, {headers:headers})
        const bundlesData=response.data.data.sort();
        setBundles(bundlesData)

      }catch(error)
      {
        console.log('error', error)
      }
    }

    

    useEffect(()=>
    {
        handleBundles();
    }, []);



  return (
    <> 
    
    <Head>
            <title>Valorant - Bundles</title>
    </Head>
    <Navbar />



    <main className="relative flex min-h-screen flex-col bg-[#0A141E] items-center justify-center ">
       
        <div className="absolute w-full h-full opacity-30 " >
                <img src={`/assets/images/bundles.jpg`}  style={{width:'1980px', height:'1080px'}} className="object-cover " alt="buddies" />
        </div> 

        <div className=" w-full h-full relative  px-12 py-12  mt-12 mb-20 justify-center items-center">

        <Input  placeholder="Search bundles here..."
                    type="text" value={searchQuery} handleChange={e => setSearchQuery(e.target.value)}
                    className="container md:mx-20 mt-4 -mb-12 p-4   rounded border" />
                    

            <div className="md:grid md:grid-cols-5 grid  gap-2 -mx-4 px-4 py-20">
              
            {filteredBundles.length > 0 ? 
                (   filteredBundles.map((item, index) => 
                  (
                      <CardAgent key={index} handleClick={()=>openModal(item)}>
                      <img src={item.displayIcon}  alt={item.displayName} className="object-cover w-full h-full" />
                      <p className="text-center text-2xl mt-2">{item.displayName}</p>
                  </CardAgent>
                  )
                )
                ) :
              (
                
                 bundles && bundles.map((item, index) => 
                  (
                      <CardAgent key={index} handleClick={()=>openModal(item)}>
                      <img src={item.displayIcon}  alt={item.displayName} className="object-cover w-full h-full" />
                      <p className="text-center text-2xl mt-2">{item.displayName}</p>
                  </CardAgent>
                  )
                )
              ) 
                     
              }
            </div>
        </div>

        {isOpen && <Modal isOpen={isOpen} onClose={closeModal} modalTitle={modalData.displayName} imageSrc={modalData.displayIcon} />}

    </main>

    <Footer />


</>

  )
}

export default Bundles;
