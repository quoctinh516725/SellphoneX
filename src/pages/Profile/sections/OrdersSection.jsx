import React from "react";

const OrderItem = () => {
  return (
    <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
      {/* Hình sản phẩm */}
      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src="/productImg.webp"
          alt="Xiaomi 14T Pro"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thông tin đơn hàng */}
      <div className="flex-1 px-4">
        <p className="text-sm">
          Đơn hàng: <span className="font-bold">#WNO303077476</span>
        </p>
        <p className="text-sm text-gray-500">Ngày đặt hàng: 29/07/2025</p>
        <p className="text-sm mt-1 font-bold">
          XIAOMI 14T PRO 5G 12GB 512GB ĐEN
        </p>
      </div>

      {/* Trạng thái + Tổng tiền */}
      <div className="flex flex-col items-end gap-2">
        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
          Đã hủy
        </span>
        <span className="text-sm font-semibold text-gray-500">
          Tổng thanh toán:{" "}
          <span className="text-xl text-primary">14.890.000₫</span>
        </span>
        <button className="text-sm text-blue-500 font-semibold cursor-pointer">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
