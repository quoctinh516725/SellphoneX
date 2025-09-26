import React from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";

const Payment = () => {
  return (
    <div className="w-full sm:max-w-[1200px] mx-auto bg-white rounded-lg shadow px-4 space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200 py-5">
        <div className="flex items-center justify-between">
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          <h3 className="text-2xl font-bold">Thanh toán</h3>
          <div></div>
        </div>
      </div>
      {/* Mã giảm giá */}
      <div className="border border-gray-200 rounded-lg p-6 space-y-3 shadow shadow-gray-300 ">
        {/* Bảng giá */}
        <div className="text-sm space-y-4">
          <div className="flex justify-between text-lg">
            <span>Số lượng sản phẩm</span>
            <span>01</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Tổng tiền hàng</span>
            <span>22.990.000₫</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Phí vận chuyển</span>
            <span className="text-green-600">Miễn phí</span>
          </div>
          <div className="space-y-4 border-y  text-lg text-red-500  border-gray-200 py-4">
            <div className="flex justify-between">
              <span>Giảm giá trực tiếp</span>
              <span>-4.100.000₫</span>
            </div>{" "}
            <div className="flex justify-between  ">
              <span>Giảm giá vocher </span>
              <span>-200.000₫</span>
            </div>
          </div>

          <div className="flex justify-between font-bold text-xl">
            <span>Tổng tiền</span>
            <span className="text-red-600">18.890.000₫</span>
          </div>
          <p className="text-sm text-gray-500">Đã gồm VAT và được làm tròn</p>
        </div>
      </div>
      {/* Thông tin thanh toán */}{" "}
      <h3 className="text-2xl font-semibold mt-10">THÔNG TIN THANH TOÁN</h3>
      <div className="border border-gray-300 shadow shadow-gray-300 rounded-lg p-4">
        <div className="flex items-center justify-between  border-red-400 rounded-lg p-3 cursor-pointer">
          <div className="flex items-center gap-3 ">
            <img src="/card.png" alt="payment" className="w-16 h-16" />
            <div className="flex flex-col">
              <span className="text-xl text-red-500 font-semibold">
                Chọn phương thức thanh toán
              </span>{" "}
            </div>
          </div>
          <span className="text-red-500 text-3xl font-bold">&gt;</span>
        </div>
      </div>
      {/* Thông tin nhận hàng */}{" "}
      <h3 className="text-2xl font-semibold mt-10">THÔNG TIN NHẬN HÀNG</h3>
      <div className="border border-gray-300 shadow shadow-gray-300 rounded-lg p-4 text-lg space-y-2">
        <p>
          <span className="font-bold">Khách hàng: </span> <span>Tính Quốc</span>
        </p>
        <p>
          <span className="font-bold">Số điện thoại: </span> 0362773313
        </p>
        <p>
          <span className="font-bold">Email: </span> kultivi1234@gmail.com
        </p>
        <p>
          <span className="font-bold">Nhận hàng tại: </span> 56D Phạm Thái
          Bường, Khóm 1, P.4, TP.Vĩnh Long
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-bold">Ghi chú: </span> Tư vấn 1 đổi 1 VIP 6
          tháng: Đổi máy mới tương đương khi có lỗi từ NSX trong 6 tháng
        </p>
      </div>
      {/* Điều khoản */}
      <div className="text-sm">
        <label className="flex items-start gap-2">
          <input type="checkbox" defaultChecked />
          <span>
            Bằng việc Đặt hàng, bạn đồng ý với{" "}
            <Link to="#" className="text-blue-600 underline">
              Điều khoản sử dụng
            </Link>{" "}
            của CellphoneS.
          </span>
        </label>
        <p className="text-xs text-gray-500 mt-1">
          Với các đơn giá trị từ 10 triệu trở lên, vui lòng xuất trình CCCD khi
          nhận hàng.
        </p>
      </div>
      {/* Footer */}
      <div className="py-5  space-y-5 sticky bottom-0 w-full  bg-white  ">
        <div className="flex justify-between">
          <p className="text-lg font-semibold sm:text-xl">
            Tổng tiền thanhh toán:
          </p>
          <p className="font-bold text-2xl text-primary"> 18.890.000đ</p>
        </div>

        <div className="flex justify-center">
          <button className="w-1/2 bg-primary font-semibold text-white px-6 py-3 rounded-sm text-nowrap cursor-pointer">
            Thanh toán
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Payment;
