import { alpha } from '@mui/material/styles';

import palette from './palette';


const shadowColor = palette.grey[500];

const customShadows = {
  card: `0 0 25px 0 ${alpha(shadowColor, 0.15)}`,
  popover: `0 0 25px 0 ${alpha(shadowColor, 0.4)}`,
  task: `0 0 24px 0 ${alpha(shadowColor, 0.18)}`
};

function getButtonShadow(color) {
  return `0 4px 16px 0 ${alpha(color, 0.6)}`;
}

export { customShadows as default, getButtonShadow };