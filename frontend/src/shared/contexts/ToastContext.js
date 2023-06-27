import { createContext, useReducer } from 'react';

import Toast from '../components/Toast';


const initialState = {
  open: false,
  type: 'success',
  message: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        open: true,
        type: 'success',
        message: action.message
      };
    }

    case 'ERROR': {
      return {
        open: true,
        type: 'error',
        message: action.message
      };
    }

    case 'CLOSE': {
        return initialState;
    }
  }
}

const ToastContext = createContext({
  ...initialState,
  success: () => {},
  error: () => {},
  close: () => {}
});

function ToastProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function success(message) {
    dispatch({
      type: 'SUCCESS',
      message
    });
  }

  function error(message) {
    dispatch({
      type: 'ERROR',
      message
    });
  }

  function close() {
    dispatch({
      type: 'CLOSE'
    });
  }

  return (
    <ToastContext.Provider
      value={{
        ...state,
        success,
        error,
        close
      }}
    >
      <Toast />
      {children}
    </ToastContext.Provider>
  );
}

export { ToastContext, ToastProvider };