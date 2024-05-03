    import React  from 'react'
    import Button from '../button/Button';

    const Modal = ({ isOpen, onClose, modalTitle , imageSrc }) => {

    return (
            <>
                {isOpen && (
                <div   className=" container mx-auto flex flex-col fixed  bottom-72  md:w-52 md:h-52 p-4    justify-center items-center">
                    <div className="bg-[#0A141E] md:p-8  p-4 shadow-lg flex flex-col  border-2 border-[#ff4656] ">

                       <button onClick={onClose} className="absolute -top-40  -right-56  hover:text-gray-800">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>

                        <div className="modal-header whitespace-normal ">
                            <h2 className="text-4xl text-center font-normal mb-4 ">{modalTitle}</h2>
                         </div>


                         
                         <div className="modal-body  overflow-auto w-full h-full border-2 border-[#ff4656] mb-12">
                            <img src={imageSrc} className='cursor-pointer object-cover  w-full  h-full ' alt={modalTitle}/>  
                         </div>

                         <div className="modal-footer items-center justify-center md:mx-60  mx-20 ">
                             <Button   handleClick={onClose} title="Close"/>
                         </div>

                    </div>
                </div>
                )}
            </>

        )
    }

    export default Modal;