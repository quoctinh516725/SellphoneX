import React, { useState } from "react";
import { FormatPrice } from "../../../utils/FormatPrice";
import Title from "../../Products/sections/Title";
import { assets } from "../../../assets";
import SwiperComponent from "../../../components/SwiperComponent";
import SaleBox from "./SaleBox";
import ActionButton from "./ActionButton";
import PaymentOffets from "./PaymentOffets";
import FlashSale from "./FlashSale";
import Reveal from "../../../components/Reveal";
import OfferSection from "./OfferSection";
import WarrantySection from "./WarrantySection";

const ProductSumary = ({ product }) => {
  const [version, setVersion] = useState("");
  const [color, setColor] = useState("");
  const [selected, setSelected] = useState({
    version: "",
    color: "",
    warranty: "",
  });
  const handleSelect = (key, value) => {
    if (selected[key] === value) {
      setSelected({ ...selected, [key]: "" });
    } else {
      setSelected({ ...selected, [key]: value });
    }
  };

  const productData = {
    version: [256, 512],
    color: [
      { img: "/white-phone-icon.webp", label: "Trắng" },
      { img: "/black-phone-icon.webp", label: "Đen" },
    ],
  };
  return (
    <div className="w-full flex flex-col gap-5">
      {/* Giá sản phẩm */}
      {product.isSale ? (
        <FlashSale price={product.price} price_sale={product.price_sale} />
      ) : (
        <Reveal>
          <div className="w-full sm:w-2/3 border border-3 border-primary px-8 py-6 rounded-2xl">
            <h3 className="text-xl">Giá sản phẩm</h3>
            <div className="flex items-end gap-2 mt-2">
              <span className="text-3xl font-semibold ">
                {FormatPrice(product.price_sale)}
              </span>
              <span className="text-xl font-semibold text-gray-400 line-through ">
                {FormatPrice(product.price)}
              </span>
            </div>
          </div>
        </Reveal>
      )}

      {/* Phiên bản */}
      <div>
        <Reveal>
          <Title title={"Phiên bản"} />
          <div className="flex gap-3 px-3">
            {productData.version.map((item, idx) => (
              <p
                key={idx}
                onClick={() => handleSelect("version", item)}
                className={`px-5 py-2 border border-2 border-gray-300 rounded-lg cursor-pointer font-semibold ${
                  selected.version === item ? "border-primary text-primary " : ""
                }`}
              >
                {item} GB
              </p>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Màu sắc */}
      <div>
        <Reveal>
          <Title title={"Màu sắc"} />
          <div className="flex gap-3 px-3">
            {productData.color.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 border border-2 border-gray-300 px-4 py-2 rounded-xl cursor-pointer ${
                  selected.color === item.label ? "border-primary text-primary" : ""
                }`}
                onClick={() => handleSelect("color", item.label)}
              >
                <img className="w-8" src={item.img} alt="" />
                <p className="font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Banner */}
      <div className="w-full">
        <Reveal>
          {" "}
          <SwiperComponent slidesPerView={1} children={assets.phoneBanners} />
        </Reveal>
      </div>

      {/* Khuyến mãi */}
      <SaleBox />

      {/* Actions */}
      <ActionButton />

      {/* Ưu đãi khuyết mãi */}
      <PaymentOffets />

      {/* Bảo hành */}
      <WarrantySection
        product={product}
        warrantySelect={selected.warranty}
        handleSelect={handleSelect}
      />

      {/* Note chinh sua product */}
      {/* Phụ kiện mua cùng */}
      <OfferSection product={product} />
    </div>
  );
};

export default ProductSumary;
