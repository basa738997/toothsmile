// import React from 'react';
// import { motion } from 'framer-motion';

// const ContactSection = () => {
//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.div
//       id="contact"
//       className="bg-[#F7EAD0] py-8"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl text-[#3e2015] font-bold font-serif">
//             Get In Touch
//           </h2>
//         </div>
//         <div className="flex flex-col lg:flex-row gap-8">
//           <div className="lg:w-1/2">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.643511590662!2d81.32004527520218!3d21.206315981656637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2500e57f0f523a81%3A0x18442a0713019333!2sDr%20Tooth%20Smile%20Clinic%20%7C%20Smile%20designing%20%7C%20Teeth%20whitening%20%7C%20Implant%20%7C%20RCT%20%7C%20Crown%20%7C%20dental%20clinic%20%7C%20doctor%20%7C%20bhilai!5e0!3m2!1sen!2sin!4v1726914200611!5m2!1sen!2sin"
//               width="100%"
//               height="420"
//               className="rounded-lg shadow-lg border-0"
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//           <div className="lg:w-1/2 flex flex-col space-y-4">
//             <input
//               className="form-textarea px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm focus:border-[#3e2015] transition-all"
//               type="text"
//               placeholder="Enter Patient Name"
//             />
//             <input
//               minLength="10"
//               maxLength="10"
//               className="form-textarea px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm focus:border-[#3e2015] transition-all"
//               type="text"
//               placeholder="Enter Patient Phone Number"
//             />
//             <input
//               className="form-textarea px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm focus:border-[#3e2015] transition-all"
//               type="email"
//               placeholder="Enter Email ID"
//             />
//             <input
//               maxLength="250"
//               className="form-textarea px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm focus:border-[#3e2015] transition-all"
//               type="text"
//               placeholder="City"
//             />
//             <textarea
//               rows="2"
//               className="form-textarea px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm focus:border-[#3e2015] transition-all"
//               placeholder="Type Your Message.."
//             ></textarea>
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-[#3e2015] text-[#F7EAD0] px-6 py-3 rounded-lg hover:scale-95 transition-colors transform hover:translate-y-[-2px] shadow-md"
//               >
//                 Send Message
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ContactSection;









import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const ContactMerge = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state
    setErrorMessage(''); // Reset error message
    setSuccessMessage(''); // Reset success message

    try {
      const response = await axios.post('http://localhost:5008/api/v1/mail/send-mail', formData);
      // Handle success response
      console.log('Message sent:', response.data);
      setSuccessMessage('Message sent successfully!'); // Set success message
      // Optionally, reset form fields
      setFormData({ name: '', mobile: '', email: '', city: '', message: '' });
    } catch (error) {
      // Handle error response
      console.error('Error sending message:', error);
      setErrorMessage('Failed to send message. Please try again.'); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div id="contact" className="bg-[#F7EAD0] font-serif py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold font-serif text-[#3e2015] mb-4">Get in Touch</h2>
          <p className="text-base text-[#3e2015] font-serif">
            We'd love to hear from you! Reach out with any questions or to schedule an appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Info Section */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="bg-white p-8 rounded-lg shadow-md text-start text-[#3e2015]">
              <h3 className="text-2xl font-semibold mb-4 text-[#3e2015] text-center font-serif">Contact Info</h3>
              <p className="text-[#3e2015] mb-2">Name: <span className="text-gray-800 hover:underline">Dr Tooth Smile Clinic</span></p>
              <p className="text-[#3e2015] mb-2">Working hours: <span className="text-gray-800 hover:underline">From 9:00 AM to 9:00 PM</span></p>
              <p className="text-[#3e2015] mb-2">Mobile: <a href="tel:+918103004462" className="text-gray-800 hover:underline">+91 8103004462</a></p>
              <p className="text-[#3e2015] mb-2">Email: <a href="mailto:harshitapatel631@gmail.com" className="text-gray-800 hover:underline">harshitapatel631@gmail.com</a></p>
              <p className="text-[#3e2015]">Location: <a href="https://maps.app.goo.gl/Ter4AjwZCKwKYTuS7" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline">KPS school, road, Agrasen Chowk, near wakodkar nursing home, Nehru Nagar East, Vidya Vihar Colony, Bhilai, Chhattisgarh 490020</a></p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-4 font-serif text-[#3e2015]">Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.643511590662!2d81.32004527520218!3d21.206315981656637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2500e57f0f523a81%3A0x18442a0713019333!2sDr%20Tooth%20Smile%20Clinic%20%7C%20Smile%20designing%20%7C%20Teeth%20whitening%20%7C%20Implant%20%7C%20RCT%20%7C%20Crown%20%7C%20dental%20clinic%20%7C%20doctor%20%7C%20bhilai!5e0!3m2!1sen!2sin!4v1726914200611!5m2!1sen!2sin"
                width="100%"
                height="260"
                className="rounded-lg shadow-lg border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Message Form Section */}
          <div className="space-y-4" data-aos="fade-left">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-3 font-serif text-[#3e2015] text-center">Send Us a Message</h3>
              <p className="text-[#3e2015] mb-8 text-center">We'd love to hear from you! Reach out with any questions.</p>
              {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
              {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm focus:outline-none focus:border-[#3e2015]"
                  type="text"
                  placeholder="Enter Patient Name"
                  required
                />
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm focus:outline-none focus:border-[#3e2015]"
                  type="number"
                  placeholder="Enter Patient Mobile Number"
                  required
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm focus:outline-none focus:border-[#3e2015]"
                  type="email"
                  placeholder="Enter Email ID"
                  required
                />
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm focus:outline-none focus:border-[#3e2015]"
                  type="text"
                  placeholder="City"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea w-full px-4 py-3 border border-[#3e2015] rounded-lg shadow-sm focus:outline-none focus:border-[#3e2015]"
                  placeholder="Type Your Message.."
                  rows="3"
                  required
                ></textarea>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#3e2015] hover:scale-95 text-white px-6 py-3 rounded-lg hover:bg-[#3e2015] transition-colors"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMerge;