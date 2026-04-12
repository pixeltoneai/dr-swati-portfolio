"use client";

import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* 🔥 BRAND */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Dr. Swati Gupta Bajpai
          </h3>

          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            I help healthcare facilities build compliant, efficient, and
            high-quality systems through hospital setup, NABH accreditation,
            and operational excellence.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Nagpur, Maharashtra • India
          </p>
        </div>

        {/* 💼 SERVICES */}
        <div>
          <h4 className="text-white font-medium mb-3">Services</h4>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>Hospital Planning & Design</li>
            <li>NABH & QCI Accreditation</li>
            <li>Insurance & TPA Empanelment</li>
            <li>SOP & Operational Systems</li>
          </ul>
        </div>

        {/* 📞 CONTACT */}
        <div>
          <h4 className="text-white font-medium mb-3">Connect</h4>

          {/* PHONE */}
          <a
            href="tel:+919284677535"
            className="flex items-center gap-2 text-sm hover:text-white transition"
          >
            <FaPhone /> +91 9284677535
          </a>

          {/* EMAIL */}
          <a
            href="mailto:swatiguptabajpai@gmail.com"
            className="flex items-center gap-2 text-sm mt-3 hover:text-white transition"
          >
            <FaEnvelope /> swatiguptabajpai@gmail.com
          </a>

          {/* ICONS */}
          <div className="flex gap-4 mt-6">
            
            {/* WHATSAPP */}
            <a
              href="https://wa.me/919284677535?text=Hi%20Dr.%20Swati%2C%20I%20would%20like%20to%20enquire%20about%20your%20healthcare%20consultancy%20services."
              target="_blank"
              className="p-3 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-white shadow-md hover:shadow-green-500/50 transition"
            >
              <FaWhatsapp />
            </a>

            {/* EMAIL ICON */}
            <a
              href="mailto:swatiguptabajpai@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaEnvelope />
            </a>

            {/* LINKEDIN (ADD LINK HERE) */}
            <a
                href="https://www.linkedin.com/in/dr-swati-gupta-bajpai-a2b01a93"
                target="_blank"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
                <FaLinkedin />
            </a>

          </div>
        </div>

      </div>

      {/* 🔻 BOTTOM */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dr. Swati Gupta Bajpai. All rights reserved.
      </div>
    </footer>
  );
}