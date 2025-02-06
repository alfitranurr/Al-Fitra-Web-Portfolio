import React, { useState } from "react";

const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#474E68] p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-semibold">
          Al Fitra's Portfolio
        </div>

        {/* Hamburger button */}
        <button className="lg:hidden text-white ml-auto" onClick={toggleMenu}>
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
      </div>

      {/* Menu (hidden or visible based on isOpen state) */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-2/3 h-full bg-[#474E68] p-4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
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

        <ul className="space-y-4 text-center mt-8">
          <li className="text-sm text-white hover:text-white hover:text-shadow-glow transition-all duration-300 transform hover:scale-112">
            <a href="#">HOME</a>
          </li>
          <li className="text-sm text-white hover:text-white hover:text-shadow-glow transition-all duration-300 transform hover:scale-112">
            <a href="#about-me">ABOUT ME</a>
          </li>
          <li className="text-sm text-white hover:text-white hover:text-shadow-glow transition-all duration-300 transform hover:scale-112">
            <a href="#professional">PROFESSIONAL</a>
          </li>
          <li className="text-sm text-white hover:text-white hover:text-shadow-glow transition-all duration-300 transform hover:scale-112">
            <a href="#education">EDUCATION</a>
          </li>
          <li className="text-sm text-white hover:text-white hover:text-shadow-glow transition-all duration-300 transform hover:scale-112">
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="text-sm text-white hover:text-white hover:text-shadow-glow transition-all duration-300 transform hover:scale-112">
            <a href="#certificate">CERTIFICATE</a>
          </li>
          <li className="text-sm text-white hover:text-white hover:text-shadow-glow transition-all duration-300 transform hover:scale-112">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMobile;
