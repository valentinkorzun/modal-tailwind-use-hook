import React, { forwardRef } from "react";
import { Portal } from "./index";

const Modal = forwardRef(({ children, isOpen, onClose, parent }, ref) => {
  if (!isOpen) return null;

  return (
    <Portal parent={parent}>
      <div className="fixed inset-0 z-10">
        <div className="fixed inset-0 bg-gray-900 opacity-50 z-20" />
        <div className="fixed w-full h-full z-30 overflow-y-auto grid place-items-center">
          <div className="max-w-lg py-4 text-left px-6 bg-white rounded shadow-lg m-5" ref={ref}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
});

export default Modal;
