import React from 'react'
import CaraSoul from '../CaraSoul'
import WhyChooseUs from '../WhyChooseUs'
// import MissionVision from '../MissionVision'
// import ContactSection from '../ContectSection'
// import HomeAboutSection from '../HomeAboutSection'
import HomeAbout2 from '../HomeAbout2'
import WhyChooseUs2 from '../WhyChooseUs2'
import MissionVisionValues from '../Misionvision'
import HomeTreatment from '../HomeTreatments'
import ContactMerge from '../ContectSection'


const Home = () => {
  return (
    <div className='pt-24 bg-[#F7EAD0]'>
      <CaraSoul />
      {/* <HomeAboutSection /> */}
      <HomeAbout2 />
      <HomeTreatment />
      <WhyChooseUs2 />
      <WhyChooseUs />
      {/* <MissionVision /> */}
      <MissionVisionValues />
      {/* <ContactSection /> */}
      <ContactMerge />
      
      
    </div>
  )
}

export default Home