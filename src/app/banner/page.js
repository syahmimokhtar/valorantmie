"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Form from "../components/formInput/Form";
import Input from "../components/formInput/Input";
import Dropdown from "../components/formInput/Dropdown";
import ButtonForm from "../components/formInput/ButtonForm";
import Modal from "../components/modal/Modal";
import axios from 'axios';


const Banner = () => {

  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);
  const [isRankModalOpen, setIsRankModalOpen] = useState(false);
  const [isWallpaperModalOpen, setIsWallpaperModalOpen] = useState(false);

  const openBannerModal = () => setIsBannerModalOpen(true);
  const closeBannerModal = () => setIsBannerModalOpen(false);

  const openRankModal = () => setIsRankModalOpen(true);
  const closeRankModal = () => setIsRankModalOpen(false);

  const openWallpaperModal = () => setIsWallpaperModalOpen(true);
  const closeWallpaperModal = () => setIsWallpaperModalOpen(false);


  const [wallpaper, setWallPapers]=useState([]);
  const [selectedWallpaper, setSelectedWallpaper]=useState(null);
  const [selectedPlayerTitle, setSelectedPlayerTitle]=useState(null);
  const [ranks, setRanks]=useState([]);
  const [setRank, setSelectedRank]=useState('');


  const [nickname, setNickname]=useState("");
  const [playerTitle, setPlayerTitle]=useState("");


  const handleWallPapers=async()=>
    {
      const headers={'Content-Type' : 'application/json'}
      const response=await axios.get(`https://valorant-api.com/v1/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872`, {headers:headers} )
      const wallpapers=response.data.data.skins;
      const newfilterWallpaper=wallpapers.filter(item=> item.wallpaper!=null);
      setWallPapers(newfilterWallpaper);

    }

    const handleRankSelection=(rank)=>{
      setSelectedRank(rank)
    }

    const handleRanks=async()=>
      {
        const headers={'Content-Type' : 'application/json'}
        const response=await axios.get(`https://valorant-api.com/v1/competitivetiers`, {headers:headers} )
        const ranksResponse=response.data.data[response.data.data.length-1].tiers;
        const cleanedRanks=ranksResponse.filter(item=>item.tierName!=='Unused1' && item.tierName!=='Unused2')
        setRanks(cleanedRanks);
        console.log(ranksResponse)

      }

    const handlePlayerTitle=(e)=>
      {
        setPlayerTitle(e.target.value)
      }

    const handleNickname=(e)=>
      {
        setNickname(e.target.value)
      }

    const handlePlayerTitles=async()=>
      {
        const headers={'Content-Type' : 'application/json'}
        const response=await axios.get(`https://valorant-api.com/v1/playertitles`, {headers:headers} )
        const playerTitles=response.data.data;
        setSelectedPlayerTitle(playerTitles)
      }

    const handleWallpaperSelection=(wallpaperUrl)=>
      {
        setSelectedWallpaper(wallpaperUrl);
      }

    useEffect(()=>
    {
      handleWallPapers();
      handlePlayerTitles();
      handleRanks();

    },[])


  return (
    <>
      <Head>
        <title>Valorant - Banner</title>
      </Head>
      <Navbar />

      <main className="relative flex min-h-screen flex-col bg-[#0A141E] items-center justify-center ">


        <div id='wallpaperBackground' className="absolute w-full h-full"
          style={
            {
              backgroundImage: `url(${selectedWallpaper || '/assets/images/bannerGenerator/wallpaper.png'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          }
        >

        </div>

        <div className='md:grid md:grid-cols-2 container mx-auto  relative h-full w-full justify-center items-center'>

              <div className="container mx-auto relative w-80 h-80 bottom-2/3">
                <img className="object-cover" src='/assets/images/bannerGenerator/valoCard.png' />
                <p className='md:bottom-72 relative text-black text-center font-normal'>{nickname ? nickname : 'your card title'} </p>
                <p className='md:bottom-72 mt-2 relative text-white text-center font-normal'>{playerTitle ? playerTitle : 'player title'}</p>
                <img className='object-fit w-12 h-12 md:bottom-52 md:left-16 relative' 
                  src={setRank ? (setRank) : null}
                  alt={`Selected Rank`} />
              </div>



              <div className="flex flex-col md:relative container mx-auto  w-full h-full">
                  <Form >
                      <Input handleChange={handleNickname} className="p-4 w-full text-2xl mb-5" placeholder="Enter NickName ..." />
                        <Dropdown onChange={handlePlayerTitle} className="p-4 w-full  mb-12" >
                              <option value="">Select Player Title</option>
                                {selectedPlayerTitle && selectedPlayerTitle.map((item, index) => ( 
                                    <option key={index} value={item.titleText}>{item.titleText}</option>
                                  ))  
                                 }
                             
                          </Dropdown >

                        <ButtonForm handleClick={()=> openBannerModal() } title={`Select banner`} className="mt-12  mb-5"  />
                        <ButtonForm handleClick={()=> openRankModal() } title={`Select rank`} className="mt-12  mb-5"  />
                        <ButtonForm handleClick={()=> openWallpaperModal() } title={`Select wallpaper`} className="mt-12  mb-5"  />

                    </Form>

              </div>

              
        </div>
         
        

               {isBannerModalOpen && <Modal isOpen={isBannerModalOpen}  modalTitle={`Select Banner`}  onClose={closeBannerModal} />}
                

               {isRankModalOpen && 
              <Modal isOpen={isRankModalOpen} 
                modalTitle={`Select Rank`}  
                onClose={closeRankModal} 
                modalBody={
                  <div className="bg-yellow relative grid grid-cols-1 gap-4">
                    {ranks.map((item, index) => (
                      <div key={index} onClick={()=>handleRankSelection(item.largeIcon)} className="cursor-pointer border-2 border-white flex flex-row">
                        <img
                            src={item.largeIcon}
                            alt={`Rank ${index}`}
                            className="cursor-pointer object-fit w-40 h-40"
                            />
                            <h2 className=" text-5xl container mx-auto my-12 text-center font-normal">{item.tierName}</h2>
                        </div>
                    
                    ))}
                  </div>
                }
                
                />
               
              }



              {isWallpaperModalOpen && 
              <Modal isOpen={isWallpaperModalOpen} 
                modalTitle={`Select Wallpaper`}  
                onClose={closeWallpaperModal} 
                modalBody={
                  <div className="bg-yellow relative grid grid-cols-3 gap-4">
                    {wallpaper.map((item, index) => (
                      <img
                        key={index}
                        src={item.wallpaper}
                        alt={`Wallpaper ${index}`}
                        className="cursor-pointer object-cover w-full h-full"
                        onClick={()=>handleWallpaperSelection(item.wallpaper)}
                      />
                    ))}
                  </div>
                }
                
                />
               
              }

      </main>
    
      <Footer />
    </>
  );
};

export default Banner;
