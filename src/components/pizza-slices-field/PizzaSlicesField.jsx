import { InputField } from '../input-field';

// PizzaSlicesField is a special case of a generic InputField component.
export default function PizzaSlicesField({ dispatch, slices }) {
  function handleNumberOfPizzaSlicesChange(slices) {
    dispatch({
      type: 'number_of_pizza_slices_changed',
      numberOfSlices: slices,
    });
  }

  return (
    <div className="flex flex-wrap gap-1 animate-slide-from-top">
      <InputField
        label="Number of slices"
        id="no_of_slices"
        type="number"
        value={slices}
        onInputChange={handleNumberOfPizzaSlicesChange}
      />
    </div>
  );
}
