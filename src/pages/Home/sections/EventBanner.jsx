import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { CarouselComponent } from "../../../components/Carousel";
import CardEvent from "../../../components/CardEvent";

const EventBanner = ({ items, title }) => {
  return (
    <div className="w-full sm:w-[1200px] mx-auto mt-5">
      <SectionTitle title={title} />
      <div className="w-full">
        <CarouselComponent items={items} cartItem={(item, index) => <CardEvent item={item} index={index} />} />
      </div>
    </div>
  );
};

export default EventBanner;
