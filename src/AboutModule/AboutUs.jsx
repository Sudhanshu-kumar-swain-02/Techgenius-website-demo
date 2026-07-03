import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[700px] flex items-center">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop"
          alt="Technology Office"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />

        {/* Animated Glow */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 blur-[140px] rounded-full" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/80 text-sm md:text-base mb-4 tracking-wider uppercase"
          >
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-light text-5xl md:text-7xl lg:text-8xl leading-tight"
          >
            Techgenius
            <br />
            Balaji Solution
          </motion.h1>

          <div className="mt-8 text-xl md:text-3xl text-cyan-300 font-medium h-16">
            <TypeAnimation
              sequence={[
                "Digital Transformation Experts",
                2000,
                "Cloud & Enterprise Solutions",
                2000,
                "Innovative IT Services",
                2000,
                "Future-Ready Technology Partner",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-lg md:text-2xl text-white/90 max-w-3xl leading-relaxed"
          >
            We empower businesses through cutting-edge technology,
            enterprise-grade software solutions, cloud transformation,
            staffing services, and digital innovation that drive measurable
            growth and long-term success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10"
          >
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-semibold transition-all duration-300 shadow-xl hover:scale-105">
              Explore Our Services
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
            <ArrowDown className="text-white" size={24} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;