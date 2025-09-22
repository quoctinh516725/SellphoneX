import React from "react";
import Reveal from "../../../components/Reveal";

const ActionButton = () => {
  return (
    <Reveal>
      <div className="flex gap-2 mt-3">
        <button className="flex-1 border border-blue-500 text-blue-500 font-bold py-2 rounded-lg hover:bg-blue-50 cursor-pointer">
          Trả góp 0%
        </button>
        <button className="flex-2 flex flex-col items-center justify-center bg-[linear-gradient(180deg,#e45464_13%,#d70018)] text-white font-bold py-2 rounded-lg hover:bg-red-700 cursor-pointer">
          <span> MUA NGAY</span>
          <span className="text-xs"> Giao nhanh 2h hoặc nhận tại cửa hàng</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 border border-red-500 text-red-500 font-bold py-2 px-1 rounded-lg hover:bg-red-50 cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="6"
              cy="19"
              r="2"
              stroke="#D70018"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></circle>{" "}
            <circle
              cx="17"
              cy="19"
              r="2"
              stroke="#D70018"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></circle>{" "}
            <path
              d="M17 17H6V3H4"
              stroke="#D70018"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M6.07126 4.00254C5.52038 3.96319 5.0419 4.37786 5.00254 4.92874C4.96319 5.47962 5.37786 5.9581 5.92874 5.99746L6.07126 4.00254ZM11.9337 6.42646C12.4846 6.46581 12.9631 6.05114 13.0025 5.50026C13.0418 4.94938 12.6271 4.4709 12.0763 4.43154L11.9337 6.42646ZM20.1329 12.1438C20.2112 11.5971 19.8315 11.0904 19.2848 11.0121C18.7381 10.9338 18.2314 11.3135 18.1531 11.8602L20.1329 12.1438ZM19 13V14C19.4975 14 19.9193 13.6343 19.9899 13.1418L19 13ZM6 12C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14V12ZM5.92874 5.99746L11.9337 6.42646L12.0763 4.43154L6.07126 4.00254L5.92874 5.99746ZM18.1531 11.8602L18.0101 12.8582L19.9899 13.1418L20.1329 12.1438L18.1531 11.8602ZM19 12H6V14H19V12Z"
              fill="#D70018"
            ></path>{" "}
            <path
              d="M15 5C14.4477 5 14 5.44772 14 6C14 6.55228 14.4477 7 15 7V5ZM21 7C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5V7ZM19 3C19 2.44772 18.5523 2 18 2C17.4477 2 17 2.44772 17 3H19ZM17 9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9H17ZM15 7H21V5H15V7ZM17 3V9H19V3H17Z"
              fill="#D70018"
            ></path>
          </svg>
          <span className="">Thêm vào giỏ</span>
        </button>
      </div>
    </Reveal>
  );
};

export default ActionButton;
