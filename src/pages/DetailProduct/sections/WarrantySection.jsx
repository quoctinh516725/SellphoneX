import React from "react";
import Reveal from "../../../components/Reveal";
import { FormatPrice } from "../../../utils/FormatPrice";
const WarrantySection = ({ product, warrantySelect, handleSelect }) => {
  const warranties = [
    {
      name: "1 đổi 1 VIP 6 tháng: Đổi máy mới tương đương khi có lỗi từ NSX",
      price: 1100000,
    },
    {
      name: "1 đổi 1 VIP 12 tháng: Đổi máy mới tương đương khi có lỗi từ NSX",
      price: 1400000,
    },
    {
      name: "S24+ 12 tháng: Sửa chữa miễn phí linh kiện, tối đa 2 lần/năm",
      price: 1200000,
    },
    {
      name: "Rơi vỡ - vào nước 12 tháng: Hỗ trợ thay thế linh kiện chính hãng",
      price: 1800000,
    },
    {
      name: "Dịch vụ VIP 24 tháng: Đổi máy mới 1 lần + sửa chữa miễn phí 2 năm",
      price: 4199000,
    },
    {
      name: "Gói cơ bản 12 tháng: Bảo hành phần cứng tiêu chuẩn theo NSX",
      price: 1300000,
    },
  ];

  return (
    <Reveal>
      <div className="flex flex-col  gap-3 mt-3">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-10 text-primary"
          >
            <path
              fill-rule="evenodd"
              d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clip-rule="evenodd"
            />
          </svg>
          <h3 className="text-xl font-semibold">Chọn dịch vụ bảo hành</h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {warranties.map((warranty, index) => (
            <div
              key={index}
              className={`bg-gray-50 p-4 rounded-xl border border-3 cursor-pointer ${
                warrantySelect === warranty.name
                  ? " border-primary"
                  : " border-transparent"
              }`}
              onClick={() => handleSelect("warranty", warranty.name)}
            >
              <p className="text-gray-600 truncate">{warranty.name}</p>
              <p className="text-gray-800 font-semibold text-primary">
                {FormatPrice(warranty.price)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default WarrantySection;
