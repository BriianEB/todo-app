import { styled } from '@mui/material/styles';


const Container = styled('div')({
  background: 'url(/background.svg)',
  position: 'relative',
  minHeight: '100vh'
});

const Main = styled('main')({
  paddingTop: '1rem',
  paddingBottom: '10rem'
});

function Layout() {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
}

export default Layout;