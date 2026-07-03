// import React from "react";
// import HomePage from "./Pages/HomePage";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import Hero from "./Components/Hero";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <HomePage />
//       <Footer/>
//     </div>
//   );
// };

// export default App;
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;