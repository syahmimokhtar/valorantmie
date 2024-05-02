    import React  from 'react'
    import Button from '../button/Button';

    const Modal = ({ isOpen, onClose, modalTitle , imageSrc }) => {

    return (
            <>
                {isOpen && (
                <div   className="container mx-auto flex flex-col fixed  top-1/3   w-80 h-80   justify-center items-center">
                <div className="bg-[#0A141E]  w-full h-full  shadow-lg z-50 border-2 border-[#ff4656] ">
                    <h2 className="text-5xl text-center font-normal mb-4 p-4 ">{modalTitle}</h2>
                    <img src={imageSrc} className='object-cover ' alt={modalTitle}/>        
                    {/* <button onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Close</button> */}
                    <Button  handleClick={onClose} title="Close"/>
                </div>
                </div>
                )}
            </>

        )
    }

    export default Modal;