import { Box, Checkbox, Typography } from "@mui/material";
import { alpha } from '@mui/material/styles';

import TaskMoreMenu from "./TaskMoreMenu";

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function Task({ task }) {
  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: (theme) => (
          task.completed
          ? alpha(theme.palette.primary.main, 0.24)
          : theme.palette.background.paper
        ),
        mb: 0.5,        
        boxShadow: (theme) => theme.customShadows.task,
        borderRadius: (theme) => theme.shape.borderRadius + 'px',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 1.5,
          py: 0.25,
          '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            width: '5px',
            height: '100%',
            bgcolor: (theme) => theme.palette.primary.main,
            transition: (theme) => theme.transitions.create(['width'], {
              duration: theme.transitions.duration.standard
            })
          },
          '&:hover': {
            '&::after': {
              width: '12px'
            }
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox
            icon={
              <RadioButtonUncheckedIcon
                sx={{color: (theme) => theme.palette.primary.main}}
              />
            }
            checkedIcon={<CheckCircleIcon />}
            defaultChecked={task.completed}
          />

          <Typography
            sx={{
              ml: 1,
              color: task.completed ? 'text.disabled' : 'text.primary',
              textDecorationLine: task.completed ? 'line-through' : 'none'
            }}
          >
            {task.name}
          </Typography>
        </Box>
        <TaskMoreMenu />
      </Box>      
    </Box>
  );
}

export default Task;