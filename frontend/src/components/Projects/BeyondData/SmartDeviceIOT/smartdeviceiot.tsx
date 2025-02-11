const smartDeviceIotProjects = [
  {
    id: 1,
    title: "Smart Home Automation",
    description:
      "Developed a smart home system that integrates devices like lights, thermostats, and security cameras for remote control and automation.",
  },
  {
    id: 2,
    title: "IoT-based Environmental Monitoring",
    description:
      "Created an IoT system that monitors environmental factors like temperature, humidity, and air quality, with real-time data reporting.",
  },
  {
    id: 3,
    title: "Wearable Health Device",
    description:
      "Built a wearable device that tracks vital health metrics such as heart rate, steps, and sleep patterns, integrated with a mobile app for health monitoring.",
  },
  {
    id: 4,
    title: "Smart Agriculture System",
    description:
      "Developed an IoT-based system for monitoring soil moisture, temperature, and other environmental conditions to optimize farming productivity.",
  },
];

const SmartDeviceIot = () => {
  return (
    <section id="smartdeviceiot" className="mt-[-20px] px-4">
      {/* SMART DEVICE & IOT PROJECTS */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          SMART DEVICE & IoT PROJECTS
        </h1>
      </div>

      {/* KONTEN ISI */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {smartDeviceIotProjects.map((project) => (
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

export default SmartDeviceIot;
