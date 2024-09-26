// import React from 'react';

// // Sample icons from Heroicons (or any icon library)
// import { FaTooth, FaTeethOpen, FaSmileBeam } from 'react-icons/fa';
// import { GiToothbrush, GiTooth } from 'react-icons/gi';
// import { RiToothLine } from 'react-icons/ri';

// const treatments = [
//   {
//     name: 'Smile Designing',
//     icon: <FaSmileBeam className="text-yellow-500" />,
//     description: 'Customized treatments to create your perfect smile.',
//   },
//   {
//     name: 'Dental Implants',
//     icon: <FaTooth className="text-blue-500" />,
//     description: 'Permanent replacement for missing teeth, providing a natural look and feel.',
//   },
//   {
//     name: 'Teeth Whitening',
//     icon: <GiTooth className="text-white bg-black rounded-full p-2" />,
//     description: 'A procedure to lighten teeth and remove stains for a bright smile.',
//   },
//   {
//     name: 'Dentures & Bridges',
//     icon: <FaTeethOpen className="text-purple-500" />,
//     description: 'Restoring missing teeth with dentures and bridges for improved functionality.',
//   },
//   {
//     name: 'Filling and Sealants',
//     icon: <GiToothbrush className="text-green-500" />,
//     description: 'Repairing cavities and protecting teeth from decay.',
//   },
//   {
//     name: 'Oral Surgery',
//     icon: <FaTooth className="text-red-500" />,
//     description: 'Surgical treatments for complex dental issues.',
//   },
//   {
//     name: 'Root Canals',
//     icon: <GiTooth className="text-blue-400" />,
//     description: 'Saving infected or decayed teeth through endodontic treatment.',
//   },
//   {
//     name: 'Teeth Cleaning',
//     icon: <GiToothbrush className="text-orange-500" />,
//     description: 'Professional teeth cleaning for maintaining oral hygiene.',
//   },
//   {
//     name: 'X-Ray',
//     icon: <RiToothLine className="text-gray-500" />,
//     description: 'Detailed dental X-rays to diagnose and plan treatments.',
//   },
//   {
//     name: 'Aligners',
//     icon: <FaTooth className="text-pink-500" />,
//     description: 'Clear, removable aligners to straighten teeth without braces.',
//   },
//   {
//     name: 'Teeth Polishing',
//     icon: <GiTooth className="text-teal-500" />,
//     description: 'Polishing teeth for a smooth, shiny surface after cleaning.',
//   },
//   {
//     name: 'Braces',
//     icon: <FaTeethOpen className="text-indigo-500" />,
//     description: 'Traditional orthodontic treatment to align and straighten teeth.',
//   },
// ];

// const TreatmentsSection = () => {
//   return (
//     <div className="bg-[#F7EAD0] py-12 px-6 sm:px-12 lg:px-24">
//       <h2 className="text-4xl font-bold text-center font-serif  text-[#3e2015] mb-12">Our Treatments</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {treatments.map((treatment, index) => (
//           <div
//             key={index}
//             className="relative group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-2xl transition-shadow duration-300"
//           >
//             <div className="text-5xl mb-4">
//               {treatment.icon}
//             </div>
//             <h3 className="text-xl font-semibold mb-2">{treatment.name}</h3>
//             <div className="absolute inset-0 bg-white flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
//               <p className="text-gray-700">{treatment.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TreatmentsSection;




import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

const treatments = [
  {
    name: 'Smile Designing',
    description: 'Advanced cosmetic procedures to craft a natural, aesthetically pleasing smile with treatments like veneers and reshaping.',
  },
  {
    name: 'Dental Implants',
    description: 'Permanent, realistic replacements for missing teeth, using titanium posts and crowns for durable results.',
  },
  {
    name: 'Teeth Whitening',
    description: 'Brighten your smile with professional teeth whitening, removing surface stains and discoloration for a radiant finish.',
  },
  {
    name: 'Dentures & Bridges',
    description: 'Restorative options to replace missing teeth with functional, aesthetic solutions like removable dentures or fixed bridges.',
  },
  {
    name: 'Filling and Sealants',
    description: 'Protective sealants and cavity fillings to restore and maintain tooth health, preventing future decay.',
  },
  {
    name: 'Oral Surgery',
    description: 'Surgical treatments such as extractions and corrective procedures to resolve complex dental issues safely.',
  },
  {
    name: 'Root Canals',
    description: 'Endodontic treatments to save severely decayed or infected teeth, preserving your natural smile.',
  },
  {
    name: 'Teeth Cleaning',
    description: 'Routine cleanings to remove plaque and tartar buildup, ensuring fresh breath and healthy gums.',
  },
  {
    name: 'X-Ray',
    description: 'High-definition X-rays that offer a detailed view of your teeth and jaw, assisting in accurate diagnoses.',
  },
  {
    name: 'Aligners',
    description: 'Clear, removable aligners designed to gradually straighten teeth without traditional braces.',
  },
  {
    name: 'Teeth Polishing',
    description: 'A final touch to your cleaning that smooths and shines teeth, removing surface stains for a polished look.',
  },
  {
    name: 'Braces',
    description: 'Traditional braces for aligning and straightening teeth, providing lasting results and improved dental function.',
  },
];

const TreatmentsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-[#F7EAD0] py-12 px-6 font-serif sm:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center font-serif text-[#3e2015] mb-12" data-aos="fade-up">
        Our Treatments
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl p-6 transition-transform duration-300 hover:scale-105"
            style={{borderTopRightRadius: '30px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '30px', borderBottomRightRadius: '0px'}}
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          >
            <h3 className="text-xl font-semibold text-center text-[#3e2015] mb-4">{treatment.name}</h3>
            <p className="text-gray-700">{treatment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentsSection;
