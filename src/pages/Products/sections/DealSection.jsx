import React from "react";
import { CarouselComponent } from "../../../components/Carousel";
import CardProduct from "../../../components/CardProduct";

const DealSection = ({ products }) => {
  return (
    <div className="py-4 bg-[linear-gradient(rgb(248,62,96),rgb(254,80,72))] rounded-2xl mt-5">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <img src="/hot-sale.gif" className="w-1/2" alt="" />
        <div className="text-sm sm:text-2xl font-bold text-white flex flex-col sm:flex-row items-center gap-2 mt-3 sm:mt-0 px-2">
          <span className="text-xl sm:text-xl font-bold text-white">
            KẾT THÚC SAU:
          </span>
          <div className="flex items-center gap-2">
            <p className="w-10 h-8 text-lg flex items-center justify-center bg-white rounded-xl text-black">
              01
            </p>
            <span>:</span>
            <p className="w-10 h-8 text-lg flex items-center justify-center bg-white rounded-xl text-black">
              01
            </p>
            <span>:</span>
            <p className="w-10 h-8 text-lg flex items-center justify-center bg-white rounded-xl text-black">
              01
            </p>
            <span>:</span>
            <p className="w-10 h-8 text-lg flex items-center justify-center bg-white rounded-xl text-black">
              01
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden mt-3">
        <CarouselComponent
          items={products}
          cartItem={(item, index) => <CardProduct item={item} i={index} />}
        />
      </div>
    </div>
  );
};

export default DealSection;
