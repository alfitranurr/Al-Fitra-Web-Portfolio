import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState<string>("");

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <nav className="bg-[#474E68] p-4 shadow-md rounded-4xl mt-4 max-w-3xl mx-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <ul className="flex space-x-10">
          {/* HOME */}
          <li className="text-xs text-white relative group">
            <Link
              to="/"
              className={`hover:text-white transition-all duration-300 transform ${
                activePage === "/" ? "text-white" : ""
              }`}
            >
              HOME
              <span
                className={`absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 ${
                  activePage === "/"
                    ? "w-full left-1/2 -translate-x-1/2"
                    : "group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </Link>
          </li>

          {/* ABOUT ME */}
          <li className="text-xs text-white relative group">
            <Link
              to="/about-me"
              className={`hover:text-white transition-all duration-300 transform ${
                activePage === "/about-me" ? "text-white" : ""
              }`}
            >
              ABOUT ME
              <span
                className={`absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 ${
                  activePage === "/about-me"
                    ? "w-full left-1/2 -translate-x-1/2"
                    : "group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </Link>
          </li>

          {/* PROFESSIONAL */}
          <li className="text-xs text-white relative group">
            <Link
              to="/professional"
              className={`hover:text-white transition-all duration-300 transform ${
                activePage === "/professional" ? "text-white" : ""
              }`}
            >
              PROFESSIONAL
              <span
                className={`absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 ${
                  activePage === "/professional"
                    ? "w-full left-1/2 -translate-x-1/2"
                    : "group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </Link>
          </li>

          {/* EDUCATION */}
          <li className="text-xs text-white relative group">
            <Link
              to="/education"
              className={`hover:text-white transition-all duration-300 transform ${
                activePage === "/education" ? "text-white" : ""
              }`}
            >
              EDUCATION
              <span
                className={`absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 ${
                  activePage === "/education"
                    ? "w-full left-1/2 -translate-x-1/2"
                    : "group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </Link>
          </li>

          {/* PROJECTS */}
          <li className="text-xs text-white relative group">
            <Link
              to="/projects"
              className={`hover:text-white transition-all duration-300 transform ${
                activePage === "/projects" ? "text-white" : ""
              }`}
            >
              PROJECTS
              <span
                className={`absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 ${
                  activePage === "/projects"
                    ? "w-full left-1/2 -translate-x-1/2"
                    : "group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </Link>
          </li>

          {/* CERTIFICATE */}
          <li className="text-xs text-white relative group">
            <Link
              to="/certificate"
              className={`hover:text-white transition-all duration-300 transform ${
                activePage === "/certificate" ? "text-white" : ""
              }`}
            >
              CERTIFICATE
              <span
                className={`absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 ${
                  activePage === "/certificate"
                    ? "w-full left-1/2 -translate-x-1/2"
                    : "group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </Link>
          </li>

          {/* CONTACT */}
          <li className="text-xs text-white relative group">
            <Link
              to="/contact"
              className={`hover:text-white transition-all duration-300 transform ${
                activePage === "/contact" ? "text-white" : ""
              }`}
            >
              CONTACT
              <span
                className={`absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 ${
                  activePage === "/contact"
                    ? "w-full left-1/2 -translate-x-1/2"
                    : "group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
