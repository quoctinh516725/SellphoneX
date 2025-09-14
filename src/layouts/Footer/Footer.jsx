import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-3 mt-10 px-2">
      <div className="w-full sm:max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-4 gap-4">
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
              Khiếu nại
              <span className="font-bold text-gray-700"> 1800.2097</span> (8h00
              - 21h30)
            </p>
          </div>
          <div>
            <h5 className="text-lg font-bold text-gray-700 mb-3">
              Phương thức thanh toán
            </h5>
            <div className="grid grid-cols-4 gap-2">
              <img loading="lazy" src="/vnpay-icon.webp" alt="" />
              <img loading="lazy" src="/momo_icon.webp" alt="" />
              <img loading="lazy" src="/zalopay-icon.webp" alt="" />
            </div>
          </div>
          <div>
            <h5 className=" font-bold text-gray-700 mb-3">
              ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI
            </h5>
            <div className="p-2 pl-4 bg-gray-200">
              <p className="text-xs text-red-500 font-semibold">
                Nhận ngay voucher 10%
              </p>
              <p className="text-xs text-gray-500 ">
                Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới
              </p>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-bold text-gray-700 mb-3">Email</h5>
            <Input placeholder={"Nhập email của bạn"} type={"email"} />
          </div>
          <div>
            <h5 className="text-lg font-bold text-gray-700 mb-3">
              Số điện thoại
            </h5>
            <Input placeholder={"Nhập số điện thoại của bạn"} type={"phone"} />
          </div>
          <Button
            children={"ĐĂNG KÝ NGAY"}
            className={"bg-primary flex justify-center hover:bg-primary/50"}
          />
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="text-lg font-bold text-gray-700 ">
            Thông tin và chính sách
          </h5>
          <ul>
            <li className="text-gray-500 cursor-pointer py-1">
              Mua hàng và thanh toán Online
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Mua hàng trả góp Online
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Mua hàng trả góp bằng thẻ tín dụng
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Chính sách giao hàng
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Chính sách đổi trả
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Tra điểm Smember
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Xem ưu đãi Smember
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Tra thông tin bảo hành
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Tra cứu hoá đơn điện tử
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Thông tin hoá đơn mua hàng
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Trung tâm bảo hành chính hãng
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Quy định về việc sao lưu dữ liệu
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Chính sách khui hộp sản phẩm Apple
            </li>
            <li className="text-gray-500 cursor-pointer py-1">VAT Refund</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="text-lg font-bold text-gray-700 ">
            Dịch vụ và thông tin khác
          </h5>
          <ul>
            <li className="text-gray-500 cursor-pointer py-1">
              Khách hàng doanh nghiệp (B2B)
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Ưu đãi thanh toán
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Quy chế hoạt động
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Chính sách bảo mật thông tin cá nhân
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Chính sách Bảo hành
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Liên hệ hợp tác kinh doanh
            </li>
            <li className="text-gray-500 cursor-pointer py-1">Tuyển dụng</li>
            <li className="text-gray-500 cursor-pointer py-1">
              Dịch vụ bảo hành mở rộng
            </li>
          </ul>
          <h5 className="text-lg font-bold text-gray-700 ">
            Mua sắm ưu đãi ngập tràn cùng SellphoneX
          </h5>
          <div className="flex justify-start gap-3">
            <img
              loading="lazy"
              src="./chplay-icon.webp"
              alt=""
              className="w-28"
            />
            <img
              loading="lazy"
              src="./appstore-icon.webp"
              alt=""
              className="w-28"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="text-lg font-bold text-gray-700 ">
            Kết nối với CellphoneS
          </h5>
          <div className="flex gap-3 mt-3">
            <img
              loading="lazy"
              src="./facebook-icon.webp"
              alt=""
              className="w-10"
            />
            <img
              loading="lazy"
              src="./youtube-icon.webp"
              alt=""
              className="w-10"
            />
            <img
              loading="lazy"
              src="./instagram-icon.webp"
              alt=""
              className="w-10"
            />
            <img
              loading="lazy"
              src="./tiktok-icon.webp"
              alt=""
              className="w-10"
            />
            <img
              loading="lazy"
              src="./zalo-icon.webp"
              alt=""
              className="w-10"
            />
          </div>
          <h5 className="text-lg font-bold text-gray-700 ">
            Website thành viên
          </h5>
          <ul>
            <li className="text-gray-500 cursor-pointer py-1">
              Hệ thống bảo hành và chăm sóc Điện thoại - Máy tính
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Trung tâm bảo hành uỷ quyền Apple
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Kênh thông tin giải trí công nghệ cho giới trẻ
            </li>
            <li className="text-gray-500 cursor-pointer py-1">
              Trang thông tin công nghệ mới nhất
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full sm:max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-4 gap-4 mt-3">
        <div className="flex justify-center flex-wrap gap-2  divide-x-2 divide-gray-700 font-bold">
          <h5 className="text-xs font-bold text-gray-700 px-2 ">
            Điện thoại iPhone 16
          </h5>
          <h5 className="text-xs font-bold text-gray-700 px-2 ">
            iPhone 15 Pro Max
          </h5>
          <h5 className="text-xs font-bold text-gray-700 px-2 ">iPhone 17</h5>
          <h5 className="text-xs font-bold text-gray-700 px-2 ">
            iPhone 7 Pro Max
          </h5>
        </div>
        <div className="flex justify-center flex-wrap gap-2  divide-x-2 divide-gray-700 font-bold">
          <h5 className="text-xs font-bold text-gray-700 px-2 ">Điện thoại</h5>
          <h5 className="text-xs font-bold text-gray-700 px-2 ">
            Điện thoại iPhone
          </h5>
          <h5 className="text-xs font-bold text-gray-700 px-2 ">iPhone 17</h5>
          <h5 className="text-xs font-bold text-gray-700 px-2 ">Xiaomi</h5>
          <h5 className="text-xs font-bold text-gray-700 px-2 ">
            Samsung Galaxy
          </h5>
        </div>
        <div className="flex justify-center flex-wrap gap-2  divide-x-2 divide-gray-700 font-bold">
          <h5 className="text-xs font-bold text-gray-700 px-2 ">Laptop</h5>
          <h5 className="text-xs font-bold text-gray-700 px-2 ">Laptop HP</h5>
          <h5 className="text-xs font-bold text-gray-700 px-2 ">iPhone 17</h5>
          <h5 className="text-xs font-bold text-gray-700 px-2 ">Laptop Dell</h5>
        </div>
        <div className="flex justify-center flex-wrap gap-2  divide-x-2 divide-gray-700 font-bold">
          <h5 className="text-xs font-bold text-gray-700 px-2 ">Tablet</h5>
          <h5 className="text-xs font-bold text-gray-700 px-2 ">
            Tablet Xiaomi
          </h5>
          <h5 className="text-xs font-bold text-gray-700 px-2 ">Tablet Air</h5>
          <h5 className="text-xs font-bold text-gray-700 px-2 ">
            Tablet Samsung
          </h5>
        </div>
      </div>
      <hr className="w-full sm:max-w-[1200px] mx-auto my-5 text-gray-500" />
      <div className="w-full sm:max-w-[1200px] mx-auto ">
        <p className="text-gray-500 text-center">
          © 2025 Bản quyền thuộc về @CellphoneS. Mọi quyền được bảo lưu.
        </p>
        <div className="flex items-center justify-center gap-3">
          <img  className="w-20" loading="lazy" src="/safe-icon.webp" alt="" />
          <img  className="w-20" loading="lazy" src="/dmca-icon.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
