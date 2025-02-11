import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./main/navbar";
import Footer from "./main/footer";
import NavbarMobile from "./mobile/navbar_mobile";
import FooterMobile from "./mobile/footer_mobile";
import Home from "./pages/home";
import AlertInitially from "./components/Alerts/alertInitially";

const App: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar for Dekstop Screens */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* Navbar for mobile screens */}
        <div className="lg:hidden">
          <NavbarMobile />
        </div>

        {/* Routes for the main content */}
        <div className="flex-grow relative">
          {/* Show the alert initially */}
          {showAlert && <AlertInitially />}{" "}
          <Routes>
            {/* Define routes for main pages here */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        {/* Footer for Dekstop Screens */}
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
