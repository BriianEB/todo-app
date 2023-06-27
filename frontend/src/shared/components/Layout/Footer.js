import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import useResponsive from '@/shared/hooks/useResponsive';


const Container = styled('div')({
  position: 'absolute',
  bottom: '0',
  width: '100%',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const Separator = styled('span')({
  backgroundColor: '#fff',
  width: 4,
  height: 4,
  margin: '0 0.75rem',
  borderRadius: '50%',
});

function Footer () {
  const isDesktop = useResponsive('up', 'lg');

  return (
    <Container
      sx={{
        color: { xs: 'text.primary', lg: '#fff' },
        flexDirection: { xs: 'column', lg: 'row' }
      }}
    >
      <Typography sx={{fontWeight: 'bold'}}>
        Ejercicio de programación Neuronix
      </Typography>

      {isDesktop && <Separator />}

      <Typography sx={{fontWeight: 'bold'}}>
        Brian Becerra
      </Typography>
    </Container>
  );
}

export default Footer;