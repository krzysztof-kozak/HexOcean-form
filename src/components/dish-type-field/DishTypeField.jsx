import { useDish, useDishDispatch, useErrorDispatch } from '../../context';
import { SelectField } from '../select-field';

// DishTypeField is a special case of a generic SelectField component.
export default function DishTypeField() {
  const { type } = useDish();
  const dishDispatch = useDishDispatch();
  const errorDispatch = useErrorDispatch();

  function handleDishTypeChange(type) {
    dishDispatch({
      type: 'dish_type_changed',
      dishType: type,
    });

    errorDispatch({
      type: 'dish_type_changed',
      dishType: type,
    });
  }

  return (
    <div className="flex flex-wrap gap-1">
      <SelectField
        label="Dish type"
        id="type"
        value={type}
        errorKey="type"
        options={['pizza', 'soup', 'sandwich']}
        onInputChange={handleDishTypeChange}
      />
    </div>
  );
}
