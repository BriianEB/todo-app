import { useContext, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';

import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,  
} from '@mui/material';

import useApi from '@/shared/hooks/useApi';
import useResponsive from '@/shared/hooks/useResponsive';
import useToast from '@/shared/hooks/useToast';
import { TaskContext } from '../contexts/TaskContext';


const validations = {
  name: {
      required: {
          value: true,
          message: 'Debes llenar este campo.'
      }
  }
};

function TaskForm({ open, onClose, getTasks }) {
  const { selectedTask, clearTask } = useContext(TaskContext);
  const isMobile = useResponsive('down', 'md');
  const { success } = useToast();

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: selectedTask ? selectedTask.name : '',
    }
  });

  let request;

  if (selectedTask) {
    request = useApi.patch(`/tasks/${selectedTask.uuid}`);
  } else {
    request = useApi.post('/tasks');
  }

  useEffect(function () {
    if (request.status === 'completed') {      
      if (selectedTask) {
        success('Tarea modificada correctamente.');
        clearTask();
      } else {
        success('Tarea agregada correctamente.');
      }

      getTasks();
      onClose();
    }
  }, [request.status]);

  function submitHandler(data) {
    request.request(data);
  }

  return (
    <Dialog
      fullScreen={isMobile}
      open={open}
      onClose={onClose}
      fullWidth
    >
      <form onSubmit={handleSubmit(submitHandler)}>
        {isMobile ? (
          <DialogTitle>
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: 'absolute',
                left: 8,
                top: 8,
                color: 'text.secondary',
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box component="span" sx={{ ml: 5 }}>
              {selectedTask ? 'Modificar' : 'Crear nueva' } tarea
            </Box>

            <Button
              type="submit"
              variant="contained"
              sx={{
                position: 'absolute',
                right: 24,
                top: 12,
              }}
            >
              {selectedTask ? 'Guardar' : 'Crear' }
            </Button>
          </DialogTitle>
        ) : (
          <DialogTitle>
            {selectedTask ? 'Modificar' : 'Crear nueva' } tarea

            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'text.secondary',
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
        )}      

        <DialogContent>
          <Box>          
            <Controller
              name="name"
              control={control}
              rules={validations.name}
              render={({ field }) => (
                <TextField
                  variant="standard"
                  label="Nombre de la tarea"                
                  fullWidth
                  {...field}
                  error={errors.name !== undefined}
                  helperText={errors.name && errors.name.message}
                  inputProps={{
                    fontSize: '14px'
                  }}
                />
              )}
            />          
          </Box>
        </DialogContent>

        {!isMobile && (
          <DialogActions sx={{px: 2.5, py: 2}}>
            <Button onClick={onClose} sx={{color: 'text.secondary'}}>Cancelar</Button>
            <Button type="submit" variant="contained">
              {selectedTask ? 'Guardar' : 'Crear' } tarea
            </Button>
          </DialogActions>
        )}
      </form>
    </Dialog>

  );
}

export default TaskForm;