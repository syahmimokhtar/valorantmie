
"use client";
import Image from 'next/image';

const CardAgent = ({roleIcon, imageSrc,fullPortraitSrc, agentName }) => {

    return (

            <div className="relative flex flex-col w-80 h-96 mx-auto mt-10 bg-[#0A141ECC]  border-2 border-[#ff4656] rounded-xl  justify-end items-center">
            <Image className="absolute w-8 h-8 top-4 left-64" src={roleIcon}  width={1000} height={1000} alt="Role Icon " />
            <Image className="absolute w-full h-full object-cover opacity-30 " src={imageSrc}  width={1000} height={1000} alt="Card Image" />
            <Image className="p-2 absolute w-full h-full object-cover grayscale-100 " src={fullPortraitSrc}    width={1000} height={1000} alt="Card Image" />
            <div className="relative text-center p-2 mx-auto w-full ">
                <h2 className="text-3xl font-normal text-white">{agentName}</h2>
            </div>
            </div>
  );
}

export default CardAgent;
