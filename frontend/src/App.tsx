import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./main/navbar";
import Footer from "./main/footer";
import NavbarMobile from "./mobile/navbar_mobile";
import FooterMobile from "./mobile/footer_mobile";
import Home from "./pages/home";
import AlertInitially from "./components/Alerts/alertInitially";

/* DATA */
import DataVisualization from "./components/Projects/Data/DataVisualization/datavisualization";
import ArtificialIntelligence from "./components/Projects/Data/ArtificialIntelligence/artificialintelligence";
import DataAutomation from "./components/Projects/Data/DataAutomation/dataautomation";
import DataAnalytics from "./components/Projects/Data/DataAnalytic/dataanalytic";

/* BEYOND DATA */
import DigitalMarketing from "./components/Projects/BeyondData/DigitalMarketing/digitalmarketing";
import MobileDevelopment from "./components/Projects/BeyondData/MobileDevelopment/mobiledevelopment";
import SmartDeviceIOT from "./components/Projects/BeyondData/SmartDeviceIOT/smartdeviceiot";
import WebDevelopment from "./components/Projects/BeyondData/WebDevelopment/webdevelopment";

/* CERTIFICATE */
import Competition from "./components/Certificate/Competition/competition";
import SeminarWorkshop from "./components/Certificate/Seminar&Workshop/seminar&workshop";
import LicenseCertification from "./components/Certificate/License&Certification/license&certification";
import CommitteeOrganization from "./components/Certificate/Committee&Organization/committee&organization";

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
        {/* Navbar for Desktop Screens */}
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
          {showAlert && <AlertInitially />}
          <Routes>
            {/* MAIN PAGE */}
            <Route path="/" element={<Home />} />
            {/* DATA PROJECTS */}
            <Route
              path="/components/Projects/Data/DataVisualization/datavisualization"
              element={<DataVisualization />}
            />
            <Route
              path="/components/Projects/Data/ArtificialIntelligence/artificialintelligence"
              element={<ArtificialIntelligence />}
            />
            <Route
              path="/components/Projects/Data/DataAutomation/dataautomation"
              element={<DataAutomation />}
            />
            <Route
              path="/components/Projects/Data/DataAnalytic/dataanalytic"
              element={<DataAnalytics />}
            />
            {/* BEYOND DATA PROJECTS */}
            <Route
              path="/components/Projects/DigitalMarketing/digitalmarketing"
              element={<DigitalMarketing />}
            />
            <Route
              path="/components/Projects/MobileDevelopment/mobiledevelopment"
              element={<MobileDevelopment />}
            />
            <Route
              path="/components/Projects/SmartDeviceIOT/smartdeviceiot"
              element={<SmartDeviceIOT />}
            />
            <Route
              path="/components/Projects/WebDevelopment/webdevelopment"
              element={<WebDevelopment />}
            />
            {/* CERTIFICATES */}
            <Route path="/certificate/competition" element={<Competition />} />
            <Route
              path="/certificate/seminar-workshop"
              element={<SeminarWorkshop />}
            />
            <Route
              path="/certificate/license-certification"
              element={<LicenseCertification />}
            />
            <Route
              path="/certificate/committee-organization"
              element={<CommitteeOrganization />}
            />
          </Routes>
        </div>

        {/* Footer for Desktop Screens */}
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
