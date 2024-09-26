import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";

const sections = [
  {
    title: "OUR MISSION",
    icon: <FaBullseye className="text-6xl text-[#3e2015]" />,
    description:
      "Our mission is to deliver top-tier dental treatments with exceptional care, ensuring safety through strict sterilization standards.",
  },
  {
    title: "OUR VISION",
    icon: <FaEye className="text-6xl text-[#3e2015]" />,
    description:
      "We strive to establish the largest dental hospital network in India, offering accessible and affordable dental care to all sections of society.",
  },
  {
    title: "OUR VALUES",
    icon: <FaHandshake className="text-6xl text-[#3e2015]" />,
    description:
      "Our core values include Trust, Safety, Dedication, and Compassion, ensuring every patient receives excellent, secure, and compassionate dental care.",
  },
];

const MissionVisionValues = () => {
  return (
    <section className="container mx-auto px-6 py-8 bg-[#F7EAD0]">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif font-extrabold text-[#3e2015] mb-4">
          Mission, Vision & Values
        </h1>
        <p className="text-[#3e2015] text-lg font-serif">
          Dedicated to offering the best dental care experience with a focus on compassion and professionalism.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/3 bg-white p-5 shadow-lg rounded-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <div className="flex items-center justify-center mb-6" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <div className="bg-[#F7EAD0] p-4 rounded-full">
                {section.icon}
              </div>
            </div>
            <h2 className="text-[#3e2015] font-serif font-semibold text-center text-xl mb-4">
              {section.title}
            </h2>
            <p className=" text-center text-[#3e2015] font-serif text-base">{section.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionVisionValues;
