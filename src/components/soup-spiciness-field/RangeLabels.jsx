import { useDish, useDishDispatch } from '../../context';

export default function RangeLabels({ numberOfLabels }) {
  const { spiciness_scale } = useDish();
  const dishDispatch = useDishDispatch();

  function handleDispatch(scale) {
    dishDispatch({ type: 'soup_spiciness_changed', soupSpiciness: scale });
  }

  let labels = [];
  for (let i = 1; i <= numberOfLabels; i++) {
    // spiciness_scale is initially an int, but then gets converted to a string
    // this is why we use loose equality here
    const currentValue = spiciness_scale == i;
    labels.push(
      // i is unique for every button
      // these buttons will also never get re-ordered
      // so it is ok to use i as a key here
      <button
        type="button"
        key={i}
        onClick={() => handleDispatch(i)}
        className={`${currentValue && 'text-blue-500 font-bold'} flex justify-center basis-full text-s`}
      >
        {i}
      </button>,
    );
  }

  return <div className="flex w-full relative gap-6 bottom-6">{labels}</div>;
}
