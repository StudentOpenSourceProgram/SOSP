const projects = [
  {
    name: "AI HealthHub",
    description:
      "AI-powered healthcare assistant platform for better health guidance.",
    tech: "React, Python, Machine Learning",
    level: "Beginner",
  },
  {
    name: "AI Krishi Mitra",
    description:
      "Smart agriculture assistant helping farmers with AI solutions.",
    tech: "Flutter, Firebase, TensorFlow",
    level: "Intermediate",
  },
  {
    name: "Open Education Platform",
    description:
      "A platform for accessible learning resources.",
    tech: "Next.js, Node.js",
    level: "Beginner",
  },
];


export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">

      <div className="mx-auto max-w-6xl px-6">

        <h1 className="text-center text-5xl font-bold text-gray-900">
          SOSP Projects
        </h1>

        <p className="mt-4 text-center text-gray-600">
          Explore projects and start contributing.
        </p>


        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {projects.map((project)=>(
            <div
              key={project.name}
              className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-lg"
            >

              <h2 className="text-2xl font-bold">
                {project.name}
              </h2>


              <p className="mt-3 text-gray-600">
                {project.description}
              </p>


              <p className="mt-4 text-sm text-blue-600">
                {project.tech}
              </p>


              <p className="mt-2 text-sm text-gray-500">
                Difficulty: {project.level}
              </p>


              <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white">
                View Project
              </button>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}