import { useContext, useEffect, useState } from 'react';

import {
  Box,
  Button,
  Card,
  CircularProgress,
  Fab,
  Typography
} from '@mui/material';

import AddTaskIcon from '@mui/icons-material/AddTask';

import useApi from '@/shared/hooks/useApi';
import useResponsive from '@/shared/hooks/useResponsive';
import useToast from '@/shared/hooks/useToast';
import Layout from '@/shared/components/Layout';
import Page from '@/shared/components/Page';
import TasksList from './components/TasksList';
import TaskForm from './components/TaskForm';

import { TaskContext } from './contexts/TaskContext';


function Tasks() {
  const { selectedTask, actionOnTask, clearTask } = useContext(TaskContext);
  const isMobile = useResponsive('down', 'sm');
  const { success } = useToast();

  const [showForm, setShowForm] = useState(false);

  const { request: getTasks, status, data: tasks } = useApi.get('/tasks');  

  useEffect(function () {
    getTasks();
  }, [getTasks]);

  useEffect(function () {
    if (actionOnTask === 'edit') {      
      handleShowForm();      
    } else if (actionOnTask === 'delete') {
      success('Tarea elminiada correctamente.');
      clearTask();
      getTasks();
    }    
  }, [actionOnTask, getTasks]);

  function handleShowForm() {
    setShowForm(true);
  }

  function handleCloseForm() {
    if (selectedTask) {
      clearTask();
    }

    setShowForm(false);
  }

  const TasksListContainer = isMobile ? Box : Card;

  return (
    <Page title="Lista de tareas">
      <Layout>
        <Box
          sx={{            
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: { lg: '2.25rem' }
          }}
        >
          <Typography variant="h4">
            Lista de tareas
          </Typography>
          
          {isMobile ? (
            <Fab
              color="primary"
              sx={{
                position: 'fixed',
                right: '2rem',
                bottom: '4rem'
              }}
              onClick={handleShowForm}
            >
              <AddTaskIcon />
            </Fab>
          ) : (
            <Button
              variant="contained"
              startIcon={<AddTaskIcon />}
              onClick={handleShowForm}
            >
              Nueva tarea
            </Button>
          )}
        </Box>

        <TasksListContainer
          sx={{
            height: { lg: '500px', xl: '600px' },
            px: { lg: 4 },
            py: 4,
            overflow: 'auto'
          }}
        >
          {status === 'completed' ? (
            <TasksList tasks={tasks} />
          ) : (
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: '20vh'
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </TasksListContainer>        
          
        {showForm && (
          <TaskForm
            open={showForm}
            onClose={handleCloseForm}
            getTasks={getTasks}              
          />
        )}        
      </Layout>
    </Page>
  );
}

export default Tasks;