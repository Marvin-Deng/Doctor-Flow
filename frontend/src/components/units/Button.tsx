import React from "react";

type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
  color: string;
};

const Button = ({ onClick, value, color }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center text-3xs  transform hover:scale-105 text-white bg-${color}-500 hover:bg-${color}-700 font-bold py-2 px-4 rounded-full`}
      style={{ transition: "background 0.3s ease, transform 0.3s ease" }}
    >
      {value}
    </button>
  );
};

export default Button;
