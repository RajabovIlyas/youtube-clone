import { useState, useEffect } from "react";
import { SCREEN_SM } from "@/constants/breakpoints.constant";

export const useResize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = (event: Event) => {
      if (event.target instanceof Window && event.target.innerWidth)
        setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isScreenSm: width >= SCREEN_SM,
  };
};
