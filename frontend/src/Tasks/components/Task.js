import { Box, Checkbox, Typography } from "@mui/material";


function Task({ task }) {
  return (
    <Box
      sx={{
        bgcolor: (theme) => theme.palette.background.paper,
        //bgcolor: (theme) => theme.palette.primary.main,
        mb: 0.5,        
        boxShadow: (theme) => theme.customShadows.task,
        borderRadius: (theme) => theme.shape.borderRadius + 'px',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 1.5,
          py: 0.25,
          borderLeftWidth: '6px',
          borderLeftStyle: 'solid',
          borderColor: (theme) => theme.palette.primary.main,
        }}
      >
        <Checkbox
          sx={{
            borderRadius: '16px'
          }}
        />
        <Typography sx={{ ml: 1 }}>{task.name}</Typography>
      </Box>      
    </Box>
  );
}

export default Task;