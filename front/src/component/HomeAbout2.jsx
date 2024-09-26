// import React from 'react';
// import img from '../assets/WhyChooseUs/C1.png';

// const AboutUs = () => {
//   return (
//     <div className="relative bg-[#F7EAD0] py-8">
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
//         {/* Right Section - Image */}
//         <div className="md:w-1/2 w-full">
//           <img
//             src={img} // Replace with your image URL
//             alt="Dental clinic"
//             className="rounded-xl shadow-lg object-cover w-full h-auto"
//           />
//         </div>
//         {/* Left Section - Text */}
//         <div className="bg-white p-6 rounded-xl shadow-lg md:w-1/2 space-y-6">
//           <div className="space-y-3">
//             <h2 className="text-4xl font-bold text-green-600">
//               About <span className="text-blue-900">us</span>
//             </h2>
//             <h3 className="text-xl text-gray-700">
//               What Makes Us Best Dental clinic for You
//             </h3>
//           </div>
//           <p className="text-gray-600 text-lg">
//             Welcome to Dr. Tooth Smile Clinic, the best dental clinic for all your dental problems. We understand that dental health is an essential aspect of overall well-being and hence, we strive to provide the highest quality dental care services to our patients. 
//             At Dr. Tooth Smile Clinic, we are committed to delivering exceptional dental treatments and services to our patients. We believe that every patient is unique, and hence, we provide personalized treatment plans that cater to their specific dental needs.
//           </p>
//           <p className="text-blue-500 font-medium">
//             Read More...
//           </p>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


import React from 'react';
import img from '../assets/WhyChooseUs/C1.png';
import img2 from '../assets/Images/clinick.png';

const AboutUs = () => {
  return (
    <div className="relative bg-[#F7EAD0] py-8">
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center md:space-x-8">
        {/* left Side - Image Section */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0 flex justify-center items-center" data-aos="zoom-in">
          <img
            src={img}
            alt="Dental clinic"
            className="rounded-lg shadow-xl w-[95%] mb-2 h-auto object-cover"
          />
        </div>
        {/* right Side - Text Section */}
        <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg space-y-6" data-aos="zoom-out-up" style={{fontFamily:"roboto slab"}}>
          <h1 className="text-4xl font-bold font-serif text-[#3e2015]" data-aos="zoom-out-up" style={{fontFamily:"roboto slab"}}>
            About us
          </h1>
          <h3 className="text-xl text-gray-700" data-aos="zoom-out-down">
            What Makes Us Best Dental clinic for You
          </h3>
          <p className="text-gray-600 text-lg" data-aos="zoom-out-down">
            Welcome to Dr. Tooth Smile Clinic, the best dental clinic for all your dental problems. We understand that dental health is an essential aspect of overall well-being and hence, we strive to provide the highest quality dental care services to our patients.
          </p>
          <p className="text-gray-600 text-lg" data-aos="zoom-out-down">
            At Dr. Tooth Smile Clinic, we are committed to delivering exceptional dental treatments and services to our patients. We believe that every patient is unique, and hence, we provide personalized treatment plans that cater to their specific dental needs.
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default AboutUs;
