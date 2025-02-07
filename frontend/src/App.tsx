import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./main/navbar";
import Footer from "./main/footer";
import NavbarMobile from "./mobile/navbar_mobile";
import FooterMobile from "./mobile/footer_mobile";
import Home from "./pages/home";
// import ABOUTME from "./pages/about_me";
// import Professional from "./pages/professional";

const App: React.FC = () => {
  return (
    <Router>
      {/* Set up the flex container for the entire page */}
      <div className="flex flex-col min-h-screen">
        {/* Navbar for large screens */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* Navbar for mobile screens */}
        <div className="lg:hidden">
          <NavbarMobile />
        </div>

        {/* Routes for the main content */}
        <div className="flex-grow">
          <Routes>
            {/* Define routes for main pages here */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/about_me" element={<ABOUTME />} /> */}
            {/* <Route path="/professional" element={<Professional />} /> */}
            {/* <Route path="/contact" element={<div></div>} /> */}
            {/* Add other routes for additional pages */}
          </Routes>
        </div>

        {/* Footer at the bottom */}
        <div className="hidden lg:block">
          <Footer />
        </div>

        {/* Footer for mobile screens */}
        <div className="lg:hidden">
          <FooterMobile />
        </div>
      </div>
    </Router>
  );
};

export default App;
