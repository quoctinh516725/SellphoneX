import React, { useState } from "react";
import OrderItem from "./OrdersSection";
import FilterStatus from "../../../components/FilterStatus";

const Orders = () => {
  const orderStatus = [
    { value: "all", label: "Tất cả" },
    { value: "pending", label: "Chờ xử lý" },
    { value: "confirmed", label: "Đã xác nhận" },
    { value: "shipping", label: "Đang giao" },
    { value: "completed", label: "Đã hoàn thành" },
    { value: "canceled", label: "Đã hủy" },
  ];

  // state lưu trạng thái hiện tại
  const [activeStatus, setActiveStatus] = useState("all");

  return (
    <div className="h-full space-y-5 shadow shadow-gray-500 rounded-xl p-4">
      <FilterStatus filterItems={orderStatus} activeFilter={activeStatus} onClick={setActiveStatus} />
      <h3 className="font-bold text-xl">Lịch sử mua hàng</h3>
      <div className="space-y-4">
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </div>
  );
};

export default Orders;
