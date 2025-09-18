import React from "react";
import { FormatPrice } from "../../../utils/FormatPrice";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilters,
  setBrandProduct,
  setPriceRange,
  setSearchKey,
  setUseProduct,
} from "../../../features/products/products.slice";

const ListFilter = ({ priceRange, useProduct, searchKey, brandProduct }) => {
  const dispatch = useDispatch();
  const filters = [
    brandProduct && {
      label: "Thương hiệu",
      value: brandProduct,
      name: "brand",
    },
    useProduct && {
      label: "Nhu cầu",
      value: useProduct,
      name: "use",
    },
    searchKey && {
      label: "Tìm kiếm",
      value: searchKey,
      name: "search",
    },
    priceRange &&
      priceRange.length === 2 &&
      priceRange[1] !== 100000000 && {
        label: "Giá",
        value: `${FormatPrice(priceRange[0])} - ${
          priceRange[1] === Infinity ? "Trở lên" : FormatPrice(priceRange[1])
        }`,
        name: "price",
      },
  ].filter(Boolean);
  const handleReset = (e) => {
    const name = e.currentTarget.name;
    if (name === "price") {
      dispatch(setPriceRange([0, 100000000]));
    } else if (name === "search") {
      dispatch(setSearchKey(""));
    } else if (name === "use") {
      dispatch(setUseProduct(""));
    } else if (name === "brand") {
      dispatch(setBrandProduct(""));
    }
  };

  return (
    <>
      {filters.length > 0 && (
        <div className="mt-3">
          <h5 className="text-lg font-bold my-4">Đang lọc theo</h5>
          <div className="flex gap-6  overflow-x-auto">
            {filters.map((f, i) => (
              <div
                key={i}
                className=" flex flex-shrink-0 items-center gap-1 bg-white border border-gray-300 shadow-sm px-3 py-1.5 rounded-full text-sm text-gray-700 hover:border-blue-500 hover:bg-primary/5 transition-all duration-200 cursor-pointer"
              >
                <span className="font-semibold ">{f.label}:</span>
                <span className="text-blue-500">{f.value}</span>
                <button
                  name={f.name}
                  onClick={handleReset}
                  className="text-sm w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 cursor-pointer"
                >
                  &times;
                </button>
              </div>
            ))}
            <div className="flex items-center gap-1 cursor-pointer">
              <span
                className="text-xs text-blue-500 font-semibold hover:opacity-70"
                onClick={() => dispatch(resetFilters())}
              >
                Xoá bộ lọc
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListFilter;
