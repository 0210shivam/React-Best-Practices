import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BreakpointsProvider from 'providers/BreakpointsProvider';
import router from 'routes/router';
import { theme } from 'theme/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BreakpointsProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </BreakpointsProvider>
    </ThemeProvider>
  </StrictMode>,
);
