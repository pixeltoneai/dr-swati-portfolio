"use client";

import { motion } from "framer-motion";

export default function Trust() {
  const items = [
    {
      title: "8+ Years Experience",
      short: "Hands-on hospital operations expertise.",
      full: "Extensive experience in managing hospital operations, implementing systems, and ensuring healthcare facilities run efficiently while maintaining high standards of patient care and compliance.",
    },
    {
      title: "112+ Hospitals Supported",
      short: "Proven track record across India.",
      full: "Successfully contributed to the setup, accreditation, and operational improvement of over 112 healthcare facilities across India, ranging from clinics to multi-specialty hospitals.",
    },
    {
      title: "NABH & QCI Expertise",
      short: "Specialist in accreditation systems.",
      full: "Deep expertise in guiding healthcare organizations through NABH and QCI accreditation processes, ensuring compliance with national quality benchmarks and patient safety standards.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-charcoal">
          Trusted Expertise in Healthcare Operations
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Delivering structured, compliant, and high-quality healthcare systems through proven experience.
        </p>

        {/* CARDS */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-lavender rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
            >
              
              {/* 🔥 GLASS GLOW OVERLAY */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none
                bg-gradient-to-r from-purple/20 via-coral/20 to-purple/20 blur-xl">
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                
                {/* TITLE */}
                <h3 className="text-xl font-semibold text-purple">
                  {item.title}
                </h3>

                {/* SHORT TEXT */}
                <p className="mt-3 text-gray-600 text-sm transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                  {item.short}
                </p>

                {/* FULL TEXT */}
                <p className="mt-3 text-gray-600 text-sm opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-40 group-hover:translate-y-0">
                  {item.full}
                </p>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}