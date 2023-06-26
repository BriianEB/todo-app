import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


// Este hook sirve para consultar breakpoints mediante JavaScript. Útil para
// renderizar componentes condicionalmente de acuerdo a la resolución del
// navegador.
function useResponsive(query, key) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(key));
  const mediaDown = useMediaQuery(theme.breakpoints.down(key));

  if (query === 'up') {
    return mediaUp;
  } else if (query === 'down') {
    return mediaDown;
  }
}

export default useResponsive;