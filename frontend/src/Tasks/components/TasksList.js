import { Box, Card, Typography } from "@mui/material";

import useResponsive from '@/shared/hooks/useResponsive';
import Task from "./Task";
import TasksNotFound from "./TasksNotFound";


function TasksList({ tasks }) {
  const isDesktop = useResponsive('up', 'lg');

  const Container = isDesktop ? Card : Box;
  
  return (
    <Container
      sx={{
        height: { lg: '500px', xl: '600px' },
        px: { lg: 4 },
        py: 4,
      }}
    >
      {!tasks ? (
        <TasksNotFound />
      ) : (
        tasks.map((task) => (
          <Task key={task.uuid} task={task} />
        ))
      )}
    </Container>
  );
}

export default TasksList;