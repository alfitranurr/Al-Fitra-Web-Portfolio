// src/pages/Home.tsx
import React from "react";
import AboutMe from "../pages/about_me"; // Pastikan path ini benar
import Professional from "../pages/professional"; // Pastikan path ini benar

const Home: React.FC = () => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen"
      style={{ backgroundColor: "var(--base-color)" }}
    >
      <div className="text-center text-white">
        <h1 className="text-2xl font-light">
          Hello, I<span style={{ color: "var(--warna3-color)" }}>'</span>m
        </h1>

        <h2 className="text-2xl font-semibold mt-2">
          Al Fitra Nur Ramadhani
          <span style={{ color: "var(--warna3-color)" }}>.</span>
        </h2>

        {/* Sekat garis above the description, will stretch according to content */}
        <div
          className="border-t border-white w-full my-4 mx-auto"
          style={{ maxWidth: "85%" }}
        ></div>

        <p className="text-lg font-light mt-4">
          Data Enthusiast | Digital Marketing Enthusiast
        </p>
      </div>

      {/* Render AboutMe below the main content */}
      <AboutMe />

      {/* Render Professional below AboutMe */}
      <Professional />
    </div>
  );
};

export default Home;
