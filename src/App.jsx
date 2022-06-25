import Swal from 'sweetalert2';

import { useReducer } from 'react';
import { InputField, SelectField } from './components';
import { formDataReducer } from './hooks';
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
  const [dish, dispatch] = useReducer(formDataReducer, initialState);

  function handleDishNameChange(name) {
    dispatch({
      type: 'dish_name_changed',
      dishName: name,
    });
  }

  function handlePreparationTimeChange(duration) {
    dispatch({
      type: 'preparation_time_changed',
      preparationDuration: duration,
    });
  }

  function handleDishTypeChange(type) {
    dispatch({
      type: 'dish_type_changed',
      dishType: type,
    });
  }

  function handlePizzaDiameterChange(diameter) {
    dispatch({
      type: 'pizza_diameter_changed',
      pizzaDiameter: diameter,
    });
  }

  function handleNumberOfPizzaSlicesChange(slices) {
    dispatch({
      type: 'number_of_pizza_slices_changed',
      numberOfSlices: slices,
    });
  }

  function handleSoupSpicinessChange(spiciness) {
    dispatch({
      type: 'soup_spiciness_changed',
      soupSpiciness: spiciness,
    });
  }

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

          <div className="flex flex-wrap gap-1">
            <InputField type="text" label="Dish name" id="name" value={dish.name} />
          </div>

          <div className="flex flex-wrap gap-1">
            <InputField type="number" label="Preparation time" id="preparation_time" value={dish.preparation_time} />
          </div>

          <div className="flex flex-wrap gap-1">
            <SelectField label="Dish type" id="type" value={dish.type} options={['pizza', 'soup', 'sandwich']} />
          </div>

          {dish.type === 'pizza' && (
            <>
              <div className="flex flex-wrap gap-1 animate-slide-from-top">
                <InputField label="Number of slices" id="no_of_slices" type="number" value={dish.no_of_slices} />
              </div>

              <div className="flex flex-wrap gap-1 animate-slide-from-top">
                <InputField label="Diameter" id="diameter" type="number" value={dish.diameter} />
              </div>
            </>
          )}

          {dish.type === 'soup' && (
            <div className="flex flex-wrap gap-1 animate-slide-from-top">
              <InputField
                label="Spiceness"
                id="spiciness_scale"
                type="range"
                range={{ min: 1, max: 10 }}
                value={dish.spiciness_scale}
              />
            </div>
          )}

          {dish.type === 'sandwich' && (
            <div className="flex flex-wrap gap-1 animate-slide-from-top">
              <InputField label="Slices" id="slices_of_bread" type="number" value={dish.slices_of_bread} />
            </div>
          )}

          <button className="w-full rounded-md border border-gray-300 bg-black py-2 text-white hover:bg-black/90">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
