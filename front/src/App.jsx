import React from 'react'
import Routess from './component/main/Routess'
import Header from './component/main/Header'
import Footer from './component/main/Footer'
import Whatsapp from './component/Whatsapp'
import Call from './component/Call'

const App = () => {
  return (
    <div className='w-screen'>
      <Header/>
         <Routess/>
      <Footer/>
      <Whatsapp/>
      <Call/>
      <p className='text-center font-serif font-semibold py-1 bg-[#3e2015] text-[#F7EAD0]'>Designed and Developed by Manasvi Technologies (OPC) Pvt Ltd Bhopal</p>
    </div>
  )
}

export default App