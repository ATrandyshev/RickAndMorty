import { useState, useEffect } from "react";

export const useResizeWindow = () => {
  const [widthWindow, setWidthWindow] = useState();
  const resizeHandler = () => {
    setWidthWindow(document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [widthWindow]);

  return { widthWindow };
};
