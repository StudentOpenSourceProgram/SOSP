export default function Timeline() {
  const timeline = [
    {
      step: "01",
      title: "Registration",
      description:
        "Students submit their applications to join the Student Open Source Program.",
    },
    {
      step: "02",
      title: "Selection",
      description:
        "Applications are reviewed and selected participants receive an invitation.",
    },
    {
      step: "03",
      title: "Onboarding",
      description:
        "Participants learn Git, GitHub, contribution workflow, and project guidelines.",
    },
    {
      step: "04",
      title: "Project Contribution",
      description:
        "Students work on open source projects with guidance from mentors and maintainers.",
    },
    {
      step: "05",
      title: "Weekly Mentorship",
      description:
        "Regular sessions, code reviews, and community discussions help participants grow.",
    },
    {
      step: "06",
      title: "Program Completion",
      description:
        "Contributors showcase their work, receive recognition, and continue their open source journey.",
    },
  ];

  return (
    <section
      id="timeline"
      className="bg-white py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Program Timeline
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Here's how the Student Open Source Program works.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {timeline.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                {item.step}
              </div>

              <h3 className="mb-3 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}