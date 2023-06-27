import { useState } from "react";
import { Box, Button, Fab, Typography } from "@mui/material";
import AddTaskIcon from '@mui/icons-material/AddTask';

import useResponsive from '@/shared/hooks/useResponsive';
import Layout from "@/shared/components/Layout";
import Page from "@/shared/components/Page";
import TasksList from "./components/TasksList";
import TaskForm from "./components/TaskForm";

const tasks = [
  {
    uuid: '04909',
    name: 'Tarea 1',
    completed: false
  },
  {
    uuid: '9430d',
    name: 'Tarea 2',
    completed: false
  },
  {
    uuid: 'fd43fa',
    name: 'Tarea 3',
    completed: false
  },
  {
    uuid: 'f4g5gv',
    name: 'Tarea 4',
    completed: false
  }
];


function Tasks() {
  const isMobile = useResponsive('down', 'sm');

  const [showForm, setShowForm] = useState(false);

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
            mb: '2.25rem'
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

        <TasksList tasks={tasks} />
        
        <TaskForm
          open={showForm}
          onClose={handleCloseForm}
        />
      </Layout>
    </Page>
  );
}

export default Tasks;