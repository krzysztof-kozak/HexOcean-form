import Swal from 'sweetalert2';

import { useReducer } from 'react';
import {
  PreparationTimeField,
  DishNameField,
  DishTypeField,
  PizzaSlicesField,
  PizzaDiameterField,
  SoupSpicinessField,
  SandwichSlicesField,
} from './components';

import { dishReducer } from './hooks';
import { validateForm, prepareData, postData } from './utility';

const initialState = {
  name: '',
  preparation_time: '',
  type: '',
  no_of_slices: 1,
  slices_of_bread: 1,
  diameter: 30,
  spiciness_scale: 1,
};

const URL = 'https://frosty-wood-6558.getsandbox.com:443/dishes';

function App() {
  const [dish, dispatch] = useReducer(dishReducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();

    const shouldSubmit = validateForm(dish);
    if (!shouldSubmit) {
      return;
    }

    const jsonData = prepareData({ ...dish });

    postData(URL, jsonData).then((response) => {
      Swal.fire({ title: 'Request successful', icon: 'success', text: `request id: ${response.id}` });
    });
  }

  return (
    <div className="grid min-h-screen place-items-center bg-gray-200 px-6 sm:px-0">
      <div className="rounded-lg bg-white px-6 py-8 shadow md:px-10 w-full sm:max-w-lg">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <h1 className="text-5xl font-bold mb-8">Your request</h1>

          <DishNameField dispatch={dispatch} name={dish.name} />
          <PreparationTimeField dispatch={dispatch} preparationTime={dish.preparation_time} />
          <DishTypeField dispatch={dispatch} type={dish.type} />

          {dish.type === 'pizza' && (
            <>
              <PizzaSlicesField dispatch={dispatch} slices={dish.no_of_slices} />
              <PizzaDiameterField dispatch={dispatch} diameter={dish.diameter} />
            </>
          )}

          {dish.type === 'soup' && <SoupSpicinessField dispatch={dispatch} spiciness={dish.spiciness_scale} />}
          {dish.type === 'sandwich' && <SandwichSlicesField dispatch={dispatch} slices={dish.slices_of_bread} />}

          <button className="w-full rounded-md border border-gray-300 bg-black py-2 text-white hover:bg-black/90">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
