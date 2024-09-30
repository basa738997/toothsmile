import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import A1 from '../assets/Images/A1.png';
import A2 from '../assets/Images/A2.png';
import A3 from '../assets/Images/A3.png';
import cara from '../assets/Images/CaraSoul1.jpg'
// import cara2 from '../assets/Images/Carasoul2.jpg'

import { motion } from 'framer-motion';

const CaraSoul = () => {
  const slides = [
    { id: 0, srcimg: cara, alt: '', title: '', utitle: " ", subtitle: " ", meta: " "},
    // { id: 1, srcimg: cara, alt: '', title: '', utitle: "", subtitle: '', meta: '' }
    // { id: 2, srcimg: A1, alt: 'Expert Dental Care', title: 'Dr Tooth Smile Clinic', utitle: "Welcome to", subtitle: "Advanced dental care", meta: " Smile designing | Teeth whitening | Implant | RCT | Crown | dental clinic"},
    // { id: 3, srcimg: A1, alt: 'Holistic Healing', title: 'Dr. Harshita Patel', utitle: "", subtitle: 'Expert Dental Care', meta: 'Smile designing | Teeth whitening | Implant | RCT | Crown | dental clinic | doctor | bhilai' },

    
  ];

  return (
    <div className="w-screen h-full relative overflow-hidden bg-[#F7EAD0]">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}  // Adjusted interval for smoother transitions
        className="h-full"
      >
        {slides.map(slide => (
          <motion.div
            key={slide.id}
            className="relative w-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <img src={slide.srcimg} alt={slide.alt} className="w-screen h-full object-cover" />
            {/* <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-10 text-white text-center p-5"> */}
            <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-10 text-white text-center p-5">
              <motion.h1
                className="text-2xl md:text-3xl font-bold font-serif mx-6 capitalize text-black"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {slide.utitle}
              </motion.h1>
              <motion.h1
                className="text-4xl md:text-4xl my-3 font-bold mx-6 capitalize font-serif text-black"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {slide.title}
              </motion.h1>
              <motion.h3
                className="text-sm md:text-lg text-center font-bold font-serif capitalize text-black mx-6 md:mx-12 mt-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {slide.subtitle}
              </motion.h3>
              <motion.h3
                className="text-sm md:text-lg text-center font-bold font-serif capitalize text-black mx-6 md:mx-12 mt-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {slide.meta}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default CaraSoul;