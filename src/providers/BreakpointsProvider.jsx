import { createContext, useContext, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';

// Create the BreakpointContext with an empty default value
const BreakpointContext = createContext({});

// BreakpointsProvider component to wrap children with BreakpointContext
const BreakpointsProvider = ({ children }) => {
   const [currentBreakpoint, setCurrentBreakpoint] = useState('xs');

   // Helper functions for screen width checks
   const up = (key) => useMediaQuery((theme) => theme.breakpoints.up(key));
   const down = (key) => useMediaQuery((theme) => theme.breakpoints.down(key));
   const only = (key) => useMediaQuery((theme) => theme.breakpoints.only(key));
   const between = (start, end) => useMediaQuery((theme) => theme.breakpoints.between(start, end));

   // Boolean variables for each breakpoint
   const isXs = between('xs', 'sm');
   const isSm = between('sm', 'md');
   const isMd = between('md', 'lg');
   const isLg = between('lg', 'xl');
   const isXl = up('xl');

   // Effect to update the current breakpoint state
   useEffect(() => {
      if (isXs) setCurrentBreakpoint('xs');
      else if (isSm) setCurrentBreakpoint('sm');
      else if (isMd) setCurrentBreakpoint('md');
      else if (isLg) setCurrentBreakpoint('lg');
      else if (isXl) setCurrentBreakpoint('xl');
   }, [isXs, isSm, isMd, isLg, isXl]);

   return (
      <BreakpointContext.Provider value={{ currentBreakpoint, up, down, only, between }}>
         {children}
      </BreakpointContext.Provider>
   );
};

// Custom hook to use BreakpointContext
const useBreakpoints = () => useContext(BreakpointContext);

export { BreakpointsProvider, useBreakpoints };
export default BreakpointsProvider;
