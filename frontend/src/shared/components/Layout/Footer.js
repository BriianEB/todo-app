import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const Container = styled('div')({
  position: 'absolute',
  bottom: '0',
  width: '100%',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff'
});

const Separator = styled('span')({
  backgroundColor: '#fff',
  width: 4,
  height: 4,
  margin: '0 0.75rem',
  borderRadius: '50%'
});

function Footer () {
  return (
    <Container>
      <Typography sx={{fontWeight: 'bold'}}>
        Ejercicio de programación Neuronix
      </Typography>
      <Separator />
      <Typography sx={{fontWeight: 'bold'}}>
        Brian Becerra
      </Typography>
    </Container>
  );
}

export default Footer;