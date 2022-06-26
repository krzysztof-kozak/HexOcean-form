import { createContext, useContext, useReducer } from 'react';
import { dishReducer } from './dishReducer';

const DishContext = createContext(null);
const DishDispatchContext = createContext(null);

export default function DishProvider({ children }) {
  const [dish, dispatch] = useReducer(dishReducer, initialDish);

  return (
    <DishContext.Provider value={dish}>
      <DishDispatchContext.Provider value={dispatch}>{children}</DishDispatchContext.Provider>
    </DishContext.Provider>
  );
}

export function useDish() {
  return useContext(DishContext);
}

export function useDishDispatch() {
  return useContext(DishDispatchContext);
}

const initialDish = {
  name: '',
  preparation_time: '',
  type: '',
  no_of_slices: 1,
  slices_of_bread: 1,
  diameter: 30,
  spiciness_scale: 1,
};
