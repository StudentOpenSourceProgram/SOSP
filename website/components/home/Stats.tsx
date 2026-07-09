const stats = [
    {
        number: "500+",
        label: "Contributors",
    },
    {
        number: "50+",
        label: "Mentors",
    },
    {
        number: "100+",
        label: "Projects",
    },
    {
        number: "10K+",
        label: "GitHub Contributions",
    },
];

export default function Stats() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
                {stats.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-xl border border-gray-200 p-6 text-center shadow-sm transition hover:shadow-lg"
                    >
                        <h2 className="text-4xl font-bold text-blue-600">
                            {item.number}
                        </h2>

                        <p className="mt-2 text-gray-600">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}