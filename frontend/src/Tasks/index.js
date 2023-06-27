import { useContext, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Fab, Typography } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';

import useApi from '@/shared/hooks/useApi';
import useResponsive from '@/shared/hooks/useResponsive';
import Layout from '@/shared/components/Layout';
import Page from '@/shared/components/Page';
import TasksList from './components/TasksList';
import TaskForm from './components/TaskForm';

import TaskContext from './contexts/TaskContext';


function Tasks() {
  //const taskCtx = useContext(TaskContext);  
  const isMobile = useResponsive('down', 'sm');

  const [showForm, setShowForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const { request: getTasks, status, data: tasks } = useApi.get('/tasks');

  useEffect(function () {
    getTasks();
  }, [getTasks]);

  function handleShowForm() {    
    setShowForm(true);
  }

  function handleCloseForm() {
    setShowForm(false);
  }

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

          {}
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