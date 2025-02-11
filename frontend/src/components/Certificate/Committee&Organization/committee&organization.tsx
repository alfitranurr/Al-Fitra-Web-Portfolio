const committeeAndOrganizationProjects = [
  {
    id: 1,
    title: "Event Management Committee",
    description:
      "Led the event management committee to organize successful conferences, workshops, and seminars for students and professionals.",
  },
  {
    id: 2,
    title: "Volunteer Program",
    description:
      "Coordinated a volunteer program to support community-driven initiatives and social projects, engaging participants in meaningful activities.",
  },
  {
    id: 3,
    title: "Student Leadership Forum",
    description:
      "Organized a student leadership forum to discuss leadership, teamwork, and organizational skills among student leaders across campuses.",
  },
  {
    id: 4,
    title: "Charity Fundraiser",
    description:
      "Managed a charity fundraiser, gathering donations and organizing activities to support local and international causes.",
  },
];

const CommitteeAndOrganization = () => {
  return (
    <section id="committeeandorganization" className="mt-[-20px] px-4">
      {/* COMMITTEE & ORGANIZATION PROJECTS */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md mb-4">
        <h1 className="text-3xl font-semibold text-white text-center">
          COMMITTEE & ORGANIZATION PROJECTS
        </h1>
      </div>

      {/* KONTEN ISI */}
      <div className="w-full max-w-6xl mx-auto p-6 border border-white rounded-2xl shadow-md flex flex-col items-center">
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {committeeAndOrganizationProjects.map((project) => (
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

export default CommitteeAndOrganization;
