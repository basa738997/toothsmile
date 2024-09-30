import React from "react";
import { motion } from "framer-motion";
import { FaTooth, FaTools, FaSmileBeam } from "react-icons/fa"; // Icons for dental treatments

const treatments = [
  {
    title: "Smile Designing",
    icon: <FaSmileBeam className="text-6xl text-[#3e2015]" />,
    description:
      "Smile Designing focuses on enhancing the appearance of your smile with customized dental treatments to your unique facial features.",
  },
  {
    title: "RCT (Root Canal Treatment)",
    icon: <FaTools className="text-6xl text-[#3e2015]" />,
    description:
      "Root Canal Treatment helps to repair and improve the appearance of your teeth and prevent cavities.",
  },
  {
    title: "Dental Implants",
    icon: <FaTooth className="text-6xl text-[#3e2015]" />,
    description:
      "Dental implants are a permanent solution to missing teeth, providing the function and appearance of natural teeth.",
  }
  
];

const DentalTreatments = () => {
  return (
    <section className="container w-screen mx-auto px-6 py-12 bg-[#F7EAD0]">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif font-extrabold text-[#3e2015] mb-4">
          Our Dental Treatments
        </h1>
        <p className="text-[#3e2015] text-lg font-serif">
          We offer a variety of specialized treatments to improve your dental health and enhance your smile.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        {treatments.map((treatment, index) => (
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
                {treatment.icon}
              </div>
            </div>
            <h2 className="text-[#3e2015] font-serif font-semibold text-center text-xl mb-4">
              {treatment.title}
            </h2>
            <p className="text-center text-[#3e2015] font-serif text-base">{treatment.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DentalTreatments;
