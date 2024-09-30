import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
    return (
        <a
            href="https://wa.me/+918103004462?text=I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-10 bottom-4 right-4 md:bottom-8 md:right-8 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
        >
            <FaWhatsapp size={24} className="md:w-8 md:h-8" />
        </a>
    );
};

export default Whatsapp;
