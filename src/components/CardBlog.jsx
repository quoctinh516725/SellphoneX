import React from "react";
import { Link } from "react-router-dom";
import ImageLazy from "./ImageLazy";
import Reveal from "./Reveal";

const CardBlog = ({ item, i }) => {
  return (
    <Reveal delay={(i % 6) * 0.04}>
      <Link to={item.url}>
        <div className="shadow-xl">
          <ImageLazy
            src={item.banner}
            height={"h-[100px] sm:h-[120px]"}
            radius="rounded-t-xl rounded-b-0"
          />
          <div className="p-2">
            <p className="w-full text-sm sm:text-[14px] font-semibold mt-1  min-h-[40px] line-clamp-2">
              {item.name}
            </p>
          </div>
        </div>
      </Link>
    </Reveal>
  );
};

export default CardBlog;
