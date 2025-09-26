import React from "react";
import Reveal from "../../../components/Reveal";
import Title from "../../Products/sections/Title";
import { useGetProductsQuery } from "../../../features/products/products.api";
import { CarouselComponent } from "../../../components/Carousel";
import CardProduct from "../../../components/CardProduct";
import Loading from "../../../components/Loading";

const FavouriteSection = ({ product }) => {
  const { data: products, isLoading } = useGetProductsQuery();
  const favouriteProducts = products
    ?.filter((p) => p.brand === product.brand)
    ?.splice(0, 5);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {favouriteProducts.length > 0 && (
        <Reveal>
          <Title title={"Có thể bạn cũng thích"} />
          <CarouselComponent
            items={favouriteProducts}
            cartItem={(item, index) => <CardProduct item={item} i={index} />}
          />
        </Reveal>
      )}
    </>
  );
};

export default FavouriteSection;
