
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
    name: 'Gum Surgery',
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
  {
    name: 'Kids Dentistry',
    description: 'Specialized dental care for children, focusing on preventative measures and child-friendly treatments.',
  },
  {
    name: 'Normal and Surgical Extraction',
    description: 'Safe removal of teeth, including wisdom teeth and other problematic teeth through surgical procedures.',
  },
];

const TreatmentsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
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
            data-aos="fade-up"
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
