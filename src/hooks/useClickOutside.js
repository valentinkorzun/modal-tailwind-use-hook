import React, { useEffect } from "react";

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      // if the user clicked on the scroll.
      if (
        e.offsetX > e.target.clientWidth ||
        e.offsetY > e.target.clientHeight
      ) {
        return;
      }
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
