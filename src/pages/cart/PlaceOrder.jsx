import React from "react";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  return (
    <div className="w-full sm:max-w-[1200px] mx-auto bg-white rounded-lg shadow px-4 space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 flex justify-between items-center py-3">
        <Link to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <h3 className="text-2xl font-bold">Thông tin thanh toán</h3>
        <div></div>
      </div>
      {/* Sản phẩm */}
      <h3 className="font-semibold text-xl">ĐƠN ĐẶT HÀNG</h3>
      <div className="flex gap-3 items-center  border border-gray-200  p-4 rounded-lg ">
        <img src="/productImg.webp" alt="iPhone 16" className="w-22 rounded" />
        <div className="flex-1">
          <p className="text-sm font-medium">
            iPhone 16 128GB | Chính hãng VN/A - Trắng
          </p>
          <div className="flex items-center gap-2">
            <span className="text-red-600 font-bold">18.890.000₫</span>
            <span className="line-through text-gray-400 text-sm">
              22.990.000₫
            </span>
          </div>
        </div>
        <span className="text-sm">Số lượng: 1</span>
      </div>
      {/* Thông tin khách hàng */}{" "}
      <h3 className="font-semibold text-xl">THÔNG TIN KHÁCH HÀNG</h3>
      <div className="space-y-2 border border-gray-100 bg-gray-50 p-4 rounded-lg">
        <div className="flex text-lg justify-between">
          <span className="font-bold text-black ">Tính Quốc</span>
          <p>
            <span className="font-bold text-black ">Email: </span>
            kultivi1234@gmail.com
          </p>
        </div>
        <p className="text-gray-600">
          <span className="text-lg text-gray-500 ">0362773313</span>
        </p>
      </div>
      {/* Thông tin nhận hàng */}{" "}
      <h3 className="font-semibold text-xl">THÔNG TIN NHẬN HÀNG</h3>
      <div className=" border  border-gray-200 p-6  shadow-xs shadow-gray-300">
        <div className="flex items-center gap-10">
          <div className="flex-1">
            <label for="">Tỉnh / Thành phố</label>
            <select className="w-full border-b border-gray-300 outline-none  py-2">
              <option>Đồng Tháp</option>
            </select>
          </div>
          <div className="flex-1">
            <label for="">Quận / Huyện</label>
            <select className="w-full border-b border-gray-300 outline-none  py-2">
              <option>Huyện Hồng Ngự</option>
            </select>
          </div>{" "}
          <div className="flex-1">
            <label for="">Phường / Xã</label>
            <select className="w-full border-b border-gray-300 outline-none  py-2">
              <option>Xã Phú Thuận B</option>
            </select>
          </div>
        </div>
        <div className="mt-5">
          <label for="">Địa chỉ chi tiết </label>
          <input
            type="text"
            className="w-full border-b border-gray-300 outline-none mt-2"
          />
        </div>
      </div>
      {/* Vocher */}
      <div className="flex justify-between items-center py-5 border-gray-500 mt-32">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-8 text-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
            />
          </svg>
          <p className="text-xl font-medium">CellPhoneS Vocher</p>
        </div>
        <p className="text-blue-700 font-semibold cursor-pointer">
          Chọn Vocher
        </p>
      </div>
      {/* Footer */}
      <div className="py-2 pb-5  space-y-5 sticky bottom-0 w-full  bg-white rounded-lg ">
        <div className="flex justify-between">
          <p className="text-lg font-semibold sm:text-xl">
            Tổng tiền tạm tính:{" "}
          </p>
          <p className="font-bold text-2xl text-primary"> 18.890.000đ</p>
        </div>

        <div className="flex justify-center">
          <button className="w-1/2 bg-primary font-semibold text-white px-6 py-3 rounded-sm text-nowrap cursor-pointer">
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
