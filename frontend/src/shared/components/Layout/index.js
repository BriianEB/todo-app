import { styled } from '@mui/material/styles';

import Header from './Header';
import Footer from './Footer';


const Container = styled('div')({
  background: 'url(/background.svg)',
  position: 'relative',
  minHeight: '100vh'
});

const Main = styled('main')({
  marginTop: '1rem',
  marginBottom: '10rem'
});

function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
}

export default Layout;