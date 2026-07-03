import { motion, AnimatePresence } from "framer-motion";
import bg from "../assets/whiteBlueBG.png"
import { useState, useEffect } from "react";
import dashboard1 from "../assets/previewImg_1.png";
import dashboard2 from "../assets/previewImg_2.png";
import dashboard3 from "../assets/previewImg_3.png";
import dashboard4 from "../assets/web_bg.png";
import dashboard5 from "../assets/dashboard1.png";
import dashboard6 from "../assets/dashboard2.png";
import dashboard7 from "../assets/dashboard3.png";
import dashboard8 from "../assets/dashboard4.png";
import {
  Brain,
  Award,
  BarChart3,
  Globe,
  Sparkles,
  Trophy,
  PlayCircle,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Assessments",
  },
  {
    icon: Trophy,
    title: "Gamification",
  },
  {
    icon: Award,
    title: "Certificates",
  },
  {
    icon: Globe,
    title: "30+ Languages",
  },
];

export default function LMSPageInHome() {
  const slides = [
    {
      image: dashboard1,
      title: "AI Powered Learning",
      description: "Create courses faster with AI assistance.",
    },
    {
      image: dashboard2,
      title: "Smart Assessments",
      description: "Generate quizzes and evaluations instantly.",
    },
    {
      image: dashboard3,
      title: "Certificate Management",
      description: "Issue and track certificates automatically.",
    },
    {
      image: dashboard4,
      title: "Advanced Analytics",
      description: "Monitor learner performance in real-time.",
    },
    {
      image: dashboard5,
      title: "Mobile Learning",
      description: "Learn anywhere on any device.",
    },
    {
      image: dashboard6,
      title: "Live Classes",
      description: "Host interactive sessions in real-time.",
    },
    {
      image: dashboard7,
      title: "Gamified Progress",
      description: "Keep learners engaged with rewards.",
    },
    {
      image: dashboard8,
      title: "Global Reach",
      description: "Deliver training in 30+ languages.",
    },
  ];

  // Split the 8 slides into pages of 4 (2x2 grid per page)
  const pages = [slides.slice(0, 4), slides.slice(4, 8)];

  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePage((prev) => (prev + 1) % pages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
  <section className="relative overflow-hidden">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    />

    {/* Optional Overlay for readability */}
    <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]" />

    {/* Decorative Blurs */}
    <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

    {/* Content */}
    <div className="relative z-10 mx-auto max-w-[1700px] px-4 sm:px-6 py-16 sm:py-24 lg:px-8">
      <div className="grid items-center gap-12 grid-cols-1 lg:grid-cols-[40%_60%] xl:grid-cols-[35%_65%]">
        
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="min-w-0"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
            <Sparkles size={16} />
            LMS Platform
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl xl:text-7xl break-words">
            Train Teams
            <span className="block bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Smarter With AI
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-slate-700">
            Deploy courses, run live classes, issue certificates,
            automate assessments and scale learning globally.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-indigo-700">
              Start Free Trial
            </button>

            <button className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white/80 px-8 py-4 font-semibold transition hover:bg-white">
              <PlayCircle />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-6 sm:gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">50K+</h2>
              <p className="text-slate-600">Active Learners</p>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">94%</h2>
              <p className="text-slate-600">Completion Rate</p>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">99.9%</h2>
              <p className="text-slate-600">Uptime</p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-14 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                key={i}
                className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/80 p-4 shadow-lg backdrop-blur-md min-w-0"
              >
                <item.icon className="text-indigo-600 flex-shrink-0" />
                <span className="font-medium truncate">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full min-w-0"
        >
          <div className="block w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid w-full grid-cols-2 gap-3 sm:gap-4 md:gap-5"
              >
                {pages[activePage].map((slide, i) => (
                  <div
                    key={i}
                    className="group relative block w-full min-w-0 overflow-hidden rounded-xl sm:rounded-2xl"
                    style={{
                      width: "100%",
                      height: 0,
                      paddingTop: "75%",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                    }}
                  >
                    <motion.img
                      src={slide.image}
                      alt={slide.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                      }}
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-2.5 sm:p-3.5">
                      <h4 className="text-xs font-semibold text-white sm:text-sm md:text-base truncate">
                        {slide.title}
                      </h4>
                      <p className="mt-0.5 hidden text-[11px] text-white/80 sm:block sm:text-xs md:text-sm">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="mt-4 flex justify-center gap-2 sm:mt-6">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePage(index)}
                  className={`h-2 rounded-full transition-all ${
                    activePage === index
                      ? "w-8 bg-indigo-600 sm:w-10"
                      : "w-2 bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
)
}