import { Box, Button, Typography } from "@mui/material";
import AddTaskIcon from '@mui/icons-material/AddTask';

import Layout from "@/shared/components/Layout";
import Page from "@/shared/components/Page";
import TasksList from "./components/TasksList";


function Tasks() {
  return (
    <Page title="Lista de tareas">
      <Layout>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            mb: '2.25rem'
          }}
        >
          <Typography variant="h1">
            Lista de tareas
          </Typography>
          <Button variant="contained" startIcon={<AddTaskIcon />}>
            Nueva tarea
          </Button>
        </Box>

        <TasksList />
      </Layout>
    </Page>
  );
}

export default Tasks;