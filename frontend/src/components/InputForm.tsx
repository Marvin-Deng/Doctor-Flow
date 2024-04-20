interface InputFormProps {
  label?: string;
  type: "text" | "email" | "password" | "number" | "date";
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
}

const InputForm: React.FC<InputFormProps> = ({
  label,
  type,
  name,
  placeholder = "",
  value,
  onChange,
  width = "full"
}) => (
  <div className="mb-4">
    {label && (
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
    )}
    <input
      className={`text-sm shadow appearance-none border rounded ${width === "full" ? "w-full" : ""} py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ width: width !== "full" ? width : undefined }}
    />
  </div>
);

export default InputForm;
