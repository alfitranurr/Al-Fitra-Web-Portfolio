// Import images
import LogoUMM from "../assets/images/Logo UMM Color.png"; // Correct import for UMM logo
import LogoIsyKarima from "../assets/images/Logo Isy Karima.png"; // Correct import for Isy Karima logo

const EducationCard = () => {
  return (
    <section
      id="education"
      className="w-full p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-md flex flex-col items-center mt-20 space-y-2"
    >
      <h2 className="text-lg font-semibold text-white mb-6 w-full text-center">
        EDUCATION
      </h2>

      {/* University of Muhammadiyah Malang */}
      <div className="bg-warna1-color p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto transform transition-all duration-300 hover:scale-95 hover:shadow-2xl">
        <div className="flex items-center space-x-4">
          <img src={LogoUMM} alt="University Logo" className="w-12 h-12" />
          <div>
            <h3 className="text-white text-md font-semibold">
              University of Muhammadiyah Malang
            </h3>
            <p className="text-warna3-color text-sm">
              Bachelor's degree • Informatics Engineering, S.Kom
            </p>
            <p className="text-warna2-color text-xs">
              2022 - Current • Malang, East Java, Indonesia
            </p>
            <p className="text-warna3-color text-xs">GPA: 3.97/4.00</p>
          </div>
        </div>
      </div>

      {/* MA Isy Karima */}
      <div className="bg-warna1-color p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto transform transition-all duration-300 hover:scale-95 hover:shadow-2xl">
        <div className="flex items-center space-x-4">
          <img
            src={LogoIsyKarima}
            alt="Another University Logo"
            className="w-12 h-12"
          />
          <div>
            <h3 className="text-white text-md font-semibold">MA Isy Karima</h3>
            <p className="text-warna3-color text-sm">
              High School • Natural Sciences
            </p>
            <p className="text-warna2-color text-xs">
              2018 - 2022 • Karanganyar, Central Java, Indonesia
            </p>
            <p className="text-warna3-color text-xs">GPA: 4.00/4.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCard;
