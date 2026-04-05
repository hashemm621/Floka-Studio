import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RoundMenuIcon = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const dotPositions = [
    { x: 0, y: -8 },  
    { x: 7.5, y: -2.5 }, 
    { x: 4.5, y: 6.5 },  
    { x: -4.5, y: 6.5 }, 
    { x: -7.5, y: -2.5 }, 
  ];

  const dotVariants = {
    initial: { scale: 1 },
    hover: (i) => ({
      scale: [1, 1.5, 1], 
      transition: {
        duration: 0.6,
        repeat: Infinity,
        delay: i * 0.12, 
        ease: "easeInOut",
      },
    }),
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-10 w-10 flex items-center justify-center focus:outline-none cursor-pointer"
    >
      {dotPositions.map((pos, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={dotVariants}
          animate={isHovered ? "hover" : "initial"}
          style={{
            x: pos.x,
            y: pos.y,
          }}
          className="absolute h-1.5 w-1.5 bg-black rounded-full"
        />
      ))}
    </button>
  );
};

export default RoundMenuIcon;