// import React from "react";
// import {
//   FaHandsHelping,
//   FaTooth,
//   FaSmile,
//   FaChartLine,
//   FaGlobe,
//   FaLightbulb,
// } from "react-icons/fa";
// import { motion } from "framer-motion"; // Import Framer Motion
// import vision from "../assets/Images/vision.png";
// import D2 from "../assets/Images/D2.jpg";
// import "../index.css"; // Import custom CSS

// const MissionAndVisionPage = () => {
//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const hoverEffect = {
//     scale: 1.1,
//     transition: { duration: 0.3 },
//   };

//   return (
//     <div className="bg-gradient-to-r from-blue-100 to-blue-50 min-h-screen p-5 overflow-hidden">
//       <div className="container mx-auto py-8">

//         {/* Mission Section */}
//         <motion.section
//           className="bg-white shadow-lg rounded-lg p-8 mb-12"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={fadeInUp}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//         >
//           <div className="flex flex-col md:flex-row items-center">
//             <motion.div
//               className="md:w-1/2 mb-6 md:mb-0"
//               whileHover={hoverEffect}
//             >
//               <img
//                 src={D2}
//                 alt="Dental Care"
//                 className="w-full rounded-lg shadow-lg transform transition-transform duration-300"
//               />
//             </motion.div>
//             <div className="md:w-1/2 md:pl-12 text-center md:text-left">
//               <h2 className="text-4xl font-extrabold mb-4 text-[#3e2015] font-serif">
//                 Our Mission: Your Smile, Our Priority
//               </h2>
//               <p className="text-lg mb-6 leading-relaxed text-gray-700 font-light font-sans">
//                 At Dr Tooth Smile Clinic, our mission is to provide exceptional dental care with a personal touch. We aim to make every visit a comfortable experience, ensuring our patients leave with healthier, more beautiful smiles.
//               </p>
//               <div className="flex justify-center md:justify-start space-x-6">
//                 {[
//                   { icon: <FaHandsHelping />, label: "Compassionate Care" },
//                   { icon: <FaTooth />, label: "Dental Expertise" },
//                   { icon: <FaSmile />, label: "Patient Comfort" },
//                 ].map(({ icon, label }, index) => (
//                   <motion.div
//                     key={index}
//                     className="text-center"
//                     whileHover={hoverEffect}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <div className="text-5xl text-[#663827] hover:text-[#3e2015] transition-colors duration-300">
//                       {icon}
//                     </div>
//                     <p className="mt-2 text-gray-600 font-medium">{label}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Vision Section */}
//         <motion.section
//           className="bg-gradient-to-r from-white to-gray-100 shadow-lg rounded-lg p-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={fadeInUp}
//           transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
//         >
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 md:pr-12 order-2 md:order-1 text-center md:text-left">
//               <h2 className="text-4xl font-extrabold mb-4 text-[#3e2015] font-serif">
//                 Our Vision: Leading with Innovation
//               </h2>
//               <p className="text-lg mb-6 leading-relaxed text-gray-700 font-light font-sans">
//                 We envision a future where dental care is accessible to everyone, and every patient enjoys a healthy, confident smile. With cutting-edge technology and a commitment to continuous improvement, we’re transforming dental care one smile at a time.
//               </p>
//               <div className="flex justify-center md:justify-start space-x-6">
//                 {[
//                   { icon: <FaChartLine />, label: "Continuous Growth" },
//                   { icon: <FaGlobe />, label: "Global Standards" },
//                   { icon: <FaLightbulb />, label: "Bright Innovations" },
//                 ].map(({ icon, label }, index) => (
//                   <motion.div
//                     key={index}
//                     className="text-center"
//                     whileHover={hoverEffect}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <div className="text-5xl text-[#663827] hover:text-[#3e2015] transition-colors duration-300">
//                       {icon}
//                     </div>
//                     <p className="mt-2 text-gray-600 font-medium">{label}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//             <motion.div
//               className="md:w-1/2 order-1 md:order-2 mb-6 md:mb-0"
//               whileHover={hoverEffect}
//             >
//               <img
//                 src={vision}
//                 alt="Vision"
//                 className="w-full rounded-lg shadow-lg transform hover:shadow-2xl transition-transform duration-300"
//               />
//             </motion.div>
//           </div>
//         </motion.section>
//       </div>
//     </div>
//   );
// };

// export default MissionAndVisionPage;










// import React from "react";
// import {
//   FaHandsHelping,
//   FaTooth,
//   FaSmile,
//   FaChartLine,
//   FaGlobe,
//   FaLightbulb,
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import vision from "../assets/Images/vision.png";
// import D2 from "../assets/Images/D2.jpg";
// import "../index.css"; 

// const MissionAndVisionPage = () => {
//   // Animation variants for fade-in effects
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   // Hover scale effect
//   const hoverEffect = {
//     scale: 1.05,
//     transition: { duration: 0.3 },
//   };

//   return (
//     <div className="bg-gradient-to-r from-blue-100 to-blue-50 min-h-screen py-12 overflow-hidden">
//       <div className="container mx-auto flex flex-row px-6 md:px-12 lg:px-20">
        
