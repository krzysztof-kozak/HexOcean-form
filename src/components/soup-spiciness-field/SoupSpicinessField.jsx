import { InputField } from '../input-field';

// SoupSpicinessField is a special case of a generic InputField component.
export default function SoupSpicinessField({ dispatch, spiciness }) {
  function handleSoupSpicinessChange(spiciness) {
    dispatch({
      type: 'soup_spiciness_changed',
      soupSpiciness: spiciness,
    });
  }

  return (
    <div className="flex flex-wrap gap-1 animate-slide-from-top">
      <InputField
        label="Spiceness"
        id="spiciness_scale"
        type="range"
        range={{ min: 1, max: 10 }}
        value={spiciness}
        onInputChange={handleSoupSpicinessChange}
      />
    </div>
  );
}
