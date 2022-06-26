import { useDish, useDishDispatch } from '../../context';
import { InputField } from '../input-field';

// DishNameField is a special case of a generic InputField component.
export default function DishNameField() {
  const { name } = useDish();
  const dispatch = useDishDispatch();

  function handleDishNameChange(name) {
    dispatch({
      type: 'dish_name_changed',
      dishName: name,
    });
  }

  return (
    <div className="flex flex-wrap gap-1">
      <InputField type="text" label="Dish name" id="name" value={name} onInputChange={handleDishNameChange} />
    </div>
  );
}
