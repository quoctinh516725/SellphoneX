import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { assets } from "../../../assets";
const Banner = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    className: "cursor-pointer",
  };
  return (
    <div className="w-full sm:w-[1200px] mx-auto mt-3 px-4 sm:px-2">
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="w-full sm:w-2/3">
          <Slider {...settings}>
            {assets.banner.map((item, idx) => (
              <div key={idx}>
                <img className="w-full rounded-lg" src={item} alt="" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full sm:w-1/3  flex flex-row sm:flex-col items-center justify-center gap-3">
          {assets.subBanner.map((item, idx) => (
            <img
              key={idx}
              className="w-1/2 sm:w-full rounded-lg"
              src={item}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="mt-3">
        <img className="w-full rounded-lg h-10 sm:h-24" src={assets.specialBanner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
