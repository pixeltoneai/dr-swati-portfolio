"use client";

export default function Why() {
  const points = [
    {
      title: "NABH & Compliance Expertise",
      desc: "Deep understanding of NABH standards and regulatory frameworks, ensuring hospitals meet compliance requirements while maintaining high-quality patient care systems.",
    },
    {
      title: "112+ Hospitals Experience",
      desc: "Extensive hands-on involvement in setting up, optimizing, and accrediting healthcare facilities across India, building practical insights across different healthcare environments.",
    },
    {
      title: "Hands-on Implementation",
      desc: "Beyond consultation, Dr. Swati actively supports execution, ensuring systems are implemented effectively and adopted by teams across departments.",
    },
    {
      title: "Patient Safety Focus",
      desc: "Every system is designed with patient safety at the core, ensuring consistent quality care, risk management, and improved clinical outcomes.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-charcoal">
        Why Choose Dr. Swati?
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {points.map((p, i) => (
          <div
            key={i}
            className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-purple/40 via-coral/40 to-purple/40 overflow-hidden"
          >
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-md transition-all duration-300 group-hover:shadow-xl">
              
              {/* TITLE */}
              <h3 className="text-lg font-semibold text-purple">
                {p.title}
              </h3>

              {/* SHORT */}
              <p className="mt-2 text-sm text-gray-600 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                Click to explore more
              </p>

              {/* FULL */}
              <p className="mt-2 text-sm text-gray-600 opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-40">
                {p.desc}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}