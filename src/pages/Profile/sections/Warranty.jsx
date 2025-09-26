import React, { useState } from "react";
import FilterStatus from "../../../components/FilterStatus";

const Warranty = () => {
  const warrantyFilter = [
    { value: "all", label: "Tất cả" },
    { value: "confirmed", label: "Đã tiếp nhận" },
    { value: "processing", label: "Đang sửa" },
    { value: "completed", label: "Đã sửa xong" },
    { value: "canceled", label: "Đã hủy" },
  ];

  const [activeStatus, setActiveStatus] = useState("all");

  // Fake data tra cứu bảo hành (đã chỉnh lại status cho khớp filter)
  const warrantyData = [
    {
      id: "BH001",
      product: "iPhone 14 Pro Max 128GB",
      img: "/productImg.webp",
      customer: "Nguyễn Văn A",
      date: "2025-09-10",
      status: "confirmed",
    },
    {
      id: "BH002",
      product: "Samsung Galaxy S23 Ultra",
      img: "/productImg.webp",
      customer: "Trần Thị B",
      date: "2025-08-25",
      status: "processing",
    },
    {
      id: "BH003",
      product: "Xiaomi Redmi Note 13",
      img: "/productImg.webp",
      customer: "Phạm Văn C",
      date: "2025-08-20",
      status: "completed",
    },
    {
      id: "BH004",
      product: "Oppo Reno 11",
      img: "/productImg.webp",
      customer: "Lê Thị D",
      date: "2025-08-05",
      status: "canceled",
    },
  ];

  // Lọc theo trạng thái
  const filteredData =
    activeStatus === "all"
      ? warrantyData
      : warrantyData.filter((item) => item.status === activeStatus);

  // Badge màu theo trạng thái
  const statusColors = {
    confirmed: "bg-yellow-100 text-yellow-700",
    processing: "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700",
    canceled: "bg-red-100 text-red-700",
  };

  return (
    <div className="h-full space-y-5 shadow shadow-gray-500 rounded-xl p-4">
      {/* Bộ lọc trạng thái */}
      <FilterStatus
        filterItems={warrantyFilter}
        activeFilter={activeStatus}
        onClick={setActiveStatus}
      />

      <h3 className="font-bold text-xl">Tra cứu bảo hành</h3>

      {/* Danh sách bảo hành */}
      <div className="space-y-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg p-4 flex justify-between items-center"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.img}
                  alt={item.product}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold">{item.product}</p>
                  <p className="text-sm text-gray-500">
                    Mã BH:{" "}
                    <span className="font-semibold text-black">{item.id}</span>
                  </p>
                  <p className="text-sm text-gray-400">
                    Khách hàng:{" "}
                    <span className="font-semibold text-black">
                      {item.customer}
                    </span>
                  </p>
                  <p className="text-sm text-gray-400">
                    Ngày đăng ký:{" "}
                    <span className="font-semibold text-black">
                      {item.date}
                    </span>
                  </p>
                </div>
              </div>
              <span
                className={`min-w-[150px] flex justify-center px-3 py-1 rounded-full text-sm font-medium ${
                  statusColors[item.status] || "bg-gray-100 text-gray-600"
                }`}
              >
                {warrantyFilter.find((f) => f.value === item.status)?.label}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">Không có đơn bảo hành nào</p>
        )}
      </div>
    </div>
  );
};

export default Warranty;
