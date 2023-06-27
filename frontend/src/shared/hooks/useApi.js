import { useCallback, useReducer } from 'react';

import useDeepMemo from './useDeepMemo';
import apiRequest from '@/shared/utils/apiRequest';


function reducer(state, action) {
  switch (action.type) {
    case 'SEND': {
      return {
        status: 'pending',
        data: null,
        error: null
      };
    }

    case 'SUCCESS': {
      return {
        status: 'completed',
        data: action.data,
        error: null
      };
    }

    case 'ERROR': {
      return {
        status: 'error',
        data: null,
        error: action.error
      };
    }
  }

  return state;
}

// Facilita las peticiones al backend abstrayendo mucha de la complejidad y el
// control que comúnmente se realiza durante una petición.
function useApi(method, endpoint, instanceParams) {
  const memoParams = useDeepMemo(instanceParams);

  const [state, dispatch] = useReducer(reducer, {
    status: null,
    data: null,
    error: null
  });

  // params: se habilita la opción de pasar los parámetros de la
  // petición tanto al momento de "instanciar" como al de llamar la función
  // porque existen dos escenarios: 1) para una petición get, lo ideal es
  // pasarlos al "instanciar" la función de petición; 2) para las peticiiones
  // post, patch y put, lo ideal es pasarlos al momento de llamar la función
  const request = useCallback(function (data, callTimeParams) {
    dispatch({ type: 'SEND' });

    const params = callTimeParams ? callTimeParams : memoParams;

    apiRequest(method, endpoint, data, params).then(function (response) {
      dispatch({
        type: 'SUCCESS',
        data: response
      });
    }, function (error) {
      console.log(error);
      dispatch({
        type: 'ERROR',
        error: error
      });
    });
  }, [method, endpoint, memoParams]);

  return {
    request,
    status: state.status,
    data: state.data,
    error: state.error
  };
}

/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line
export default {
  get: (...args) => useApi('get', ...args),
  post: (...args) => useApi('post', ...args),
  put: (...args) => useApi('put', ...args),
  patch: (...args) => useApi('patch', ...args),
  delete: (...args) => useApi('delete', ...args)
}
