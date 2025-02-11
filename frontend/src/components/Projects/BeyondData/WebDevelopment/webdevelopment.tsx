const webDevelopmentProjects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "Developed a responsive e-commerce platform with secure payment processing, product search, and user management features.",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Built a personal portfolio website with interactive features, showcasing projects and skills in web development.",
  },
  {
    id: 3,
    title: "Blog Platform",
    description:
      "Created a dynamic blog platform with user authentication, post management, and comment functionality.",
  },
  {
    id: 4,
    title: "Business Website",
    description:
      "Designed and developed a professional website for a small business with services, testimonials, and contact forms.",
  },
];

const WebDevelopment = () => {
  return (
    <section id="webdevelopment" className="mt-[-20px] px-4">
      {/* WEB DEVELOPMENT PROJECTS */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          WEB DEVELOPMENT PROJECTS
        </h1>
      </div>

      {/* KONTEN ISI */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {webDevelopmentProjects.map((project) => (
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

export default WebDevelopment;
