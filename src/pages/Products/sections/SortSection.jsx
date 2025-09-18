import React, { useState } from "react";
import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { setSortProduct } from "../../../features/products/products.slice";

const sortOptions = [
  {
    lable: "Đánh giá cao",
    sortLabel: "Đánh giá",
    value: "rate",
    icon: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
  },
  {
    lable: "Khuyến mãi HOT",
    sortLabel: "Khuyến mãi",
    value: "hot-deals",
    icon: "m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
  },
  {
    lable: "Giá Thấp - Cao",
    sortLabel: "Giá",
    value: "low-to-high",
    icon: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941",
  },
  {
    lable: "Giá Cao - Thấp",
    sortLabel: "Giá",
    value: "high-to-low",
    icon: "M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181",
  },
];

const SortSection = () => {
  const dispatch = useDispatch();
  const { sortProduct } = useSelector((state) => state.products);
  const handleSort = (e) => {
    dispatch(setSortProduct(e.currentTarget.name));
  };
  return (
    <>
      <div className="hidden sm:flex justify-between items-center my-5 py-3">
        <h5 className="text-lg font-bold">Sắp xếp theo</h5>
        <div className=" flex justify-between items-center gap-2">
          {sortOptions.map((item) => (
            <Button
              className={`rounded-full border  ${
                sortProduct === item.value ? "border-blue-500 " : ""
              }`}
              radius="rounded-full"
              name={item.value}
              onClick={handleSort}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class={`size-6 text-blue-500 font-bold ${
                  sortProduct === item.value ? "text-blue-500" : "text-gray-500"
                }`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d={item.icon}
                />
              </svg>

              <span
                className={`text-sm text-blue-500 ${
                  sortProduct === item.value ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {item.lable}
              </span>
            </Button>
          ))}
        </div>
      </div>
      <div className="sm:hidden flex justify-between items-center my-5 border-t border-gray-300 py-3">
        {sortOptions.map((item, idx) => (
          <div
            key={item.value}
            onClick={() => setIsSort(item.value)}
            className={`flex items-center gap-1 px-4 cursor-pointer   ${
              sortProduct === item.value ? "text-primary " : "text-gray-500 "
            } ${idx !== 0 ? "border-l border-gray-300" : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={item.icon}
              />
            </svg>
            <span className="text-xs font-semibold">{item.sortLabel}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SortSection;
