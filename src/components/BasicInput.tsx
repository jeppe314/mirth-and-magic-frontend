import React from "react";

type InputProps = {
  type?: "text" | "password" | "number" | "email";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const BasicInput: React.FC<InputProps> = ({ type = "text", placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`border rounded px-3 py-2 ${className}`}
    />
  );
};

export default BasicInput;
