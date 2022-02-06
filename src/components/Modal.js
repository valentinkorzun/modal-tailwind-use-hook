import React, { forwardRef } from "react";
import { CSSTransition } from "react-transition-group";

const Modal = forwardRef(({ children, isOpen, onClose }, ref) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
      <div className="fixed inset-0 z-10">
        <div className="fixed inset-0 bg-gray-900 opacity-50 z-20" />
        <div className="fixed w-full h-full z-30 overflow-y-auto grid place-items-center backdrop-blur-sm">
          <div
            className="max-w-lg py-4 text-left px-6 bg-white rounded shadow-lg m-5 modal-content"
            ref={ref}
          >
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
});

export default Modal;
