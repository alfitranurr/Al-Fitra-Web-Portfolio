import React, { useState } from "react";
import { RiAlertLine } from "react-icons/ri"; // New alert icon from react-icons/ri
import { AiOutlineClose } from "react-icons/ai"; // Close icon

const AlertInitially: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);

  // Function to close the alert when user clicks close button
  const handleCloseAlert = () => {
    console.log("Alert closed by user"); // This will trigger when the user closes the alert
    setShowAlert(false);
  };

  if (!showAlert) return null; // If the alert is closed, render nothing

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md text-center relative">
        {/* Close Button */}
        <button
          onClick={handleCloseAlert}
          className="absolute top-2 right-2 text-2xl text-gray-600 cursor-pointer hover:text-red-500"
        >
          <AiOutlineClose />
        </button>

        {/* Alert Icon */}
        <div className="flex justify-center mb-4">
          <RiAlertLine className="text-4xl text-yellow-500" />
        </div>

        {/* Alert Text with smaller font size and bold */}
        <p
          className="text-lg font-bold"
          style={{ color: "var(--warna1-color)" }}
        >
          Mohon maaf website masih dalam tahap pengembangan, Saya akan update
          terus menerus secara berkala, Stay Tuned!
        </p>
      </div>
    </div>
  );
};

export default AlertInitially;
