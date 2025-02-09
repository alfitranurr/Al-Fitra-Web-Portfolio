// Import images
import LogoUMM from "../assets/images/Logo UMM Color.png";
import LogoIsyKarima from "../assets/images/Logo Isy Karima.png";

const educationData = [
  {
    id: 1,
    logo: LogoUMM,
    title: "Bachelor's degree • Informatics Engineering, S.Kom",
    institution: "University of Muhammadiyah Malang",
    duration: "2022 - Present",
    location: "Malang, East Java, Indonesia",
    gpa: "3.97/4.00",
  },
  {
    id: 2,
    logo: LogoIsyKarima,
    title: "High School • Natural Sciences",
    institution: "MA Isy Karima",
    duration: "2018 - 2022",
    location: "Karanganyar, Central Java, Indonesia",
    gpa: "4.00/4.00",
  },
];

const EducationCard = () => {
  return (
    <section
      id="education"
      className="w-full p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-md flex flex-col items-center mt-20 space-y-4"
    >
      <h2 className="text-lg font-semibold text-white mb-6 w-full text-center">
        EDUCATION
      </h2>
      {educationData.map((education) => (
        <div
          key={education.id}
          className="bg-[var(--bas-color)] p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto transform transition-all duration-300 hover:scale-95 hover:shadow-2xl cursor-pointer"
        >
          <div className="flex items-center space-x-4">
            <img
              src={education.logo}
              alt="Institution Logo"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-white text-md font-semibold">
                {education.institution}
              </h3>
              <p className="text-gray-200 text-sm">{education.title}</p>
              <p className="text-gray-200 text-xs">
                {education.duration} • {education.location}
              </p>
              <p className="text-gray-200 text-xs">GPA: {education.gpa}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EducationCard;
