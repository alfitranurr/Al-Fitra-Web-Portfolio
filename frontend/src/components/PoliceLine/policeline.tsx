import React from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react"; // Import dot icon from lucide-react

interface PoliceLineProps {
  items: string[];
  isLoaded: boolean;
}

const PoliceLine: React.FC<PoliceLineProps> = ({ items, isLoaded }) => {
  return (
    <>
      {/* Kotak Putih */}
      <div
        className="w-full h-8 bg-white mt-4 mb-[-35px] overflow-hidden flex items-center justify-center shadow-lg"
        style={{
          transform: "rotate(0deg) translateY(15px) translateX(-2px)", // Rotate the box by 45 degrees
          transformOrigin: "center", // Ensure the rotation is centered
        }}
      >
        <motion.div
          className="flex items-center justify-start space-x-50 text-xs sm:text-sm md:text-sm font-semibold text-gray-800 text-center whitespace-nowrap"
          animate={isLoaded ? { x: ["30%", "-30%"] } : {}} // Trigger animation only after loading
          transition={{
            repeat: Infinity, // Repeat the animation forever
            repeatType: "loop", // Loop the animation
            duration: 130, // Duration of one loop (faster speed for continuous movement)
            ease: "linear", // Smooth, continuous movement
          }}
        >
          {/* Duplicated items using array for continuous scroll */}
          {Array.from({ length: 30 }).map((_, index) => (
            <span
              key={index}
              className="flex items-center text-xs sm:text-sm md:text-sm whitespace-nowrap"
            >
              <Circle size={10} className="mr-2" />{" "}
              {items[index % items.length]}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Kotak Ungu */}
      <div
        className="w-full h-8 bg-[var(--warna2-color)] mt-0 mb-[-35px] overflow-hidden flex items-center justify-center px-0 shadow-lg"
        style={{
          transform: "rotate(0deg) translateY(-20px) translateX(-2px)", // Adjust translateX to move the box further left
          transformOrigin: "center",
        }}
      >
        <motion.div
          className="flex items-center justify-start space-x-50 text-xs sm:text-sm md:text-sm font-semibold text-white text-center whitespace-nowrap"
          animate={isLoaded ? { x: ["-30%", "30%"] } : {}} // Start from right and move left
          transition={{
            repeat: Infinity, // Repeat the animation forever
            repeatType: "loop", // Loop the animation
            duration: 130, // Duration of one loop (faster speed for continuous movement)
            ease: "linear", // Smooth, continuous movement
          }}
        >
          {/* Duplicated items using array for continuous scroll */}
          {Array.from({ length: 30 }).map((_, index) => (
            <span
              key={index}
              className="flex items-center text-xs sm:text-sm md:text-sm whitespace-nowrap"
            >
              <Circle size={10} className="mr-2" />{" "}
              {items[index % items.length]}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default PoliceLine;
