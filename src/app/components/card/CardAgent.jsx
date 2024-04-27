
"use client";
import { Card } from "flowbite-react";
import Image from 'next/image';

const CardAgent = ({imageSrc,fullPortraitSrc, agentName }) => {

    return (
        <Card  className="max-w-sm w-full rounded-xl border-2 border-[#ff4656] bg-[#0A141ECC] justify-center">
        <Image className="absolute inset-0 w-full h-full"  src={imageSrc} width={1000} height={1000} alt="Agent Background" />
        <Image className='relative z-10' src={fullPortraitSrc} width={1000} height={1000} alt='Agent Card' />
        <h5 className="text-center text-2xl font-bold tracking-tight text-white">
            {agentName}
        </h5>
    </Card>
  );
}

export default CardAgent;
