import React from "react";

const SectionTitle = ({ title, brands = [] }) => {
  return (
    <div className="flex flex-col sm:flex-row   items-center justify-between ">
      <h2 className="text-xl sm:text-2xl font-bold uppercase text-gray-600 my-3">
        {title}
      </h2>
      <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3">
        {brands.map((item, index) => (
          <button
            key={index}
            className="text-sm font-semibold text-gray-600 px-4 border border-gray-200 rounded-2xl hover:bg-gray-300 cursor-pointer "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionTitle;
