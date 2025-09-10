import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Reveal({
  children,
  y = 20,
  delay = 0.3,
  once = true,
  threshold = 0.01,
  rootMargin = "0px 0px 0px 0px",
  className = "",
}) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold,
    rootMargin,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ y, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
