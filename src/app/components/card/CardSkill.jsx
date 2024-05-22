"use client";

const CardSkill = ({cardColor, skillPicture, skillTitle, skillDesc}) => {
  return (
    <div  className={`relative flex flex-col md:p-5  p-4 w-80 md:w-72 h-full mx-auto mb-5 ${cardColor} transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105`}>

        <img className="mx-auto relative w-24 h-24"src={`${skillPicture}`} />

        <div className=" text-center p-10 mx-auto w-full ">
            <h2 className="relative text-4xl font-normal text-white mb-5">{skillTitle}</h2>
            <p className='text-center text-2xl font-normal'>{skillDesc}</p>
         </div>

    </div>

  )
}

export default CardSkill;