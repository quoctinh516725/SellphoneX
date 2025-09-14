import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardSale from "./CardSale";
import CardProduct from "./CardProduct";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardEvent from "./CardEvent";
import CardBlog from "./CardBlog";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute hidden sm:block left-5 top-1/2 -translate-y-1/2  shadow-md rounded-full p-2 hover:opacity-100 transition z-10  cursor-pointer"
    >
      <ChevronLeft size={50} />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute hidden sm:block right-5 top-1/2 -translate-y-1/2   shadow-md rounded-full p-2 hover:opacity-100 transition z-10  cursor-pointer"
    >
      <ChevronRight size={50} />
    </button>
  );
};

const CarouselComponent = ({ items, cartItem }) => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      customTransition="all 1s"
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      {items.map((item, index) => (
        <div key={`product-${index}`} className="px-2 py-4">
          {cartItem(item, index)}
        </div>
      ))}
    </Carousel>
  );
};

export { CarouselComponent };
