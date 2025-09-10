import React, { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { CarouselProduct } from "../../../components/Carousel";

const ProductSection = ({ products, title, category, brands }) => {
  const filteredProducts = products
    .filter((p) => p.category?.toLowerCase() === category)
    .slice(0, 5);

  return (
    <div className="w-full sm:w-[1200px] mx-auto mt-10">
      <SectionTitle title={title} brands={brands} />
      <div className="w-full mt-4 ">
        <CarouselProduct items={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductSection;
