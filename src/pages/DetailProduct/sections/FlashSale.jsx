import React from "react";
import Reveal from "../../../components/Reveal";

import { FormatPrice } from "../../../utils/FormatPrice";
const FlashSale = ({ price, price_sale }) => {
  return (
    <Reveal>
      {/* Head */}
      <div className="relative w-full">
        <img
          className="w-[500px] mx-auto"
          src="/sale-background.webp"
          alt=""
        />
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 ">
          <div className="relative">
            <img className="w-[200px]" src="/sale-title.webp" alt="" />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  sm:text-2xl font-bold text-white">
              FLASHSALE
            </p>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="relative w-full bg-[#D3162A] shadow-[inset_1px_1px_40px_white] rounded-2xl p-2 sm:p-2 pt-0 mt-1 border-b-5 border-gray-400/60 ">
        <img
          className="w-8 sm:w-10 absolute top-0 -left-3 -rotate-45 "
          src="/gift-icon.webp"
          alt=""
        />
       
        <div className="flex flex-col sm:flex-row items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-amber-200">
              {FormatPrice(price_sale)}
            </span>
            <span className="text-xl text-white line-through">
              {FormatPrice(price)}
            </span>
          </div>
          <div className="text-sm sm:text-2xl font-bold text-white flex flex-col  items-center sm:items-end gap-2">
            <span className="text-xs sm:text-sm font-bold text-white mt-5">
              BẮT ĐẦU SAU:
            </span>
            <div className="flex items-center gap-2">
              <p className="w-8 h-8 text-sm sm:text-xl flex items-center justify-center bg-white rounded-xl text-black">
                01
              </p>
              <span>:</span>
              <p className="w-8 h-8 text-sm sm:text-xl flex items-center justify-center bg-white rounded-xl text-black">
                01
              </p>
              <span>:</span>
              <p className="w-8 h-8 text-sm sm:text-xl flex items-center justify-center bg-white rounded-xl text-black">
                01
              </p>
              <span>:</span>
              <p className="w-8 h-8 text-sm sm:text-xl flex items-center justify-center bg-white rounded-xl text-black">
                01
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default FlashSale;
