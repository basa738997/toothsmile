import React from 'react';
// import why from '../assets/WhyChooseUs/C2.jpeg';
import why from '../assets/Images/Whychoose2.png';

const WhyChooseUs = () => {
  return (
    // <div className="relative bg-[#F7EAD0] py-8">
    <div className="relative w-screen bg-[#F7EAD0] py-8">
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center md:space-x-8">
        {/* Left Side - Text Section */}
        <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-lg space-y-6" data-aos="zoom-in-up" style={{fontFamily:"roboto slab"}}>
          <h1 className="text-4xl font-bold text-[#3e2015]" data-aos="zoom-in-up" style={{fontFamily:"roboto slab"}}>
            Why choose us?
          </h1>
          <p className="text-gray-600 text-lg" data-aos="zoom-in-down">
            Discover why we're the best in healthcare.
          </p>
          <p className="text-gray-600">
            At Dr Tooth Smile Clinic, your satisfaction is our top priority. We are dedicated to fostering long-term relationships with our patients, ensuring you always receive the highest quality care possible.
          </p>

          {/* Bullet points */}
          <ul className="space-y-3">
            {[
              "High-end technology & equipment",
              "High patient satisfaction rate & positive reviews",
              "Kind & friendly team of professionals",
              "Strict hygiene protocols followed, zero waiting time"
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3 text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Image Section */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0 flex justify-center items-center" data-aos="zoom-in">
  <img
    src={why}
    alt="Dental Hospital"
    className="rounded-lg shadow-xl w-[95%] h-auto object-cover"
  />
</div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
