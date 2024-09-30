
import React from "react";
import img1 from "../assets/WhyChooseUs/C2.jpeg";

const TeamSection = () => {
  return (
    <div className="container bg-[#F7EAD0] mx-auto p-6 md:flex md:flex-row font-serif justify-between items-center space-y-12 md:space-y-0 md:space-x-8">
      
      {/* Left Section - Dr. Harshita Patel's Description */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3e2015] mb-4" data-aos="zoom-in-down">Meet Dr. Harshita Patel</h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-6" data-aos="zoom-out-up">
          <span className="font-bold text-[#3e2015]">Dr. Harshita Patel</span> a highly respected dental expert, is the driving force behind <span className="font-bold text-[#3e2015]">Dr. Tooth Smiling Clinic</span>. With a blend of technical expertise and compassion, she has transformed the clinic into a hub of innovation and patient-centric care. Her dedication to advancing dental technologies, combined with her caring approach, has made her a trusted figure in the field of dentistry.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg" data-aos="zoom-out-up">
          Through her leadership, Dr. Tooth Smiling Clinic has expanded its reach, providing high-quality dental services with cutting-edge treatments. Dr. Patel’s vision is to make dental care not just accessible but also enjoyable, ensuring that every patient walks out with a brighter smile and renewed confidence.
        </p>
      </div>

      {/* Right Section - Dr. Harshita Patel's Image and Title */}
      <div className="w-full md:w-1/2 p-4 flex justify-center" data-aos="zoom-in">
        <div className="text-center relative">
          {/* Image with Circular Border */}
          <div className="relative">
            <img
              src={img1}
              alt="Dr. Harshita Patel"
              className="rounded-full mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover border-4 border-[#3e2015] shadow-lg"
            />
            {/* Name Box at Bottom of Image */}
            <div className="relative bottom-[-5px] left-1/2 transform -translate-x-1/2 bg-[#3e2015] text-[#F7EAD0] font-semibold text-sm sm:text-lg px-3 sm:px-4 py-2 sm:py-2 rounded-lg shadow-md border-[#F7EAD0] border-4">
              Dr. Harshita Patel
            </div>
          </div>
          
          {/* Role and Clinic Name */}
          <h4 className="text-lg sm:text-xl font-semibold text-[#3e2015] mt-4">Founder and CEO</h4>
          <h5 className="text-md sm:text-lg font-semibold text-[#3e2015]">Dr. Tooth Smiling Clinic</h5>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
