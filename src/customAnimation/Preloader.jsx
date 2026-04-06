import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2 }} // delay টা আপনার প্রয়োজন মতো সেট করুন
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
    >
      <div className="relative overflow-hidden flex flex-col items-center">
        
        <motion.h1 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold"
        >
          Floka Studio
        </motion.h1>
        
       
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-[2px] w-full bg-white mt-4 origin-left"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;