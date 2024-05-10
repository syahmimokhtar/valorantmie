    import React  , {useEffect,useRef} from 'react'
    import ButtonForm from '../formInput/ButtonForm';

    const Modal = ({ isOpen, onClose, modalTitle , modalBody , ...otherProps }) => {


    return (
            <>
                {isOpen && (

                <div className={`fixed  z-50 bg-opacity-40  md:p-12 p-4 container flex flex-col  md:top-2  top-12  justify-center items-center `}  {...otherProps}>
                    <div className="modal-content bg-[#0A141E] flex flex-col p-4 w-80 relative   md:w-full  max-h-[80vh] overflow-y-auto">
                        <div className="modal-header">
                                    <button onClick={onClose} className="absolute md:top-8    md:right-8  hover:text-red-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                            <h2 className="text-4xl text-center font-normal mb-4 ">{modalTitle}</h2>
                        </div>
                            <div className="modal-body ">
                                {modalBody}
                            </div>
                        <div className="container modal-footer  p-4  flex flex-col items-center  ">
                            <ButtonForm   className="w-52" handleClick={onClose} title="Close"/>
                        </div>
                    </div>
                </div>



                )}
            </>

        )
    }

    export default Modal;