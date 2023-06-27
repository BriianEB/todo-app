import { useEffect, useState } from 'react';
import { Box, Checkbox, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';

import useApi from '@/shared/hooks/useApi';
import TaskMoreMenu from './TaskMoreMenu';

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useToast from '@/shared/hooks/useToast';


function Task(props) {  
  const { success } = useToast();

  const [task, setTask] = useState(props.task);

  const { request, status, data } = useApi.patch(`/tasks/${task.uuid}`);

  useEffect(function () {
    if (status === 'completed') {
      success('Se ha completado la tarea.');
      setTask(data);
    }
  }, [status]);

  function handleComplete() {
    if (!task.completed) {
      request({
        ...task,
        completed: true
      });
    }    
  }

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
        overflow: 'hidden',
        
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
            onClick={handleComplete}
            checked={task.completed}
          />

          <Typography
            sx={{
              ml: 1,
              color: task.completed ? 'text.disabled' : 'text.primary',
              textDecorationLine: task.completed ? 'line-through' : 'none',
              wordWrap: 'break-word',
              wordBreak: 'break-word'
            }}
          >
            {task.name}
          </Typography>
        </Box>
        <TaskMoreMenu task={task} />
      </Box>      
    </Box>
  );
}

export default Task;