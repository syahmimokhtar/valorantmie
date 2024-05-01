'use client';
import React from 'react'

const Footer = () => {
  return (
    <footer className="relative  bg-[#0A141E] h-60 items-center whitespace-nowrap text-white">
      <div className="relative flex flex-col py-12 justify-center items-center ">
        <img src="/assets/images/valorant.png" style={{width:'100px', height:'100px'}} />
        <p className=" text-white text-center">&copy;2024 Valorant. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer;