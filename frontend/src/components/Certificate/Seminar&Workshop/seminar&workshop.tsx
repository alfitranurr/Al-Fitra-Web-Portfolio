const seminarAndWorkshopProjects = [
  {
    id: 1,
    title: "Leadership Development Workshop",
    description:
      "Organized a workshop focused on developing leadership skills, teamwork, and effective communication for emerging leaders.",
  },
  {
    id: 2,
    title: "Data Science Seminar",
    description:
      "Conducted a seminar on the latest trends in data science, including machine learning, big data analytics, and AI innovations.",
  },
  {
    id: 3,
    title: "Entrepreneurship Seminar",
    description:
      "Held a seminar to inspire and educate aspiring entrepreneurs on business planning, marketing strategies, and scaling up ventures.",
  },
  {
    id: 4,
    title: "Digital Marketing Workshop",
    description:
      "Led a hands-on workshop on digital marketing strategies, covering SEO, social media marketing, and content creation for business growth.",
  },
];

const SeminarAndWorkshop = () => {
  return (
    <section id="seminarandworkshop" className="mt-[-20px] px-4">
      {/* SEMINAR & WORKSHOP PROJECTS */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          SEMINAR & WORKSHOP PROJECTS
        </h1>
      </div>

      {/* KONTEN ISI */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {seminarAndWorkshopProjects.map((project) => (
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

export default SeminarAndWorkshop;
