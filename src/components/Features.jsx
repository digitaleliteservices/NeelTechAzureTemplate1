export default function Features() {
  const features = [
    "Live Azure Labs",
    "Real-Time Cloud Projects",
    "Certification-Oriented Training",
    "Flexible Batch Timings",
    "Recorded Sessions",
    "Interview Preparation",
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Azure Training?
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="border p-6 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-blue-600">{item}</h4>
              <p className="mt-3 text-gray-600">
                Practical, industry-aligned learning with real Azure
                environments.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
