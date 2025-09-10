import React, { useContext, useEffect, useState } from "react";
import { CarouselSale } from "../../../components/Carousel";
import { GlobalContext } from "../../../contexts/GlobalContext";

const SaleSection = ({products}) => {
  const [saleProducts, setSaleProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setSaleProducts(products.filter((p) => p.isSale).slice(0, 5));
    }
  }, [products]);

  return (
    <div className="w-full sm:w-[1200px] mx-auto mt-10">
      {/* Head */}
      <div className="relative w-full">
        <img
          className="w-[1150px] mx-auto"
          src="/sale-background.webp"
          alt=""
        />
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 ">
          <div className="relative">
            <img className="w-[300px]" src="/sale-title.webp" alt="" />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white">
              FLASHSALE
            </p>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="relative w-full bg-[#D3162A] rounded-4xl shadow-[inset_1px_1px_150px_white] p-4 pt-0 mt-3 border-b-5 border-gray-400/60 ">
        <img
          className="w-16 absolute top-0 -left-5 -rotate-45 "
          src="/gift-icon.webp"
          alt=""
        />
        <img
          className="w-20 absolute -top-5 -right-5 "
          src="/gift-icon.webp"
          alt=""
        />
        <div className="w-full rounded-3xl bg-[#D3162A] shadow-[inset_1px_0px_100px_white] border-b-5 border-white border-t-3 border-t-gray-400/60 p-4">
          <div className="flex items-center justify-between px-6">
            <div className="flex items-center gap-4 ">
              <div className=" px-6 py-2 bg-white rounded-full border-3 border-transparent">
                <span className="text-2xl font-bold text-[#D3162A]">
                  9h - 11h 06/09
                </span>
              </div>
              <div className=" px-6 py-2 bg-[#D3162A] rounded-full border-3 border-white">
                <span className="text-2xl font-bold text-white ">
                  9h - 11h 07/09
                </span>
              </div>
            </div>
            <div className="text-2xl font-bold text-white flex items-center gap-2">
              <span>BẮT ĐẦU SAU:</span>
              <p className="w-14 h-12 flex items-center justify-center bg-white rounded-xl text-black">
                01
              </p>
              <span>:</span>
              <p className="w-14 h-12 flex items-center justify-center bg-white rounded-xl text-black">
                01
              </p>
              <span>:</span>
              <p className="w-14 h-12 flex items-center justify-center bg-white rounded-xl text-black">
                01
              </p>
              <span>:</span>
              <p className="w-14 h-12 flex items-center justify-center bg-white rounded-xl text-black">
                01
              </p>
            </div>
          </div>

          {/* Cart Sale */}
          <div className="w-full mt-4">
            <CarouselSale items={saleProducts} />
          </div>

          {/* Footer Sale */}
          <p className="text-xl font-bold text-white mt-4 text-center">
            Chỉ áp dụng thanh toán online thành công — Mỗi SĐT chỉ được mua 1
            sản phẩm cùng loại
          </p>
        </div>
      </div>
    </div>
  );
};

export default SaleSection;
