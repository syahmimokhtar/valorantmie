import React from 'react'

const Button = ({title}) => {
  return (
    <button className="relative inline-flex items-center justify-center pl-2 pb-2 w-full  bottom-1.5 left-1.5 border-2 border-white overflow-hidden text-sm bg-black">
        <span className="relative   border-black py-4 w-full  top-1/2 left-2 transition-all ease-in duration-75 font-bold text-black bg-[#DCD9D4] ">
           {title}
        </span>
    </button>
  )
}

export default Button;