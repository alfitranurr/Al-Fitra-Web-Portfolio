import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutMe from "../pages/about_me";
import Professional from "../pages/professional";
import Education from "../pages/education";
import Experience from "../pages/experience";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import MapCard from "../components/MapCard/mapcard";

import { ArrowUp } from "lucide-react";
import { Circle } from "lucide-react"; // Import dot icon from lucide-react

const Home: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const name = "Al Fitra Nur Ramadhani";

  // Array for looping items
  const items = [
    "Web Portfolio",
    "Data Analyst",
    "Data Engineering",
    "Digital Marketing Enthusiast",
  ];

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen relative"
      // style={{ backgroundColor: "var(--base-color)" }}
    >
      <div className="text-center text-white mt-45">
        <h1 className="text-2xl font-light">
          Hello, I<span style={{ color: "var(--warna3-color)" }}>'</span>m
        </h1>

        <h2 className="text-2xl font-semibold mt-2">
          {name.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-2">
              {word.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  whileHover={{
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  style={{ color: "white" }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </h2>

        <div
          className="border-t border-white w-full my-4 mx-auto"
          style={{ maxWidth: "85%" }}
        ></div>

        <p className="text-lg font-light mt-4 mb-70">
          Data Enthusiast | Digital Marketing Enthusiast
        </p>
      </div>

      {/* Kotak Putih */}
      <div
        className="w-full h-8 bg-white mt-4 mb-[-35px] overflow-hidden flex items-center justify-center shadow-lg"
        style={{
          transform: "rotate(-1deg) translateY(-10px) translateX(-2px)", // Rotate the box by 45 degrees
          transformOrigin: "center", // Ensure the rotation is centered
        }}
      >
        <motion.div
          className="flex items-center justify-start space-x-50 text-xs sm:text-sm md:text-sm font-semibold text-gray-800 text-center whitespace-nowrap"
          animate={isLoaded ? { x: ["58%", "-30%"] } : {}} // Trigger animation only after loading
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
          transform: "rotate(1deg) translateY(-20px) translateX(-2px)", // Adjust translateX to move the box further left
          transformOrigin: "center",
        }}
      >
        <motion.div
          className="flex items-center justify-start space-x-50 text-xs sm:text-sm md:text-sm font-semibold text-white text-center whitespace-nowrap"
          animate={isLoaded ? { x: ["-58%", "30%"] } : {}} // Start from right and move left
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

      <section
        id="about-me"
        className="scroll-margin-top-16"
        style={{
          position: "relative",
        }}
      >
        <AboutMe />
      </section>

      <Professional />
      <MapCard />

      {/* Wrap Education and Experience in a flex container */}
      <div
        className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 mt-8"
        style={{ maxWidth: "1130px", width: "90%", margin: "0 auto" }}
      >
        <section
          id="education"
          className="scroll-margin-top-16"
          style={{
            position: "relative",
            flex: 1, // Ensures it takes available space
          }}
        >
          <Education />
        </section>

        <section
          id="experience"
          className="scroll-margin-top-16"
          style={{
            position: "relative",
            flex: 1, // Ensures it takes available space
          }}
        >
          <Experience />
        </section>
      </div>

      <section
        id="projects"
        className="scroll-margin-top-16"
        style={{
          position: "relative",
        }}
      >
        <Projects />
      </section>

      <section
        id="contact"
        className="scroll-margin-top-16"
        style={{
          position: "relative",
        }}
      >
        <Contact />
      </section>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all hover:cursor-pointer"
          aria-label="Scroll to Top"
          style={{ zIndex: 9999 }}
        >
          <ArrowUp size={15} />
        </button>
      )}
    </div>
  );
};

export default Home;
