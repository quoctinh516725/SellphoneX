import React from "react";

const BrandSection = ({ brands, title, onClick = () => {} }) => {
  return (
    <div className="mt-3">
      <h5 className="text-lg font-bold">{title}</h5>
      <div className="w-full overflow-x-auto ">
        <div className="flex space-x-3 sm:grid sm:grid-cols-10 gap-3  mt-3">
          {brands.map((item, idx) => (
            <div
              key={idx}
              className="sm:w-full flex-shrink-0 sm:flex-shrink border border-gray-300 flex items-center justify-center  p-1 cursor-pointer"
              onClick={onClick}
            >
              <img className="w-20" src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
