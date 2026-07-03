import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CeoSection from '../Leadership/CeoSection';
import Team from "../Leadership/Team";
import JoinTeam from "../Leadership/JoinTeam";

const LeaderShipPage = () => {
  return (
    <div>

      <Navbar />
      <CeoSection/> 
        <Team/>
          <JoinTeam/>
      <Footer />



    </div>
  )
}

export default LeaderShipPage