import { useContext } from 'react';

import { ToastContext } from '../contexts/ToastContext';


function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('Toast context must be used inside ToastProvider');
  }

  return {
    success: context.success,
    error: context.error
  };
}

export default useToast;