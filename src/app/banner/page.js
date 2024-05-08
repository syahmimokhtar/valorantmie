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
import html2canvas from 'html2canvas-pro';


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
  const [banner, setBanners]=useState([]);
  const [setBanner, setBannerSelection]=useState('');

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

  const handleBanners=async()=>
    {
      const headers={'Content-Type' : 'application/json'}
      const response=await axios.get(`https://valorant-api.com/v1/playercards`, {headers:headers} )
      const banners=response.data.data;
      setBanners(banners);
    }

    const handleBannerSelection=(banner)=>
    {

      setBannerSelection(banner);
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

      }

    const handlePlayerTitle=(e)=>
      {
        setPlayerTitle(e.target.value)
      }

    const handleNickname=(e)=>
      {
        let nicknameVal=e.target.value;
        setNickname(nicknameVal)
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


      const handleClipImage=()=>
        {
          const element = document.getElementById('downloadBanner');
          const options={allowTaint:false, 
            useCORS:true,
            backgroundColor:'#fff',
            width:'1980',
            height:'1080',
            logging:true,
            x: 500, // Element x-offset
            y: 50,  // Element y-offset
            x: 50,  // Crop canvas x-coordinate
            y: 30   // Crop canvas y-coordinate

          }

          
          if (!element) {
              console.error("Element not found");
              return;
          }
          html2canvas(element, options)
          .then(canvas => {
              const imageUrl = canvas.toDataURL();
              const link = document.createElement('a');
              link.download = 'banner.png';
              link.href = imageUrl;
              link.click();
          })
         
          .catch(error => {
              console.error('Error capturing element:', error);
          });
        }

    useEffect(()=>
    {
      handleWallPapers();
      handlePlayerTitles();
      handleRanks();
      handleBanners();

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
                 <div id='banner' className=' absolute flex flex-col  top-12 bottom-12 md:left-96 md:w-80 md:h-80 px-4 z-10 opacity-90 '>
                      <img  style={{width:'1980px' , height:'1080px'}} className='md:left-80  relative object-fill  ' 
                        src={setBanner ? (setBanner) : null}
                        alt={`Selected Banner`} />
                  </div>
                   
    
                  <div id='bannerFrame' className='absolute container md:ml-96 flex flex-col md:top-12 mx-12 md:left-80 bottom-12 w-80 h-80  z-20 '>
                    <img  className="object-fill" src='/assets/images/bannerGenerator/valoCard.png' />
                  </div> 

                  <div id='rankImage' className='container md:mx-4 md:my-10 md:top-80 md:left-96  absolute flex flex-col  top-0 bottom-12  px-4 w-40 h-40  z-20  '>
                      <img className=' md:left-96   object-fill md:top-80  relative opacity-100' 
                      src={setRank ? (setRank) : null}
                      alt={`Selected Rank`} />
                  </div> 

             
                  <div id='playerInfoTitle' className=' container mx-4 md:top-96 md:left-96  absolute flex flex-col  top-0 bottom-12  px-4 w-40 h-40  z-20  '>
                    <p className='md:top-40  md:left-96 relative text-black  text-center font-normal'>{nickname ? nickname : 'your card title'} </p>
                    <p className='md:top-40 md:left-96 relative text-md  text-white text-center font-normal'>{playerTitle ? playerTitle : 'player title'}</p> 
                  </div>
                  

                    
                    
               



             </div> 


             <div className="drawer ">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                  {/* <ButtonForm htmlFor="my-drawer" title={`Open Drawer`} className="mt-12  mb-5"  /> */}
                </div> 
                <div className="drawer-side ">
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                  <ul className="menu p-4 w-96 min-h-full bg-[#0A141E] text-base-content">

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
                        <ButtonForm handleClick={()=> handleClipImage()} title={`Download Banner`} className="mt-12  mb-5"  />

                    </Form>

                    
                  </ul>
                </div>
              </div>



        
                
              {isBannerModalOpen && 
              <Modal isOpen={isBannerModalOpen} 
                modalTitle={`Select Banner`}  
                onClose={closeBannerModal} 
                modalBody={
                  <div className=" bg-yellow relative grid grid-cols-8 gap-4">
                    {banner.map((item, index) => (
                      <img
                        key={index}
                        src={item.smallArt}
                        alt={`Wallpaper ${index}`}
                        className={`hover:border-2 hover:border-white cursor-pointer object-cover w-full h-full`}
                        onClick={()=>handleBannerSelection(item.largeArt)}
                      />
                    ))}
                  </div>
                }
                
                />
               
              }


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
