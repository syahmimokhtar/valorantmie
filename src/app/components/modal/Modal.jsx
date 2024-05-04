    import React  from 'react'
    import ButtonForm from '../formInput/ButtonForm';

    const Modal = ({ isOpen, onClose, modalTitle , modalBody , ...otherProps }) => {

    return (
            <>
                {isOpen && (
                <div   className=" m-12 container flex flex-col fixed px-0  py-4 top-40  bottom-12  md:w-2/3 md:h-full    justify-center items-center"  {...otherProps}>
                        <div className="bg-[#0A141E]   p-4 md:p-8 md:w-3/4  w-full h-full flex flex-col  "> 

                            <button onClick={onClose} className="absolute md:-top-40    md:-right-56  hover:text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="modal-header whitespace-normal">
                                <h2 className="text-4xl text-center font-normal mb-4 ">{modalTitle}</h2>
                            </div>

                            <div className="modal-body px-4 py-4 overflow-auto w-full h-full ">
                                {/* <img src={`${imageSrc}`} className='cursor-pointer object-cover md:w-full w-96 h-full' alt={`${modalTitle} `}  /> */}
                                {modalBody}
                            </div>


                            <div className="py-4 modal-footer items-center justify-center md:mx-60  mx-20 ">
                                <ButtonForm   handleClick={onClose} title="Close"/>
                            </div>
                        </div>
                </div>                    

                )}
            </>

        )
    }

    export default Modal;