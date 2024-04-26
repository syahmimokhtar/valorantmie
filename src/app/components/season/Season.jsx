"use client";
import React , {useState, useEffect} from 'react'
import Image from 'next/image';
import axios from 'axios'
const Season = () => {

  const [season, setSeason]=useState([]);
  const getSeasonInfo=async()=>
  {
    try{
        const arrayData=[];
        const headers={
           " Content-Type":'application/json'
        }
        const url=`https://valorant-api.com/v1/seasons`
        const response =await axios(url, {headers:headers} );
        const data=response.data;
        arrayData.push(data)
        const chosenData=(arrayData[0].data[32]); 
        setSeason(chosenData);

    }   
    catch(error){
        console.log(error)
    }
   
  }

  useEffect(()=>
  {
    getSeasonInfo();
  }, []);



  return (
    <section className="flex relative w-full justify-center items-center ">

      <div className="relative flex justify-center items-center overflow-hidden">
          <Image src={`https://pbs.twimg.com/media/GJcn6vUXUAEwtsZ.jpg:large`} width={2000} height={1000} className="w-full h-full object-cover" alt=""/>
      </div>

            {season &&
                    <div className=" absolute flex flex-row justify-center mx-10">
                        <div className="bg-[#DCD9D4] md:p-10  p-3 bg-opacity-90">
                             <p className='text-center md:text-4xl  font-bold text-[#ff4656]'> SEASON </p>
                             <h2 className="text-[#ff4656] text-center font-bold text-3xl md:text-7xl ">{season.displayName }</h2>
                             <p className='text-center md:text-4xl  font-bold text-[#ff4656]'>Start Time : {season.startTime}</p>
                             <p className='text-center md:text-4xl  font-bold text-[#ff4656]'>End Time : {season.endTime} </p>
                        </div>

                    </div>
            }
    </section>
  )
}

export default Season;