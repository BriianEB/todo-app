import { Container } from "@mui/material";

import ThemeProvider from "@/shared/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
