import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { CarouselEvent } from "../../../components/Carousel";

const EventBanner = ({ items, title }) => {
  return (
    <div className="w-full sm:w-[1200px] mx-auto mt-5">
      <SectionTitle title={title} />
      <div className="w-full">
        <CarouselEvent items={items} />
      </div>
    </div>
  );
};

export default EventBanner;
