import { useMemo } from 'react';

import {
  createTheme,
  CssBaseline,
  ThemeProvider as MUIThemeProvider
} from '@mui/material';

import components from './components';
import customShadows from './customShadows';
import palette from './palette';


function ThemeProvider({ children }) {
  const themeOptions = useMemo(function () {
    return {
      components: components,
      palette: palette,
      shape: { borderRadius: 4 },
        typography: {
          body3: {
            fontSize: '0.82rem',
            fontWeight: 400
          }
        },
      customShadows: customShadows
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