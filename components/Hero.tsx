"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full min-h-screen bg-peach relative">

      {/* NAVBAR */}
      <motion.div
        initial={false}
        animate={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backdropFilter: scrolled ? "blur(10px)" : "none",
          backgroundColor: scrolled ? "rgba(255,255,255,0.7)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "none",
        }}
        className="z-50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
          
          <a
            href="https://www.linkedin.com/in/dr-swati-gupta-bajpai-a2b01a93"
            target="_blank"
            className="font-bold text-purple hover:opacity-80 transition"
          >
            Dr. Swati Gupta Bajpai
          </a>

        </div>
      </motion.div>

      {/* FLOATING ICONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        
        <a
          href="https://wa.me/919284677535?text=Hi%20Dr.%20Swati%2C%20I%20would%20like%20to%20enquire%20about%20your%20healthcare%20consultancy%20services."
          target="_blank"
          className="p-4 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 hover:shadow-green-500/50 transition"
        >
          <FaWhatsapp size={20} />
        </a>

        <a
          href="mailto:swatiguptabajpai@gmail.com"
          className="p-4 rounded-full bg-white shadow-lg hover:scale-110 transition"
        >
          <FaEnvelope size={18} />
        </a>

      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-32 grid md:grid-cols-2 gap-12 items-center min-h-screen">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-charcoal">
            I Help Build{" "}
            <span className="text-coral">
              Compliant & High-Quality Healthcare Systems
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
            I specialize in hospital setup, NABH accreditation, and operational systems — helping healthcare facilities improve efficiency, ensure compliance, and deliver better patient care.
          </p>

          {/* ICON CTA */}
          <div className="mt-8 flex gap-4">

            <a
              href="https://wa.me/919284677535?text=Hi%20Dr.%20Swati%2C%20I%20would%20like%20to%20enquire%20about%20your%20healthcare%20consultancy%20services."
              target="_blank"
              className="p-4 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 hover:shadow-green-500/50 transition"
            >
              <FaWhatsapp size={20} />
            </a>

            <a
              href="mailto:swatiguptabajpai@gmail.com"
              className="p-4 rounded-full bg-white shadow-lg hover:scale-110 transition"
            >
              <FaEnvelope size={18} />
            </a>

          </div>

          <p className="mt-10 text-sm text-gray-600">
            Based in Nagpur • Working across India
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <div className="w-[320px] h-[380px] md:w-[420px] md:h-[480px] relative rounded-3xl overflow-hidden shadow-xl border border-white/30">
            
            <Image
              src="/swati.png"
              alt="Dr. Swati Gupta Bajpai"
              fill
              className="object-cover"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}