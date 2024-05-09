    import React  from 'react'
    import ButtonForm from '../formInput/ButtonForm';

    const Modal = ({ isOpen, onClose, modalTitle , modalBody , ...otherProps }) => {

    return (
            <>
                {isOpen && (
                <div   className="z-50 absolute container flex flex-col  px-8 py-12 md:-top-8   -top-12 bottom-12  md:w-2/3 md:h-full    justify-center items-center  overflow-auto"  {...otherProps}>
                        <div className="bg-[#0A141E]  p-8 md:p-8 md:w-3/4   w-full h-full flex flex-col "> 
                            <div className="modal-header whitespace-normal">
                                    <button onClick={onClose} className="absolute md:top-24    md:right-60  hover:text-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                <h2 className="text-4xl text-center font-normal mb-4 ">{modalTitle}</h2>
                            </div>

                            <div className="modal-body px-4 py-4  w-full h-full overflow-auto">
                                {modalBody}
                            </div>


                            <div className="container -mx-24 py-12  px-12   md:mx-60 ">
                                <ButtonForm   handleClick={onClose} title="Close"/>
                            </div>
                        </div>
                </div>                    

                )}
            </>

        )
    }

    export default Modal;