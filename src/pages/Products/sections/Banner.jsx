import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { assets } from "../../../assets";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  className: "cursor-pointer space-x-5",
  arrows: false,
  responsive: [
    {
      breakpoint: 640, // < 640px (mobile)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Banner = () => {
  return (
    <div className="w-full mb-10">
      <Slider {...settings}>
        {assets.bannerProducts.map((item, idx) => (
          <div key={idx} className="px-2 sm:px-3">
            <img
              className="w-full h-20 rounded-lg shadow-[1px_1px_10px_gray] "
              src={item}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
