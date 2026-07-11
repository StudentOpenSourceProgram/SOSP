export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-3xl font-bold">Student Open Source Program</h2>

        <p className="mt-4 max-w-2xl text-gray-300">
          Building a collaborative open-source community where students
          learn, contribute, and grow through real-world projects.
        </p>

        <div className="mt-8 space-y-2">
          <p>
            GitHub:
            <a
              href="https://github.com/StudentOpenSourceProgram"
              className="ml-2 text-blue-400 hover:underline"
            >
              StudentOpenSourceProgram
            </a>
          </p>

          <p>Email: nancysosp.org@gmail.com</p>

          <p>Founder: Nancy Verma</p>

          <p>Co-Founder: Satyam</p>
        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-gray-400">
          © 2026 Student Open Source Program (SOSP). All rights reserved.
        </p>

      </div>
    </footer>
  );
}