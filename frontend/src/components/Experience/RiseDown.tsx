import React from "react";

interface RiseDownProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const RiseDown: React.FC<RiseDownProps> = ({ isOpen, children }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-1000 ease-in-out ${
        isOpen ? "max-h-[500px]" : "max-h-0"
      }`}
    >
      {isOpen && <div className="text-white text-sm mb-4">{children}</div>}
    </div>
  );
};

export default RiseDown;
