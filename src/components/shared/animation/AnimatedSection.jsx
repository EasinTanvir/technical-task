import React from "react";
import { motion } from "framer-motion";

const directionOffsets = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { y: 0, x: 40 },
  right: { y: 0, x: -40 },
  none: { y: 0, x: 0 },
};

const AnimatedSection = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  amount = 0.25,
  once = true,
  className = "",
  as = "div",
}) => {
  const offset = directionOffsets[direction] ?? directionOffsets.up;
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default AnimatedSection;
