import { useDish, useDishDispatch, useErrorDispatch } from '../../context';
import { InputField } from '../input-field';

// DishNameField is a special case of a generic InputField component.
export default function DishNameField() {
  const { name } = useDish();
  const dishDispatch = useDishDispatch();
  const errorDispatch = useErrorDispatch();

  function handleDishNameChange(name) {
    dishDispatch({
      type: 'dish_name_changed',
      dishName: name,
    });

    errorDispatch({
      type: 'dish_name_changed',
      dishName: name,
    });
  }

  function handleInputBlur(name) {
    errorDispatch({
      type: 'dish_name_changed',
      dishName: name,
    });
  }

  return (
    <div className="flex flex-wrap gap-1">
      <InputField
        type="text"
        label="Dish name"
        id="name"
        value={name}
        errorKey="name"
        onInputChange={handleDishNameChange}
        onInputBlur={handleInputBlur}
      />
    </div>
  );
}
