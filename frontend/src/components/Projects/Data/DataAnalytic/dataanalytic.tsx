const dataAnalyticsProjects = [
  {
    id: 1,
    title: "Sales Data Analysis",
    description:
      "Performed detailed analysis on sales data to uncover trends and patterns for business growth.",
  },
  {
    id: 2,
    title: "Customer Segmentation",
    description:
      "Applied clustering techniques to segment customers based on purchasing behavior and demographics.",
  },
  {
    id: 3,
    title: "Market Basket Analysis",
    description:
      "Used association rule mining to identify frequent itemsets and improve product recommendations.",
  },
  {
    id: 4,
    title: "Financial Forecasting",
    description:
      "Developed forecasting models to predict future financial performance using historical data.",
  },
];

const DataAnalytics = () => {
  return (
    <section id="dataanalytic" className="mt-[-20px] px-4">
      {/* DATA ANALYTICS PROJECTS */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          DATA ANALYTICS PROJECTS
        </h1>
      </div>

      {/* KONTEN ISI */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {dataAnalyticsProjects.map((project) => (
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

export default DataAnalytics;
