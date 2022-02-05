import React, { useMemo } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, parent }) => {
  const el = useMemo(() => document.createElement("div"), []);

  React.useEffect(() => {
    const target = document.getElementById(parent) || document.body;
    target.appendChild(el);
    return () => {
      target.removeChild(el);
    };
  }, [el, parent]);

  return createPortal(children, el);
};

export default Portal;
