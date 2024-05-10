"use client";

const CardAgent = ({ handleClick, children ,...otherProps}) => {

  
  return (
    <div {...otherProps} onClick={handleClick} className="relative flex flex-col w-72 h-96 md:mx-auto  mr-4 mt-10 bg-[#0A141E]  border-2 border-[#ff4656] 
     hover:border-[#ff4656]
     transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105
     cursor-pointer 
       justify-center items-center">
     {children}
    </div>
  );
};

export default CardAgent;
