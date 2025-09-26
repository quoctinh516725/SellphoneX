import React from "react";

const CartItem = ({ carts, select }) => {
  return (
    <div className="w-full  bg-white p-4 pl-8 rounded-xl shadow space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-3 relative">
        {/* Ảnh sản phẩm */}
        <div className="flex">
          <img
            src={carts.image}
            alt={carts.name}
            className="w-20 h-20 rounded-md object-cover"
          />

          {/* Thông tin sản phẩm */}
          <div className="flex-1">
            <p className="font-semibold">{carts.name}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-red-600 font-bold text-lg">
                {carts.price.toLocaleString()}₫
              </span>
              <span className="line-through text-gray-400 text-sm">
                {carts.oldPrice.toLocaleString()}₫
              </span>
            </div>
          </div>
        </div>

        {/* Nút xoá + số lượng */}
        <div className="flex items-center gap-2">
          <div className="w-full flex flex-row sm:flex-col items-end justify-between gap-3">
            {/* Icon xoá */}
            <button className="text-gray-600 hover:text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>

            {/* Số lượng */}
            <div className="flex items-center gap-4 ">
              <button className="w-8 h-8 bg-gray-100 rounded-xl hover:bg-gray-200 cursor-pointer text-2xl">
                -
              </button>
              <span>{carts.quantity}</span>
              <button className="w-8 h-8 bg-gray-100 rounded-xl hover:bg-gray-200 cursor-pointer text-2xl">
                +
              </button>
            </div>
          </div>
        </div>
        {/* Icon tick chọn sản phẩm */}
        {select && (
          <div className="absolute top-1 -left-6 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-primary border-white shadow shadow-primary rounded-full"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Khuyến mãi */}
      {carts.promotions?.length > 0 && (
        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-2 text-red-600 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-primary"
            >
              <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
            </svg>
            Khuyến mãi hấp dẫn
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            {carts.promotions.map((promo, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="w-4 h-4 p-2 flex items-center justify-center text-white bg-[linear-gradient(233.74deg,#eff5ff,#3b82f6_71.83%)] rounded-full"></span>
                <p className="text-gray-600">{promo}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Gói bảo hành */}
      {carts.warranty && (
        <div className="flex justify-between gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
          <div className="space-y-1">
            <h4 className="text-sm text-gray-600 font-bold">
              {carts.warranty.title}
            </h4>
            <p className="text-sm text-gray-600">{carts.warranty.desc}</p>
            <p className="text-lg font-medium text-primary">
              {carts.warranty.price.toLocaleString()}đ
            </p>
          </div>
          <div className="flex items-center">
            <p className="flex items-center gap-2 text-sm font-medium text-primary text-nowrap cursor-pointer">
              <span>Thay đổi</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </p>
          </div>
        </div>
      )}

      {/* Mua kèm */}
      {carts.combo && (
        <div className="rounded-lg border border-red-200">
          <p className="flex items-center gap-2 bg-red-50 p-3 text-red-600 font-semibold mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span>Mua kèm tiết kiệm hơn</span>
          </p>

          <div className="flex items-center justify-between py-2 border-b border-gray-300 p-3">
            <div className="flex items-center gap-3">
              <img src={carts.combo.image} alt="" className="w-12 h-12" />
              <div>
                <p className="text-sm">{carts.combo.title}</p>
                <span className="text-xs text-red-500 bg-red-100 px-2 rounded">
                  {carts.combo.discountText}
                </span>
              </div>
            </div>
            <button className="text-red-600 font-semibold">Chọn</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
