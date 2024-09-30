import React from 'react'
import CaraSoul from '../CaraSoul'
import WhyChooseUs from '../WhyChooseUs'
import HomeAbout2 from '../HomeAbout2'
import WhyChooseUs2 from '../WhyChooseUs2'
import MissionVisionValues from '../Misionvision'
import HomeTreatment from '../HomeTreatments'
import ContactMerge from '../ContactMerge'


const Home = () => {
  return (
    <div className='pt-24 bg-[#F7EAD0] w-screen'>
      <CaraSoul />
      <HomeAbout2 />
      <HomeTreatment />
      <WhyChooseUs2 />
      <WhyChooseUs />
      <MissionVisionValues />
      <ContactMerge />
      
      
    </div>
  )
}

export default Home