import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-3 mt-10">
      <div className="w-full sm:max-w-[1200px] mx-auto grid grid-cols-4 gap-4">
        <div className="flex flex-col gap-3">
          <div>
            <h5 className="text-lg font-bold text-gray-700 mb-3">
              Tổng đài hỗ trợ miễn phí
            </h5>
            <p className="text-md text-gray-500">
              Mua hàng - bảo hành
              <span className="font-bold text-gray-700"> 1800.2097 </span> (7h30
              - 22h00)
            </p>
            <p className="text-md text-gray-500">
              Khiếu nại 1800.2063
              <span className="font-bold text-gray-700"> 1800.2097</span> (8h00
              - 21h30)
            </p>
          </div>
          <div>
            <h5 className="text-lg font-bold text-gray-700 mb-3">
              Phương thức thanh toán
            </h5>
            <div className="grid grid-cols-4 gap-2">
              <img src="/vnpay-icon.webp" alt="" />
              <img src="/momo_icon.webp" alt="" />
              <img src="/zalopay-icon.webp" alt="" />
            </div>
          </div>
          <div>
            <h5 className="text-lg font-bold text-gray-700 mb-3">
              ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI
            </h5>
            <div className="grid grid-cols-4 gap-2">
              <img src="/vnpay-icon.webp" alt="" />
              <img src="/momo_icon.webp" alt="" />
              <img src="/zalopay-icon.webp" alt="" />
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-lg font-bold text-gray-700 ">
            Thông tin và chính sách
          </h5>
        </div>
        <div>
          <h5 className="text-lg font-bold text-gray-700 ">
            Dịch vụ và thông tin khác
          </h5>
        </div>
        <div>
          <h5 className="text-lg font-bold text-gray-700 ">
            Kết nối với CellphoneS
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
