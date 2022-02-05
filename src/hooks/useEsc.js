import React, { useCallback } from "react";
import { useEffect } from "react";

export const useEsc = (handler) => {
  const handleKeydown = useCallback(
    (e) => {
      if (e.key === "Escape") handler();
    },
    [handler]
  );

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeydown);
    return () => document.body.removeEventListener("keydown", handleKeydown);
  }, []);
};
