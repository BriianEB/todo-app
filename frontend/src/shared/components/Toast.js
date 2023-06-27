import { useContext, forwardRef } from 'react';
import { Box, Slide, Snackbar } from '@mui/material';

import { ToastContext } from '../contexts/ToastContext';

function Toast() {
  const { open, type, message, close } = useContext(ToastContext);

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
        return;
    }

    close();
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
    >
      <Container>
        <Box
          sx={{
            width: '360px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
            pt: 2,
            pb: 5,
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '6px',
              height: '100%',
              bgcolor: (theme) => theme.palette.primary.main
            },
          }}
        >
          {message}
        </Box>
      </Container>
    </Snackbar>
  );
}

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const Container = forwardRef(function Container(props, ref) {
  return (
      <Box
        elevation={6}
        ref={ref}
        {...props}
        sx={{
          position: 'relative',
          bgcolor: (theme) => theme.palette.background.paper,          
          boxShadow: (theme) => theme.customShadows.toast,
          fontSize: (theme) => theme.typography.body2.fontSize,
          borderRadius: (theme) => theme.shape.borderRadius + 'px',
          overflow: 'hidden'
        }}
      />
  );
});

export default Toast;