import { Routes, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import ServicesPage from "../Pages/ServicesPage";
import ProductPage from "../Pages/ProductPage";
import LeaderShipPage from "../Pages/LeaderShipPage";
import AboutPage from "../Pages/AboutPage";
import CareerPage from "../Pages/CareerPage";
import ContactPage from "../Pages/ContactPage"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/leadership" element={<LeaderShipPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/career" element={<CareerPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  );
}

export default AppRoutes;
