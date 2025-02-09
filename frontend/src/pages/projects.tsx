const Projects = () => {
  return (
    <section id="projects" className="flex justify-center mt-6 px-4 pt-[60px]">
      <div className="w-full max-w-screen-xl mx-auto p-8 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <h1 className="text-lg font-semibold text-white text-center mb-4">
          MY PROJECTS IN DATA
        </h1>
        <p className="text-white text-center mb-6">
          This is a list of my most recent projects. I will constantly work on
          new and interesting things. Stay tuned!
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-6 w-full">
          <div className="max-w-[250px] w-full border border-white rounded-lg p-4 shadow transition transform hover:scale-95 hover:shadow-lg hover:cursor-pointer hover:bg-white hover:text-[var(--warna1-color)]">
            <h3 className="text-base font-bold">Data Visualizations</h3>
            <p className="mt-1 text-xs">
              Explore insightful data through beautiful visuals.
            </p>
          </div>
          <div className="max-w-[250px] w-full border border-white rounded-lg p-4 shadow transition transform hover:scale-95 hover:shadow-lg hover:cursor-pointer hover:bg-white hover:text-[var(--warna1-color)]">
            <h3 className="text-base font-bold">Data Analytics</h3>
            <p className="mt-1 text-xs">
              Transform data into actionable insights.
            </p>
          </div>
          <div className="max-w-[250px] w-full border border-white rounded-lg p-4 shadow transition transform hover:scale-95 hover:shadow-lg hover:cursor-pointer hover:bg-white hover:text-[var(--warna1-color)]">
            <h3 className="text-base font-bold">Artificial Intelligences</h3>
            <p className="mt-1 text-xs">
              Unlock the power of AI for smarter solutions.
            </p>
          </div>
          <div className="max-w-[250px] w-full border border-white rounded-lg p-4 shadow transition transform hover:scale-95 hover:shadow-lg hover:cursor-pointer hover:bg-white hover:text-[var(--warna1-color)]">
            <h3 className="text-base font-bold">Data Automations</h3>
            <p className="mt-1 text-xs">
              Automate workflows to save time and boost efficiency.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}

        <h1 className="text-lg font-semibold text-white text-center mt-12 mb-4">
          OTHER PROJECTS BEYOND DATA
        </h1>
        <div className="mt-6 flex flex-wrap justify-center gap-6 w-full">
          <div className="max-w-[250px] w-full border border-white rounded-lg p-4 shadow transition transform hover:scale-95 hover:shadow-lg hover:cursor-pointer hover:bg-white hover:text-[var(--warna1-color)]">
            <h3 className="text-base font-bold">Web Development</h3>
            <p className="mt-1 text-xs">
              Create modern, responsive websites and web applications.
            </p>
          </div>
          <div className="max-w-[250px] w-full border border-white rounded-lg p-4 shadow transition transform hover:scale-95 hover:shadow-lg hover:cursor-pointer hover:bg-white hover:text-[var(--warna1-color)]">
            <h3 className="text-base font-bold">Mobile Development</h3>
            <p className="mt-1 text-xs">
              Build intuitive mobile apps for Android.
            </p>
          </div>
          <div className="max-w-[250px] w-full border border-white rounded-lg p-4 shadow transition transform hover:scale-95 hover:shadow-lg hover:cursor-pointer hover:bg-white hover:text-[var(--warna1-color)]">
            <h3 className="text-base font-bold">Smart Device & IoT</h3>
            <p className="mt-1 text-xs">
              Develop embedded systems and IoT solutions.
            </p>
          </div>
          <div className="max-w-[250px] w-full border border-white rounded-lg p-4 shadow transition transform hover:scale-95 hover:shadow-lg hover:cursor-pointer hover:bg-white hover:text-[var(--warna1-color)]">
            <h3 className="text-base font-bold">Digital Marketing</h3>
            <p className="mt-1 text-xs">
              Optimize and grow brands through digital strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
