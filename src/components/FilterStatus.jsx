import React from "react";

const FilterStatus = ({ filterItems, activeFilter, onClick }) => {
  return (
    <div className="flex items-center gap-4">
      {filterItems.map((item) => (
        <button
          key={item.value}
          onClick={() => onClick(item.value)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer
              ${
                activeFilter === item.value
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default FilterStatus;
