"use client";

export default function Sectors() {
  const sectors = [
    {
      title: "Hospitals",
      desc: "Multi-specialty and super-specialty hospitals requiring structured operations, accreditation, and system optimization.",
    },
    {
      title: "Clinics",
      desc: "Clinics and nursing homes aiming to improve patient care systems, compliance, and operational efficiency.",
    },
    {
      title: "Diagnostics",
      desc: "Diagnostic centres and labs seeking quality systems, accreditation readiness, and workflow optimization.",
    },
    {
      title: "Startups",
      desc: "Healthcare startups building systems from scratch with scalable and compliant operational frameworks.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-peach text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-charcoal">
        Sectors Served
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {sectors.map((s, i) => (
          <div
            key={i}
            className="group bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            <h3 className="text-purple font-medium">{s.title}</h3>

            <p className="mt-2 text-sm text-gray-600 transition-all duration-300 group-hover:opacity-0">
              Tap to learn more
            </p>

            <p className="mt-2 text-sm text-gray-600 opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-40">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}