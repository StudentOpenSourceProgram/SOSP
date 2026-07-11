export default function FAQ() {
  const faqs = [
    {
      question: "Who can apply for SOSP?",
      answer:
        "Any student passionate about learning and contributing to open source can apply.",
    },
    {
      question: "Is SOSP free?",
      answer:
        "Yes. Participation in the Student Open Source Program is completely free.",
    },
    {
      question: "Do I need prior open source experience?",
      answer:
        "No. Beginners are welcome. We'll help you learn Git, GitHub, and the contribution workflow.",
    },
    {
      question: "Will I get mentorship?",
      answer:
        "Yes. Participants receive guidance from mentors and maintainers throughout the program.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Participants who successfully complete the program may receive recognition based on the program guidelines.",
    },
    {
      question: "How do I join?",
      answer:
        "Simply fill out the Join form on the website once applications open.",
    },
  ];

  return (
    <section id="faq" className="bg-gray-50 py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}