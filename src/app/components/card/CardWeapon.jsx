"use client";

const CardWeapon = ({ handleClick, children , displayName, ...otherProps}) => {

  
  return (
    <div {...otherProps} onClick={handleClick} className=" bg-[#0A141E]  mt-12 mr-2 p-6 w-full h-52 relative flex flex-col   border-2 border-[#ff4656]
    hover:border-[#fff]
     cursor-pointer 
    
    ">
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-opacity-20 transition-opacity">
          <p className="text-center text-white text-9xl ">{displayName}</p>
      </div>

        {children}
    </div>
  );
};

export default CardWeapon;
