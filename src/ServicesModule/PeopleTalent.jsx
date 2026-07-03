import React, { useState, useEffect } from "react";
import bgImage from "../assets/bg_black.png";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const services = [
  "IT, engineering & data science hiring",
  "Executive & C-suite leadership search",
  "Contract, freelance & permanent roles",
  "Global hiring across 15+ countries",
  "Background verification & onboarding",
];

const teamImages = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
];

const stats = [
  {
    value: "88%",
    label: "Placement Rate",
    icon: Users,
  },
  {
    value: "10",
    label: "Days Avg. Hire",
    icon: Briefcase,
  },
  {
    value: "96%",
    label: "Client Retention",
    icon: ShieldCheck,
  },
];

export default function PeopleTalent() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % teamImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-w-0"
          >
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight break-words">
              People & Talent
            </h2>

            <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 leading-tight break-words">
              Staffing &
              <br />
              Talent Acquisition
            </h3>

            <p className="mt-7 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
              We find, vet, and deliver exceptional candidates faster than any
              traditional agency. Specialising in IT, tech, finance, and
              leadership roles globally.
            </p>

            <div className="mt-10 space-y-4">
              {services.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-cyan-400 shrink-0"
                  />
                  <span className="text-white/80 text-sm sm:text-base break-words">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="backdrop-blur-xl border border-white/10 rounded-3xl p-4 sm:p-5 bg-white/5 min-w-0"
                >
                  <stat.icon
                    size={18}
                    className="text-cyan-400 mb-3"
                  />

                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>

                  <div className="text-xs sm:text-sm text-white/60 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ x: 5 }}
              className="group mt-10 flex items-center gap-3 text-white font-semibold"
            >
              Start Hiring
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE SLIDER */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:flex items-center justify-center h-[480px] xl:h-[580px] 2xl:h-[650px]"
          >
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"
              />
            </div>

            {/* Slider Card */}
            <div className="relative w-full max-w-[420px] xl:max-w-[460px] 2xl:max-w-[520px] h-[440px] xl:h-[520px] 2xl:h-[580px] rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
              {teamImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: current === index ? 1 : 0,
                    scale: current === index ? 1 : 1.08,
                  }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <img
                    src={img}
                    alt="Talent"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs tracking-wider uppercase">
                      Talent Network
                    </div>

                    <h4 className="mt-4 text-xl sm:text-2xl font-bold text-white break-words">
                      Verified Candidate
                    </h4>

                    <p className="mt-2 text-white/70 text-sm sm:text-base">
                      Pre-screened professionals ready for immediate deployment.
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Dots */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {teamImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index
                        ? "w-8 bg-cyan-400"
                        : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* MOBILE IMAGE FLOW */}
        <div className="lg:hidden mt-16">
          <div className="flex gap-4 overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
              }}
              className="flex gap-4"
            >
              {[...teamImages, ...teamImages].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Talent"
                  className="w-44 sm:w-52 h-64 sm:h-72 rounded-3xl object-cover border border-white/10 flex-shrink-0"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-cyan-400/10 rounded-full" />
    </section>
  );
}