import React from "react";
import { assets } from "../../../assets";
import SwiperComponent from "../../../components/SwiperComponent";

const Banner = () => {
  return (
    <div className="w-full sm:w-[1200px] mx-auto mt-3 px-4 sm:px-2">
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="w-full sm:w-2/3 relative">
          <SwiperComponent slidesPerView={1} children={assets.banner} />
        </div>

        <div className="w-full sm:w-1/3 flex flex-row sm:flex-col items-center justify-center gap-3">
          {assets.subBanner.map((item, idx) => (
            <img
              key={idx}
              className="w-1/2 sm:w-full rounded-lg"
              src={item}
              alt={`sub-banner-${idx}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-3">
        <img
          className="w-full rounded-lg h-10 sm:h-24"
          src={assets.specialBanner}
          alt="special-banner"
        />
      </div>
    </div>
  );
};

export default Banner;
