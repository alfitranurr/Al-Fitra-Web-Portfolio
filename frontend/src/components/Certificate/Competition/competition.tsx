const competitionProjects = [
  {
    id: 1,
    title: "Math Olympiad",
    description:
      "Organized a Math Olympiad competition, fostering problem-solving skills and mathematical thinking among students.",
  },
  {
    id: 2,
    title: "Coding Challenge",
    description:
      "Hosted a coding challenge event that tested participants' programming skills and their ability to solve real-world problems.",
  },
  {
    id: 3,
    title: "Debate Tournament",
    description:
      "Arranged a debate tournament, encouraging critical thinking, public speaking, and teamwork in a competitive setting.",
  },
  {
    id: 4,
    title: "Science Fair",
    description:
      "Managed a science fair competition where students showcased their innovative scientific projects and experiments.",
  },
];

const Competition = () => {
  return (
    <section id="competition" className="mt-[-20px] px-4">
      {/* COMPETITION PROJECTS */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          COMPETITION PROJECTS
        </h1>
      </div>

      {/* KONTEN ISI */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {competitionProjects.map((project) => (
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

export default Competition;
