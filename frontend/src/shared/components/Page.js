import { forwardRef } from "react";
import Head from 'next/head';
import { Box } from '@mui/material';


const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Head>
      <title>{title}</title>
      {meta}
    </Head>
    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

export default Page;