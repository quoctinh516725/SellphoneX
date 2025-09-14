import { useState } from "react";
import { useInView } from "react-intersection-observer";

const ImageLazy = ({
  src,
  alt = "",
  className = "",
  height = 240,
  radius = "rounded-xl",
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px 320px 0px",
  });

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden ${radius} ${height}`}
    >
      {inView && !imageLoaded && (
        <div
          className={`w-full ${radius} animate-pulse  bg-gray-200 ${height}`}
        />
      )}

      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          className={`
              w-full ${height} ${radius} ${className}
              transition-opacity duration-500
              ${imageLoaded ? "opacity-100" : "opacity-0 absolute"}
            `}
        />
      )}
    </div>
  );
};

export default ImageLazy;
