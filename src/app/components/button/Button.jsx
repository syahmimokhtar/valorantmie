import React from "react";

const Button = ({ title }) => {
  return (
    <button className="relative flex items-center justify-center  h-22  md:left-20 md:top-4  sm:w-52 sm:h-auto mx-auto sm:top-1/4 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/4 border-2 border-white overflow-hidden text-sm bg-black">
    <span className="md:text-2xl p-4 whitespace-nowrap hover:bg-[#ff4656] border-2 border-black py-4 w-full top-1/2 left-2 transition-all ease-in duration-75 font-bold text-black bg-[#DCD9D4]">
        {title}
    </span>
  </button>
  );
};

export default Button;
