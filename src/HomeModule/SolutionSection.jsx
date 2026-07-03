import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.svg"

/* ── Data ── */
const services = [
  {
    id: 1,
    tag: "INFRASTRUCTURE",
    heading: "Enterprise Solutions",
    summary:
      "End-to-end digital transformation — from cloud strategy to full-scale deployment across complex organisations.",
    accent: "#2563EB",
    accentLight: "#EFF6FF",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    popup: {
      intro:
        "We architect, build, and operate enterprise technology stacks trusted by 150+ organisations across 15+ industries.",
      listTitle: "Core capabilities",
      items: [
        "Digital transformation strategy & execution",
        "Cloud migration — AWS, Azure, GCP",
        "Enterprise application development",
        "RPA, AI and intelligent automation",
        "BI dashboards & advanced analytics",
      ],
    },
  },
  {
    id: 2,
    tag: "eLEARNING",
    heading: "LMS Platform",
    summary:
      "Scalable learning systems built for global teams — SCORM-ready, gamified, and deeply analytical.",
    accent: "#0EA5E9",
    accentLight: "#F0F9FF",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    popup: {
      intro:
        "Enterprise-grade learning platforms designed for scale, engagement, and measurable outcomes.",
      listTitle: "Platform features",
      items: [
        "Custom LMS development",
        "SCORM / xAPI compliance",
        "Gamification & leaderboards",
        "Multilingual content support",
        "Real-time analytics dashboards",
      ],
    },
  },
  {
    id: 3,
    tag: "TALENT",
    heading: "Staffing & Hiring",
    summary:
      "Global recruitment with precision and speed — connecting top-tier professionals with the right teams.",
    accent: "#7C3AED",
    accentLight: "#F5F3FF",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    popup: {
      intro:
        "We reduce hiring cycles and improve retention by sourcing, vetting, and placing talent at global scale.",
      listTitle: "Specialisations",
      items: [
        "Tech & Engineering hiring",
        "Executive & C-suite search",
        "Contract and project staffing",
        "Offshore & nearshore teams",
      ],
    },
  },
  {
    id: 4,
    tag: "TRAINING",
    heading: "Corporate Programmes",
    summary:
      "Industry-ready skill development — from soft skills to technical bootcamps with live project experience.",
    accent: "#059669",
    accentLight: "#ECFDF5",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    popup: {
      intro:
        "Structured training programmes that convert graduates and professionals into deployable, confident contributors.",
      listTitle: "Programme modules",
      items: [
        "Soft skills & communication",
        "Technical bootcamps",
        "Interview & placement prep",
        "Live project assignments",
      ],
    },
  },
  {
    id: 5,
    tag: "CONTENT",
    heading: "Content Systems",
    summary:
      "Modern CMS architecture and digital content infrastructure for teams that move fast.",
    accent: "#DC2626",
    accentLight: "#FEF2F2",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    popup: {
      intro:
        "We build and migrate content management systems that let editorial and product teams own their own speed.",
      listTitle: "Platforms & services",
      items: [
        "WordPress & Drupal",
        "Headless CMS architecture",
        "eCommerce system builds",
        "Legacy migration & re-platforming",
      ],
    },
  },
  {
    id: 6,
    tag: "SECURITY",
    heading: "Cyber & Compliance",
    summary:
      "Enterprise security posture reviews, penetration testing, and regulatory compliance frameworks.",
    accent: "#D97706",
    accentLight: "#FFFBEB",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    popup: {
      intro:
        "We help organisations identify vulnerabilities, meet compliance obligations, and build lasting security culture.",
      listTitle: "Service areas",
      items: [
        "Penetration testing & red-teaming",
        "ISO 27001 & SOC 2 readiness",
        "Security architecture reviews",
        "Incident response planning",
      ],
    },
  },
];

/* ── Wave Text Heading ── */
function WaveHeading({ text, className = "" }) {
  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            animation: `waveChar 1.8s ease-in-out infinite`,
            animationDelay: `${i * 0.06}s`,
            display: char === " " ? "inline" : "inline-block",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

/* ── Typewriter ── */
function Typewriter({ text, speed = 14 }) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    setOut("");
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return (
    <span>
      {out}
      <span className="inline-block w-0.5 h-3.5 bg-blue-600 ml-0.5 align-middle animate-[blink_.7s_step-end_infinite]" />
    </span>
  );
}

/* ── Rotating Word ── */
const WORDS = ["Scale.", "Innovate.", "Transform.", "Grow."];
function RotatingWord() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((p) => (p + 1) % WORDS.length);
        setVisible(true);
      }, 400);
    }, 2200);
    return () => clearInterval(cycle);
  }, []);
  return (
    <span
      className="inline-block text-blue-600 transition-all duration-400"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-12px)",
        minWidth: 130,
        transition: "opacity .4s, transform .4s",
      }}
    >
      {WORDS[idx]}
    </span>
  );
}

