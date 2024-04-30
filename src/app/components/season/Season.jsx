"use client";
import React , {useState, useEffect} from 'react'
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
    <section className="flex  relative w-full h-full justify-center items-center overflow-hidden ">

          <div className="relative flex justify-center items-center overflow-hidden">
              <img style={{width:'1980px', height:'1080px'}} src={`https://pbs.twimg.com/media/GJcn6vUXUAEwtsZ.jpg:large`} className="object-cover scale-100 w-full h-full" alt=""/>
          </div>

            {season &&
                    <div className=" absolute flex flex-row justify-center items-center mx-10">
                        <div className="bg-[#DCD9D4] md:p-10  p-10 bg-opacity-90">
                             <p className='text-center  text-7xl font-bold text-[#ff4656]'> SEASON </p>
                             <h2 className="text-[#ff4656] text-center font-bold text-7xl  ">{season.displayName }</h2>
                             <p className='text-center text-3xl font-bold text-[#ff4656]'>Start Time : {season.startTime}</p>
                             <p className='text-center   text-3xl font-bold text-[#ff4656]'>End Time : {season.endTime} </p>
                        </div>

                    </div>
            }
    </section>
  )
}

export default Season;