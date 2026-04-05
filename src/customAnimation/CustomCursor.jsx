import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  
  const cursorX = useSpring(0, { damping: 30, stiffness: 800, mass: 0.5 });
  const cursorY = useSpring(0, { damping: 30, stiffness: 800, mass: 0.5 });

  useEffect(() => {
    const moveMouse = (e) => {
     
      cursorX.set(e.clientX - (isHovering ? 30 : 16));
      cursorY.set(e.clientY - (isHovering ? 30 : 16));
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener("mousemove", moveMouse);
    
    
    const interactiveElements = document.querySelectorAll("a, button, .cursor-pointer");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, [isHovering, cursorX, cursorY]);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
     
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-9999 border border-black flex items-center justify-center transition-transform duration-100 ${
        isHovering ? "w-15 h-15 bg-black/10 border-none" : "w-8 h-8 bg-transparent"
      }`}
    >
      <div className={`rounded-full bg-black transition-all ${isHovering ? "w-1 h-1" : "w-1.5 h-1.5"}`} />
    </motion.div>
  );
};

export default CustomCursor;