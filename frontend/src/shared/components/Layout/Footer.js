import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const Container = styled('div')({
  position: 'absolute',
  bottom: '0',
  width: '100%',
  height: '10rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff'
});

const Separator = styled('span')({
  backgroundColor: '#fff',
  width: 4,
  height: 4,
  mx: 1,
  borderRadius: '50%'  
});

function Footer () {
  return (
    <Container>
      <Typography variant="subtitle2">Ejercicio de programación Neuronix</Typography>
      <Separator />
      <Typography variant="subtitle2">Brian Becerra</Typography>
    </Container>
  );
}

export default Footer;