import { InputField } from '../input-field';
import { useDish, useDishDispatch } from '../../context/';

// PreparationTimeField is a special case of a generic InputField component.
export default function PreparationTimeField() {
  const { preparation_time } = useDish();
  const dispatch = useDishDispatch();

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
        value={preparation_time}
        onInputChange={handlePreparationTimeChange}
      />
    </div>
  );
}
