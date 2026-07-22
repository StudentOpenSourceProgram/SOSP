export default function ProgramsPage() {
  return (
    <main className="min-h-screen px-6 py-20">

      <section className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold">
          SOSP 2026
        </h1>

        <p className="mt-5 text-lg text-gray-600">
          Student Open Source Program is a 4-week open source
          initiative where students collaborate, contribute and
          build real-world projects with the community.
        </p>


        <div className="grid md:grid-cols-2 gap-6 mt-12">


          <div className="border rounded-xl p-6">

            <h2 className="text-2xl font-bold">
              Duration
            </h2>

            <p className="mt-3">
              4 Weeks
            </p>

          </div>



          <div className="border rounded-xl p-6">

            <h2 className="text-2xl font-bold">
              Eligibility
            </h2>

            <p className="mt-3">
              Students worldwide can participate.
            </p>

          </div>



          <div className="border rounded-xl p-6">

            <h2 className="text-2xl font-bold">
              Tracks
            </h2>

            <ul className="mt-3 space-y-2">

              <li>🚀 Web Development</li>
              <li>🤖 AI / ML</li>
              <li>☁️ Cloud & DevOps</li>
              <li>🔐 Cybersecurity</li>

            </ul>

          </div>



          <div className="border rounded-xl p-6">

            <h2 className="text-2xl font-bold">
              Benefits
            </h2>


            <ul className="mt-3 space-y-2">

              <li>✓ Open Source Experience</li>
              <li>✓ Certificate</li>
              <li>✓ Portfolio Projects</li>
              <li>✓ Community Recognition</li>

            </ul>


          </div>


        </div>



        <div className="mt-16 border rounded-xl p-8">


          <h2 className="text-3xl font-bold">
            Program Timeline
          </h2>


          <div className="mt-6 space-y-5">


            <div>
              <b>Week 1:</b>
              <p>
                Project selection, community onboarding
                and first contributions.
              </p>
            </div>



            <div>
              <b>Week 2:</b>
              <p>
                Feature development and mentor guidance.
              </p>
            </div>



            <div>
              <b>Week 3:</b>
              <p>
                Code improvements, reviews and collaboration.
              </p>
            </div>



            <div>
              <b>Week 4:</b>
              <p>
                Final submissions, evaluations and certificates.
              </p>
            </div>


          </div>


        </div>



      </section>

    </main>
  );
}