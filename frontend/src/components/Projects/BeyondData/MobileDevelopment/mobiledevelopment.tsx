const mobileDevelopmentProjects = [
  {
    id: 1,
    title: "E-commerce App",
    description:
      "Developed a mobile application for an e-commerce platform with real-time product updates and secure payment integration.",
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    description:
      "Built a fitness app that tracks user workouts, provides personalized recommendations, and integrates with wearable devices.",
  },
  {
    id: 3,
    title: "Social Networking App",
    description:
      "Created a social networking app with features such as messaging, profile customization, and media sharing.",
  },
  {
    id: 4,
    title: "Travel Planning App",
    description:
      "Developed a travel app to help users plan their trips, book accommodations, and discover local attractions.",
  },
];

const MobileDevelopment = () => {
  return (
    <section id="mobiledevelopment" className="mt-[-20px] px-4">
      {/* MOBILE DEVELOPMENT PROJECTS */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          MOBILE DEVELOPMENT PROJECTS
        </h1>
      </div>

      {/* KONTEN ISI */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {mobileDevelopmentProjects.map((project) => (
            <div
              key={project.id}
              className="max-w-[250px] w-full border border-white rounded-lg p-4 shadow transition transform hover:scale-95 hover:shadow-lg hover:cursor-pointer hover:bg-white hover:text-[var(--warna1-color)]"
            >
              <h3 className="text-base font-bold">{project.title}</h3>
              <p className="mt-1 text-xs">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileDevelopment;
