const MuiTextField = {
    defaultProps: {
      InputProps: {
        sx: {
          fontSize: theme => ({
            fontSize: theme.typography.body2.fontSize
          })
        }
      },
      InputLabelProps: {
        sx: {
          fontSize: theme => ({
            fontSize: theme.typography.body2.fontSize
          })
        }
      }
    }
  };
  
  export default MuiTextField;