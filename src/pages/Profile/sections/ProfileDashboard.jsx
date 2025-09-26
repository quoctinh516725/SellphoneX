import React from "react";
import OrderItem from "./OrdersSection";

const ProfileDashboard = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Đơn hàng gần đây */}
      <div className="bg-white rounded-xl shadow shadow-gray-500 p-4">
        <h2 className="text-lg font-semibold mb-4">Đơn hàng gần đây</h2>
        <OrderItem />
      </div>
      {/* Sản phẩm yêu thích */}
      <div className="bg-white rounded-lg shadow-md p-3 shadow-gray-500">
        <h2 className="text-lg font-semibold mb-4">Sản phẩm yêu thích</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {/* Sản phẩm 1 */}
          <div className="p-2 border border-gray-200 rounded-lg flex items-center gap-3">
            <img
              src="/productImg.webp"
              alt="iPhone 15"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="space-y-2">
              <p className="text-sm line-clamp-2 max-w-[250px] font-bold ">
                iPhone 15 256GB | Chính hãng VN
              </p>
              <div className="flex items-center gap-2">
                <p className="text-red-500 text-lg font-semibold">
                  18.390.000₫
                </p>
                <p className="text-gray-500 text-sm font-semibold line-through">
                  21.390.000₫
                </p>
              </div>
            </div>
            <span className="ml-auto text-blue-500 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </span>
          </div>
          {/* Sản phẩm 2 */}
          <div className="p-3 border border-gray-200 rounded-lg flex items-center gap-3">
            <img
              src="/productImg.webp"
              alt="iPhone 15"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="space-y-2">
              <p className="text-sm line-clamp-2 max-w-[250px] font-bold ">
                iPhone 15 256GB | Chính hãng VN
              </p>
              <div className="flex items-center gap-2">
                <p className="text-red-500 text-lg font-semibold">
                  18.390.000₫
                </p>
                <p className="text-gray-500 text-sm font-semibold line-through">
                  21.390.000₫
                </p>
              </div>
            </div>
            <span className="ml-auto text-blue-500 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </span>
          </div>
          <div className="p-3 border border-gray-200 rounded-lg flex items-center gap-3">
            <img
              src="/productImg.webp"
              alt="iPhone 15"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="space-y-2">
              <p className="text-sm line-clamp-2 max-w-[250px] font-bold ">
                iPhone 15 256GB | Chính hãng VN
              </p>
              <div className="flex items-center gap-2">
                <p className="text-red-500 text-lg font-semibold">
                  18.390.000₫
                </p>
                <p className="text-gray-500 text-sm font-semibold line-through">
                  21.390.000₫
                </p>
              </div>
            </div>
            <span className="ml-auto text-blue-500 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </span>
          </div>
          <div className="p-3 border border-gray-200 rounded-lg flex items-center gap-3">
            <img
              src="/productImg.webp"
              alt="iPhone 15"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="space-y-2">
              <p className="text-sm line-clamp-2 max-w-[250px] font-bold ">
                iPhone 15 256GB | Chính hãng VN
              </p>
              <div className="flex items-center gap-2">
                <p className="text-red-500 text-lg font-semibold">
                  18.390.000₫
                </p>
                <p className="text-gray-500 text-sm font-semibold line-through">
                  21.390.000₫
                </p>
              </div>
            </div>
            <span className="ml-auto text-blue-500 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/* Ưu đãi của bạn */}
      <div className="bg-white rounded-lg shadow-md p-4 shadow-gray-500 ">
        <h2 className="text-lg font-semibold mb-4 text-primary">
          Ưu đãi của bạn
        </h2>
        <div className="text-center">
          <div className="flex justify-center mb-5">
            <img src="/empty-vocher.png" className="w-[150px]" alt="" />
          </div>
          <p className="text-sm text-gray-500 mb-4">Bạn chưa có ưu đãi nào!</p>
          <button className="inline-flex items-center gap-1 bg-primary text-white text-sm px-4 py-2 rounded-md hover:bg-primary/90 transition">
            Xem sản phẩm
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
