type input = string | number | readonly string[] | undefined;

function InputField<T>({
  field,
  value,
  id,
  setter,
}: {
  field: string;
  value: input;
  id: string;
  setter: React.Dispatch<React.SetStateAction<input>>;
}) {
  return (
    <div>
      <label className="text-black" htmlFor={id + "Name"}>
        <span>{field}</span>
        <input
          id={id + "Name"}
          name="Name"
          value={value}
          onChange={(e) => setter(e.target.value)}
        />
      </label>
    </div>
  );
}

export default InputField;
