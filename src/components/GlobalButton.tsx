import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  color?: "primary" | "secondary" | "accent";
  textColor?: "light" | "dark";
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className, color = "primary", textColor = "light" }) => {
  const bgColorClasses = {
    primary: "bg-primary hover:bg-primary-hover",
    secondary: "bg-secondary hover:bg-secondary-hover",
    accent: "bg-accent hover:bg-highlight",
  };

  const textColorClasses = {
    light: "text-text-color-light",
    dark: "text-text-color-dark",
  };

  return (
    <button
      onClick={onClick}
      className={`${bgColorClasses[color]} ${textColorClasses[textColor]} flex w-full justify-center px-4 py-2 tracking-wider transition duration-300 ease-in-out focus:outline-none  ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
