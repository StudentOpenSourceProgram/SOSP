import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100">
            <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-16 lg:flex-row">

                {/* Left Content */}
                <div className="max-w-2xl">
                    <p className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                        🚀 Student Open Source Program (SOSP)
                    </p>

                    <h1 className="mb-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
                        Build Your
                        <span className="text-blue-600"> Open Source Journey</span>
                    </h1>

                    <p className="mb-8 text-lg leading-8 text-gray-600">
                        SOSP empowers students to contribute to real-world open source
                        projects, collaborate with experienced mentors, build impressive
                        portfolios, and become industry-ready developers.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/join"
                            className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Join SOSP
                        </a>

                        <a
                            href="/projects"
                            className="rounded-lg border border-gray-300 bg-white px-8 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
                        >
                            Explore Projects
                        </a>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-8 text-gray-700">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-600">100+</h2>
                            <p>Students</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-blue-600">20+</h2>
                            <p>Projects</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-blue-600">10+</h2>
                            <p>Mentors</p>
                        </div>
                    </div>
                </div>

                {/* Right Side Logo */}
                <div className="flex justify-center">
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