import SwiperComponent from "../../../components/SwiperComponent";

const Banner = ({ banners }) => {
  return (
    <div className="w-full mb-10">
      <SwiperComponent
        slidesPerView={1}
        children={banners}
        breakpoint={{
          640: {
            slidesPerView: 2,
          },
        }}
      />
    </div>
  );
};

export default Banner;
