"use client";
import React , {useState} from 'react'

const Carousel = ({items, children}) => {

    
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPreviousItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };



  return (
    <>
      <div className="px-20 mt-28 carousel w-full min-h-screen">
        {items.map((item, index) => (
          <div key={index} 
          className={`h-full carousel-wrapper flex transition-transform duration-500 ease-in-out  carousel-item ${index === currentIndex ? 'visible' : 'hidden'}`}>
            <div className="relative w-full items-center">
                  {children[currentIndex]}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button onClick={goToPreviousItem} className="btn btn-circle">❮</button>
        <button onClick={goToNextItem} className="btn btn-circle">❯</button>
      </div>

    </>
    
  )
}

export default Carousel;