import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left side */}
      <div className="hidden md:flex bg-white flex-col gap-2 justify-center items-center p-10">
        {/* Logo */}
        <div className="bg-primary px-4 py-2 rounded-sm">
          <Link className="flex items-center " to="/">
            <span className="text-2xl text-white logo-font ">Sellphone</span>
            <img
              className="w-12 sm:w-8 p-0.5 border border-white/30"
              src="/logo.png"
              alt=""
            />
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">
          Nhập hội khách hàng thành viên
          <span className="text-red-600"> Xmember</span>
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Để không bỏ lỡ các ưu đãi hấp dẫn từ SellphoneX
        </p>

        {/* Benefits */}
        <div className="relative">
          <ul className="space-y-3  text-gray-700  bg-gray-100 rounded-2xl px-20 py-10">
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-primary"
              >
                <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
              </svg>
              <p>
                Chiết khấu <b>đến 5%</b> khi mua sản phẩm
              </p>
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-primary"
              >
                <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
              </svg>{" "}
              <p>Miễn phí giao hàng cho thành viên</p>
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-primary"
              >
                <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
              </svg>
              <p>
                Tặng voucher sinh nhật <b>500.000đ</b>
              </p>
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-primary"
              >
                <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
              </svg>
              <p>
                Trợ giá thu cũ đổi mới <b>đến 1 triệu</b>
              </p>
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-primary"
              >
                <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
              </svg>
              <p>
                Thăng hạng nhận voucher <b>300.000đ</b>
              </p>
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-primary"
              >
                <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
              </svg>
              <p>
                Ưu đãi thêm <b>10%</b> cho S-Student / S-Teacher
              </p>
            </li>
          </ul>
          <div className="select-none pointer-events-none w-[70px] h-[70px] border-t-[6px] border-l-[6px] border-primary z-1 rounded-tl-[25px] bg-transparent absolute top-[-3px] left-[-3px]"></div>
          <div className="select-none pointer-events-none w-[70px] h-[70px] border-t-[6px] border-r-[6px] border-primary z-1 rounded-tr-[25px] bg-transparent absolute top-[-3px] right-[-3px]"></div>
          <div className="select-none pointer-events-none w-[70px] h-[70px] border-b-[6px] border-l-[6px] border-primary z-1 rounded-bl-[25px] bg-transparent absolute bottom-[-3px] left-[-3px]"></div>
          <div className="select-none pointer-events-none w-[70px] h-[70px] border-b-[6px] border-r-[6px] border-primary z-1 rounded-br-[25px] bg-transparent absolute bottom-[-3px] right-[-3px]"></div>
        </div>

        <img src="/login-pic.png" alt="Smember mascot" className="w-[280px]" />
      </div>

      {/* Right side */}
      <div className="flex flex-col justify-center items-center bg-gray-50 p-10">
        <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow">
          <div className="sm:hidden flex items-center justify-center gap-3 mb-6">
            <div className=" bg-primary px-2 py-1 rounded-sm ">
              <Link className="flex items-center " to="/">
                <span className="text-sm text-white logo-font ">Sellphone</span>
                <img
                  className="w-8 p-0.5 border border-white/30"
                  src="/logo.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center text-red-600 mb-6">
            Đăng nhập SMEMBER
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nhập email của bạn"
              className="w-full border border-gray-300 text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
            <input
              type="password"
              placeholder="Nhập mật khẩu của bạn"
              className="w-full border border-gray-300 text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700"
            >
              Đăng nhập
            </button>
          </form>

          <div className="text-right mt-2">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Quên mật khẩu?
            </Link>
          </div>

          <div className="my-4 flex items-center">
            <hr className="flex-1 text-gray-300" />
            <span className="px-2 text-gray-500 text-sm">
              Hoặc đăng nhập bằng{" "}
            </span>
            <hr className="flex-1 text-gray-300" />
          </div>

          {/* Social login */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center gap-2 justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100">
              <img src="/google-icon.svg" alt="" />
              <span>Google</span>
            </button>
            <button className="flex-1 flex items-center gap-2 justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100">
              <img src="/facebook-icon.png" alt="" className="w-7" />
              <span>Facebook</span>
            </button>
          </div>

          <p className="text-center text-sm mt-6">
            Bạn chưa có tài khoản?{" "}
            <Link to={"/register"} className="text-red-600 font-semibold">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
