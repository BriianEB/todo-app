import { Box } from "@mui/material";

import LogoNeuronix from "@/shared/assets/logo_neuronix";


function Header() {
  return (
    <Box sx={{
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      pl: '2rem'
    }}>
      <LogoNeuronix />
    </Box>
  );
}

export default Header;