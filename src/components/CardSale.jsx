import React from "react";
import { FormatPrice } from "../utils/FormatPrice";
import Reveal from "./Reveal";
import ImageLazy from "./ImageLazy";
import { Link } from "react-router-dom";

const CardSale = ({ item, i }) => {
  return (
    <Reveal delay={(i % 6) * 0.04}>
      <Link to={`/products/${item.id}`}>
        <div className="flex flex-col items-center justify-start p-2 rounded-xl bg-white">
          <ImageLazy src={item.images} height={"h-[200px] sm:h-[240px]"} />

          <p className="w-full text-sm sm:text-[14px] font-semibold mt-1 min-h-10 line-clamp-2">
            {item.name}
          </p>
          <div className="w-full flex flex-col sm:flex-row justify-start sm:items-center sm:gap-2">
            <p className="text-primary  text-lg font-bold mt-1">
              {FormatPrice(item.price)}
            </p>
            <p className="text-gray-400 line-through text-xs  mt-1">
              {FormatPrice(item.price_sale)}
            </p>
          </div>
          <div className="w-full bg-primary/30 rounded-full mt-2 ">
            <p className="text-center text-white font-semibold">
              Đã bán 0/10 suất
            </p>
          </div>
        </div>
      </Link>
    </Reveal>
  );
};

export default CardSale;
