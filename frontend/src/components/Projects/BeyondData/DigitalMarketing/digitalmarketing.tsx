const digitalMarketingProjects = [
  {
    id: 1,
    title: "Social Media Campaign",
    description:
      "Developed and executed a social media campaign to increase brand awareness and engagement.",
  },
  {
    id: 2,
    title: "SEO Optimization",
    description:
      "Improved website visibility and organic search rankings through effective SEO strategies.",
  },
  {
    id: 3,
    title: "Email Marketing Automation",
    description:
      "Created and automated email marketing campaigns to increase customer retention and conversions.",
  },
  {
    id: 4,
    title: "PPC Advertising",
    description:
      "Managed pay-per-click ad campaigns to drive targeted traffic and improve ROI.",
  },
];

const DigitalMarketing = () => {
  return (
    <section id="digitalmarketing" className="mt-[-20px] px-4">
      {/* DIGITAL MARKETING PROJECTS */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          DIGITAL MARKETING PROJECTS
        </h1>
      </div>

      {/* KONTEN ISI */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {digitalMarketingProjects.map((project) => (
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

export default DigitalMarketing;
