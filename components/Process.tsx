"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      title: "Assessment",
      desc: "Understanding the current state of the healthcare facility, identifying operational challenges, infrastructure gaps, and compliance readiness.",
    },
    {
      title: "Gap Analysis",
      desc: "Detailed evaluation of existing systems against NABH standards and industry benchmarks to identify areas of improvement.",
    },
    {
      title: "System Development",
      desc: "Designing SOPs, workflows, and structured processes to ensure smooth operations and regulatory compliance.",
    },
    {
      title: "Training",
      desc: "Training healthcare staff and teams to effectively implement systems and maintain consistent quality standards.",
    },
    {
      title: "Implementation",
      desc: "Executing systems across departments with hands-on support to ensure real-world effectiveness.",
    },
    {
      title: "Monitoring",
      desc: "Continuous monitoring, audits, and improvements to maintain compliance, efficiency, and patient safety.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-charcoal">
          A Structured Approach to Healthcare Excellence
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A proven step-by-step system designed to ensure compliance, efficiency, and long-term success of healthcare facilities.
        </p>

        {/* GRID */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-lavender rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
            >
              
              {/* 🔥 GLASS GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none
                bg-gradient-to-r from-purple/20 via-coral/20 to-purple/20 blur-xl">
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                
                {/* STEP NUMBER */}
                <div className="text-coral font-bold text-lg mb-2">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-lg font-semibold text-purple">
                  {step.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}