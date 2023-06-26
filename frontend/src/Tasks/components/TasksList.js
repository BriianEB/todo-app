import { Box, Card, Typography } from "@mui/material";

import TasksNotFound from "./TasksNotFound";


function TasksList() {
  return (
    <Card
      sx={{
        height: '600px',
        p: 4
      }}
    >
      <TasksNotFound />
    </Card>
  );
}

export default TasksList;