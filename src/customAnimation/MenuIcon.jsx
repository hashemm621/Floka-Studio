import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MenuIcon = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const lineVariants = {
    initial: { 
      width: 30, 
      height: 2, 
      x: 0,
    },
    hover: (i) => ({
      width: 14, 
      height: 2, 
      transition: {
        duration: 0.3,
        delay: i * 0.05, 
        ease: [0.215, 0.61, 0.355, 1], 
      },
    }),
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col justify-center items-end gap-1.5 p-1 focus:outline-none cursor-pointer h-10 w-10 overflow-visible"
    >
      {[0, 1, 2].map((index) => (
        <motion.span
          key={index}
          custom={index}
          variants={lineVariants}
          animate={isHovered ? "hover" : "initial"}
          className="bg-black block origin-right rounded-full" 
        />
      ))}
    </button>
  );
};

export default MenuIcon;