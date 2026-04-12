"use client";

import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-24 px-6 md:px-20 bg-peach text-center">
      
      <h2 className="text-3xl md:text-4xl font-semibold text-charcoal">
        Let’s Build a High-Quality Healthcare System
      </h2>

      <p className="mt-4 text-gray-600">
        Reach out to discuss hospital setup, accreditation, and operations.
      </p>

      <div className="mt-8 flex justify-center gap-6">

        <a
          href="https://wa.me/919284677535?text=Hi%20Dr.%20Swati%2C%20I%20would%20like%20to%20enquire%20about%20your%20healthcare%20consultancy%20services."
          target="_blank"
          className="p-5 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 hover:shadow-green-500/50 transition"
        >
          <FaWhatsapp size={22} />
        </a>

        <a
          href="mailto:swatiguptabajpai@gmail.com"
          className="p-5 rounded-full bg-white shadow-lg hover:scale-110 transition"
        >
          <FaEnvelope size={20} />
        </a>

      </div>

    </section>
  );
}