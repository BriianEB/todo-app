const MuiButton = {
  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: 'none',
      textTransform: 'none',
      '&:hover': {
        boxShadow: 'none'
      }
    })
  }
};

export default MuiButton;