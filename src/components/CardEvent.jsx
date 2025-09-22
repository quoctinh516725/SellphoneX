import React from "react";
import { Link } from "react-router-dom";
import ImageLazy from "./ImageLazy";
import Reveal from "./Reveal";

const CardEvent = ({ item, i }) => {
  return (
    <Reveal delay={(i % 6) * 0.04}>
        <div className="shadow-xl">
          <Link to={item.url}>
            <ImageLazy src={item.banner} height={"h-[100px] sm:h-[120px]"} />
          </Link>
        </div>
    </Reveal>
  );
};

export default CardEvent;
