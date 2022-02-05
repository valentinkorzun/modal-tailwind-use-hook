import React, { forwardRef } from "react";
import { Portal } from "./index";

const Modal = forwardRef(({ children, isOpen, onClose, parent }, ref) => {
  if (!isOpen) return null;

  return (
    <Portal parent={parent}>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-gray-900 opacity-50 z-0" />
          <div
            className="relative bg-white w-100 mx-12 my-12 rounded shadow-lg z-30"
            ref={ref}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
});

export default Modal;
