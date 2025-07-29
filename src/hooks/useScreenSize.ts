import { useEffect, useState } from 'react';

type ScreenSize = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    isMobile: false,
    isTablet: false,
    isDesktop: true, // 預設當桌機
  });

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;

      if (width <= 767) {
        setScreenSize({ isMobile: true, isTablet: false, isDesktop: false });
      } else if (width <= 1024) {
        setScreenSize({ isMobile: false, isTablet: true, isDesktop: false });
      } else {
        setScreenSize({ isMobile: false, isTablet: false, isDesktop: true });
      }
    };

    updateSize(); // 初次執行
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return screenSize;
};

export default useScreenSize;
