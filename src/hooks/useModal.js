import React, { useCallback, useRef } from "react";
import { useState } from "react";
import { useClickOutside, useEsc, useScrollLock } from "../hooks";

export const useModal = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  useScrollLock(isOpen);
  useClickOutside(ref, handleClose);
  useEsc(handleClose);

  return { open: handleOpen, close: handleClose, isOpen, ref };
};
