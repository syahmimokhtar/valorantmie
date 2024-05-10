    import React  from 'react'
    import ButtonForm from '../formInput/ButtonForm';

    const Modal = ({ isOpen, onClose, modalTitle , modalBody , ...otherProps }) => {

    return (
            <>
                {isOpen && (
                // <div   className="absolute z-50 bg-[yellow] bg-opacity-40  container flex flex-col  p-20 md:top-8  -top-12 bottom-12  md:w-full md:h-auto    justify-center items-center  "  {...otherProps}>
                //         <div  className="bg-[#0A141E] flex flex-col md:w-full md:h-full relative"> 

                //             <div className="md:p-4 modal-header whitespace-normal">
                //                     <button onClick={onClose} className="absolute md:top-24    md:right-60  hover:text-red-800">
                //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                //                             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                //                         </svg>
                //                     </button>
                //                 <h2 className="text-4xl text-center font-normal mb-4 ">{modalTitle}</h2>
                //             </div>

                //             <div className="p-12 modal-body  w-full h-auto ">
                //                 {modalBody}
                //             </div>


                //             <div className="container -mx-24 py-12  px-12   md:mx-60 ">
                //                 <ButtonForm   handleClick={onClose} title="Close"/>
                //             </div>
                //         </div>
                // </div>     
                
                

                <div id="myModal" className="fixed  z-50 bg-opacity-40  md:p-12 p-4 container flex flex-col  md:top-2  top-12 justify-center items-center" {...otherProps}>
                    <div className="modal-content bg-[#0A141E] flex flex-col p-4 w-80 relative">
                        <div className="modal-header">
                                    <button onClick={onClose} className="absolute md:top-8    md:right-8  hover:text-red-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                            <h2 className="text-4xl text-center font-normal mb-4 ">{modalTitle}</h2>
                        </div>
                            <div className="modal-body">
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