import React from "react";
import SolutionSection from "../HomeModule/SolutionSection";
import LMSPageInHome from "../HomeModule/LMSPageInHome";
import GlobalReach from "../HomeModule/GlobalReach";
import Reviews from "../HomeModule/Reviews";
import ViewsPrice from "../HomeModule/ViewsPrice";
import Hero from "../HomeModule/Hero";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Hero />
      <SolutionSection/>
      {/* <LMSPageInHome/> */}
      <GlobalReach/>
      <Reviews/>
      <ViewsPrice/>
      <Footer/>
      
    </>
  );
};

export default HomePage;
