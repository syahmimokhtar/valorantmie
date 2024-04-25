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
    <section className="flex relative w-full h-100 justify-center items-center ">
        <Image src={`https://pbs.twimg.com/media/GJcn6vUXUAEwtsZ.jpg:large`}  width={2000} height={2000} className="w-full block" alt=""/>
            {season &&
                    <div className=" absolute flex flex-row justify-center mx-10">
                        <div className="bg-[#DCD9D4] md:p-6  p-3  rounded bg-opacity-90">
                             <p className='text-center md:text-3xl  font-bold text-[#ff4656]'>// SEASON // </p>
                             <h2 className="text-[#ff4656] text-center font-bold text-3xl md:text-5xl ">{season.displayName }</h2>
                             <p className='text-center md:text-3xl  font-bold text-[#ff4656]'>Start Time : {season.startTime}</p>
                             <p className='text-center md:text-3xl  font-bold text-[#ff4656]'>End Time : {season.endTime} </p>
                        </div>

                    </div>
            }
    </section>
  )
}

export default Season;