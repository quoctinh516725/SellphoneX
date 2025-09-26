import React from "react";
import { Link } from "react-router-dom";

const UserInfor = () => {
  return (
    <div className="h-[150px] bg-white p-4 rounded-xl shadow shadow-gray-300 flex items-center justify-between divide-x-6 divide-primary">
      <div className="h-full flex items-center gap-3 px-5">
        <div className="w-20 h-20 flex justify-center items-center bg-primary/20 rounded-full">
          <img
            src="/avatar.svg"
            alt="avatar"
            className="w-14 h-14 rounded-full"
          />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-xl">Tính Quốc</h3>
          <p className="text-lg text-gray-500">0362773313</p>
          <p className="text-lg font-semibold px-2 py-1 rounded-full inline bg-[linear-gradient(131deg,#f6f1f1_.22%,#dfd8d8_45.23%,#c8bebe_90.68%)]">
            S-NULL
          </p>
          <p className="text-lg text-gray-500">kultivi1234@gmail.com</p>
        </div>
      </div>{" "}
      <div className="h-full flex items-center gap-3 px-5">
        <div className="w-16 h-16 p-2 flex justify-center items-center bg-primary/20 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-10 text-primary"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-2xl">1</h3>
          <p className="text-lg text-gray-500">Tổng số đơn hàng đã mua</p>
        </div>
      </div>{" "}
      <div className="h-full flex items-center gap-3 px-5">
        <div className="w-16 h-16 p-2 flex justify-center items-center bg-primary/20 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-10 text-primary"
          >
            <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
          </svg>
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-2xl">0đ</h3>
          <p className="text-sm text-gray-500">
            Cần chi tiêu thêm{" "}
            <span className="font-bold text-black">3.000.000</span> để lên hạng{" "}
            <span className="font-bold text-nowrap text-black">S-NEW</span>
          </p>
        </div>
      </div>
      <div className="h-full flex items-center gap-3 px-5">
       <div className="p-2 bg-primary rounded-sm">
          <Link to="/">
            <img
              className="w-12 p-0.5 border border-white/30"
              src="/logo.png"
              alt=""
            />
          </Link>
       </div>{" "}
        <div className="space-y-1">
          <p className=" font-semibold text-red-500 ">CellphoneS Member</p>
          <p className="text-xs text-gray-400">Gia nhập từ 01/01/2024</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfor;
