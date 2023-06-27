import Task from "./Task";
import TasksNotFound from "./TasksNotFound";


function TasksList({ tasks }) {  
  return (
    <>
      {tasks.length === 0 ? (
        <TasksNotFound />
      ) : (
        tasks.map((task) => (
          <Task key={task.uuid} task={task} />
        ))
      )}
    </>
  );
}

export default TasksList;