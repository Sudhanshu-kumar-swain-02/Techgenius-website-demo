import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Services from "../ServicesModule/Services";
import Technology from "../ServicesModule/Technology";
import PeopleTalent from "../ServicesModule/PeopleTalent";
import CmsServices from "../ServicesModule/CmsServices";


const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <Services/>
      <Technology/>
      <PeopleTalent/>
      <CmsServices/>
    
      <Footer />
    </>
  );
};

export default ServicesPage;



