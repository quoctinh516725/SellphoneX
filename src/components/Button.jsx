import React from "react";

const Button = ({ children, className, onClick, name }) => {
  return (
    <button
      className={`py-2 px-4 rounded-md text-white font-semibold bg-gray-300/50 hover:bg-gray-300/20 flex items-center gap-2 cursor-pointer text-nowrap ${className}`}
      onClick={onClick}
      name={name || ""}
    >
      {children}
    </button>
  );
};

export default Button;
