import { createContext, useReducer } from 'react';


const initialState = {
  selectedTask: null,
  actionOnTask: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'TO_EDIT': {
      return {
        selectedTask: action.task,
        actionOnTask: 'edit'
      };
    }

    case 'TO_DELETE': {
      return {
        selectedTask: action.task,
        actionOnTask: 'delete'
      };
    }
    
    case 'CLEAR_TASK': {
      return initialState;
    }
  }
}

const TaskContext = createContext({
  ...initialState,
  setToEdit: () => {},
  setToDelete: () => {},
  clearTask: () => {}
});

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  function setToEdit(task) {
    dispatch({
      type: 'TO_EDIT',
      task
    });
  }

  function setToDelete(task) {
    dispatch({
      type: 'TO_DELETE',
      task
    });
  }

  function clearTask() {
    dispatch({
      type: 'CLEAR_TASK'
    });
  }

  return (
    <TaskContext.Provider
      value={{
        ...state,
        setToEdit,
        setToDelete,
        clearTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };