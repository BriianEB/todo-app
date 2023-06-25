import { Container } from "@mui/material";

import ThemeProvider from "@/shared/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Container maxWidth="false">
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
