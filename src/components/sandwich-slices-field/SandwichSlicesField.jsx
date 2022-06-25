import { InputField } from '../input-field';

// SandwichSlicesField is a special case of a generic InputField component.
export default function SandwichSlicesField({ dispatch, slices }) {
  function handleSandwichSlicesChange(slices) {
    dispatch({
      type: 'number_of_bread_slices_changed',
      numberOfSlices: slices,
    });
  }

  return (
    <div className="flex flex-wrap gap-1 animate-slide-from-top">
      <InputField
        label="Slices"
        id="slices_of_bread"
        type="number"
        value={slices}
        onInputChange={handleSandwichSlicesChange}
      />
    </div>
  );
}
