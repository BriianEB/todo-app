import { Box } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

import Header from './Header';
import Footer from './Footer';


const Container = styled('div')({  
  position: 'relative',
  minHeight: '100vh'
});

const Background = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  zIndex: '-1000',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    width: '100%',
    height: '100%',
    backgroundColor: alpha(theme.palette.primary.main, 0.50),
    transform: 'skewY(-12deg)',
  }
}));


const Main = styled('main')({    
  width: '100%',
  height: 'calc(100vh - 180px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

function Layout({ children }) {
  return (
    <Container>
      <Background />     
      <Header />      
      <Main>
        <Box sx={{width: '100%', maxWidth: '1200px'}}>
          {children}
        </Box>
      </Main>
      <Footer />      
    </Container>
  );
}

export default Layout;