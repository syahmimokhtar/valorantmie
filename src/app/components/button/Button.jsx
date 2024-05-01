import React from "react";

const Button = ({ title, handleClick , ...otherProps}) => {
  return (
    <button
      onClick={handleClick}
      className="h-22 mr-5 w-40 transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105
     relative flex items-center justify-center   md:left-20 md:top-4  sm:w-60 sm:h-auto mx-auto sm:top-1/4 
     sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/4 border-2 border-white overflow-hidden text-sm bg-black"
    >
      <span
        className="text-center sm:text-3xl p-4 whitespace-nowrap hover:bg-[#ff4656] border-2 border-black py-4 w-full top-1/2 left-2 
          transition-all ease-in duration-75 font-bold text-black bg-[#DCD9D4]"
      >
        {title}
      </span>
    </button>
  );
};

export default Button;
