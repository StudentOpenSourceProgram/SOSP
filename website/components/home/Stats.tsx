const stats = [
  {
    number: "500+",
    title: "Students"
  },
  {
    number: "50+",
    title: "Contributors"
  },
  {
    number: "10+",
    title: "Projects"
  },
  {
    number: "5+",
    title: "Mentors"
  }
];

export default function Stats() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="border rounded-xl p-6 text-center"
          >
            <h2 className="text-3xl font-bold">
              {item.number}
            </h2>

            <p className="text-gray-500 mt-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}