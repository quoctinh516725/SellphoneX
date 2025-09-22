import { FormatPrice } from "../utils/FormatPrice";
import Reveal from "./Reveal";
import ImageLazy from "./ImageLazy";
import FormatRate from "../utils/FormatRate";
import { Link } from "react-router-dom";

const CardProduct = ({ item, i }) => {
  return (
    <Reveal delay={(i % 6) * 0.04}>
      <Link to={`/products/${item.id}`}>
        <div className="relative flex flex-col items-center p-2 rounded-xl bg-white shadow-xl ">
          <div className="absolute -top-1 left-2">
            <div className="relative">
              <img
                className="w-20 sm:w-24"
                src="/cart-product-icon-discount.webp"
                alt=""
              />
              <span className="text-xs  text-nowrap absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white">
                Giảm{" "}
                <span className="font-bold text-[12px] sm:text-sm">
                  {item.discount}%
                </span>
              </span>
            </div>
          </div>
          <div className="absolute top-1 -right-2">
            <div className="relative">
              <img
                className="w-18 sm:w-20"
                src="/cart-product-icon-right.webp"
                alt=""
              />
              <span className="text-xs sm:text-[12px] text-nowrap absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-blue-500">
                Trả góp{" "}
                <span className="font-bold text-[12px] sm:text-sm">0%</span>
              </span>
            </div>
          </div>
          <div className="w-full mt-8">
            <ImageLazy src={item.images} height={"h-[180px] sm:h-[200px]"} />
          </div>

          <p className="w-full text-sm sm:text-[14px] font-semibold mt-1  min-h-[40px] line-clamp-2">
            {item.name}
          </p>
          <div className="w-full flex flex-col sm:flex-row justify-start sm:items-center sm:gap-2">
            <p className="text-primary  sm:text-lg font-bold mt-1">
              {FormatPrice(item.price)}
            </p>
            <p className="text-gray-400 line-through text-xs sm:text-sm  mt-1">
              {FormatPrice(item.price_sale)}
            </p>
          </div>
          <div className="w-full bg-[#efe9fe] p-1 rounded-sm mt-1">
            <p className="text-[9px] sm:text-xs text-[#421d95] font-semibold">
              S-Student giảm thêm 300.000đ
            </p>
          </div>
          <div className="w-full bg-gray-100 p-1 rounded-sm mt-2">
            <p className="text-[11px] sm:text-xs text-black line-clamp-2">
              Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6
              tháng
            </p>
          </div>
          <div className="w-full flex items-center justify-between mt-5">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg text-black font-semibold">
                {FormatRate(item.rate)}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-500 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>

              <p className="text-sm sm:text-[14px] text-blue-500 font-semibold">
                Yêu thích
              </p>
            </div>
          </div>
        </div>{" "}
      </Link>
    </Reveal>
  );
};

export default CardProduct;
