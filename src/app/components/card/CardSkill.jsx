"use client";
import Image from "next/image";


const CardSkill = ({cardColor}) => {
  return (
    <div  className="absolute p-5 flex flex-col w-80 h-96 mx-auto bg-[#0A141ECC]  border-2 border-[#ff4656]">

        <img className="mx-auto relative w-24 h-24"src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability1/displayicon.png" />


        <div className="relative text-center p-2 mx-auto w-full ">
            <h2 className="relative text-3xl font-normal text-white">ABILITY 1</h2>
         </div>

    </div>

  )
}

export default CardSkill;