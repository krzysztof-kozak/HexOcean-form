import { useError } from '../../context';

export default function InputField({ id, label, type, value, range, onInputChange, onInputBlur, errorKey }) {
  const error = useError();
  const errorMessage = error[errorKey];

  return (
    <>
      <label htmlFor={id} className="basis-full text-sm font-medium">
        {label}
      </label>
      <input
        className="basis-full rounded-md"
        type={type}
        name={id}
        id={id}
        value={value}
        min={range?.min ? range.min : null}
        max={range?.max ? range.max : null}
        onInput={(e) => onInputChange(e.target.value)}
        onBlur={() => {
          onInputBlur(value);
        }}
      />
      <div className="min-h-[20px]">
        {errorMessage && <p className="basis-full text-sm text-red-500">{errorMessage}</p>}
      </div>
    </>
  );
}
