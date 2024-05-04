
import React from "react";

const ButtonForm = ({ title, handleClick , ...otherProps}) => {
  return (

    <button onClick={handleClick} {...otherProps} type="button" className={
      `bg-gradient-to-r  text-center text-2xl mt-4 rounded-xl px-4 py-4 whitespace-nowrap md:w-80 w-80
       from-red-500 via-pink-700 to-purple-500  hover:from-red-500 hover:via-pink-700 hover:to-purple-500  
       transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105
       
       `}>
        {title}
    </button>

  );
};

export default ButtonForm;
