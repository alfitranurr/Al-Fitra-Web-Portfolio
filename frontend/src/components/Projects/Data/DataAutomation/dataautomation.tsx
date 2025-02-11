const dataAutomationProjects = [
  {
    id: 1,
    title: "Automated Data Pipeline",
    description:
      "Developed an automated data pipeline for real-time data collection and processing.",
  },
  {
    id: 2,
    title: "ETL Automation",
    description:
      "Created automated ETL workflows to extract, transform, and load data into a data warehouse.",
  },
  {
    id: 3,
    title: "Data Monitoring System",
    description:
      "Built a system to automatically monitor data quality and send alerts on discrepancies.",
  },
  {
    id: 4,
    title: "Batch Data Processing",
    description:
      "Designed a batch data processing solution to automate the handling of large datasets.",
  },
];

const DataAutomation = () => {
  return (
    <section id="dataautomation" className="mt-[-20px] px-4">
      {/* DATA AUTOMATION PROJECTS */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          DATA AUTOMATION PROJECTS
        </h1>
      </div>

      {/* KONTEN ISI */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {dataAutomationProjects.map((project) => (
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

export default DataAutomation;
