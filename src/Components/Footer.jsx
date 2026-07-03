import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaShieldAlt,
  FaCheckCircle,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";
import logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050816] text-gray-300">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-20 w-72 h-72 bg-blue-600/20 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-20 w-72 h-72 bg-cyan-500/20 blur-[140px] rounded-full animate-pulse" />
      </div>

      <div
        className="relative z-10 mx-auto py-20"
        style={{
          width: "100%",
          boxSizing: "border-box",
          paddingLeft: "clamp(20px,4vw,96px)",
          paddingRight: "clamp(20px,4vw,96px)",
        }}
      >
        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src={logo}
                  alt="TechGenius Logo"
                  className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight">
                  <span className="text-blue-400">TechGenius</span>{" "}
                  <span className="text-orange-400">Balaji</span>
                </h2>

                <span className="text-blue-300 text-sm font-semibold tracking-wide">
                  Solutions
                </span>
              </div>
            </div>

            <p className="mt-6 text-gray-400 leading-relaxed max-w-md">
              Delivering enterprise LMS, eLearning, staffing solutions,
              consulting services and digital transformation across 20+
              countries worldwide.
            </p>

            {/* SOCIAL */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                {
                  icon: <FaLinkedinIn />,
                  color: "hover:bg-blue-600",
                },
                {
                  icon: <FaTwitter />,
                  color: "hover:bg-sky-500",
                },
                {
                  icon: <FaYoutube />,
                  color: "hover:bg-red-600",
                },
                {
                  icon: <FaInstagram />,
                  color: "hover:bg-pink-600",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.color}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-5">Platform</h3>

            <ul className="space-y-4">
              {[
                "LMS Platform",
                "AI Learning",
                "Analytics",
                "Mobile App",
                "Pricing",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Services</h3>

            <ul className="space-y-4">
              {[
                "Enterprise LMS",
                "Staffing",
                "CMS Development",
                "Consulting",
                "Cloud Services",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Company</h3>

            <ul className="space-y-4">
              {[
                "About Us",
                "Careers",
                "Contact",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-green-400" />
                <span className="text-sm">ISO 27001 Certified</span>
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">SOC 2 Compliance</span>
              </div>

              <div className="flex items-center gap-2">
                <FaGlobe className="text-green-400" />
                <span className="text-sm">GDPR Ready</span>
              </div>
            </div>

            <p className="text-gray-500 text-sm text-center">
              © 2026 TechGenius Balaji Global Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 300% 300%;
          animation: gradient-x 8s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
