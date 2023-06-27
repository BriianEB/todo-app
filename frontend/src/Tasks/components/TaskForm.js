import { useEffect } from 'react';
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
  Typography
} from '@mui/material';

import useApi from '@/shared/hooks/useApi';
import useResponsive from '@/shared/hooks/useResponsive';


const validations = {
  name: {
      required: {
          value: true,
          message: 'Debes llenar este campo.'
      }
  }
};

function TaskForm({ open, onClose, getTasks }) {
  const isMobile = useResponsive('down', 'md');

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
    }
  });

  const { request: createTask, status } = useApi.post('/tasks');

  useEffect(function () {
    if (status === 'completed') {
      getTasks();
      onClose();
    }
  }, [status]);

  function submitHandler(data) {
    createTask(data);
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

            <Box component="span" sx={{ ml: 5 }}>Crear nueva tarea</Box>

            <Button
              type="submit"
              variant="contained"
              sx={{
                position: 'absolute',
                right: 24,
                top: 12,
              }}
            >
              Crear
              </Button>
          </DialogTitle>
        ) : (
          <DialogTitle>
            Crear nueva tarea

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
            <Button type="submit" variant="contained">Crear tarea</Button>
          </DialogActions>
        )}
      </form>
    </Dialog>

  );
}

export default TaskForm;