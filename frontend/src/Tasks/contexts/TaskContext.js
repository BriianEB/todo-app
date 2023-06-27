import { createContext, useReducer } from 'react';


const initialState = {
  selectedTask: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_TASK': {
      return {
        selectedTask: action.task
      };
    }
  }
}

const TaskContext = createContext({
  ...initialState,
  setTask: () => {}
});

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setTask(task) {
    dispatch({
      type: 'SET_TASK',
      task
    });
  }

  return (
    <TaskContext.Provider
      value={{
        ...state,
        setTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };