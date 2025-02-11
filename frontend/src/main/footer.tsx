import * as React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#474E68] p-6 mt-8 shadow-[0_-4px_10px_0_rgba(0,0,0,0.15)]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left section: Social media logos */}
        <div className="flex space-x-6 text-white">
          <a
            href="https://www.instagram.com/rmdhani_ii/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E1306C] hover:scale-120 transition-all duration-300"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://wa.me/+6285158779239"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#25D366] hover:scale-120 transition-all duration-300"
          >
            <FaWhatsapp size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/al-fitra-nur-ramadhani/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077B5] hover:scale-120 transition-all duration-300"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/alfitranurr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#333] hover:scale-120 transition-all duration-300"
          >
            <FaGithub size={22} />
          </a>
        </div>

        {/* Right section: Copyright text */}
        <div className="text-white text-xs text-right">
          <p>&copy; 2025 Al Fitra Nur Ramadhani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
