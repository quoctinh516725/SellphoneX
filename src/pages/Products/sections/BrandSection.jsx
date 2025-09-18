import React from "react";
import { useDispatch } from "react-redux";
import { setBrandProduct } from "../../../features/products/products.slice";

const BrandSection = ({ brands, title }) => {
  const dispatch = useDispatch();
  return (
    <div className="mt-3">
      <h5 className="text-lg font-bold">{title}</h5>
      <div className="w-full overflow-x-auto ">
        <div className="flex space-x-3 sm:grid sm:grid-cols-10 gap-3  mt-3">
          {brands.map((item, idx) => (
            <div
              key={idx}
              className="sm:w-full flex-shrink-0 sm:flex-shrink border border-gray-300 flex items-center justify-center  p-1 cursor-pointer"
              onClick={() => dispatch(setBrandProduct(item.name))}
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
