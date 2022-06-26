import { useError } from '../../context';

export default function SelectField({ id, label, value, options, onInputChange, onInputBlur, errorKey }) {
  const error = useError();
  const errorMessage = error[errorKey];

  return (
    <>
      <label htmlFor={id} className="basis-full text-sm font-medium">
        {label}
      </label>
      <select
        className="w-full rounded-md"
        name={id}
        id={id}
        onChange={(e) => onInputChange(e.target.value)}
        onBlur={() => {
          onInputBlur(value);
        }}
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
      <div className="min-h-[20px]">
        {errorMessage && <p className="basis-full text-sm text-red-500">{errorMessage}</p>}
      </div>
    </>
  );
}
