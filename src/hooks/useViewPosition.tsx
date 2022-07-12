import React from 'react';
import { useLocation } from 'react-router-dom';

function useViewPosition() {
  const location = useLocation();
  const [isEnd, setIsEnd] = React.useState(false);

  const observe = () => {
    const { scrollY, innerHeight } = window;
    const { offsetHeight } = document.body;
    const isBottom = scrollY + innerHeight === offsetHeight;
    setIsEnd(isBottom);
  };

  React.useEffect(() => {
    observe();
  }, [location.pathname]);

  React.useEffect(() => {
    document.addEventListener('scroll', observe);

    return () => {
      document.removeEventListener('scroll', observe);
    };
  }, []);

  return { isEnd };
}

export { useViewPosition };
