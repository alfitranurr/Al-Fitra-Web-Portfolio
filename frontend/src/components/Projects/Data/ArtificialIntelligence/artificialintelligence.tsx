const artificialIntelligenceProjects = [
  {
    id: 1,
    title: "AI-based Predictive Modeling",
    description:
      "Developed machine learning models to predict future trends based on historical data.",
  },
  {
    id: 2,
    title: "Natural Language Processing",
    description:
      "Created AI models for text analysis, sentiment classification, and chatbots.",
  },
  {
    id: 3,
    title: "Computer Vision",
    description:
      "Implemented AI solutions for image recognition and object detection.",
  },
  {
    id: 4,
    title: "Reinforcement Learning",
    description:
      "Built reinforcement learning algorithms to optimize decision-making in dynamic environments.",
  },
];

const ArtificialIntelligence = () => {
  return (
    <section id="artificialintelligence" className="mt-[-20px] px-4">
      {/* ARTIFICIAL INTELLIGENCE PROJECTS */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          ARTIFICIAL INTELLIGENCE PROJECTS
        </h1>
      </div>

      {/* KONTEN ISI */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {artificialIntelligenceProjects.map((project) => (
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

export default ArtificialIntelligence;
