"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* 📸 IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-[300px] h-[350px] md:w-[380px] md:h-[420px] relative rounded-3xl overflow-hidden shadow-xl border border-white/30">
            
            <Image
              src="/swati.png"
              alt="Dr. Swati Gupta Bajpai"
              fill
              className="object-cover"
            />

          </div>
        </motion.div>

        {/* 🧠 TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-charcoal">
            About Me
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            I am a healthcare operations professional with over 8 years of experience in hospital management, accreditation, and system development. I work closely with healthcare facilities to build structured, efficient, and compliant systems that support high-quality patient care.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            I have contributed to the setup, optimization, and accreditation of more than 112 hospitals across India, helping them meet NABH standards while improving operational efficiency and clinical outcomes.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            My approach is practical and execution-focused — I don’t just advise, I help implement systems that work in real-world healthcare environments.
          </p>

          {/* 🔥 TAGS */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "NABH Accreditation",
              "Hospital Operations",
              "Quality Audits",
              "Clinical Governance",
              "Compliance Systems",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-lavender rounded-full text-sm text-gray-700 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}