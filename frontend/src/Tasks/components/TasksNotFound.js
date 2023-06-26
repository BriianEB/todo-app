import { Box, Card, Typography } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';

import IllustrationNoTasks from "@/shared/assets/illustration_no_tasks";


const Container = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
});

function TasksNotFound() {
  return (
    <Container>
      <IllustrationNoTasks />
      <Box sx={{ mt: 1, textAlign: 'center' }}>
        <Typography variant="h4" sx={{mb: 1}}>
          No se encontraron tareas.
        </Typography>
        <Typography variant="body1" color="text.disabled">
          ¡Agrega una nueva tarea para comenzar!
        </Typography>
      </Box>
    </Container>
  );
}

export default TasksNotFound;