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



  return (
    <>
      <Head>
        <title>Valorant - Banner</title>
      </Head>
      <Navbar />

      <main className="relative flex min-h-screen flex-col bg-[#0A141E] items-center justify-center ">


      <div className="absolute w-full h-full blur-lg">
                <img  className="object-cover " alt="wallpaper"  style={{width:'1980px', height:'1080px'}} src='/assets/images/bannerGenerator/wallpaper.png' />
        </div>


        <div className='md:grid md:grid-cols-2 container mx-auto  relative h-full w-full justify-center items-center'>

              <div className="container mx-auto relative w-80 h-80 bottom-2/3">
                <img className="object-cover" src='/assets/images/bannerGenerator/valoCard.png' />
              </div>



              <div className="md:relative container mx-auto  w-full h-full">
                  <Form >
                      <Input className="p-4 w-full text-2xl mb-5" placeholder="Enter NickName ..." />
                        <Dropdown className="p-4 w-full  mb-12" >
                              <option value="">Select an option</option>
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                          </Dropdown >

                        <ButtonForm handleClick={()=> openBannerModal() } title={`Select banner`} className="mt-12  mb-5"  />
                        <ButtonForm handleClick={()=> openRankModal() } title={`Select rank`} className="mt-12  mb-5"  />
                        <ButtonForm handleClick={()=> openWallpaperModal() } title={`Select wallpaper`} className="mt-12  mb-5"  />

                    </Form>

              </div>

              {isBannerModalOpen && <Modal isOpen={isBannerModalOpen}  modalTitle={`Select banner`}  onClose={closeBannerModal} />}
              {isRankModalOpen && <Modal isOpen={isRankModalOpen}  modalTitle={`Select rank`}  onClose={closeRankModal} />}
              {isWallpaperModalOpen && <Modal isOpen={isWallpaperModalOpen}  modalTitle={`Select wallpaper`}  onClose={closeWallpaperModal} />}

        </div>
         
      </main>
    
      <Footer />
    </>
  );
};

export default Banner;
