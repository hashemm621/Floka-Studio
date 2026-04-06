import React from "react";
import { motion } from "framer-motion";

const InfiniteMarquee = () => {
  const marqueeText =
    "See how our team combines creativity, technology, and strategy to create unforgettable brand experiences. ";

  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 overflow-hidden py-10">
      <div className="absolute left-0 top-0 px-4 bottom-0 w-20 md:w-40 z-10 pointer-events-none bg-linear-to-r from-[#F5F5F5] to-transparent"></div>

      <div className="absolute right-0 top-0 px-4 bottom-0 w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-[#F5F5F5] to-transparent"></div>

      <motion.div
        className="flex whitespace-nowrap w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}>
        <span className="text-3xl text-gray-700 md:text-5xl font-bold stroke-[1.5px] leading-none px-4">
          {marqueeText}
        </span>
        <span className="text-3xl text-gray-700  md:text-5xl font-bold stroke-[1.5px] leading-none px-4">
          {marqueeText}
        </span>
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;
