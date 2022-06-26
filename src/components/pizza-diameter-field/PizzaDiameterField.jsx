import { InputField } from '../input-field';
import { useDish, useDishDispatch } from '../../context';

// PizzaDiameterField is a special case of a generic InputField component.
export default function PizzaDiameterField() {
  const { diameter, type } = useDish();
  const dispatch = useDishDispatch();

  function handlePizzaDiameterChange(diameter) {
    dispatch({
      type: 'pizza_diameter_changed',
      pizzaDiameter: diameter,
    });
  }

  return (
    <>
      {type === 'pizza' && (
        <div className="flex flex-wrap gap-1 animate-slide-from-top">
          <InputField
            label="Diameter"
            id="diameter"
            type="number"
            value={diameter}
            onInputChange={handlePizzaDiameterChange}
          />
        </div>
      )}
    </>
  );
}
