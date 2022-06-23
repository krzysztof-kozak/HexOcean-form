export default function InputField({ id, label, type, value, onInputChange }) {
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
        onChange={(e) => onInputChange({ [id]: e.target.value })}
      />
    </>
  );
}
