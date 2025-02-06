import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#474E68] p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left-aligned text */}
        <div className="text-white text-xl font-semibold">
          Ramdhani's Portfolio
        </div>

        {/* Navigation links */}
        <ul className="flex space-x-10">
          <li className="text-sm text-white relative group">
            <a
              href="#"
              className="hover:text-white transition-all duration-300 transform group-hover:scale-110"
            >
              HOME
              <span className="absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          </li>
          <li className="text-sm text-white relative group">
            <a
              href="#about-me"
              className="hover:text-white transition-all duration-300 transform group-hover:scale-110"
            >
              ABOUT ME
              <span className="absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          </li>
          <li className="text-sm text-white relative group">
            <a
              href="#professional"
              className="hover:text-white transition-all duration-300 transform group-hover:scale-110"
            >
              PROFESSIONAL
              <span className="absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          </li>
          <li className="text-sm text-white relative group">
            <a
              href="#education"
              className="hover:text-white transition-all duration-300 transform group-hover:scale-110"
            >
              EDUCATION
              <span className="absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          </li>
          <li className="text-sm text-white relative group">
            <a
              href="#projects"
              className="hover:text-white transition-all duration-300 transform group-hover:scale-110"
            >
              PROJECTS
              <span className="absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          </li>
          <li className="text-sm text-white relative group">
            <a
              href="#certificate"
              className="hover:text-white transition-all duration-300 transform group-hover:scale-110"
            >
              CERTIFICATE
              <span className="absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          </li>
          <li className="text-sm text-white relative group">
            <a
              href="#contact"
              className="hover:text-white transition-all duration-300 transform group-hover:scale-110"
            >
              CONTACT
              <span className="absolute left-1/2 bottom-[-4px] w-0 h-[2px] bg-white transform origin-left transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
