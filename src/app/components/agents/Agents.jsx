"use client";
import React from 'react'
import Image from "next/image";

const Agents = () => {
  return (
    <section className="flex relative w-full h-full justify-center items-center ">

        <Image
                    className="opacity-20"
                    src="/assets/images/agents.jpg"
                    width={2000}
                    height={300}
                    alt="agents"
                />

    </section>
  )
}

export default Agents