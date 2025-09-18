import React from "react";
import { useDispatch } from "react-redux";
import { setUseProduct } from "../../../features/products/products.slice";

const FeatureFilter = ({ phoneFeatures, title }) => {
  const dispatch = useDispatch();
  return (
    <div className="mt-3">
      <h5 className="text-lg font-bold my-4">{title}</h5>
      <div className="flex space-x-6 overflow-x-auto">
        {phoneFeatures.map((f, index) => (
          <div
            key={f.index}
            className="max-w-[100px] flex-shrink-0 flex flex-col items-center bg-gray-100 py-4 px-2 rounded-xl cursor-pointer"
            onClick={() => dispatch(setUseProduct(f.name))}
          >
            <img src={f.img} />
            <span className="text-[11px] font-semibold text-center">
              {f.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureFilter;
