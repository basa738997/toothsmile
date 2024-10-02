import React from "react";
import img from "../assets/WhyChooseUs/C1.png";
import img2 from "../assets/Images/clinick.png";

const AboutUs = () => {
  return (
    <div className="relative bg-[#F7EAD0] w-screen py-8">
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center md:space-x-8">
        {/* left Side - Image Section */}
        <div
          className="md:w-1/2 w-full mt-6 md:mt-0 flex justify-center items-center"
          data-aos="zoom-in"
        >
          <img
            src={img}
            alt="Dental clinic"
            className="rounded-lg shadow-xl w-[95%] mb-2 h-auto object-cover"
          />
        </div>
        {/* right Side - Text Section */}
        <div
          className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg space-y-6"
          data-aos="zoom-in-up"
          style={{ fontFamily: "roboto slab" }}
        >
          <h1
            className="text-4xl font-bold font-serif text-[#3e2015]"
            data-aos="zoom-in-up"
            style={{ fontFamily: "roboto slab" }}
          >
            About us
          </h1>
          <h3 className="text-xl text-gray-700" data-aos="zoom-in-down">
            What Makes Us Best Dental clinic for You
          </h3>
          <p className="text-gray-600 text-lg" data-aos="zoom-in-down">
            Welcome to Dr. Tooth Smile Clinic, the best dental clinic for all
            your dental problems. We understand that dental health is an
            essential aspect of overall well-being and hence, we strive to
            provide the highest quality dental care services to our patients.
          </p>
          {/* <p className="text-gray-600 text-lg" data-aos="zoom-out-down">
            At Dr. Tooth Smile Clinic, we are committed to delivering exceptional dental treatments and services to our patients. We believe that every patient is unique, and hence, we provide personalized treatment plans that cater to their specific dental needs.
          </p> */}
          <p className="text-gray-600 text-lg" data-aos="zoom-in-down">
            Dr. Tooth Smile Clinic is a highly advanced dental clinic in Bhilai
            Chattisgarh. Specialized in offering world-class treatment in Dental
            Implants, Smile Designing , Cosmetic Dentistry, and all types of
            Conventional, Preventive, and Surgical procedures.
          </p>

          <p className="text-gray-600 text-lg" data-aos="zoom-in-down">
            We are committed to offering you high-quality Dental Treatment
            Solutions at Affordable Treatment Cost. Dr. Harshita Patel
            specializes in Dr. Tooth Smile Clinic with a team of highly trained
            professionals provide excellent Dental Treatment and Attention to
            the Patients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
