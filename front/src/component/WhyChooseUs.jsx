import React from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import C5 from '../assets/WhyChooseUs/C5.png';
import C2 from '../assets/WhyChooseUs/C2.jpeg';
import C3 from '../assets/WhyChooseUs/C3.png';
import C4 from '../assets/WhyChooseUs/C4.png';

// Initialize AOS
AOS.init();

const features = [
  {
    image: C5,
    title: 'Advanced Dental Care',
    description: 'Experience cutting-edge dental services with the latest technology.',
  },
  {
    image: C2,
    title: 'Expert Dentists',
    description: 'Our skilled team brings years of experience to ensure exceptional care.',
  },
  {
    image: C3,
    title: 'Customized Treatments',
    description: 'We personalize our treatments to fit your unique dental needs.',
  },
  {
    image: C4,
    title: 'Hygiene & Safety First',
    description: 'We uphold the highest standards of safety and cleanliness for every patient.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 w-screen bg-[#F7EAD0]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-extrabold font-serif text-[#3e2015] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          Why Our Patients Smile
        </motion.h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              // data-aos="zoom-in"
            >
              {/* Image Section */}
              <div className="relative w-full h-48 overflow-hidden" data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-md hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold font-serif text-[#3e2015] mb-2">
                  {feature.title}
                </h3>
                <p className=" text-[#3e2015] font-serif">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <a
            href="/contact"
            className="inline-block font-serif bg-[#3e2015] text-[#F7EAD0] py-3 px-8 mt-3 border-2 border-white rounded-full font-semibold text-lg hover:scale-105 transition-colors duration-500"
          >
            Schedule Your Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
