import React, { useCallback, useRef } from "react";
import { useState } from "react";
import { Modal } from "../components";
import { useClickOutside, useEsc } from "../hooks";

//window.innerWidth - document.documentElement.clientWidth; --scrollbar width

export const useModal = (parent = "root") => {
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  useClickOutside(ref, handleClose);
  useEsc(handleClose);

  const RenderModal = useCallback(
    ({ children }) => (
      <Modal isOpen={isOpen} onClose={handleClose} ref={ref} parent={parent}>
        {children}
      </Modal>
    ),
    [isOpen, isActive]
  );

  return { open: handleOpen, close: handleClose, Modal: RenderModal };
};
