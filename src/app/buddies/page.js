"use client";
import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CardAgent from "../components/card/CardAgent";
import Button from "../components/button/Button";

import axios from 'axios';

const Buddies = () => {
   
  //   const useMedia = (query, defaultValue, mobileValue) => {
  //     const isClient = typeof window === 'object'; // Check if window object exists

  //     const [value, setValue] = useState(isClient && window.matchMedia(query).matches ? defaultValue : mobileValue);

  //     useEffect(() => {
  //         const mediaQueryList = window.matchMedia(query);
  //         const listener = () => setValue(mediaQueryList.matches ? defaultValue : mobileValue);
  //         mediaQueryList.addListener(listener);
  //         return () => mediaQueryList.removeListener(listener);
  //     }, [query, defaultValue, mobileValue]);

  //     return value;
  // };

  
    // const itemsPerPage = 12; // Number of buddies to display per page
   // const itemsPerPage = useMedia('(min-width: 768px)', 12, 6); // Adjust the number of items per page based on screen width
    // const [currentPage, setCurrentPage] = useState(1);

    const [buddies, setBuddies]=useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBuddies, setFilteredBuddies] = useState([]);

        // Define filterItems function
      const filterItems = (query, items) => {
        const queryString = query ? query.toString().toLowerCase() : '';
        return items.filter(item => 
           item && item.displayName && item.displayName.toLowerCase().includes(queryString)
        );
      };


      // In the useEffect hook
      useEffect(() => {
        setFilteredBuddies(filterItems(searchQuery, buddies));
      }, [searchQuery, buddies]);





    const handleBuddies=async()=>
    {   
      try{
        const headers={'Content-Type' : 'application/json'}
        const dataUrl=`https://valorant-api.com/v1/buddies`;
        const response =await axios.get(dataUrl, {headers:headers})
        const buddiesData=response.data.data.sort();
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


    // const totalPages = Math.ceil(buddies.length / itemsPerPage);
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = Math.min(startIndex + itemsPerPage, buddies.length);
    // const currentBuddies = buddies.slice(startIndex, endIndex);

    // const nextPage = () => {
    //       setCurrentPage(prevPage => (prevPage === totalPages ? 1 : prevPage + 1));
    //   };

    //   const prevPage = () => {
    //       setCurrentPage(prevPage => (prevPage === 1 ? totalPages : prevPage - 1));
    //   };

  return (
    <> 
    
        <Head>
        <title>Valorant - Gun Buddies</title>
        </Head>
        <Navbar />



        <main className="relative flex min-h-screen flex-col bg-[#0A141E] items-center justify-center ">
           
            <div className="absolute w-full h-full overflow-auto opacity-30 " >
                    <img src={`/assets/images/buddies.jpg`}  style={{width:'1980px', height:'2000px'}} className="object-cover   overflow-auto " alt="buddies" />
            </div>

            <div className=" w-full h-full relative px-12 py-12 overflow-auto mt-12 mb-20 justify-center items-center">


                    {/* Search input field */}
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      placeholder="Search Buddy..."
                      className="container grid grid-cols-1 mx-auto mt-24 -mb-12 p-4   rounded border"
                    />
                    
                    <div className="md:grid md:grid-cols-5 grid  gap-2 -mx-4 px-4 py-20">
                              
                    {searchQuery ? (
                                filteredBuddies.map((buddy, index) => (
                                  <CardAgent key={index}>
                                    <img src={buddy.displayIcon}  alt={buddy.displayName} className="w-full h-auto " />
                                    <p className="text-center text-2xl mt-2">{buddy.displayName}</p>
                                  </CardAgent>
                                ))
                              ) : (
                                buddies.map((buddy, index) => (
                                  <CardAgent key={index}>
                                    <img src={buddy.displayIcon}  style={{width:'1980px', height:'1080px'}} alt={buddy.displayName} className="w-full h-auto" />
                                    <p className="text-center text-2xl mt-2">{buddy.displayName}</p>
                                  </CardAgent>
                                ))
                              )}
                              

                     </div>



              </div>

{/*   
              <div className="absolute p-4 flex flex-row  container mx-4   bottom-4    justify-center items-center ">
                        <Button title={`Previous <`} handleClick={prevPage} disabled={currentPage === 1} />
                        <Button title={`Next >`} handleClick={nextPage} disabled={currentPage === totalPages} />
                        <p className=" bottom-0 right-0 text-2xl text-white mt-4 mr-8 whitespace-normal">Page {currentPage} of {totalPages}</p>
               </div> */}

               
        </main>

        <Footer />


    </>
  )
}

export default Buddies;