//         {/* Mission Section */}
//         <motion.section
//           className="bg-gradient-to-r from-white to-gray-100 shadow-lg rounded-lg p-8 mb-12"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={fadeInUp}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//         >
//           <div className="flex flex-row md:flex-col items-center space-y-6 md:space-y-0">
//             <motion.div
//               className="md:w-1/2 mb-6 md:mb-0"
//               whileHover={hoverEffect}
//             >
//               <img
//                 src={D2}
//                 alt="Dental Care"
//                 className="w-full rounded-lg shadow-lg transition-transform duration-300"
//               />
//             </motion.div>
//             <div className="md:w-1/2 md:pl-12 text-center md:text-left">
//               <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#3e2015] font-serif">
//                 Our Mission: Your Smile, Our Priority
//               </h2>
//               <p className="text-base md:text-lg leading-relaxed text-gray-700 font-light">
//                 At Dr Tooth Smile Clinic, our mission is to provide exceptional dental care with a personal touch. We ensure our patients leave with healthier, more beautiful smiles.
//               </p>
//               <div className="flex justify-center md:justify-start space-x-6 mt-6">
//                 {[
//                   { icon: <FaHandsHelping />, label: "Excellent Care" },
//                   { icon: <FaTooth />, label: "Dental Expertise" },
//                   { icon: <FaSmile />, label: "Patient Comfort" },
//                 ].map(({ icon, label }, index) => (
//                   <motion.div
//                     key={index}
//                     className="text-center"
//                     whileHover={hoverEffect}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <div className="text-4xl text-[#663827] hover:text-[#3e2015] transition-colors duration-300">
//                       {icon}
//                     </div>
//                     <p className="mt-2 text-gray-600 font-medium">{label}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Vision Section */}
//         <motion.section
//           className="bg-gradient-to-r from-white to-gray-100 shadow-lg rounded-lg p-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={fadeInUp}
//           transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
//         >
//           <div className="flex flex-row md:flex-col items-center space-y-6 md:space-y-0">
//             <div className="md:w-1/2 md:pr-12 order-2 md:order-1 text-center md:text-left">
//               <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#3e2015] font-serif">
//                 Our Vision: Leading with Innovation
//               </h2>
//               <p className="text-base md:text-lg leading-relaxed text-gray-700 font-light">
//                 We envision a future where dental care is accessible to everyone. With cutting-edge technology and commitment, we are transforming dental care, one smile at a time.
//               </p>
//               <div className="flex justify-center md:justify-start space-x-6 mt-6">
//                 {[
//                   { icon: <FaChartLine />, label: "Continue Growth" },
//                   { icon: <FaGlobe />, label: "Global Standards" },
//                   { icon: <FaLightbulb />, label: "Bright Innovations" },
//                 ].map(({ icon, label }, index) => (
//                   <motion.div
//                     key={index}
//                     className="text-center"
//                     whileHover={hoverEffect}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <div className="text-4xl text-[#663827] hover:text-[#3e2015] transition-colors duration-300">
//                       {icon}
//                     </div>
//                     <p className="mt-2 text-gray-600 font-medium">{label}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//             <motion.div
//               className="md:w-1/2 order-1 md:order-2 mb-6 md:mb-0"
//               whileHover={hoverEffect}
//             >
//               <img
//                 src={vision}
//                 alt="Vision"
//                 className="w-full rounded-lg shadow-lg transition-transform duration-300"
//               />
//             </motion.div>
//           </div>
//         </motion.section>
//       </div>
//     </div>
//   );
// };

// export default MissionAndVisionPage;












import React from "react";
import {
  FaHandsHelping,
  FaTooth,
  FaSmile,
  FaChartLine,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";
import { motion } from "framer-motion";
import vision from "../assets/Images/vision.png";
import D2 from "../assets/Images/D2.jpg";
import "../index.css";

const MissionAndVisionPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.3 },
  };

  return (
    <div className="bg-[#F7EAD0] min-h-screen py-12 overflow-hidden">
      <div className="container mx-auto flex flex-row px-6 md:px-12 lg:px-20">

        {/* Mission Section */}
        <motion.section
          className="bg-gradient-to-r from-white to-gray-100 shadow-lg rounded-lg p-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex flex-row md:flex-col items-center space-y-6 md:space-y-0">
            <motion.div
              className="md:w-1/2 mb-6 md:mb-0"
              whileHover={hoverEffect}
            >
              <img
                src={D2}
                alt="Dental Care"
                className="w-full rounded-lg shadow-lg transition-transform duration-300"
              />
            </motion.div>
            <div className="md:w-1/2 md:pl-12 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#3e2015] font-serif">
                Our Mission: Your Smile, Our Priority
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 font-light">
                At Dr Tooth Smile Clinic, our mission is to provide exceptional dental care with a personal touch. We ensure our patients leave with healthier, more beautiful smiles.
              </p>
              <div className="flex justify-center md:justify-start space-x-6 mt-6">
                {[
                  { icon: <FaHandsHelping />, label: "Compassion" },
                  { icon: <FaTooth />, label: "Expertise" },
                  { icon: <FaSmile />, label: "Comfort" },
                ].map(({ icon, label }, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={hoverEffect}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-4xl text-[#663827] hover:text-[#3e2015] transition-colors duration-300">
                      {icon}
                    </div>
                    <p className="mt-2 text-gray-600 font-medium">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          className="bg-gradient-to-r from-white to-gray-100 shadow-lg rounded-lg p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        >
          <div className="flex flex-row md:flex-col items-center space-y-6 md:space-y-0">
            <div className="md:w-1/2 md:pr-12 order-2 md:order-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#3e2015] font-serif">
                Our Vision: Leading with Innovation
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 font-light">
                We envision a future where dental care is accessible to everyone. With cutting-edge technology and commitment, we are transforming dental care, one smile at a time.
              </p>
              <div className="flex justify-center md:justify-start space-x-6 mt-6">
                {[
                  { icon: <FaChartLine />, label: "Growth" },
                  { icon: <FaGlobe />, label: "Standards" },
                  { icon: <FaLightbulb />, label: "Innovation" },
                ].map(({ icon, label }, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={hoverEffect}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-4xl text-[#663827] hover:text-[#3e2015] transition-colors duration-300">
                      {icon}
                    </div>
                    <p className="mt-2 text-gray-600 font-medium">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            

          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default MissionAndVisionPage;