import { useDish, useDishDispatch } from '../../context';
import { SelectField } from '../select-field';

// DishTypeField is a special case of a generic SelectField component.
export default function DishTypeField() {
  const { type } = useDish();
  const dispatch = useDishDispatch();

  function handleDishTypeChange(type) {
    dispatch({
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
        options={['pizza', 'soup', 'sandwich']}
        onInputChange={handleDishTypeChange}
      />
    </div>
  );
}
