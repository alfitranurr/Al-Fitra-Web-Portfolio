import { useState } from "react";
import RiseDown from "./RiseDown"; // Import the new RiseDown component

const ProfessionalExperienceCard = () => {
  const [openCard1, setOpenCard1] = useState<boolean>(false);
  const [openCard2, setOpenCard2] = useState<boolean>(false);

  const toggleCard1 = () => {
    setOpenCard1((prevState) => !prevState);
  };

  const toggleCard2 = () => {
    setOpenCard2((prevState) => !prevState);
  };

  return (
    <div className="space-y-2 flex flex-wrap justify-center">
      {/* First Card */}
      <div
        className="bg-warna1-color p-6 rounded-lg shadow-lg w-full max-w-6xl mx-auto cursor-pointer transform hover:scale-95 hover:shadow-2xl transition-all duration-300 ease-in-out"
        onClick={toggleCard1} // Toggle visibility for the first card
      >
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="src/assets/images/Logo Azka Group.png" // Add your image path here
            alt="Professional Experience Logo"
            className="w-12 h-12"
          />
          <div>
            <h3 className="text-white text-md font-semibold">
              Web Development • Bussiness Development • Graphic Design
            </h3>
            <p className="text-warna3-color text-sm">
              CV. Indo Azka Konsultan • 2023 - Present
            </p>
            <p className="text-warna3-color text-sm">
              Malang, East Java, Indonesia
            </p>
          </div>
        </div>
        <RiseDown isOpen={openCard1}>
          <p>• Developing and maintaining web applications</p>
          <p>• Working with frontend and backend technologies</p>
          <p>• Collaborating with cross-functional teams</p>
          <p>• Ensuring the performance and scalability of applications</p>
        </RiseDown>
      </div>

      {/* Second Card */}
      <div
        className="bg-warna2-color p-6 rounded-lg shadow-lg w-full max-w-6xl mx-auto cursor-pointer transform hover:scale-95 hover:shadow-2xl transition-all duration-300 ease-in-out"
        onClick={toggleCard2} // Toggle visibility for the second card
      >
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="src/assets/images/Logo Metadari.png" // Add your image path here
            alt="Professional Experience Logo 2"
            className="w-12 h-12"
          />
          <div>
            <h3 className="text-white text-md font-semibold">Data Analyst</h3>
            <p className="text-warna3-color text-sm">
              Digital Art and Information (DARI) • Dec 2024 - Now
            </p>
            <p className="text-warna3-color text-sm">
              Malang, East Java, Indonesia
            </p>
          </div>
        </div>
        <RiseDown isOpen={openCard2}>
          <p>• Analyzing large datasets</p>
          <p>• Creating reports to support business decisions</p>
          <p>• Building data models</p>
          <p>• Automating data pipelines using Python and SQL</p>
        </RiseDown>
      </div>
    </div>
  );
};

export default ProfessionalExperienceCard;
