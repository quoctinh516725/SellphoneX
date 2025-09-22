import React from "react";
import Reveal from "../../../components/Reveal";

const PaymentOffets = () => {
  const offers = [
    {
      bank: "Kredivo",
      img: "/kredivo-icon.webp",
      desc: "Giảm đến 5.000.000đ khi thanh toán qua Kredivo",
    },
    {
      bank: "HSBC",
      img: "/hsbc_icon.webp",
      desc: "Hoàn tiền đến 2 triệu khi mở thẻ tín dụng HSBC",
    },
    {
      bank: "ACB",
      img: "/acb-icon.webp",
      desc: "Giảm 1 triệu khi thanh toán qua thẻ tín dụng ACB",
    },
    {
      bank: "VIB",
      img: "/vib-icon.webp",
      desc: "Mở thẻ VIB nhận E-Voucher 6 triệu",
    },
    {
      bank: "HSBC",
      img: "/hsbc_icon.webp",
      desc: "Giảm đến 500k khi thanh toán qua thẻ tín dụng HSBC",
    },
    {
      bank: "VNPay",
      img: "/vnpay-icon.webp",
      desc: "Giảm 300k khi thanh toán qua VNPAY-QR",
    },
    {
      bank: "MOMO",
      img: "/momo_icon.webp",
      desc: "Giảm thêm khi thanh toán bằng ví MOMO",
    },
  ];

  return (
    <Reveal>
      <div className="bg-white border border-primary rounded-xl p-5 shadow-sm mt-3">
        <div className=" flex items-center gap-3 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6 text-primary"
          >
            <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
          </svg>

          <h3 className="font-bold text-lg text-primary">Ưu đãi thanh toán</h3>
        </div>
        <ul className="space-y-1 text-sm text-gray-700">
          {offers.map((offer, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 text-green-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>

              <img className="w-6" src={offer.img} alt="" />
              <span>{offer.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};

export default PaymentOffets;
