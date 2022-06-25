import { InputField } from '../input-field';

// PreparationTimeField is a special case of a generic InputField component.
export default function PreparationTimeField({ dispatch, preparationTime }) {
  function handlePreparationTimeChange(duration) {
    dispatch({
      type: 'preparation_time_changed',
      preparationDuration: duration,
    });
  }

  return (
    <div className="flex flex-wrap gap-1">
      <InputField
        type="number"
        label="Preparation time"
        id="preparation_time"
        value={preparationTime}
        onInputChange={handlePreparationTimeChange}
      />
    </div>
  );
}
