import { InputField } from '../input-field';
import { useDish, useDishDispatch } from '../../context';

// PizzaSlicesField is a special case of a generic InputField component.
export default function PizzaSlicesField() {
  const { no_of_slices, type } = useDish();
  const dispatch = useDishDispatch();

  function handleNumberOfPizzaSlicesChange(slices) {
    dispatch({
      type: 'number_of_pizza_slices_changed',
      numberOfSlices: slices,
    });
  }

  return (
    <>
      {type === 'pizza' && (
        <div className="flex flex-wrap gap-1 animate-slide-from-top">
          <InputField
            label="Number of slices"
            id="no_of_slices"
            type="number"
            value={no_of_slices}
            onInputChange={handleNumberOfPizzaSlicesChange}
          />
        </div>
      )}
    </>
  );
}