/* ── Modal ── */
function Modal({ data, onClose }) {
  const overlayRef = useRef();
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center p-5"
      style={{
        background: "rgba(15,23,42,0.5)",
        backdropFilter: "blur(8px)",
        animation: "fadeIn .2s ease",
      }}
    >
      <div
        className="bg-white rounded-2xl w-full overflow-hidden shadow-2xl"
        style={{
          maxWidth: 540,
          maxHeight: "90vh",
          overflowY: "auto",
          animation: "slideUp .28s cubic-bezier(.22,1,.36,1)",
        }}
      >
        {/* image strip */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={data.image}
            alt={data.heading}
            className="w-full h-full object-cover block transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <div className="absolute bottom-4 left-6 text-white">
            <div className="text-xs font-semibold tracking-widest opacity-75 mb-1">{data.tag}</div>
            <div className="text-xl font-light">{data.heading}</div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-white text-lg transition-all duration-200 hover:bg-white/30 hover:scale-110"
            style={{ background: "rgba(255,255,255,.15)", backdropFilter: "blur(4px)", border: "none" }}
          >
            ×
          </button>
        </div>

        {/* body */}
        <div className="p-7">
          <p className="text-slate-500 leading-relaxed text-sm mb-5 min-h-[52px]">
            <Typewriter text={data.popup.intro} />
          </p>
          <div className="text-xs font-semibold tracking-widest mb-3" style={{ color: data.accent }}>
            {data.popup.listTitle.toUpperCase()}
          </div>
          <ul className="m-0 p-0 list-none">
            {data.popup.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 py-2 text-sm text-slate-700"
                style={{ borderBottom: i < data.popup.items.length - 1 ? "1px solid #F1F5F9" : "none" }}
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: data.accent }}
                />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-6 flex-wrap">
            <button
              className="flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                border: `1.5px solid ${data.accent}`,
                background: "transparent",
                color: data.accent,
                minWidth: 140,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = data.accentLight)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              Learn more
            </button>
            <button
              className="flex-1 py-3 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
              style={{
                background: data.accent,
                border: "none",
                boxShadow: `0 4px 20px ${data.accent}55`,
                minWidth: 140,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Get a quote →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Card ── */
function Card({ s, index, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white border border-slate-200 rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        transition: "transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.12), 0 0 0 1px ${s.accent}22`
          : "0 1px 4px rgba(0,0,0,0.06)",
        animation: `fadeUp .55s ${index * 0.07}s ease both`,
      }}
    >
      {/* Image with shimmer overlay */}
      <div className="h-44 overflow-hidden relative">
        <img
          src={s.image}
          alt={s.heading}
          className="w-full h-full object-cover block"
          style={{
            transition: "transform .6s ease, filter .4s ease",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            filter: hovered ? "brightness(1.05) saturate(1.15)" : "brightness(1) saturate(1)",
          }}
        />
        {/* gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-400"
          style={{
            background: `linear-gradient(to top, rgba(15,23,42,.65) 0%, transparent 55%)`,
          }}
        />
        {/* shimmer line on hover */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: hovered
              ? `linear-gradient(120deg, transparent 30%, ${s.accent}22 50%, transparent 70%)`
              : "transparent",
            transition: "background .5s ease",
          }}
        />
        <span className="absolute bottom-3 left-4 text-xs font-bold tracking-widest text-white/85">
          {s.tag}
        </span>
        {/* accent dot top-right */}
        <span
          className="absolute top-3 right-3 w-2 h-2 rounded-full transition-all duration-300"
          style={{
            background: s.accent,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(0)",
          }}
        />
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="m-0 mb-2 text-base font-medium text-slate-900">{s.heading}</h3>
        <p className="m-0 text-xs leading-relaxed text-slate-500">{s.summary}</p>
        <div
          className="mt-4 flex items-center gap-1.5 text-sm font-medium transition-all duration-200"
          style={{ color: s.accent }}
        >
          View details
          <span
            className="inline-block transition-transform duration-200"
            style={{ transform: hovered ? "translateX(5px)" : "translateX(0)" }}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Stats ── */
const STATS = [
  { value: "150+", label: "Enterprise clients" },
  { value: "15+", label: "Industries served" },
  { value: "98%", label: "Retention rate" },
  { value: "40+", label: "Countries reached" },
];

/* ── Nav ── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E2E8F022" : "none",
        boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="container-fluid py-4 flex items-center justify-between flex-wrap gap-3">
        {/* Logo */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
            style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
          >
            TG
          </div>
          <div className="min-w-0 truncate">
            <span className="text-slate-900 font-medium text-sm tracking-tight">Tech Genius</span>
            <span className="text-blue-600 font-medium text-sm tracking-tight"> Balaji</span>
            <span className="text-slate-400 text-xs ml-1 font-light">Solutions</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 flex-wrap">
          {["Services", "About", "Case Studies", "Careers"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200 font-light"
            >
              {item}
            </a>
          ))}
          <button
            className="text-sm px-5 py-2 rounded-full text-white font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
            style={{
              background: "linear-gradient(135deg,#2563EB,#7C3AED)",
              boxShadow: "0 4px 16px rgba(37,99,235,.35)",
              border: "none",
            }}
          >
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ── Main ── */
export default function SolutionSection() {
  const [active, setActive] = useState(null);

  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: "#FAFBFF",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes waveChar {
          0%, 60%, 100% { transform: translateY(0); }
          30%            { transform: translateY(-6px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1); opacity: .6; }
          100% { transform: scale(1.9); opacity: 0; }
        }

        * { box-sizing: border-box; }

        .btn-primary {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #2563EB, #7C3AED);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 13px 28px;
          font-size: 14px;
          cursor: pointer;
          transition: transform .2s, box-shadow .2s;
          box-shadow: 0 6px 24px rgba(37,99,235,.38);
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,.18) 50%, transparent 70%);
          background-size: 200% auto;
          opacity: 0;
          transition: opacity .3s;
        }
        .btn-primary:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 12px 32px rgba(37,99,235,.48); }
        .btn-primary:hover::before { opacity: 1; animation: shimmer .8s linear; }
        .btn-primary:active { transform: scale(.97); }

        .btn-ghost {
          background: transparent;
          color: #334155;
          border: 1.5px solid #CBD5E1;
          border-radius: 12px;
          padding: 13px 28px;
          font-size: 14px;
          cursor: pointer;
          transition: all .2s;
        }
        .btn-ghost:hover {
          border-color: #2563EB;
          color: #2563EB;
          transform: translateY(-2px);
          background: #EFF6FF;
        }
        .btn-ghost:active { transform: scale(.97); }

        .btn-cta {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #2563EB, #4F46E5);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 15px 36px;
          font-size: 14.5px;
          cursor: pointer;
          transition: transform .2s, box-shadow .2s;
          box-shadow: 0 8px 28px rgba(37,99,235,.45);
        }
        .btn-cta:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 16px 40px rgba(37,99,235,.55); }
        .btn-cta:active { transform: scale(.97); }
        .btn-cta::after {
          content: '';
          position: absolute;
          width: 60px; height: 60px;
          background: rgba(255,255,255,.12);
          border-radius: 50%;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .5s ease;
        }
        .btn-cta:hover::after { transform: translate(-50%,-50%) scale(3); }

        /* Fluid content width: no fixed max-width plateau. The side
           gutter itself scales with the viewport (4vw), so content keeps
           filling more of the screen as it grows, right up to very large
           monitors — instead of hitting a cap and leaving a static gap. */
        .container-fluid {
          width: 100%;
          box-sizing: border-box;
          margin-left: auto;
          margin-right: auto;
          padding-left: clamp(20px, 4vw, 96px);
          padding-right: clamp(20px, 4vw, 96px);
        }
      `}</style>

  

      {/* ─── COMPANY NAME HEADING ─── */}
      <div
        className="pt-28 pb-0 text-center px-4"
        style={{ animation: "fadeUp .6s ease both" }}
      >
        <p className="text-xs tracking-[.22em] text-slate-400 uppercase mb-3 font-light">
          Welcome to
        </p>
        <h1
  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight break-words"
  style={{ letterSpacing: "-0.025em", lineHeight: 1.1 }}
>
  <span style={{ color: "#2563EB" }}>
    <WaveHeading text="TechGenius" />
  </span>

  {" "}

  <span style={{ color: "#F97316" }}>
    <WaveHeading text="Balaji" />
  </span>

  {" "}

  <span style={{ color: "#2563EB" }}>
    <WaveHeading text="Solutions" />
  </span>
</h1>
        <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-300" />
          <p className="text-xs text-slate-400 tracking-widest uppercase font-light">
            Powering Digital Excellence
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-300" />
        </div>
      </div>

      {/* ─── HERO ─── */}
      <header
        className="container-fluid pt-0 pb- grid gap-10 lg:gap-14 items-center grid-cols-1 lg:grid-cols-2"
      >
        <div style={{ animation: "fadeUp .7s .1s ease both" }} className="min-w-0">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-blue-600 font-medium mb-6"
            style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}
          >
            <span
              className="relative w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"
            >
              <span
                className="absolute inset-0 rounded-full bg-blue-400"
                style={{ animation: "pulseRing 1.5s ease-out infinite" }}
              />
            </span>
            Global IT solutions partner
          </div>

          <h2
            className="m-0 mb-4 font-light text-slate-900 break-words"
            style={{ fontSize: "clamp(26px, 4vw, 42px)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
          >
            Built to help your
            <br />
            organisation <RotatingWord />
          </h2>

          <p className="m-0 mb-8 text-slate-500 text-base leading-relaxed max-w-md">
            From enterprise infrastructure to global talent — one partner for
            every layer of your digital organisation.
          </p>

          <div className="flex gap-3 flex-wrap">
            <button className="btn-primary">Explore services</button>
            <button className="btn-ghost">Book a call →</button>
          </div>
        </div>

        {/* Hero image */}
        <div
          className="rounded-2xl overflow-hidden relative group w-full"
          style={{
            height: "clamp(220px, 38vw, 380px)",
            animation: "fadeUp .7s .2s ease both",
            boxShadow: "0 32px 72px rgba(37,99,235,.14)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85"
            alt="Enterprise workspace"
            className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-105"
            style={{ filter: "saturate(1.05)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,.2) 0%, transparent 60%)",
            }}
          />
          {/* Shine sweep on hover */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "linear-gradient(120deg, transparent 35%, rgba(255,255,255,.1) 50%, transparent 65%)",
            }}
          />
          {/* Floating badge */}
          <div
            className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl p-3 max-w-[90%]"
            style={{
              background: "rgba(255,255,255,0.93)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
              animation: "float 4s ease-in-out infinite",
            }}
          >
            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-lg flex-shrink-0">
              🚀
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-slate-900">2,400+ projects</div>
              <div className="text-xs text-slate-500">delivered globally</div>
            </div>
          </div>
        </div>
      </header>

      {/* ─── STATS BAR ─── */}
      <div className="border-y border-slate-200 bg-white">
        <div className="container-fluid py-7 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-0">
          {STATS.map((st, i) => (
            <div
              key={i}
              className="text-center px-3 sm:px-5 min-w-0"
              style={{ borderRight: i < STATS.length - 1 ? "1px solid #E2E8F0" : "none" }}
            >
              <div
                className="text-2xl sm:text-3xl font-light mb-1"
                style={{
                  background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.02em",
                }}
              >
                {st.value}
              </div>
              <div className="text-xs text-slate-400">{st.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── SERVICES GRID ─── */}
      <section className="container-fluid py-14 sm:py-20">
        <div className="mb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <div className="text-xs font-semibold tracking-[.14em] text-blue-600 mb-3">
              WHAT WE DO
            </div>
            <h2
              className="m-0 font-light text-slate-900"
              style={{ fontSize: "clamp(22px, 3.5vw, 30px)", letterSpacing: "-0.02em" }}
            >
              Everything your organisation
              <br />
              needs to grow
            </h2>
          </div>
          <p className="m-0 text-slate-500 text-sm max-w-xs leading-relaxed text-left md:text-right">
            Six integrated practice areas — engineered to work independently or
            as a unified system.
          </p>
        </div>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Card key={s.id} s={s} index={i} onClick={() => setActive(s)} />
          ))}
        </div>
      </section>

      {/* ─── CTA STRIP ─── */}
      <div
        className="py-16 sm:py-20 text-center px-4"
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)",
        }}
      >
        <div className="text-xs font-semibold tracking-[.14em] text-blue-400 mb-4">
          READY TO START
        </div>
        <h2
          className="m-0 mb-4 font-light text-white break-words"
          style={{ fontSize: "clamp(24px, 4.5vw, 34px)", letterSpacing: "-0.02em" }}
        >
          Let's build something that lasts.
        </h2>
        <p className="text-slate-400 text-sm mb-8">
          Talk to a solutions architect — no sales pressure, just honest advice.
        </p>
        <button className="btn-cta">Schedule a free consultation →</button>

        {/* Bottom branding */}
        
        <div className="mt-16 flex items-center justify-center gap-3 flex-wrap px-4">
  <img
    src={logo}
    alt="Tech Genius Balaji Solutions"
    className="w-9 h-9 object-contain flex-shrink-0"
  />

  <span className="text-sm font-black tracking-[0.2em] break-words">
    <span className="text-blue-300">Techgenius</span>{" "}
    <span className="text-orange-300">Balaji</span>{" "}
    <span className="text-blue-300">Solutions</span>
  </span>
</div>
      </div>

      {/* ─── MODAL ─── */}
      {active && <Modal data={active} onClose={() => setActive(null)} />}

        {/* LMS views */}
        
    </div>
  );
}