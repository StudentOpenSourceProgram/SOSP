import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-16 lg:flex-row">

        {/* Left Content */}
        <div className="max-w-2xl">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Student Open Source Program
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Learn.
            <span className="text-blue-600"> Build.</span>
            <span className="text-indigo-600"> Contribute.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            SOSP is a student-led open source program helping beginners
            contribute to real-world projects, collaborate with mentors,
            and build strong developer portfolios.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
  <a
    href="/join"
    className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
  >
    Join SOSP
  </a>

  <a
    href="/projects"
    className="rounded-lg border border-gray-300 bg-white px-8 py-3 font-semibold text-gray-700 hover:bg-gray-100"
  >
    Explore Projects
  </a>

  <a
    href="https://github.com/StudentOpenSourceProgram"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg border border-blue-600 px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
  >
    GitHub
  </a>
</div>

          <div className="mt-10 flex gap-10">
            <div>
              <h2 className="text-3xl font-bold text-blue-600">4</h2>
              <p className="text-gray-600">Repositories</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">1</h2>
              <p className="text-gray-600">Organization</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">∞</h2>
              <p className="text-gray-600">Opportunities</p>
            </div>
          </div>

        </div>

        {/* Right */}
        <div>
          <Image
            src="/logo.png"
            alt="SOSP Logo"
            width={420}
            height={420}
            priority
            className="h-auto w-80 lg:w-[420px]"
          />
        </div>

      </div>
    </section>
  );
}

