import { useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useResizeObserver = (ref) => {
   const [width, setWidth] = useState(0);

   useEffect(() => {
      const handleResize = (entries) => {
         for (const entry of entries) {
            if (entry.contentRect) {
               setWidth(entry.contentRect.width);
            }
         }
      };

      const observer = new ResizeObserver(handleResize);
      if (ref.current) {
         observer.observe(ref.current);
      }

      return () => {
         if (ref.current) {
            observer.unobserve(ref.current);
         }
      };
   }, [ref]);

   return width;
};

export default useResizeObserver;
