  import React from "react";

  const Search = ({ className, placeholder, onKeyDown,onChange, value, name, type }) => {
    return (
      <div
        className={` sm:w-1/2 w-full px-4 py-2 border bg-white border-gray-200 flex items-center  gap-5 rounded-xl overflow-hidden cursor-pointer ${className}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          className="w-full outline-none border-none"
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          onChange={onChange}
          value={value}
          name={name || ""}
          type={type || "text"}
        />
      </div>
    );
  };

  export default Search;
