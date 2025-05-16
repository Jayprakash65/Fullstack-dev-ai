import { AiOutlineClose } from "react-icons/ai";
import {createPortal} from 'react-dom'
import { Children } from "react";

const Modal = ({ isOpen, onClose, children}) => {
  return createPortal (
    <>
      {isOpen && (
        <>
          <div className=" relative top-[-500px] m-auto min-h-[280px] bg-white max-w-84 mx-auto p-2 z-100">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl" />
            </div>
            {children}
          </div>

          <div className="absolute top-0  h-screen w-screen backdrop-blur z-40">

          </div>
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
