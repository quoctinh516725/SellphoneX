import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
const cartData = [
  {
    id: 1,
    name: "Điện thoại Nubia A56 4GB 128GB - Đen",
    price: 2190000,
    oldPrice: 2390000,
    quantity: 1,
    image: "/productImg.webp",
    selected: true,
    promotions: [
      "Tặng combo 3 voucher tổng trị giá đến 2 triệu mua các sản phẩm tivi, gia dụng, đồng hồ trẻ em",
      "Tặng Sim/Esim VNSKY, có ngay 5GB data 5G/ngày, miễn phí 30 ngày đầu - chỉ áp dụng tại cửa hàng",
    ],
    warranty: {
      title: "Đã chọn gói bảo hành mở rộng",
      desc: "1 đổi 1 VIP 6 tháng: Đổi máy mới tương đương khi có lỗi từ NSX trong 6 tháng",
      price: 1100000,
    },
    combo: {
      title: "Mua kèm tai nghe - loa",
      discountText: "Giảm thêm 15%",
      image: "/productImg.webp",
    },
  },
  {
    id: 1,
    name: "Điện thoại Nubia A56 4GB 128GB - Đen",
    price: 2190000,
    oldPrice: 2390000,
    quantity: 1,
    image: "/productImg.webp",
    selected: true,
    promotions: [
      "Tặng combo 3 voucher tổng trị giá đến 2 triệu mua các sản phẩm tivi, gia dụng, đồng hồ trẻ em",
      "Tặng Sim/Esim VNSKY, có ngay 5GB data 5G/ngày, miễn phí 30 ngày đầu - chỉ áp dụng tại cửa hàng",
    ],
    warranty: {
      title: "Đã chọn gói bảo hành mở rộng",
      desc: "1 đổi 1 VIP 6 tháng: Đổi máy mới tương đương khi có lỗi từ NSX trong 6 tháng",
      price: 1100000,
    },
    combo: {
      title: "Mua kèm tai nghe - loa",
      discountText: "Giảm thêm 15%",
      image: "/productImg.webp",
    },
  },
  {
    id: 1,
    name: "Điện thoại Nubia A56 4GB 128GB - Đen",
    price: 2190000,
    oldPrice: 2390000,
    quantity: 1,
    image: "/productImg.webp",
    selected: true,
    promotions: [
      "Tặng combo 3 voucher tổng trị giá đến 2 triệu mua các sản phẩm tivi, gia dụng, đồng hồ trẻ em",
      "Tặng Sim/Esim VNSKY, có ngay 5GB data 5G/ngày, miễn phí 30 ngày đầu - chỉ áp dụng tại cửa hàng",
    ],
    warranty: {
      title: "Đã chọn gói bảo hành mở rộng",
      desc: "1 đổi 1 VIP 6 tháng: Đổi máy mới tương đương khi có lỗi từ NSX trong 6 tháng",
      price: 1100000,
    },
    combo: {
      title: "Mua kèm tai nghe - loa",
      discountText: "Giảm thêm 15%",
      image: "/productImg.webp",
    },
  },
];

const Cart = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [select, setSelect] = useState([]);
  return (
    <div className="w-full  sm:max-w-[1200px] px-4 mx-auto">
      <div className="border-b border-gray-200 flex justify-between items-center py-3">
        <Link to="/">
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
        <h3 className="text-2xl font-bold">Giỏ hàng của bạn</h3>
        <div></div>
      </div>
      <div className=" flex items-center  gap-2 text-lg my-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`size-6  border-white shadow rounded-full ${
            selectAll
              ? " text-primary shadow-primary"
              : "text-white shadow-gray-400"
          }`}
          onClick={() => setSelectAll(!selectAll)}
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clip-rule="evenodd"
          />
        </svg>
        <p className="font-medium">Chọn tất cả</p>
      </div>
      <div className="space-y-6">
        {cartData.map((item) => (
          <CartItem key={item.id} carts={item} select={item.selected} />
        ))}
      </div>
      <div className="sm:p-4 py-2  flex justify-between sticky bottom-0 w-full shadow shadow-gray-300 bg-white rounded-lg mt-5">
        <div className="">
          <p className="text-lg sm:text-xl">
            Tạm tính: <span className="font-bold text-primary"> 18.890.000đ</span>
          </p>
          <p className="mt-1 text-sm sm:text-lg">
            Tiết kiệm:   
            <span className="font-semibold text-blue-500 "> 2.100.000đ</span>
          </p>
        </div>
       <div>
          <button className="bg-primary font-semibold text-white px-6 py-3 rounded-sm text-nowrap cursor-pointer">
            Mua ngay (1)
          </button>
       </div>
      </div>
    </div>
  );
};

export default Cart;
