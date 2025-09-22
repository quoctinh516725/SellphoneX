import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const SwiperComponent = ({ children, slidesPerView = 2, breakpoint = {} }) => {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#D3162A",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "0.5",
      }}
      modules={[Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={slidesPerView}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={1000}
      className="cursor-pointer rounded-lg"
      breakpoints={breakpoint}
    >
      {children.map((item, idx) => (
        <SwiperSlide key={idx}>
          <img src={item} alt={`banner-${idx}`} className="w-full rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
