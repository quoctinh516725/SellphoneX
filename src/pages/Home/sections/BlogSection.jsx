import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { CarouselComponent } from "../../../components/Carousel";
import CardBlog from "../../../components/CardBlog";

const BlogSection = ({ items, title }) => {
  return (
    <div className="w-full sm:w-[1200px] mx-auto mt-5">
      <SectionTitle title={title} />
      <div className="w-full">
        <CarouselComponent
          items={items}
          cartItem={(item, index) => <CardBlog item={item} index={index} />}
        />
      </div>
    </div>
  );
};

export default BlogSection;
