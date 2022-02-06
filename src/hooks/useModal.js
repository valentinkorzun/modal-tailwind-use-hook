import React, { useCallback, useRef } from "react";
import { useState } from "react";
import { useClickOutside, useEsc } from "../hooks";

//window.innerWidth - document.documentElement.clientWidth; --scrollbar width

export const useModal = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  useClickOutside(ref, handleClose);
  useEsc(handleClose);

  return { open: handleOpen, close: handleClose, isOpen, ref };
};
