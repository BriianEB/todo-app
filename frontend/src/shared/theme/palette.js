import { alpha } from '@mui/material/styles';


const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  250: '#EAEDF0',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  550: '#758593',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.80)
};

const palette = {
  primary: {
    main: '#548DFA'
  },
  grey: GREY,
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  },
  text: { primary: '#292D34', secondary: GREY[600], disabled: GREY[500] },
  background: { paper: '#FFFFFF', default: GREY[200], neutral: GREY[250] },
}

export default palette;