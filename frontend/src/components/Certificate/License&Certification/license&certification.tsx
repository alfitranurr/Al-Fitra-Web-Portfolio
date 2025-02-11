const licenceAndCertificationProjects = [
  {
    id: 1,
    title: "Certified Data Analyst",
    description:
      "Completed a professional certification in Data Analysis, covering data visualization, statistical analysis, and data-driven decision-making.",
  },
  {
    id: 2,
    title: "Project Management Professional (PMP)",
    description:
      "Achieved PMP certification, demonstrating expertise in project management processes and best practices for successful project execution.",
  },
  {
    id: 3,
    title: "Google Analytics Certification",
    description:
      "Earned Google Analytics certification, gaining expertise in web analytics and measuring website performance to inform digital marketing strategies.",
  },
  {
    id: 4,
    title: "AWS Certified Solutions Architect",
    description:
      "Successfully obtained AWS Solutions Architect certification, showcasing skills in designing scalable and cost-effective cloud architectures.",
  },
];

const LicenceAndCertification = () => {
  return (
    <section id="licenceandcertification" className="mt-[-20px] px-4">
      {/* LICENCE & CERTIFICATION PROJECTS */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          LICENCE & CERTIFICATION PROJECTS
        </h1>
      </div>

      {/* KONTEN ISI */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {licenceAndCertificationProjects.map((project) => (
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

export default LicenceAndCertification;
