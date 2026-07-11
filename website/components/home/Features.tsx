export default function Features() {
    const features = [
        {
            title: "Real Open Source Projects",
            description:
                "Work on real repositories and gain practical development experience.",
            icon: "💻",
        },
        {
            title: "Mentorship",
            description:
                "Learn from experienced contributors through guidance and code reviews.",
            icon: "🧑‍🏫",
        },
        {
            title: "Community",
            description:
                "Connect with students who are passionate about building and learning.",
            icon: "🤝",
        },
        {
            title: "Skill Development",
            description:
                "Improve Git, GitHub, teamwork, communication, and software engineering skills.",
            icon: "📈",
        },
        {
            title: "Portfolio Building",
            description:
                "Create meaningful contributions that strengthen your GitHub profile and resume.",
            icon: "🚀",
        },
        {
            title: "Career Growth",
            description:
                "Build the experience and confidence needed for internships and future opportunities.",
            icon: "🌟",
        },
    ];

    return (
        <section className="bg-gray-50 px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Why Join SOSP?
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
                        SOSP is designed to help students move beyond tutorials by
                        contributing to real projects, collaborating with others, and
                        developing skills valued in the software industry.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-2xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mb-4 text-5xl">{feature.icon}</div>

                            <h3 className="mb-3 text-2xl font-bold">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}