import React from 'react'

const Toast = ({title, onClose}) => {
  return (
     <div className="z-50 toast toast-top toast-center">
        <div className="alert alert-success p-8">
        <button onClick={onClose} className="absolute md:top-6    md:right-6  hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        <h2 className="text-4xl font-normal font-center text-white ">{title}</h2>
        </div>
    </div>
  )
}

export default Toast