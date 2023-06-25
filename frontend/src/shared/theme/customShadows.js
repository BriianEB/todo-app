import { alpha } from '@mui/material/styles';

import palette from './palette';

const color = palette.grey[500];

const customShadows = {
  card: `0 0 25px 0 ${alpha(color, 0.15)}`,
  popover: `0 0 25px 0 ${alpha(color, 0.4)}`
};

export default customShadows;