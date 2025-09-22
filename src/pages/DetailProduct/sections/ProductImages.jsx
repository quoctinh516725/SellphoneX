import { assets } from "../../../assets";
import { useState } from "react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Reveal from "../../../components/Reveal";

function ProductImages({ product }) {
  const images = assets.products[0].images;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
   <Reveal>
      <div className="slider-container">
        <Swiper
          style={{
            "--swiper-navigation-color": "#333",
            "--swiper-pagination-color": "#333",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mb-5 border border-gray-300 rounded-lg"
        >
          {images?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img
                className="w-full h-[300px] rounded-lg object-contain"
                src={item}
                alt={`product-${idx}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={6}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className=""
        >
          {images?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img
                className="rounded-xl p-3 border border-gray-300 cursor-pointer"
                src={item}
                alt={`product-${idx}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
   </Reveal>
  );
}

export default ProductImages;
