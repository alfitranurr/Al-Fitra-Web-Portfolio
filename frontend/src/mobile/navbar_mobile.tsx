import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activePage, setActivePage] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-[#474E68] p-4 shadow-lg sticky top-0 left-0 w-full z-50 mb-10">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-0.5 bg-white z-20 transition-all duration-800"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Hamburger button */}
        <button className="lg:hidden text-white mr-auto" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Left-aligned text */}
        <div className="text-white text-lg font-semibold ml-auto">
          Ramdhani's Portfolio
        </div>
      </div>

      {/* Menu (hidden or visible based on isOpen state) */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-1/2 h-full bg-[#474E68] p-4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-semibold">
            Ramdhani's Portfolio
          </div>
          {/* Close button */}
          <button className="text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <ul className="space-y-4 text-left mt-8 mb-8">
          {/* HOME */}
          <li className="text-sm text-white relative group">
            <a
              href="#"
              className={`hover:text-white transition-all duration-300 transform group-hover:scale-110 ${
                activePage === "/" ? "text-white" : ""
              }`}
            >
              HOME
              <span
                className={`absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 ${
                  activePage === "/"
                    ? "w-full left-1/2 -translate-x-1/2"
                    : "group-hover:w-full group-hover:left-1/2 group-hover:-translate-x-1/2"
                }`}
              ></span>
            </a>
          </li>

          {/* ABOUT ME */}
          <li className="text-sm text-white relative group">
            <a
              href="#about-me"
              className={`hover:text-white transition-all duration-300 transform group-hover:scale-110 ${
                activePage === "/about-me" ? "text-white" : ""
              }`}
            >
              ABOUT ME
              <span
                className={`absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 ${
                  activePage === "/about-me"
                    ? "w-full left-1/2 -translate-x-1/2"
                    : "group-hover:w-full group-hover:left-1/2 group-hover:-translate-x-1/2"
                }`}
              ></span>
            </a>
          </li>

          {/* PROFESSIONAL */}
          <li className="text-sm text-white relative group">
            <a
              href="#professional"
              className={`hover:text-white transition-all duration-300 transform group-hover:scale-110 ${
                activePage === "/professional" ? "text-white" : ""
              }`}
            >
              PROFESSIONAL
              <span
                className={`absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 ${
                  activePage === "/professional"
                    ? "w-full left-1/2 -translate-x-1/2"
                    : "group-hover:w-full group-hover:left-1/2 group-hover:-translate-x-1/2"
                }`}
              ></span>
            </a>
          </li>

          {/* EDUCATION */}
          <li className="text-sm text-white relative group">
            <a
              href="#education"
              className={`hover:text-white transition-all duration-300 transform group-hover:scale-110 ${
                activePage === "/education" ? "text-white" : ""
              }`}
            >
              EDUCATION
              <span
                className={`absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 ${
                  activePage === "/education"
                    ? "w-full left-1/2 -translate-x-1/2"
                    : "group-hover:w-full group-hover:left-1/2 group-hover:-translate-x-1/2"
                }`}
              ></span>
            </a>
          </li>

          {/* PROJECTS */}
          <li className="text-sm text-white relative group">
            <a
              href="#projects"
              className={`hover:text-white transition-all duration-300 transform group-hover:scale-110 ${
                activePage === "/projects" ? "text-white" : ""
              }`}
            >
              PROJECTS
              <span
                className={`absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 ${
                  activePage === "/projects"
                    ? "w-full left-1/2 -translate-x-1/2"
                    : "group-hover:w-full group-hover:left-1/2 group-hover:-translate-x-1/2"
                }`}
              ></span>
            </a>
          </li>

          {/* CERTIFICATE */}
          <li className="text-sm text-white relative group">
            <a
              href="#certificate"
              className={`hover:text-white transition-all duration-300 transform group-hover:scale-110 ${
                activePage === "/certificate" ? "text-white" : ""
              }`}
            >
              CERTIFICATE
              <span
                className={`absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 ${
                  activePage === "/certificate"
                    ? "w-full left-1/2 -translate-x-1/2"
                    : "group-hover:w-full group-hover:left-1/2 group-hover:-translate-x-1/2"
                }`}
              ></span>
            </a>
          </li>

          {/* CONTACT */}
          <li className="text-sm text-white relative group">
            <a
              href="#contact"
              className={`hover:text-white transition-all duration-300 transform group-hover:scale-110 ${
                activePage === "/contact" ? "text-white" : ""
              }`}
            >
              CONTACT
              <span
                className={`absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 ${
                  activePage === "/contact"
                    ? "w-full left-1/2 -translate-x-1/2"
                    : "group-hover:w-full group-hover:left-1/2 group-hover:-translate-x-1/2"
                }`}
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMobile;
