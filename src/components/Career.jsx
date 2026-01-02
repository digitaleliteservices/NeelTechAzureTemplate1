export default function Career() {
  return (
    <section id="career" className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Career Opportunities</h3>
        <p className="text-lg text-gray-600 mb-10">
          Azure professionals are among the most in-demand cloud experts
          worldwide.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {["Azure Administrator", "Cloud Engineer", "Solutions Architect"].map(
            (role, i) => (
              <div key={i} className="border p-6 rounded-xl shadow">
                <h4 className="font-semibold text-xl text-blue-600">{role}</h4>
                <p className="mt-2 text-gray-600">
                  High-demand role with excellent growth opportunities.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
