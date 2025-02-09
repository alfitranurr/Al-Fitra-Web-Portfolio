import { useState } from "react";
import RiseDown from "./RiseDown"; // Import the RiseDown component

const CommitteesOrganizationsCard = () => {
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
            src="src/assets/images/Logo DSC UMM.png" // Add your image path here
            alt="Committee Logo"
            className="w-12 h-12"
          />
          <div>
            <h3 className="text-white text-md font-semibold">
              Research Division
            </h3>
            <p className="text-warna3-color text-sm">
              Data Science Club UMM • 2023 - Present
            </p>
            <p className="text-warna3-color text-sm">
              Malang, East Java, Indonesia
            </p>
          </div>
        </div>
        <RiseDown isOpen={openCard1}>
          <p className="text-white text-sm">
            • Organizing data science events and workshops
          </p>
          <p className="text-white text-sm">
            • Collaborating with faculty and industry experts
          </p>
          <p className="text-white text-sm">
            • Managing and leading a team of students
          </p>
          <p className="text-white text-sm">
            • Fostering a community of learners and professionals
          </p>
        </RiseDown>
      </div>

      {/* Second Card */}
      <div
        className="bg-warna2-color p-6 rounded-lg shadow-lg w-full max-w-6xl mx-auto cursor-pointer transform hover:scale-95 hover:shadow-2xl transition-all duration-300 ease-in-out"
        onClick={toggleCard2} // Toggle visibility for the second card
      >
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="src/assets/images/Logo SDGs UMM.png" // Add your image path here
            alt="Committee Logo 2"
            className="w-12 h-12"
          />
          <div>
            <h3 className="text-white text-md font-semibold">
              Media and Communications Division
            </h3>
            <p className="text-warna3-color text-sm">
              SDGs Student Center UMM • 2021 - 2023
            </p>
            <p className="text-warna3-color text-sm">
              Malang, East Java, Indonesia
            </p>
          </div>
        </div>
        <RiseDown isOpen={openCard2}>
          <p className="text-white text-sm">
            • Promoting sustainable development goals
          </p>
          <p className="text-white text-sm">
            • Organizing outreach programs and events
          </p>
          <p className="text-white text-sm">
            • Collaborating with local and global organizations
          </p>
          <p className="text-white text-sm">
            • Raising awareness among students about social impact
          </p>
        </RiseDown>
      </div>
    </div>
  );
};

export default CommitteesOrganizationsCard;
