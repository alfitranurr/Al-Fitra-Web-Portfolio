import { useState } from "react";
import ProfessionalExperienceCard from "../components/Experience/ProfessionalExperienceCard";
import CommitteesOrganizationsCard from "../components/Experience/CommitteesOrganizationsCard";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<"professional" | "committees">(
    "professional"
  );

  const handleTabClick = (tab: "professional" | "committees") => {
    setActiveTab(tab);
  };

  return (
    <section
      id="experience"
      className="w-full p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-md flex flex-col items-center mt-20"
    >
      <h2 className="text-lg font-semibold text-white mb-6 w-full text-center">
        Experience
      </h2>

      {/* Button container with circular buttons */}
      <div className="flex mb-6 justify-center items-center">
        {/* Inner container for the buttons */}
        <div
          className="flex rounded-full p-1"
          style={{ backgroundColor: "var(--warna1-color)" }}
        >
          {/* Professional Experience button */}
          <button
            onClick={() => handleTabClick("professional")}
            className={`px-4 py-1 text-xs font-semibold cursor-pointer ${
              activeTab === "professional"
                ? "bg-white text-[var(--warna1-color)] rounded-full shadow-md"
                : "text-gray-300 hover:bg-gray-500 rounded-full"
            } transition-all duration-200 ease-in-out mx-2`}
          >
            Professional Experience
          </button>

          {/* Committees & Organizations button */}
          <button
            onClick={() => handleTabClick("committees")}
            className={`px-4 py-1 text-xs font-semibold cursor-pointer ${
              activeTab === "committees"
                ? "bg-white text-[var(--warna1-color)] rounded-full shadow-md"
                : "text-gray-300 hover:bg-gray-500 rounded-full"
            } transition-all duration-200 ease-in-out mx-2`}
          >
            Committees & Organizations
          </button>
        </div>
      </div>

      {/* Conditional rendering based on selected tab */}
      {activeTab === "professional" ? (
        <ProfessionalExperienceCard />
      ) : (
        <CommitteesOrganizationsCard />
      )}
    </section>
  );
};

export default Experience;
