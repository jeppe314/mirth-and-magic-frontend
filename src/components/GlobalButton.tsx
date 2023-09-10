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
      className={`bg-secondary hover:bg-primary flex w-full justify-center text-text-color-light px-4 py-2 rounded-lg transition duration-300 ease-in-out  focus:outline-none focus:ring-2 focus:ring-highlight ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
