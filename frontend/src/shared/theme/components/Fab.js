import { getButtonShadow } from "../customShadows";


const MuiFab = {
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

export default MuiFab;