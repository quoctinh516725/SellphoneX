import SectionTitle from "../../../components/SectionTitle";
import { CarouselComponent } from "../../../components/Carousel";
import CardProduct from "../../../components/CardProduct";

const ProductSection = ({ products, title, category, brands }) => {
  const filteredProducts = products
    .filter((p) => p.category?.toLowerCase() === category)
    .slice(0, 5);

  return (
    <div className="w-full min-h-[300px] sm:w-[1200px] mx-auto mt-10 px-4 sm:px-1">
      <SectionTitle title={title} brands={brands} />
      <div className="w-full mt-4 ">
        <CarouselComponent
          items={filteredProducts}
          cartItem={(item, index) => <CardProduct item={item} i={index} />}
        />
      </div>
    </div>
  );
};

export default ProductSection;
