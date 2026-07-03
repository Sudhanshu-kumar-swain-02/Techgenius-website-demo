import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AboutUs from "../AboutModule/AboutUs"
import Vision from "../AboutModule/Vision"
import Responsibilities from "../AboutModule/Responsibilities"
import Partnerships from '../AboutModule/Partnerships'


const AboutPage = () => {
  return (
    <>
    <Navbar/>

    <AboutUs/>
    <Vision/>
    <Responsibilities/>
    <Partnerships/>

    <Footer/>

    </>
  )
}

export default AboutPage