import React from "react";
import { motion } from "framer-motion";

import Logo from "../assets/Logo.svg"; // Update path
import bgImage from "../assets/bg_black.png"; // Update path

const title = "Ready to Transform Learning ?";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const floating = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ViewsPrice = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        paddingLeft: "clamp(20px, 4vw, 96px)",
        paddingRight: "clamp(20px, 4vw, 96px)",
        paddingTop: "clamp(24px, 5vw, 48px)",
        paddingBottom: "clamp(24px, 5vw, 48px)",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-blue-50/70 to-white/60" />

      {/* Glow Effects */}
      <motion.div
        variants={floating}
        animate="animate"
        className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/15 blur-[120px]"
      />

      <motion.div
        variants={floating}
        animate="animate"
        className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-cyan-400/15 blur-[120px]"
      />

      <motion.div
        variants={floating}
        animate="animate"
        className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-[100px]"
      />

      {/* Floating Dots */}
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
          }}
          className="absolute h-2 w-2 rounded-full bg-blue-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 w-full"
        style={{ maxWidth: "min(1200px, 94vw)" }}
      >
        <div className="rounded-[32px] border border-blue-100 bg-white/70 backdrop-blur-2xl p-6 sm:p-10 md:p-16 text-center shadow-[0_0_80px_rgba(59,130,246,0.12)]">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <img
              src={Logo}
              alt="TechGenius Balaji Solutions"
              className="h-14 sm:h-20 md:h-24 w-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-50 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-cyan-700 text-center break-words"
          >
            Trusted by 500+ Organizations Worldwide
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight break-words"
          >
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letter}
                className={char === " " ? "inline" : "inline-block"}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            Unlock smarter learning experiences, Join 500+ organisations already
            growing with{" "}
            <span className="font-semibold text-blue-600">TechGenius</span>{" "}
            <span className="font-semibold text-orange-500">Balaji</span>{" "}
            <span className="font-semibold text-blue-600">Solutions</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-white font-semibold transition-all duration-300 hover:scale-105">
              <span className="relative z-10">View pricing plan →</span>

              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>

            <button className="rounded-xl border border-blue-200 bg-white px-8 py-4 text-slate-800 font-semibold backdrop-blur-md hover:bg-blue-50 transition">
              Talk to an expert
            </button>
          </motion.div>

          {/* Bottom Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1.8 }}
            className="mt-10 text-sm text-slate-500"
          >
            Trusted by leading enterprises, startups, and educational
            institutions.
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ViewsPrice;
