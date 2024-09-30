import React, { useState } from 'react';
import AOS from 'aos'; // Ensure AOS is imported

import p1 from '../assets/ba/p1.jpeg';
import p2 from '../assets/ba/p2.jpeg';
import p3 from '../assets/ba/p3.jpeg';
import p4 from '../assets/ba/p4.jpeg';
import p5 from '../assets/ba/p5.jpeg';
import p6 from '../assets/ba/p6.jpeg';
import p7 from '../assets/ba/p7.jpeg';
import p8 from '../assets/ba/p8.jpeg';
import p9 from '../assets/ba/p9.jpeg';
import p10 from '../assets/ba/p10.jpeg';
import p11 from '../assets/ba/p11.jpeg';
import p12 from '../assets/ba/p12.jpeg';
import p13 from '../assets/ba/p13.jpeg';
import p14 from '../assets/ba/p14.jpeg';
import p15 from '../assets/ba/p15.jpeg';


const BaSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    { id: 1, name: 'Image 1', url: p1 },
    { id: 2, name: 'Image 2', url: p2 },
    { id: 3, name: 'Image 3', url: p3 },
    { id: 4, name: 'Image 4', url: p4 },
    { id: 5, name: 'Image 5', url: p5 },
    { id: 6, name: 'Image 6', url: p6 },
    { id: 7, name: 'Image 7', url: p7 },
    { id: 8, name: 'Image 8', url: p8 },
    { id: 9, name: 'Image 9', url: p9 },
    { id: 10, name: 'Image 10', url: p10 },
    { id: 11, name: 'Image 11', url: p11 },
    { id: 12, name: 'Image 12', url: p12 },
    { id: 13, name: 'Image 13', url: p13 },
    { id: 14, name: 'Image 14', url: p14 },
    { id: 15, name: 'Image 15', url: p15 }
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-[#F7EAD0]">
      <h1 className="text-4xl font-bold text-center text-[#3e2015] mb-12 font-serif tracking-wide" data-aos="fade-down">
        Our Treatments Results
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map(photo => (
          <div
            key={photo.id}
            className="group relative border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setSelectedImage(photo.url)}
            data-aos="fade-up"
          >
            <img
              src={photo.url}
              alt={photo.name}
              className="w-full h-96 object-cover object-center transition-opacity duration-300 ease-in-out group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">View</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6 transition-opacity duration-500"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full overflow-hidden">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <button
              className="absolute top-4 right-4 text-white bg-[#3e2015] hover:bg-[#7b4a2f] rounded-full py-2 px-3 focus:outline-none transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BaSection;
