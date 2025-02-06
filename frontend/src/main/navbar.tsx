import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#474E68] p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left-aligned text */}
        <div className="text-white text-xl font-semibold">
          Al Fitra's Portfolio
        </div>

        {/* Navigation links */}
        <ul className="flex space-x-10">
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

export default Navbar;
