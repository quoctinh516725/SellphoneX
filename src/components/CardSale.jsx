import React from "react";
import { FormatPrice } from "../utils/FormatPrice";
import Reveal from "./Reveal";
import ImageLazy from "./ImageLazy";

const CardSale = ({ item, i }) => {
  return (
    <Reveal delay={(i % 6) * 0.04}>
      <div className="flex flex-col items-center justify-start p-2 rounded-xl bg-white">
        <ImageLazy src={item.images} />

        <p className="w-full text-xl font-semibold mt-1 h-20 line-clamp-2">
          {item.name}
        </p>
        <div className="w-full flex justify-start items-center gap-3">
          <p className="text-primary  text-lg font-bold mt-1">
            {FormatPrice(item.price)}
          </p>
          <p className="text-gray-400 line-through text-sm  mt-1">
            {FormatPrice(item.price_sale)}
          </p>
        </div>
        <div className="w-full bg-primary/30 rounded-full mt-2 ">
          <p className="text-center text-white font-semibold">
            Đã bán 0/10 suất
          </p>
        </div>
      </div>
    </Reveal>
  );
};

export default CardSale;
