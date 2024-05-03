import React from 'react'

const Dropdown = ({children, ...otherProps}) => {
  return (
           <select {...otherProps} className="relative  font-center text-2xl bg-[#0A141E] appearance-none w-full  rounded-md border border-white  px-4 py-2 ">
                {children}
            </select>
  )
}

export default Dropdown