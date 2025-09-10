import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Search from "../../components/Search";
import Modal from "../../components/Modal";
import Backdrop from "../../components/Backdrop";
import TopHeader from "./TopHeader";

const Header = () => {
  const [isOpen, setIsOpen] = useState({
    category: false,
    user: false,
  });
  const [search, setSearch] = useState("");

  // Check
  const isLogin = true;

  function handleOpen(e) {
    const clickedMenu = e.currentTarget.name;

    setIsOpen((prevState) => {
      const newState = {
        category: false,
        user: false,
      };

      if (!prevState[clickedMenu]) {
        newState[clickedMenu] = true;
      }

      return newState;
    });
  }

  function handleClose() {
    setIsOpen({
      category: false,
      user: false,
    });
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="bg-[linear-gradient(180deg,#e45464_13%,#d70018)]">
      <TopHeader />
      <header className="max-w-[1200px] mx-auto sticky top-0 z-50 ">
        <section className=" w-full   flex justify-between items-center px-2 sm:px-4 py-2 pb-4 gap-4">
          {/* Logo */}
          <div>
            <Link className="flex items-center " to="/">
              <span className="hidden lg:block text-2xl text-white logo-font ">
                Sellphone
              </span>
              <img
                className="w-12 sm:w-8 p-0.5 border border-white/30"
                src="/logo.png"
                alt=""
              />
            </Link>
          </div>

          <div className="flex sm:flex-row-reverse items-center gap-5  ">
            {/* Search */}
            <Search
              placeholder={"Bạn muốn mua gì?"}
              name={"search"}
              value={search}
              onChange={handleSearch}
              className={"sm:w-96 w-full"}
            />{" "}
            {/* Fillter */}
            <div className="hidden lg:flex relative  items-center gap-4 text-nowrap">
              <Button name={"category"} onClick={handleOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6h.008v.008H6V6Z"
                  />
                </svg>
                <span>Danh mục</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-6 duration-300 ${
                    isOpen.category ? "-rotate-90 " : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Button>

              <Modal isOpen={isOpen.category} onClose={handleClose}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                    <span className="text-sm">Điện thoại</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 ml-auto -rotate-90 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>

                    <span className="text-sm">Máy tính bảng</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 ml-auto -rotate-90 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <img className="size-6" src="/laptop-icon.svg" alt="" />
                    <span className="text-sm">Laptop</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 ml-auto -rotate-90 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <img className="size-6" src="/watch-icon.svg" alt="" />
                    <span className="text-sm">Đồng hồ</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 ml-auto -rotate-90 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          {/* Cart, Profile */}
          <div className="relative flex items-center gap-2 sm:gap-12">
            <Link to={"/cart"} className="flex items-center gap-2">
              <span className="hidden sm:block text-white">Giỏ hàng</span>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <span className="absolute border -top-2 -right-3 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </div>
            </Link>
            <Button
              className={"bg-transparent p-0"}
              name={"user"}
              onClick={isLogin ? handleOpen : () => {}}
            >
              {isLogin ? (
                <div className="flex items-center gap-2">
                  <span className="hidden sm:block">Quốc Tính</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10 sm:size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
              ) : (
                <Link to={"/login"}>Đăng nhập</Link>
              )}
            </Button>
            <Modal
              isOpen={isOpen.user}
              onClose={handleClose}
              className={"right-0"}
            >
              <div className="flex flex-col items-start gap-3 w-[350px]  min-h-[600px]">
                <Link
                  to={"/profile"}
                  className="w-full flex items-center gap-2 border border-primary rounded-xl p-1 hover:scale-95 transition-all duration-300"
                >
                  <img src="./member-icon.svg" alt="" />
                  <span className="text-primary">Truy cập Xmember</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 text-primary -rotate-90 ml-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Link>
                <span className="text-gray-500">Thông báo</span>
                <hr className="w-full text-gray-400" />

                <div className="flex-1 w-full flex flex-col items-center justify-center">
                  <img className="w-24" src="/empty-icon.svg" alt="" />
                  <p className="text-gray-800 font-semibold">
                    Bạn chưa có thông báo nào!
                  </p>
                  <p className="text-gray-500 text-sm text-center">
                    X-Admin sẽ gửi cho bạn những thông báo mới nhất tại đây nhé!
                  </p>
                </div>
                <hr className="w-full text-gray-400" />

                <p
                  onClick={handleClose}
                  className="w-full text-blue-500 font-semibold text-center cursor-pointer"
                >
                  Đóng
                </p>
              </div>
            </Modal>
          </div>
        </section>
      </header>
      <Backdrop isOpen={isOpen.category || isOpen.user} onClose={handleClose} />
    </div>
  );
};

export default Header;
