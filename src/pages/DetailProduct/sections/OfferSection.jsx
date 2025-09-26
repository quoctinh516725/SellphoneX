import React from "react";
import { useGetProductsQuery } from "../../../features/products/products.api";
import { Link } from "react-router-dom";
import Title from "../../Products/sections/Title";
import Loading from "../../../components/Loading";
import Reveal from "../../../components/Reveal";
import { FormatPrice } from "../../../utils/FormatPrice";

const OfferSection = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const offerProducts = products
    ?.filter((p) => p.category === "headphone")
    ?.splice(0, 4);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Reveal>
      <div className="mb-5 bg-amber-100 px-5 py-4 flex items-center gap-5 rounded-xl">
        <img src="/fire-icon.gif" className="w-10 " alt="" />
        <h3 className="text-3xl font-bold mt-2 text-amber-500">
          Phụ kiện mua kèm
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-5 ">
        {offerProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            className="flex gap-5"
            key={product.id}
          >
            <img src={product.images} alt="" className="w-20 rounded-sm" />
            <div className="max-w-40">
              <p className="text-sm truncate">{product.name}</p>
              <p className="text-lg font-semibold text-primary">
                {FormatPrice(product.price_sale)}đ
              </p>{" "}
              <p className="text-sm line-through">
                {FormatPrice(product.price)}đ
              </p>{" "}
            </div>
          </Link>
        ))}
      </div>
    </Reveal>
  );
};

export default OfferSection;
