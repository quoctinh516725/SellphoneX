import React from "react";

const Button = ({
  children,
  className,
  onClick,
  name,
  radius = "rounded-md",
}) => {
  return (
    <button
      className={`py-2 px-4  text-white font-semibold bg-gray-200/50 hover:bg-gray-300/20 flex items-center gap-2 cursor-pointer text-nowrap ${radius} ${className}`}
      onClick={onClick}
      name={name || ""}
    >
      {children}
    </button>
  );
};

export default Button;
