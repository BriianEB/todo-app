import { getButtonShadow } from "../customShadows";


const MuiButton = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      boxShadow: getButtonShadow(theme.palette[ownerState.color].main),
      textTransform: 'none',
      '&:hover': {
        boxShadow: getButtonShadow(theme.palette[ownerState.color].main)
      }
    })
  }
};

export default MuiButton;