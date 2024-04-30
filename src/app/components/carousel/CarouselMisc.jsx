"use client";
import React  from 'react'
import Carousel from './Carousel';
import {useRouter} from 'next/navigation';

const CarouselMisc = () => {

  const router=useRouter();
   
  const carouselItems=[{
    id:1,
    name:'AGENTS',
    href:`/assets/images/carousel/agents.png`,
    route:`/agents`

  },
  {
    id:2,
    name:'MAPS',
    href:`/assets/images/carousel/maps.jpg`,
    route:`/maps`

  },

  {
    id:3,
    name:'BANNER',
    href:`/assets/images/carousel/banners.jpg`,
    route:`/banner`

  },
]


  return (
    <section className="flex flex-col relative md:w-full md:h-full overflow-hidden  " >
        <Carousel items={carouselItems}>
                {carouselItems.map((item,index) => (
                  <div key={index} className="relative  h-80 w-full items-center ">
                    <img src={item.href} style={{width:'1980px', height:'1080px'}} className="object-cover scale-100 md:h-80 sm:h-80 w-full opacity-80" />
                    <div onClick={()=> router.push(`../${item.route}`)} className="cursor-pointer absolute top-1/4 md:left-1/3  mflex items-center justify-center transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105">
                      <div className="bg-[#DCD9D4] px-5 py-5 ">
                        <h2 className="text-[#ff4656] font-bold  md:text-9xl text-8xl text-center">{item.name}</h2>
                    </div>
                  </div>  

                  </div>
              ))}
        </Carousel>
    
    </section>



  )
}

export default CarouselMisc;