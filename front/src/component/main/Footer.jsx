
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

import logo from '../../assets/logo.png';
import bgs from "../../assets/bgs.jpg"
const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-black w-screen py-6 "   style={{
      backgroundImage: `url(${bgs})`,
      fontFamily:"roboto slab",
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      opacity:"0.9",
      paddingBottom: '20px', // Adjust this value to set distance from the bottom
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0">

        {/* Brand Section */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/3">
          <img src={logo} alt="Logo" className="h-40 rounded-full my-2 border-2 border-[#F7EAD0] items-center" />
          <span className="text-2xl font-semibold">Dr Tooth Smile Clinic</span>
        </div>

        {/* Quick Links */}
        <div className="lg:w-1/3" style={{
          fontFamily:"Fira Sans",
          fontWeight:"bolder"
        }}>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline hover:text-gray-400 hover:font-extrabold transition-colors duration-300">Home</a></li>
            <li><a href="/services" className="hover:underline hover:text-gray-400 transition-colors duration-300">Treatments</a></li>
            <li><a href="/appointments" className="hover:underline hover:text-gray-400 transition-colors duration-300">Book an Appointment</a></li>
            <li><a href="/about" className="hover:underline hover:text-gray-400 transition-colors duration-300">About Us</a></li>
            <li><a href="/gallery" className="hover:underline hover:text-gray-400 transition-colors duration-300">Gallery</a></li>
            <li><a href="/contact" className="hover:underline hover:text-gray-400 transition-colors duration-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="lg:w-1/3">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="https://www.facebook.com/people/DrTooth_smileclinic/100092447703506/" className="text-blue-600 hover:text-blue-400 transition-colors duration-300"><FaFacebook size={28} /></a>
            <a href="https://g.co/kgs/6Jekm4N" className="text-blue-500 hover:text-blue-500 bg-white p-0 rounded-full transition-colors duration-300"><FcGoogle size={28} /></a>
            <a href="https://www.instagram.com/drtoothsmileclinic" className="text-pink-500 hover:text-pink-400 transition-colors duration-300"><FaInstagram size={28} /></a>
            <a href="https://wa.me/+918103004462" className="text-green-700 hover:text-green-600 transition-colors duration-300"><FaWhatsapp size={28} /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="lg:w-1/3" style={{
          fontFamily:"playpen Sans"
        }}>
          <h3 className="text-lg font-bold mb-4">Contact Info</h3>
          <p className="mb-2">
            <span className="font-semibold">Mobile :</span> +91 8103004462
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email :</span> drtoothsmileclinic@gmail.com
          </p>
          <p>
            <span className="font-semibold">Location :</span> KPS school, road, Agrasen Chowk, near wakodkar nursing home, Nehru Nagar East, Vidya Vihar Colony, Bhilai, Chhattisgarh 490020
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;