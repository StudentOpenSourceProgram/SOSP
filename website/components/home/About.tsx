export default function About() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2">

                    <div>
                        <h2 className="text-4xl font-bold text-gray-900">
                            What is SOSP?
                        </h2>

                        <p className="mt-6 text-lg leading-relaxed text-gray-600">
                            SOSP (Student Open Source Program) is a student-driven open
                            source initiative where developers collaborate, contribute to
                            real-world projects, learn from mentors, and build impactful
                            software together.
                        </p>

                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                            Our mission is to help students move from learning code to
                            building meaningful open source contributions.
                        </p>
                    </div>


                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

                        <h3 className="text-2xl font-semibold text-gray-900">
                            Why join SOSP?
                        </h3>

                        <ul className="mt-6 space-y-4 text-gray-600">
                            <li>
                                ✓ Contribute to real-world projects
                            </li>

                            <li>
                                ✓ Learn from experienced mentors
                            </li>

                            <li>
                                ✓ Build your developer portfolio
                            </li>

                            <li>
                                ✓ Connect with open source community
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </section>
    );
}