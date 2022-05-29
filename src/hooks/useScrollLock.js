import { useCallback, useLayoutEffect } from "react";

export const useScrollLock = (isOpen) => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "var(--scrollbar-compensation)";
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }, []);

  useLayoutEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isOpen]);

  useLayoutEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.setProperty(
      "--scrollbar-compensation",
      `${scrollBarCompensation}px`
    );
  }, []);
};
