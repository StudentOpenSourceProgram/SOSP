export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-4 text-5xl font-bold">Contact Us</h1>

      <p className="mb-10 text-gray-600">
        We'd love to hear from students, mentors, maintainers, and organizations.
      </p>

      <div className="space-y-6 rounded-xl border p-8 shadow-sm">
        <div>
          <h2 className="font-semibold">Email</h2>
          <p>nancysosp.org@gmail.com</p>
        </div>

        <div>
          <h2 className="font-semibold">GitHub</h2>
          <a
            href="https://github.com/StudentOpenSourceProgram"
            className="text-blue-600 hover:underline"
          >
            github.com/StudentOpenSourceProgram
          </a>
        </div>

        <div>
          <h2 className="font-semibold">Discord</h2>
          <p>Coming Soon</p>
        </div>
      </div>
    </main>
  );
}