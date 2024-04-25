"use client";
import React , {useState,useEffect} from 'react'
import Image from 'next/image';

const Carousel = () => {

  const carouselItems=[{
    id:1,
    name:'AGENTS',
    setActive:'active',
    href:`https://images7.alphacoders.com/131/1315738.jpg`
  },
  {
    id:2,
    name:'MAPS',
    setActive:'',
    href:`https://images4.alphacoders.com/130/1305421.jpg`
  },

  {
    id:3,
    name:'BANNER',
    setActive:'',
    href:`https://images5.alphacoders.com/129/1293103.jpg`
  },
]

  const [currentIndex,setCurrentIndex]=useState(0);


  
  const nextSlide=()=>{
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  }

  const prevSlide=()=>{
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  }



  return (
    <section id="default-carousel" className="relative w-full" data-carousel="slide">
          <div className="relative w-full h-96 overflow-hidden md:h-96">

          {carouselItems.map((item,index) => (
            <div key={item.id}  className={`${index === currentIndex ? '' : 'hidden'} duration-700 ease-in-out`} data-carousel-item>
              <Image src={item.href} width={2000} height={2000} className="absolute block w-full  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={item.name} />
                      
              <div className=" absolute inset-0 flex items-center justify-center">
              <div className="bg-[#DCD9D4] px-4 py-4 rounded">
                <h2 className="text-[#ff4656] font-bold text-3xl md:text-5xl">{item.name}</h2>
              </div>
              </div>
           
            </div>
          ))}
      </div>

      <div className="absolute z-10 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      </div>


    <button onClick={prevSlide} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button onClick={nextSlide} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>

    </section>
  )
}

export default Carousel;