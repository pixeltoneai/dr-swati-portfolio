"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Hospital Planning & Design",
      desc: "Comprehensive planning of healthcare infrastructure to ensure efficient patient flow, optimal space utilization, and alignment with clinical and operational requirements from day one.",
    },
    {
      title: "NABH & QCI Accreditation",
      desc: "End-to-end guidance through NABH and QCI accreditation processes, ensuring your facility meets national quality standards and operates with full compliance and patient safety focus.",
    },
    {
      title: "Insurance & TPA Empanelment",
      desc: "Streamlined onboarding with insurance providers and TPAs to expand your hospital’s reach, improve patient accessibility, and strengthen financial sustainability.",
    },
    {
      title: "SOP & Operational Systems",
      desc: "Design and implementation of structured SOPs, policies, and workflows that ensure consistent, high-quality healthcare delivery across all departments.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-peach">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-charcoal">
          How Dr. Swati Helps Healthcare Facilities
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          End-to-end solutions designed to build, optimize, and scale healthcare systems with compliance, efficiency, and patient care at the core.
        </p>

        {/* CARDS */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
            >
              
              {/* 🔥 GLASS GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none
                bg-gradient-to-r from-purple/20 via-coral/20 to-purple/20 blur-xl">
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                
                <h3 className="text-xl font-semibold text-purple">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}