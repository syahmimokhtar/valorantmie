"use client"
import React from "react";
import Link from "next/link";
import { usePathname  } from "next/navigation";


const Navlinks = ({ href, title }) => {
  const pathname = usePathname()
  const isActive= pathname === href


  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-2xl rounded md:p-2 transition duration-300 ease-in-out hover:bg-[#ff4656] hover:text-white ${isActive ? 'bg-[#ff4656] text-white ' : '' } `} 
      >{title.toUpperCase()}
    </Link>
  );
};

export default Navlinks;
