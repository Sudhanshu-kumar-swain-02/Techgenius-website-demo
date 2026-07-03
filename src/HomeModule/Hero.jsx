// ===== HERO SECTION =====

import React, { useEffect, useState } from "react";
import { Play, CheckCircle, ArrowRight } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "./CountUp";
import heroVideo from "../assets/bgvideo3.mp4";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const reveal = (delayMs) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0px)" : "translateY(24px)",
    transition: `all 0.85s cubic-bezier(0.16,1,0.3,1) ${delayMs}ms`,
  });

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#05070d]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />

      <div className="absolute top-24 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-[130px]" />

      <div className="relative z-10 min-h-screen flex items-center px-5 sm:px-8 lg:px-16 xl:px-24 pt-28 pb-14">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl min-w-0">
            <p
              style={reveal(80)}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-md flex-wrap"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
              Smart LMS & Enterprise Technology Solutions
            </p>

            <h1
              style={reveal(140)}
              className="text-white font-black tracking-tight leading-[1.05] break-words"
            >
              <span className="block text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                Learning Made
              </span>

              <span className="block mt-3 text-3xl sm:text-4xl md:text-5xl xl:text-6xl bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                <Typewriter
                  words={[
                    "Powerful",
                    "Smarter",
                    "Faster",
                    "Global",
                    "Innovative",
                    "Future Ready",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </h1>

            <p
              style={reveal(240)}
              className="mt-7 max-w-2xl text-base sm:text-lg leading-8 text-gray-200"
            >
              <span className="font-bold">
                <span className="text-blue-400">TechGenius</span>{" "}
                <span className="text-orange-400">Balaji</span>{" "}
                <span className="text-blue-400">Solutions</span>
              </span>{" "}
              helps institutions and businesses build modern learning
              platforms, manage students, automate workflows, and deliver a
              smooth digital education experience.
            </p>

            <div
              style={reveal(340)}
              className="mt-9 flex flex-col sm:flex-row gap-4 flex-wrap"
            >
              <a
                href="https://techgenius.grassroots-lms.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <button
                  type="button"
                  className="group relative overflow-hidden px-8 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-xl shadow-blue-600/25 transition-all duration-500 hover:-translate-y-1"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore LMS <ArrowRight size={18} />
                  </span>
                </button>
              </a>

              <button className="group px-5 py-3 rounded-full bg-white text-slate-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="flex items-center justify-center gap-3">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-600 text-white group-hover:bg-blue-700 flex-shrink-0">
                    <Play size={17} fill="currentColor" />
                  </span>
                  Watch Demo
                </span>
              </button>
            </div>

            <div
              style={reveal(440)}
              className="mt-10 grid grid-cols-3 gap-3 sm:gap-5 border-t border-white/15 pt-7 max-w-xl"
            >
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                  <CountUp end={20} suffix="+" />
                </h3>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">
                  Countries
                </p>
              </div>

              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                  <CountUp end={500} suffix="+" />
                </h3>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">
                  Projects
                </p>
              </div>

              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                  <CountUp end={99} suffix="%" />
                </h3>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">
                  Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          {/* <div
            style={reveal(520)}
            className="hidden lg:flex justify-end"
          >
            <div className="w-full max-w-md rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-xl p-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-white">
                Complete LMS Platform
              </h3>

              <p className="mt-3 text-gray-300 leading-7">
                Everything needed to manage courses, students, instructors,
                attendance, assignments, assessments, and certificates.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Role-Based Access",
                  "Course & Batch Management",
                  "Live Classes & Calendar",
                  "Attendance & Assignments",
                  "Reports & Certificates",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3"
                  >
                    <CheckCircle className="text-blue-300" size={20} />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl bg-black/30 p-5 border border-white/10">
                <p className="text-sm text-gray-400">Trusted for</p>
                <h4 className="mt-1 text-3xl font-black text-white">
                  Digital Learning
                </h4>
                <p className="mt-2 text-gray-300">
                  Built for colleges, training centers, and modern enterprises.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;