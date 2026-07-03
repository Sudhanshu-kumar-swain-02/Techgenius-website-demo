import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LMSAbout from "../Products/LMSAbout"
import UpComing from '../Products/UpComing';

const ProductPage = () => {
  return (
    <div>

      <Navbar />
      <LMSAbout/> 
      <UpComing/>   

      <Footer />



    </div>
  )
}

export default ProductPage