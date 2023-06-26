import { useMemo } from 'react';

import {
  createTheme,
  CssBaseline,
  ThemeProvider as MUIThemeProvider
} from '@mui/material';

import components from './components';
import customShadows from './customShadows';
import palette from './palette';
import typography from './typography';


function ThemeProvider({ children }) {
  const themeOptions = useMemo(function () {
    return {
      components,
      palette,
      shape: { borderRadius: 8 },
      typography,
      customShadows
    };
  }, []);

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;