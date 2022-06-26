import { createContext, useContext, useReducer } from 'react';
import { errorReducer } from './errorReducer';

const ErrorContext = createContext(null);
const ErrorDispatchContext = createContext(null);

export default function ErrorProvider({ children }) {
  const [error, dispatch] = useReducer(errorReducer, initiaError);

  return (
    <ErrorContext.Provider value={error}>
      <ErrorDispatchContext.Provider value={dispatch}>{children}</ErrorDispatchContext.Provider>
    </ErrorContext.Provider>
  );
}

export function useError() {
  return useContext(ErrorContext);
}

export function useErrorDispatch() {
  return useContext(ErrorDispatchContext);
}

const initiaError = {
  name: true,
  preparation_time: true,
  type: true,
  no_of_slices: '',
  slices_of_bread: '',
  diameter: '',
  spiciness_scale: '',
};
