export default function SelectField({ id, label, value, options, onInputChange }) {
  return (
    <>
      <label htmlFor={id} className="basis-full text-sm font-medium">
        {label}
      </label>
      <select
        className="w-full rounded-md"
        name={id}
        id={id}
        onChange={(e) => onInputChange({ [id]: e.target.value })}
        value={value}
      >
        <option value="">Please select</option>
        {options.map((option) => {
          return (
            // each option is unique, so we are using it as a key
            <option key={option} value={option}>
              {option[0].toUpperCase() + option.substring(1)}
            </option>
          );
        })}
      </select>
    </>
  );
}
