export default function Stats() {
  const stats = [
    { label: "Students Trained", value: "5,000+" },
    { label: "Live Projects", value: "25+" },
    { label: "Certification Focus", value: "100%" },
    { label: "Trainer Experience", value: "10+ Years" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-3xl font-bold text-blue-600">{s.value}</h3>
            <p className="mt-2 text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
