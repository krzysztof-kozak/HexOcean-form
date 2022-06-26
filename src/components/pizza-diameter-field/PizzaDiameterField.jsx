import { InputField } from '../input-field';
import { useDish, useDishDispatch, useErrorDispatch } from '../../context';

// PizzaDiameterField is a special case of a generic InputField component.
export default function PizzaDiameterField() {
  const { diameter, type } = useDish();
  const dishDispatch = useDishDispatch();
  const errorDispatch = useErrorDispatch();

  function handlePizzaDiameterChange(diameter) {
    dishDispatch({
      type: 'pizza_diameter_changed',
      pizzaDiameter: diameter,
    });

    errorDispatch({
      type: 'pizza_diameter_changed',
      pizzaDiameter: diameter,
    });
  }

  function handleInputBlur(diameter) {
    errorDispatch({
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
            errorKey="diameter"
            onInputChange={handlePizzaDiameterChange}
            onInputBlur={handleInputBlur}
          />
        </div>
      )}
    </>
  );
}
