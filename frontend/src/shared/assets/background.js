import { memo } from 'react';
import { Box } from '@mui/material';


function Background({ ...other }) {
  return (
    <Box {...other}>
      <svg width="1920" height="810" viewBox="0 0 1920 810" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 810V540L1920 0V270V540V810H0Z" fill="#548DFA" fill-opacity="0.5"/>
      </svg>
    </Box>
  );
}

export default Background;