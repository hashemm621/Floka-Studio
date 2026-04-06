import React from 'react';
import { motion } from 'framer-motion';
import brandLogo from '../../assets/brandLogo1.png'
import { div } from 'framer-motion/client';

const StatsSection = () => {


    const text = "Our approach is straightforward— prioritizing functionality, speed, and clarity for solutions.";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.5 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };
  return (
    <div className='max-w-7xl mx-auto py-20 px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8'>


        <div className="flex flex-col items-start gap-5">
      
      
      <div className="relative w-40 h-40 flex items-center justify-center">
        
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text fill="#000" className="text-[6px] text-gray-400 font-bold uppercase tracking-[2px]">
              <textPath xlinkHref="#circlePath">
                • luxurious • or more • want it to sound playful •
              </textPath>
            </text>
          </svg>
        </motion.div>

        
        <div className="z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
          <a href="#">
            <img src={brandLogo} alt="Brand Logo" />
          </a>
        </div>
      </div>

      <div className="max-w-75">
        <h2 className="text-[18px] font-medium leading-tight tracking-tight text-[#666666]">
          We design every project with long-term success in mind.
        </h2>
      </div>
    </div>

    <motion.h2 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='text-[36px] md:text-[48px] font-funnel text-[#0A0A0A] flex-1 leading-tight tracking-tighter flex flex-wrap'
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="mr-3 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};

export default StatsSection;