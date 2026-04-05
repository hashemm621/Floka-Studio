import React from 'react';
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import bannerVideo from '../../assets/hero.mp4';
import cardImg from '../../assets/heroimg.jpg';

const Banner = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const moveX = useTransform(mouseX, [0, 400], [-10, 10]);
  const moveY = useTransform(mouseY, [0, 400], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <div className="w-full bg-[#F4F4F4] px-4 pb-6 font-funnel">
      <div className="relative h-[70vh] md:h-[75vh] xl:h-screen w-full overflow-hidden rounded-[20px] shadow-lg">
        
        
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={bannerVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/20 to-transparent md:hidden"></div>

        <div className="absolute inset-0 z-10 "></div>

     
        <div className="relative gap-5 z-20 flex flex-col md:flex-row h-full items-start justify-end md:items-end md:justify-between p-7 lg:p-20">
          
        
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-white text-[80px] md:text-[120px] xl:text-[220px] font-medium leading-none tracking-tighter">
              Floka
            </h1>
            <p className="text-white/50 text-[42px] xl:text-[96px] font-medium -mt-5 lg:-mt-10 self-end">
              Studio
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-auto">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="bg-white p-2 rounded-3xl shadow-lg flex items-start gap-5  md:max-w-md relative overflow-hidden"
            >
              <div className="w-24 h-28 rounded-2xl overflow-hidden shrink-0">
                <motion.img
                  style={{ x: moveX, y: moveY, scale: 1.2 }} 
                  src={cardImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-5 pt-1">
                <div>
                  <p className="text-[10px] md:text-[11px] uppercase tracking-[1.5px] text-gray-400 font-bold mb-1">
                    Head of Idea
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">
                    Almond D. Neilsi
                  </h3>
                </div>

                <button className="flex items-center gap-2 group  cursor-pointer">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-90">
                    +
                  </div>
                  <span className="text-xs md:text-sm font-bold text-black uppercase tracking-wider">
                    Let's Talk
                  </span>
                </button>
              </div>
            </div>

            
            <div className="max-w-xs md:max-w-sm text-white"> 
               
              <p className="text-md md:text-base font-bold tracking-widest mb-2">
                No cookie-cutter websites. No fluff.
              </p>
              <p className="text-md opacity-80">
                Just real tools and smart strategies to grow your business and elevate your brand.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;