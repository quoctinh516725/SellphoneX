import React from "react";

const Input = ({ className, placeholder, onChange, value, name, type }) => {
  return (
    <input
      className={`w-full outline-none px-4 py-2 border bg-white border-gray-200 rounded-xl ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name || ""}
      type={type || "text"}
    />
  );
};

export default Input;
