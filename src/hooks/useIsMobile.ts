import { useEffect, useState } from "react";

const useIsMobile = ( breakpoint: number = 768 ): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(() => {
      if (globalThis.window === undefined) return false;
      return window.innerWidth <= breakpoint;
    }
  );

  useEffect(() => {
    if (globalThis.window === undefined) return;
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
}

export default useIsMobile;