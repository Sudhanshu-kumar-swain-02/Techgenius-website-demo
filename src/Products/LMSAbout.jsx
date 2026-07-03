//

import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import teacher1 from "../assets/teacher1.jpg";
import teacher2 from "../assets/teacher2.jpeg";
import teacher3 from "../assets/teacher3.jpg";
import lmsdashbord from "../assets/LmsImages/lmsdashbord.png";
import lmscertificate from "../assets/LmsImages/lmscertificate.png";
import lmsCollegeProfile from "../assets/LmsImages/lmsCollegeProfile.png";
import lmscourses from "../assets/LmsImages/lmscourses.png";
import lmslogin from "../assets/LmsImages/lmslogin.png";
import lmsresult from "../assets/LmsImages/lmsresult.png";
import lmsStudentprofile from "../assets/LmsImages/lmsStudentprofile.png";
const injectCSS = () => {
  if (document.getElementById("lms-styles")) return;
  const style = document.createElement("style");
  style.id = "lms-styles";
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Syne:wght@400;500;600;700;800&display=swap');

    .lms-root { font-family: 'Inter', sans-serif; }
    .lms-display { font-family: 'Syne', sans-serif; }

    @keyframes floatY {
      0%,100% { transform: translateY(0px) rotateX(2deg); }
      50%      { transform: translateY(-18px) rotateX(-2deg); }
    }
    @keyframes fadeSlideUp {
      from { opacity:0; transform:translateY(40px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes fadeSlideLeft {
      from { opacity:0; transform:translateX(-50px); }
      to   { opacity:1; transform:translateX(0); }
    }
    @keyframes fadeSlideRight {
      from { opacity:0; transform:translateX(50px); }
      to   { opacity:1; transform:translateX(0); }
    }
    @keyframes scalePop {
      from { opacity:0; transform:scale(0.85); }
      to   { opacity:1; transform:scale(1); }
    }
    @keyframes rotateSlow {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes pulse-ring {
      0%   { transform:scale(1);   opacity:.6; }
      100% { transform:scale(1.8); opacity:0; }
    }
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes countUp {
      from { opacity:0; transform:translateY(20px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes borderGlow {
      0%,100% { box-shadow: 0 0 20px rgba(59,130,246,0.2); }
      50%     { box-shadow: 0 0 40px rgba(59,130,246,0.45); }
    }
    @keyframes gradientShift {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes dotFloat {
      0%,100% { transform: translateY(0) scale(1); opacity:.5; }
      50%      { transform: translateY(-12px) scale(1.2); opacity:1; }
    }

    .animate-float     { animation: floatY 5s ease-in-out infinite; }
    .animate-up        { animation: fadeSlideUp 0.8s ease forwards; }
    .animate-left      { animation: fadeSlideLeft 0.9s ease forwards; }
    .animate-right     { animation: fadeSlideRight 0.9s ease forwards; }
    .animate-pop       { animation: scalePop 0.7s ease forwards; }
    .animate-rotate    { animation: rotateSlow 20s linear infinite; }
    .animate-glow      { animation: borderGlow 3s ease-in-out infinite; }
    .animate-gradient  {
      background-size: 200% 200%;
      animation: gradientShift 6s ease infinite;
    }
    .shimmer-text {
      background: linear-gradient(90deg, #1d4ed8 0%, #0f172a 40%, #7c3aed 60%, #0f172a 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s linear infinite;
    }
    .opacity-0 { opacity:0; }
    .card-3d {
      transform-style: preserve-3d;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }
    .card-3d:hover {
      transform: perspective(800px) rotateY(-6deg) rotateX(4deg) translateY(-8px);
      box-shadow: 20px 20px 60px rgba(0,0,0,0.08);
    }
    .feature-card:hover .feature-icon {
      transform: rotateY(180deg) scale(1.1);
    }
    .feature-icon {
      transition: transform 0.6s ease;
    }
    .dot-grid-item {
      animation: dotFloat 3s ease-in-out infinite;
    }
    .pulse-btn::before {
      content:'';
      position:absolute; inset:0; border-radius:inherit;
      animation: pulse-ring 1.8s ease-out infinite;
      border: 2px solid rgba(59,130,246,0.6);
    }
    .screenshot-wrap {
      perspective: 1200px;
    }
    .screenshot-inner {
      transform: rotateY(-12deg) rotateX(6deg);
      transition: transform 0.6s ease;
    }
    .screenshot-wrap:hover .screenshot-inner {
      transform: rotateY(-4deg) rotateX(2deg);
    }
    .noise-overlay {
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    }
    .tag-pill {
      animation: fadeSlideUp 0.6s ease forwards;
    }
    .scroll-line {
      transition: width 0.3s ease;
    }
    .hero-number {
      font-variant-numeric: tabular-nums;
    }
  `;
  document.head.appendChild(style);
};

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Counter({ end, suffix = "", duration = 2000 }) {
  const [val, setVal] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 30));
    const t = setInterval(() => {
      start += step;
      if (start >= end) {
        setVal(end);
        clearInterval(t);
      } else setVal(start);
    }, 30);
    return () => clearInterval(t);
  }, [inView, end, duration]);
  return (
    <span ref={ref} className="hero-number">
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

const screenshots = [
  {
    url: lmsStudentprofile,
    title: "Student Dashboard",
    desc: "Unified view of attendance, progress and course completion.",
    accent: "#3B82F6",
  },
  {
    url: lmscourses,
    title: "Course Management",
    desc: "Browse, enroll and manage courses with an intuitive interface.",
    accent: "#8B5CF6",
  },
  {
    url: lmsresult,
    title: "AI Assessment Engine",
    desc: "Track results, assessments and academic performance instantly.",
    accent: "#F59E0B",
  },
  {
    url: lmsCollegeProfile,
    title: "College Profile",
    desc: "Comprehensive institutional information and management dashboard.",
    accent: "#10B981",
  },
  {
    url: lmslogin,
    title: "Secure Login",
    desc: "Fast, secure authentication with role-based access control.",
    accent: "#EF4444",
  },
  {
    url: lmscertificate,
    title: "Digital Certificates",
    desc: "Generate and verify certificates with QR-based validation.",
    accent: "#06B6D4",
  },
  {
    url: lmsStudentprofile,
    title: "Student Profile",
    desc: "Detailed student records, achievements and learning progress.",
    accent: "#EC4899",
  },
];

const features = [
  {
    icon: "📋",
    title: "Drag & Drop Course Builder",
    desc: "Build rich courses with video, quizzes, PDFs and SCORM in minutes — no code needed.",
    tag: "Content",
  },
  {
    icon: "🎥",
    title: "Live Virtual Classrooms",
    desc: "Zoom, Teams and built-in rooms with interactive whiteboards and breakout sessions.",
    tag: "Collaboration",
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    desc: "Real-time dashboards tracking progress, completion rates and learning ROI.",
    tag: "Insights",
  },
  {
    icon: "🎓",
    title: "Certificates & Credentials",
    desc: "Branded certificates with QR verification, PDF export and LinkedIn sharing.",
    tag: "Recognition",
  },
  {
    icon: "📱",
    title: "Mobile Learning App",
    desc: "Native iOS and Android apps with true offline learning and auto-sync.",
    tag: "Mobility",
  },
  {
    icon: "🌐",
    title: "30+ Language Support",
    desc: "Full RTL support and localisation for global learning delivery at scale.",
    tag: "Global",
  },
  {
    icon: "🎨",
    title: "White-Label Branding",
    desc: "Custom domain, colours and learner portals that feel like yours — not ours.",
    tag: "Brand",
  },
  {
    icon: "🧠",
    title: "AI-Powered Assessments",
    desc: "Auto-grade assignments, generate adaptive quizzes and surface personalized paths.",
    tag: "Comming Soon",
  },
  {
    icon: "🏆",
    title: "Gamification Engine",
    desc: "Badges, leaderboards and reward systems that sustainably boost engagement.",
    tag: "Comming Soon",
  },
];

const clients = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Chief Learning Officer, Accenture",
    avatar: teacher1,
    quote:
      "Our course completion rate jumped from 34% to 87% in the first quarter. The AI-driven nudges are genuinely remarkable.",
  },
  {
    name: "James Okafor",
    role: "Head of L&D, Deloitte",
    avatar: teacher2,
    quote:
      "We migrated 12 000 learners in a week with zero downtime. The implementation team was exceptional.",
  },
  {
    name: "Priya Mehta",
    role: "VP Education, BYJU'S",
    avatar: teacher3,
    quote:
      "Multi-language support and offline mobile sync solved our tier-2 city problem overnight. Nothing else on the market comes close.",
  },
];

export default function LMSAbout() {
  useEffect(() => {
    injectCSS();
  }, []);

  // ── HASH SCROLL FIX ──────────────────────────────────────────────────────
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  // ─────────────────────────────────────────────────────────────────────────

  const [current, setCurrent] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((p) => (p + 1) % screenshots.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const h = () => {
      const s = document.documentElement;
      setScroll((window.scrollY / (s.scrollHeight - window.innerHeight)) * 100);
    };
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const h = (e) =>
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  const [heroRef, heroIn] = useInView(0.1);
  const [featRef, featIn] = useInView(0.1);
  const [statsRef, statsIn] = useInView(0.2);
  const [testRef, testIn] = useInView(0.1);

  const slide = screenshots[current];

  return (
    <div className="lms-root bg-white min-h-screen text-gray-900 overflow-x-hidden">
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 z-[100] scroll-line"
        style={{ width: `${scroll}%` }}
      />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden "
        id="lms"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #3B82F6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl"
          style={{ animation: "pulse 4s ease-in-out 2s infinite" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] max-w-[95vw] max-h-[95vw] rounded-full border border-gray-200 animate-rotate pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] max-w-[85vw] max-h-[85vw] rounded-full border border-blue-500/10 pointer-events-none"
          style={{ animation: "rotateSlow 30s linear infinite reverse" }}
        />

        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-40 py-20 grid lg:grid-cols-2 gap-12 xl:gap-16 items-center relative z-10">
          {/* LEFT copy */}
          <div className={heroIn ? "animate-left" : "opacity-0"}>
            <div className="tag-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-700 text-xs mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              The #1 enterprise LMS platform
            </div>

            <h1 className="lms-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-700 leading-[1.05] tracking-tight">
              Learning that <span className="shimmer-text">scales</span>
              <br />
              with your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                ambition.
              </span>
            </h1>

            <p className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg">
              Deliver world-class learning across any device, in any language,
              at any scale. Backed by AI-powered insights and 99.9% uptime SLA.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="relative pulse-btn px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 text-sm font-500 shadow-lg shadow-blue-900/10">
                Start free — no card needed →
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 text-sm text-gray-600 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                  ▶
                </span>
                Watch 2-min demo
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span>🔒</span> SOC 2 Type II
              </span>
              <span className="flex items-center gap-1.5">
                <span>✅</span> GDPR compliant
              </span>
              <span className="flex items-center gap-1.5">
                <span>📱</span> iOS & Android
              </span>
              <span className="flex items-center gap-1.5">
                <span>🌐</span> 30+ languages
              </span>
            </div>
          </div>

          {/* RIGHT screenshot 3D slider */}
          <div
            className={`screenshot-wrap ${heroIn ? "animate-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="screenshot-inner relative">
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-40 transition-all duration-700"
                style={{ background: slide.accent }}
              />

              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl animate-glow">
                <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden">
                  {screenshots.map((s, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 transition-all duration-700"
                      style={{
                        opacity: i === current ? 1 : 0,
                        transform: i === current ? "scale(1)" : "scale(1.05)",
                      }}
                    >
                      <img
                        src={s.url}
                        alt={s.title}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] via-transparent to-transparent" />
                    </div>
                  ))}

                  <div className="absolute bottom-4 left-4 right-4 bg-white/85 backdrop-blur-xl border border-white/60 rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ background: slide.accent }}
                      />
                      <span className="text-sm font-500 text-gray-900">
                        {slide.title}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 ml-5">
                      {slide.desc}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center gap-2 py-3 bg-white">
                  {screenshots.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === current ? "24px" : "6px",
                        height: "6px",
                        background:
                          i === current ? slide.accent : "rgba(0,0,0,0.15)",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div
                className="absolute -right-4 sm:-right-8 bottom-1/3 bg-[#0D1627] border border-white/10 rounded-2xl p-3 shadow-xl animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-xs text-white/40">Active learners</div>
                <div className="text-lg sm:text-xl lms-display text-blue-400 mt-0.5">
                  10K+
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-xs">
          <span>scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-300 to-transparent" />
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
      <div className="border-y border-gray-200 bg-gray-50 py-10">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-40 text-center">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 opacity-50 grayscale">
            {clients.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-5 sm:h-6 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <section ref={statsRef} className="py-20 sm:py-24 relative">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-40">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {[
              {
                val: 500,
                suffix: "K+",
                label: "Learners worldwide",
                color: "#3B82F6",
              },
              {
                val: 1500,
                suffix: "+",
                label: "Institutions onboarded",
                color: "#8B5CF6",
              },
              {
                val: 30,
                suffix: "+",
                label: "Languages supported",
                color: "#F59E0B",
              },
              {
                val: 99.9,
                suffix: "%",
                label: "Platform uptime SLA",
                color: "#10B981",
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`text-center p-6 sm:p-8 rounded-3xl border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-all duration-300 ${statsIn ? "animate-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div
                  className="lms-display text-4xl sm:text-5xl font-700"
                  style={{ color: s.color }}
                >
                  <Counter end={s.val} suffix={s.suffix} />
                </div>
                <p className="text-gray-500 text-xs sm:text-sm mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section ref={featRef} className="py-20 sm:py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-blue-500/30" />

        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-40">
          <div
            className={`text-center mb-16 sm:mb-20 ${featIn ? "animate-up" : "opacity-0"}`}
          >
            <p className="text-blue-600 text-xs uppercase tracking-widest mb-4">
              Platform capabilities
            </p>
            <h2 className="lms-display text-3xl sm:text-4xl lg:text-5xl font-700 text-gray-900">
              One platform.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Every learning need.
              </span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              From first course to fifty-thousand learners — all the tools you
              need without the integrations you dread.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:border-blue-200 ${
                  featIn ? "animate-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Background Glow */}
                <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-blue-50 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-500">
                    {f.tag}
                  </span>

                  <span className="text-slate-200 text-5xl font-black leading-none">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {f.desc}
                </p>

                {/* Bottom Line */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-blue-600" />
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    Enterprise Ready
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section ref={testRef} className="py-20 sm:py-24 relative">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-40">
          <div
            className={`text-center mb-12 sm:mb-16 ${testIn ? "animate-up" : "opacity-0"}`}
          >
            <p className="text-blue-600 text-xs uppercase tracking-widest mb-4">
              Customer stories
            </p>
            <h2 className="lms-display text-3xl sm:text-4xl font-700">
              What our clients say
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`card-3d p-6 sm:p-8 rounded-3xl border border-gray-200 bg-gray-50 hover:border-gray-300 ${testIn ? "animate-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <div className="text-sm text-gray-900 font-500">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex gap-0.5 mt-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xs">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 sm:py-24 px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-40">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 to-purple-600/15 rounded-[40px] blur-2xl" />
          <div className="relative rounded-[40px] border border-gray-200 bg-gray-50 p-10 sm:p-16 text-center overflow-hidden noise-overlay">
            {[
              "-top-2 -left-2",
              "-top-2 -right-2",
              "-bottom-2 -left-2",
              "-bottom-2 -right-2",
            ].map((pos, i) => (
              <div
                key={i}
                className={`absolute ${pos} w-4 h-4 rounded-full bg-blue-500 opacity-60 animate-pulse`}
              />
            ))}
            <p className="text-blue-600 text-xs uppercase tracking-widest mb-4">
              Get started today
            </p>
            <h2 className="lms-display text-3xl sm:text-4xl lg:text-5xl font-700 mb-4">
              Ready to transform
              <br />
              <span className="shimmer-text">how your people learn?</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm sm:text-base">
              Join 1 500+ institutions already delivering better learning
              outcomes. Start free, scale when you're ready.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="relative pulse-btn px-8 sm:px-10 py-3 sm:py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 text-sm shadow-xl shadow-blue-900/10">
                Start for free →
              </button>
              <button className="px-8 sm:px-10 py-3 sm:py-4 rounded-2xl border border-gray-300 hover:border-gray-400 hover:bg-white transition-all duration-300 text-sm text-gray-600">
                Schedule a demo
              </button>
            </div>
            <p className="text-gray-400 text-xs mt-6">
              No credit card · 14-day trial · Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
