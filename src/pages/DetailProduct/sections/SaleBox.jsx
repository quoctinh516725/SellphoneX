import React from "react";
import Reveal from "../../../components/Reveal";

const SaleBox = () => {
  const promotions = [
    "Tặng combo 3 voucher tổng trị giá đến 2 triệu ",
    "Đặc quyền trị giá 1 triệu đồng khi lên đời iPhone",
    "Trả góp 0% lãi suất, trả trước từ 15%, áp dụng thẻ tín dụng",
    "Giảm ngay 5% tối đa 500k mua Apple Watch khi mua iPhone",
    "Tặng Sim/Esim VNSKY, 5GB/ngày miễn phí 30 ngày",
  ];

  return (
    <Reveal>
      <div className="bg-white border border-blue-500 rounded-xl p-5 shadow-sm">
        <div className=" flex items-center gap-3 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6 text-primary"
          >
            <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
          </svg>
  
          <h3 className="font-bold text-lg text-primary">Khuyến mãi hấp dẫn</h3>
        </div>
        <ul className="space-y-1 text-sm text-gray-700">
          {promotions.map((item, idx) => (
            <li key={idx}>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center text-white bg-[linear-gradient(233.74deg,#eff5ff,#3b82f6_71.83%)] rounded-full">
                  {idx + 1}
                </span>
                <p>
                  {item}
                  <a href="#" className="text-blue-600 hover:underline text-xs">
                    Xem chi tiết
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
  
        {/* Flash Sale */}
        <div className="bg-blue-100 border border-blue-300 text-blue-700 rounded-md p-2 text-sm mt-3">
          <b>Flash Sale Back To School</b> Thanh toán
          online 100% để được lựa chọn một phụ kiện tặng kèm. Giao đơn trong 24h.
        </div>
      </div>
    </Reveal>
  );
};

export default SaleBox;
