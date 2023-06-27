import { getButtonShadow } from "../customShadows";


const MuiButton = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      textTransform: 'none',
      ...(ownerState.variant === 'contained' && {
        boxShadow: getButtonShadow(theme.palette[ownerState.color].main),        
        '&:hover': {
          boxShadow: getButtonShadow(theme.palette[ownerState.color].main)
        }
      })
    })
  }
};

export default MuiButton;