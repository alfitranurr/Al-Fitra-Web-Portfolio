const dataVisualizationProjects = [
  {
    id: 1,
    title: "Sales Analytics",
    description:
      "Visualized sales data to provide insights into business performance and trends.",
  },
  {
    id: 2,
    title: "Customer Insights",
    description:
      "Created visualizations to explore customer demographics and preferences.",
  },
  {
    id: 3,
    title: "Market Trends",
    description:
      "Analyzed and visualized market trends to inform strategic decision-making.",
  },
  {
    id: 4,
    title: "Financial Data",
    description:
      "Built financial dashboards for easy tracking and monitoring of key metrics.",
  },
];

const DataVisualization = () => {
  return (
    <section id="datavisualization" className="mt-[-20px] px-4">
      {/* DATA VISUALIZATION PROJECTS */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          DATA VISUALIZATION PROJECTS
        </h1>
      </div>

      {/* KONTEN ISI */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {dataVisualizationProjects.map((project) => (
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

export default DataVisualization;
