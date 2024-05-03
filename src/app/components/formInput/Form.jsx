import React from 'react'

const Form = ({children, ...otherProps}) => {
  return (
    <div {...otherProps} className='p-12 relative w-full h-full  bg-[#0A141E] '>
        {children}
    </div>
  )
}

export default Form