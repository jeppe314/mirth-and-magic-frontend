import React from "react";

type InputProps = {
  type?: "text" | "password" | "number" | "email" | "range" | "select";
  placeholder?: string;
  value: string | number;
  onChange: (value: string | number) => void;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: string[]; // For dropdown select
};

const BasicInput: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className,
  min,
  max,
  step,
  options,
}) => {
  if (type === "select") {
    return (
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`border rounded px-3 py-2 ${className}`}
      >
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`border rounded px-3 py-2 ${className}`}
      min={min}
      max={max}
      step={step}
    />
  );
};

export default BasicInput;
