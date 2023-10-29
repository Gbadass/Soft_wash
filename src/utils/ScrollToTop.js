import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const locationPathName = useLocation().pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationPathName]);

  return null;
};

export default ScrollToTop;
