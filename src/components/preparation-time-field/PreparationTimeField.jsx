import { InputField } from '../input-field';
import { useDish, useDishDispatch, useErrorDispatch } from '../../context/';

// PreparationTimeField is a special case of a generic InputField component.
export default function PreparationTimeField() {
  const { preparation_time } = useDish();
  const dishDispatch = useDishDispatch();
  const errorDispatch = useErrorDispatch();

  function handlePreparationTimeChange(duration) {
    dishDispatch({
      type: 'preparation_time_changed',
      preparationDuration: duration,
    });

    errorDispatch({
      type: 'preparation_time_changed',
      preparationDuration: duration,
    });
  }

  function handleInputBlur(duration) {
    errorDispatch({
      type: 'preparation_time_changed',
      preparationDuration: duration,
    });
  }

  return (
    <div className="flex flex-wrap gap-1">
      <InputField
        type="number"
        range={{ min: 1, max: 600 }}
        label="Preparation time"
        id="preparation_time"
        value={preparation_time}
        errorKey="preparation_time"
        onInputChange={handlePreparationTimeChange}
        onInputBlur={handleInputBlur}
      />
    </div>
  );
}
