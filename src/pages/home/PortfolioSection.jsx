import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo3.jpg'
import image1 from '../../assets/car.jpg'
import image2 from '../../assets/women.jpg'
import image3 from '../../assets/cutting.png'
import image4 from '../../assets/run.jpg'
import image5 from '../../assets/light.png'

const portfolioItems = [
  { logo: logo, image: image1, tags: 'Branding, UX', title: 'ALDAN BRANDING', year: '2025' },
  { logo: logo, image: image2, tags: 'Branding, Module, Product, UX, Website', title: 'ALDAN BRANDING', year: '2025' },
  { logo: logo, image: image3, tags: 'Design, Fashion', title: 'ALDAN BRANDING', year: '2025' },
  { logo: logo, image: image4, tags: 'Branding, Product, UX', title: 'ALDAN BRANDING', year: '2025' },
  { logo: logo, image: image5, tags: 'Branding, Module, Product, UX', title: 'ALDAN BRANDING', year: '2025' }
];

const PortfolioSection = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-10 lg:px-24 font-funnel">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <p className='uppercase text-[10px] tracking-[0.2em] text-gray-400 font-bold mb-2'>portfolio</p>
        <hr className='text-gray-400 mb-10'/>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 leading-tight md:text-center">
          Strategy to build powerful <br className="hidden md:block" /> digital solutions.
        </h2>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index === 2 ? 'md:col-span-2' : ''}`}
            >
             
              <div className="relative overflow-hidden rounded-4xl bg-gray-50 group cursor-pointer h-[350px] md:h-[450px] lg:h-[500px]">
                
               
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                  whileHover={{ 
                    scale: 1.08, 
                    y: -10,
                    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } 
                  }}
                />

                
                <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <img src={item.logo} alt="Logo" className="h-6 w-auto object-contain brightness-0 invert opacity-80" />
                    
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </div>
                  </div>
                  
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-[10px] tracking-widest uppercase bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                      {item.tags || "View Project"}
                    </span>
                  </div>
                </div>
              </div>

              
              <div className="flex justify-between items-center mt-6 px-4">
                <h3 className="text-sm font-bold tracking-widest text-gray-800 uppercase">{item.title}</h3>
                <span className="text-sm text-gray-400 font-medium tracking-tighter">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;