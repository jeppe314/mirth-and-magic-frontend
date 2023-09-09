import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-text-color px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-highlight ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
