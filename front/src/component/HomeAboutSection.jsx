import React from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import g1 from '../assets/clinic.jpeg';

const HomeAboutSection = () => {
  return (
    <div className="py-12 px-4 sm:px-8 bg-[#F7EAD0]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center font-serif lg:space-x-16">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 xl:w-1/3 mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={g1}
            alt="Dr Harshita Patel"
            className="rounded-xl shadow-md object-cover w-full h-auto max-h-[500px]"
            data-aos="zoom-in"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 xl:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-center text-[#3e2015] mb-6" data-aos="zoom-in-down">
            About Dr. Tooth Smile Clinic
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed" data-aos="zoom-out-up">
            Welcome to <span className="font-bold text-[#3e2015] font-serif">Dr. Tooth Smile Clinic</span>, led by the renowned <span className="font-bold text-[#3e2015] font-serif">Dr. Harshita Patel </span>Our clinic is dedicated to offering high-quality dental care with a focus on personalized treatments, advanced technology, and a patient-first approach.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed" data-aos="zoom-out-up">
            Whether you're here for routine dental check-ups or advanced cosmetic procedures, Dr. Harshita Patel and her experienced team are committed to providing the best dental experience with a focus on your comfort and confidence.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed" data-aos="zoom-out-up">
            We invite you to visit us for a brighter, healthier smile that not only enhances your oral health but boosts your overall confidence.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
