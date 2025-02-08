import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutMe from "../pages/about_me";
import Professional from "../pages/professional";
import MapCard from "../components/MapCard/mapcard";
import { ArrowUp } from "lucide-react";

const Home: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const name = "Al Fitra Nur Ramadhani";

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen relative"
      style={{ backgroundColor: "var(--base-color)" }}
    >
      <div className="text-center text-white mt-50">
        <h1 className="text-2xl font-light">
          Hello, I<span style={{ color: "var(--warna3-color)" }}>'</span>m
        </h1>

        <h2 className="text-2xl font-semibold mt-2">
          {/* Split by spaces and animate each letter */}
          {name.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-2">
              {" "}
              {/* Add margin between words */}
              {word.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  whileHover={{
                    y: -10, // Lift the letter up
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

        {/* Sekat garis above the description, will stretch according to content */}
        <div
          className="border-t border-white w-full my-4 mx-auto"
          style={{ maxWidth: "85%" }}
        ></div>

        <p className="text-lg font-light mt-4 mb-80">
          Data Enthusiast | Digital Marketing Enthusiast
        </p>
      </div>

      {/* Add id for IntersectionObserver to detect */}
      <section id="about-me">
        <AboutMe />
      </section>

      {/* Render Professional below AboutMe */}
      <Professional />

      {/* Render Map below AboutMe */}
      <MapCard />

      {/* Tombol Scroll ke Atas */}
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
