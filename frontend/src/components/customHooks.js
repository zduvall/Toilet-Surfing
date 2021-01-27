import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  let [windowWidth, setWidowSize] = useState(window.innerWidth);

  useEffect(() => {
    const changeWindowSize = () => {
      setWidowSize(window.innerWidth);
    };
    window.addEventListener('resize', changeWindowSize);
    return () => window.removeEventListener('resize', changeWindowSize);
  }, []);
  return windowWidth;
};