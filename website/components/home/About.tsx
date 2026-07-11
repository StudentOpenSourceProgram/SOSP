export default function About() {
    return (
        <section
            id="about"
            className="bg-white px-6 py-24"
        >
            <div className="mx-auto max-w-7xl">

                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900">
                        About SOSP
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
                        Student Open Source Program (SOSP) is a student-led initiative
                        created to help aspiring developers gain real-world open source
                        experience. We believe that every student should have the opportunity
                        to learn, collaborate, and contribute to impactful software projects.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-3">

                    <div className="rounded-2xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="mb-4 text-2xl font-bold text-blue-600">
                            Our Mission
                        </h3>

                        <p className="text-gray-600">
                            To provide mentorship, real-world projects, and a collaborative
                            environment where students can become confident open source
                            contributors.
                        </p>
                    </div>

                    <div className="rounded-2xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="mb-4 text-2xl font-bold text-indigo-600">
                            Our Vision
                        </h3>

                        <p className="text-gray-600">
                            To build one of the most trusted student-led open source
                            communities that empowers developers across the world.
                        </p>
                    </div>

                    <div className="rounded-2xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        <h3 className="mb-4 text-2xl font-bold text-purple-600">
                            Our Values
                        </h3>

                        <ul className="space-y-2 text-gray-600">
                            <li>• Learn by Building</li>
                            <li>• Collaboration First</li>
                            <li>• Open Knowledge</li>
                            <li>• Inclusive Community</li>
                            <li>• Continuous Growth</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}