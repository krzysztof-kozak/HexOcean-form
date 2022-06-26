import { InputField } from '../input-field';
import { useDish, useDishDispatch } from '../../context';

// SoupSpicinessField is a special case of a generic InputField component.
export default function SoupSpicinessField() {
  const { spiciness_scale, type } = useDish();
  const dispatch = useDishDispatch();

  function handleSoupSpicinessChange(spiciness) {
    dispatch({
      type: 'soup_spiciness_changed',
      soupSpiciness: spiciness,
    });
  }

  return (
    <>
      {type === 'soup' && (
        <div className="flex flex-wrap gap-1 animate-slide-from-top">
          <InputField
            label="Spiceness"
            id="spiciness_scale"
            type="range"
            range={{ min: 1, max: 10 }}
            value={spiciness_scale}
            onInputChange={handleSoupSpicinessChange}
          />
        </div>
      )}
    </>
  );
}
