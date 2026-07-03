import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Cpu,
  Brain,
  Cloud,
  ShieldCheck,
  Radio,
  Zap,
  Heart,
  GraduationCap,
  Globe,
  Award,
  Clock,
  BadgeCheck,
  Menu,
  X,
} from "lucide-react";

import {
  FaLinkedin as Linkedin,
  FaTwitter as Twitter,
  FaGithub as Github,
} from "react-icons/fa";

/* ----------------------------------------------------------------
   DATA
---------------------------------------------------------------- */

const DOMAINS = [
  {
    code: "SIL-01",
    title: "Silicon & Chip Design",
    desc: "Architect the dies that power billions of devices, from sensors to supercomputers.",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "AIM-02",
    title: "AI & Machine Learning",
    desc: "Train the models that turn raw signal into decisions at industrial scale.",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "CLD-03",
    title: "Cloud Platforms",
    desc: "Build the distributed systems that keep global operations running without pause.",
    icon: Cloud,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "SEC-04",
    title: "Cybersecurity",
    desc: "Defend critical infrastructure against threats that evolve faster than ever.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    code: "EMB-05",
    title: "Embedded Systems",
    desc: "Write the firmware that bridges hardware and software at the smallest scale.",
    icon: Radio,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop&sat=-50",
  },
  {
    code: "PWR-06",
    title: "Power Electronics",
    desc: "Engineer efficient power systems for everything from EVs to the grid itself.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
  },
];

const GALLERY = [
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
    caption: "Cross-functional teams reviewing a chip layout in Bengaluru",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1400&auto=format&fit=crop",
    caption: "Bench testing a prototype board in the hardware lab",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop",
    caption: "Fresh graduates onboarding into the engineering rotation program",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop",
    caption: "Annual internal hack day, judged by senior architects",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1400&auto=format&fit=crop",
    caption: "Campus floor between the fab simulation and data center teams",
  },
];

const STATS = [
  { value: 18500, suffix: "+", label: "Engineers worldwide" },
  { value: 42, suffix: "", label: "Countries in operation" },
  { value: 3200, suffix: "+", label: "Patents filed to date" },
  { value: 35, suffix: "", label: "Years building hardware" },
];

const BENEFITS = [
  { icon: Heart, title: "Health & wellness cover", desc: "Full medical, dental, and mental health support for you and your family." },
  { icon: GraduationCap, title: "Learning stipend", desc: "An annual budget for courses, conferences, and technical certifications." },
  { icon: Globe, title: "Global mobility", desc: "Short and long-term placements across our 42-country engineering network." },
  { icon: Award, title: "Performance bonus", desc: "Compensation tied directly to team and individual delivery, paid twice a year." },
  { icon: Clock, title: "Flexible hybrid model", desc: "Lab and bench roles on-site, everything else split however your team works best." },
  { icon: BadgeCheck, title: "Paid certifications", desc: "Cloud, security, and silicon design credentials, fully sponsored." },
];

const DEPARTMENTS = ["All", "Engineering", "AI & Data", "Cloud", "Security", "Business"];

const ROLES = [
  { title: "Senior Silicon Design Engineer", dept: "Engineering", location: "Bengaluru, IN" },
  { title: "Machine Learning Engineer", dept: "AI & Data", location: "Hyderabad, IN" },
  { title: "Cloud Platform Architect", dept: "Cloud", location: "Remote" },
  { title: "Cybersecurity Analyst", dept: "Security", location: "Pune, IN" },
  { title: "Embedded Firmware Engineer", dept: "Engineering", location: "Bengaluru, IN" },
  { title: "Business Strategy Consultant", dept: "Business", location: "Mumbai, IN" },
];

const TICKER = [
  "SILICON DESIGN",
  "AI RESEARCH",
  "CLOUD PLATFORMS",
  "CYBERSECURITY",
  "EMBEDDED SYSTEMS",
  "POWER ELECTRONICS",
  "DATA SCIENCE",
  "STRATEGY & OPS",
];


function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      });
    }, options);
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}

function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .7s cubic-bezier(.16,1,.3,1) ${delay}s, transform .7s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}

function Counter({ value, duration = 1800, inView }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    let start = null;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return <>{display.toLocaleString()}</>;
}

/* ----------------------------------------------------------------
   BUTTONS
---------------------------------------------------------------- */

function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button className={`btn-primary cp-display ${className}`} {...props}>
      <span>{children}</span>
      <ArrowRight size={17} strokeWidth={2.4} />
    </button>
  );
}

function SecondaryButton({ children, className = "", ...props }) {
  return (
    <button className={`btn-secondary cp-display ${className}`} {...props}>
      <span>{children}</span>
      <ArrowUpRight size={17} strokeWidth={2.4} />
    </button>
  );
}

/* ----------------------------------------------------------------
   SCHEMATIC DIVIDER (signature motif)
---------------------------------------------------------------- */

function SchematicDivider({ dark = false }) {
  return (
    <div className={`schematic-divider ${dark ? "is-dark" : ""}`}>
      <span className="schematic-divider-node" />
      <span className="schematic-divider-line" />
      <span className="schematic-divider-node" />
      <span className="schematic-divider-line" />
      <span className="schematic-divider-node" />
    </div>
  );
}

/* ----------------------------------------------------------------
   NAVBAR
---------------------------------------------------------------- */

const NAV_LINKS = [
  { label: "Domains", href: "#domains" },
  { label: "Life Here", href: "#life" },
  { label: "Benefits", href: "#benefits" },
  { label: "Open Roles", href: "#roles" },
];



/* ----------------------------------------------------------------
   MAIN COMPONENT
---------------------------------------------------------------- */

export default function Career() {
  const [activeDept, setActiveDept] = useState("All");
  const [activeImg, setActiveImg] = useState(0);
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveImg((i) => (i + 1) % GALLERY.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);
useEffect(() => {
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  return () => window.removeEventListener("scroll", onScroll);
}, []);
  

  const filteredRoles =
    activeDept === "All" ? ROLES : ROLES.filter((r) => r.dept === activeDept);

  return (
    <div className="cp-root">
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

        :root{
          --accent:#E2231A;
          --accent-dark:#A8130B;
          --ink:#14171C;
          --muted:#5B6270;
          --paper:#F6F7F9;
          --line:#E1E4EA;
          --dark-bg:#0B0E14;
          --dark-surface:#151A22;
          --dark-line:#262C36;
        }
        .cp-root{
          font-family:'IBM Plex Sans',sans-serif;
          color:var(--ink);
          background:#fff;
          overflow-x:hidden;
          width:100%;
        }
        .cp-display{ font-family:'IBM Plex Sans',sans-serif; font-weight:700; letter-spacing:-0.02em; }
        .cp-mono{ font-family:'IBM Plex Mono',monospace; letter-spacing:.04em; }
        .cp-muted{ color: var(--muted); }
        .cp-accent-text{ color: var(--accent); }
        .cp-border-line{ border-color: var(--line); }
        .cp-bg-accent{ background: var(--accent); }
        .cp-text-11{ font-size: 11px; }
        .cp-hero-title{ font-size: clamp(2.6rem, 9vw, 6.5rem); line-height: 0.95; }
        .benefit-card{ border:1px solid var(--line); transition: border-color .3s ease; }
        .benefit-card:hover{ border-color: var(--ink); }

        /* ---- buttons ---- */
        .btn-primary, .btn-secondary{
          position:relative;
          display:inline-flex;
          align-items:center;
          gap:.65rem;
          font-weight:600;
          font-size: clamp(.85rem, 1.4vw, .95rem);
          padding: clamp(.8rem, 1.6vw, 1rem) clamp(1.2rem, 2.6vw, 1.7rem);
          cursor:pointer;
          clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));
          transition: background .25s ease, color .25s ease, border-color .25s ease, transform .25s ease;
          white-space: nowrap;
        }
        .btn-primary{ background:var(--accent); color:#fff; border:none; }
        .btn-primary:hover{ background:var(--accent-dark); transform: translateY(-2px); }
        .btn-primary svg{ transition: transform .25s ease; }
        .btn-primary:hover svg{ transform: translateX(4px); }

        .btn-secondary{ background:transparent; color:var(--ink); border:1.5px solid var(--line); }
        .btn-secondary:hover{ border-color:var(--ink); background:var(--paper); transform: translateY(-2px); }
        .btn-secondary svg{ transition: transform .25s ease; }
        .btn-secondary:hover svg{ transform: translate(2px,-2px); }

        .btn-primary:focus-visible, .btn-secondary:focus-visible{
          outline:2px solid var(--accent); outline-offset:3px;
        }

        /* ---- schematic divider ---- */
        .schematic-divider{ display:flex; align-items:center; justify-content:center; gap:0; padding: 0 1.5rem; }
        .schematic-divider-node{ width:6px; height:6px; border-radius:50%; background:var(--accent); flex:none; }
        .schematic-divider-line{ flex:1; max-width:120px; height:1px; background:var(--line); }
        .schematic-divider.is-dark .schematic-divider-line{ background:var(--dark-line); }

        /* ---- hero grid background ---- */
        .cp-grid-bg{
          background-image:
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 56px 56px;
        }
        .cp-grid-fade{
          position:absolute; inset:0;
          background: radial-gradient(circle at 50% 18%, transparent 0%, #fff 72%);
        }
        @keyframes pulse-node{
          0%,100%{ transform:scale(1); opacity:.55; }
          50%{ transform:scale(1.7); opacity:1; }
        }
        .pulse-dot{ animation: pulse-node 2.4s ease-in-out infinite; }
        .live-dot{
          width:8px; height:8px; border-radius:50%; background:#16a34a; display:inline-block;
          animation: pulse-node 2s ease-in-out infinite;
          flex-shrink:0;
        }

        /* ---- marquee ---- */
        .marquee-wrap{ overflow:hidden; border-top:1px solid var(--line); border-bottom:1px solid var(--line); width:100%; }
        .marquee-track{ display:flex; width:max-content; animation: marquee 32s linear infinite; }
        .marquee-track:hover{ animation-play-state: paused; }
        @keyframes marquee{ from{ transform: translateX(0); } to{ transform: translateX(-50%); } }
        .marquee-item{
          display:flex; align-items:center; gap:.65rem;
          padding: 1.15rem 2.4rem;
          font-size:.82rem; color:var(--muted); white-space:nowrap;
        }
        .marquee-dot{ width:5px; height:5px; border-radius:50%; background:var(--accent); flex:none; }

        /* ---- chip cards ---- */
        .chip-card{
          position:relative; background:#fff; border:1px solid var(--line);
          border-radius:16px; overflow:hidden;
          transition: transform .4s cubic-bezier(.16,1,.3,1), box-shadow .4s ease, border-color .4s ease;
        }
        .chip-card:hover{
          transform: translateY(-8px);
          box-shadow: 0 28px 56px -28px rgba(20,23,28,.28);
          border-color: var(--ink);
        }
        .chip-pins{ display:flex; justify-content:space-evenly; padding: 12px 20px 0; }
        .chip-pins span{ width:3px; height:11px; background:var(--line); border-radius:1px; transition: background .3s ease; }
        .chip-card:hover .chip-pins span{ background:var(--accent); }
        .chip-image-wrap{ overflow:hidden; margin-top:10px; }
        .chip-image-wrap img{ transition: transform .7s cubic-bezier(.16,1,.3,1); width:100%; height:100%; object-fit:cover; }
        .chip-card:hover .chip-image-wrap img{ transform: scale(1.08); }

        /* ---- demo / gallery frame ---- */
        .demo-frame{
          background:var(--dark-surface);
          border-radius:20px;
          padding:16px;
          box-shadow: 0 50px 90px -45px rgba(0,0,0,.55);
          width:100%;
        }
        .demo-topbar{ display:flex; align-items:center; gap:6px; padding: 2px 6px 14px; }
        .demo-topbar span{ width:8px; height:8px; border-radius:50%; background:#2c333f; }
        .demo-screen{
          position:relative; border-radius:12px; overflow:hidden;
          aspect-ratio: 16/10; background:#000;
        }
        .demo-screen img{
          position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
          opacity:0; transition: opacity 1s ease, transform 6s ease;
          transform: scale(1.02);
        }
        .demo-screen img.is-active{ opacity:1; transform: scale(1.08); }
        .demo-caption{
          position:absolute; left:0; right:0; bottom:0;
          padding: 1.1rem 1.3rem;
          background: linear-gradient(to top, rgba(0,0,0,.85), transparent);
          color:#fff; font-size: clamp(.72rem, 1.6vw, .85rem);
        }
        .demo-thumbs{ display:flex; gap:8px; margin-top:14px; padding: 0 4px; }
        .demo-thumb{
          height:4px; flex:1; background:var(--dark-line); border:none; border-radius:2px;
          cursor:pointer; transition: background .3s ease;
        }
        .demo-thumb.is-active{ background:var(--accent); }

        /* ---- stats ---- */
        .stat-card{ border-top:2px solid var(--line); padding-top:1.6rem; }
        .stat-num{ font-size: clamp(1.9rem, 4.6vw, 3.6rem); font-weight:700; line-height:1; }
        .stat-bar{ height:3px; background:var(--line); margin-top:1.2rem; overflow:hidden; }
        .stat-bar-fill{
          height:100%; background:var(--accent);
          transform: scaleX(0); transform-origin:left;
          transition: transform 1.3s cubic-bezier(.16,1,.3,1);
        }
        .stat-bar-fill.is-in-view{ transform: scaleX(1); }

        /* ---- department tabs ---- */
        .dept-tab{
          font-family:'IBM Plex Mono',monospace; font-size:.8rem;
          padding:.55rem 1.05rem; border:1px solid var(--line); border-radius:999px;
          color:var(--muted); background:#fff; cursor:pointer;
          transition: all .25s ease;
          white-space:nowrap;
        }
        .dept-tab.is-active{ background:var(--ink); color:#fff; border-color:var(--ink); }
        .dept-tab:not(.is-active):hover{ border-color: var(--ink); color: var(--ink); }

        /* ---- role row ---- */
        .role-row{
          border:1px solid var(--line); border-radius:14px;
          transition: border-color .3s ease, background .3s ease, transform .3s ease;
        }
        .role-row:hover{ border-color: var(--accent); background: var(--paper); transform: translateX(4px); }

        /* ---- scroll progress ---- */
        .cp-scroll-progress{
          position:fixed; top:0; left:0; height:3px; background:var(--accent);
          z-index:70; transition: width .1s linear;
        }

        /* ---- navbar ---- */
        html{ scroll-behavior:smooth; }
        .cp-nav{
          position:fixed; top:0; left:0; right:0; z-index:60;
          background: rgba(255,255,255,0);
          border-bottom:1px solid transparent;
          transition: background .3s ease, border-color .3s ease, box-shadow .3s ease;
        }
        .cp-nav.is-scrolled{
          background: rgba(255,255,255,.88);
          backdrop-filter: blur(10px);
          border-color: var(--line);
          box-shadow: 0 8px 30px -20px rgba(20,23,28,.25);
        }
        .cp-nav-inner{
          display:flex; align-items:center; justify-content:space-between;
          padding: 1.3rem 0; transition: padding .3s ease;
        }
        .cp-nav.is-scrolled .cp-nav-inner{ padding: .9rem 0; }
        .cp-nav-logo{
          display:flex; align-items:center; gap:.6rem;
          font-weight:700; font-size:1.05rem; letter-spacing:.02em;
          color:var(--ink); text-decoration:none;
        }
        .cp-nav-logo-mark{
          width:18px; height:18px; border-radius:4px; background:var(--ink);
          position:relative; flex:none;
        }
        .cp-nav-logo-mark::after{
          content:""; position:absolute; inset:5px; background:var(--accent); border-radius:2px;
        }
        .cp-nav-links{ display:none; gap:2.2rem; }
        @media (min-width:768px){ .cp-nav-links{ display:flex; } }
        .cp-nav-link{
          position:relative; font-size:.78rem; color:var(--muted); text-decoration:none; padding-bottom:4px;
        }
        .cp-nav-link::after{
          content:""; position:absolute; left:0; right:100%; bottom:0; height:1px; background:var(--accent);
          transition: right .25s ease;
        }
        .cp-nav-link:hover{ color:var(--ink); }
        .cp-nav-link:hover::after{ right:0; }
        .cp-nav-actions{ display:flex; align-items:center; gap:1rem; }
        .cp-nav-btn{ padding:.65rem 1.2rem !important; font-size:.8rem !important; text-decoration:none; }
        .cp-nav-burger{ background:none; border:none; color:var(--ink); cursor:pointer; padding:4px; line-height:0; }
        .cp-nav-mobile{
          max-height:0; overflow:hidden; background:#fff;
          display:flex; flex-direction:column;
          transition: max-height .35s ease;
        }
        .cp-nav-mobile.is-open{ max-height:340px; border-top:1px solid var(--line); }
        .cp-nav-mobile a{
          padding: 1rem 1.5rem; font-size:.85rem; color:var(--ink);
          text-decoration:none; border-bottom:1px solid var(--line);
        }
        .cp-nav-mobile-cta{ color:var(--accent) !important; font-weight:600; }

        /* ---- footer ---- */
        .cp-footer{ background:var(--dark-bg); color:#fff; border-top:1px solid var(--dark-line); }
        .cp-footer-grid{ display:grid; grid-template-columns: 1fr; }
        @media (min-width:768px){
          .cp-footer-grid{ grid-template-columns: 1.4fr 1fr 1fr 1fr; }
        }
        .cp-footer-blurb{ color: rgba(255,255,255,.55); max-width:320px; line-height:1.6; }
        .cp-footer-social{
          width:34px; height:34px; border-radius:50%; border:1px solid var(--dark-line);
          display:flex; align-items:center; justify-content:center; color:#fff; text-decoration:none;
          transition: border-color .25s ease, background .25s ease, transform .25s ease;
        }
        .cp-footer-social:hover{ border-color:var(--accent); background:var(--accent); transform: translateY(-3px); }
        .cp-footer-heading{ font-size:.7rem; color: rgba(255,255,255,.4); margin-bottom:1.1rem; }
        .cp-footer-list{ display:flex; flex-direction:column; gap:.75rem; list-style:none; padding:0; margin:0; }
        .cp-footer-list a{ color: rgba(255,255,255,.7); text-decoration:none; font-size:.875rem; transition: color .2s ease; }
        .cp-footer-list a:hover{ color:#fff; }
        .cp-footer-bottom{
          margin-top:4rem; padding-top:2rem; border-top:1px solid var(--dark-line);
          display:flex; flex-wrap:wrap; justify-content:space-between; gap:1rem;
          font-size:.78rem; color: rgba(255,255,255,.45);
        }
        .cp-footer-top{ color: rgba(255,255,255,.7); text-decoration:none; transition: color .2s ease; }
        .cp-footer-top:hover{ color:#fff; }

        img{ max-width:100%; }

        @media (prefers-reduced-motion: reduce){
          *{ animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; }
        }
      `}</style>

      <div className="cp-scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* ============================ HERO ============================ */}
    <div className="relative z-10 w-full mx-auto px-4 sm:px-6 xl:px-12 2xl:px-20 pt-24 pb-16 sm:pt-28 sm:pb-24 md:pt-36 md:pb-32">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="min-w-0">
      <Reveal>
        <div className="cp-mono inline-flex items-center gap-2 text-xs cp-muted border cp-border-line rounded-full px-4 py-1.5 flex-wrap">
          <span className="live-dot" />
          <span>CAREERS · GLOBAL ENGINEERING · 1,248 OPEN ROLES</span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="mt-8 font-extrabold leading-[0.95] tracking-[-0.04em] text-gray-900" style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}>
          Software Engineering
          <br />
          For Modern
          <br />
          <span style={{ color: "var(--accent)" }}>
            Businesses
          </span>
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-8 max-w-xl text-base sm:text-lg cp-muted leading-relaxed">
          TechGenius Systems designs the silicon, software and infrastructure
          that global industry runs on. Join the engineers, researchers
          and strategists shipping work measured in decades, not sprints.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-10 flex flex-wrap gap-4">
          <PrimaryButton>View Open Roles</PrimaryButton>
          <SecondaryButton>Life At TechGenius</SecondaryButton>
        </div>
      </Reveal>
    </div>

    {/* RIGHT IMAGE */}
    <Reveal delay={0.4}>
      <div className="relative">
        <div className="absolute -inset-4 bg-red-500/10 blur-3xl rounded-3xl" />

        <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-2xl bg-white">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop"
            alt="Software Dashboard"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </Reveal>

  </div>
</div>

      {/* ============================ MARQUEE ============================ */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span className="marquee-item cp-mono" key={i}>
              <span className="marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ============================ INTRO ============================ */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="w-full mx-auto px-4 sm:px-6 xl:px-12 2xl:px-20 text-center">
          <Reveal>
            <p className="cp-mono text-xs cp-accent-text mb-4">02 / DISCIPLINES</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="cp-display font-semibold tracking-tight" style={{ fontSize: "clamp(1.9rem, 5vw, 3.75rem)" }}>
              Whatever You Build Best
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 cp-muted max-w-2xl mx-auto text-base sm:text-lg">
              From chip floorplans to cloud control planes, every discipline
              here ships products used at industrial scale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================ DOMAINS ============================ */}
      <section id="domains" className="w-full mx-auto px-4 sm:px-6 xl:px-12 2xl:px-20 pb-16 sm:pb-24 lg:pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-7">
          {DOMAINS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.code} delay={(index % 3) * 0.08}>
                <div className="chip-card h-full flex flex-col">
                  <div className="chip-pins">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <span key={i} />
                    ))}
                  </div>

                  <div className="chip-image-wrap h-48 sm:h-56">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between">
                      <span className="cp-mono cp-text-11 cp-muted">{item.code}</span>
                      <Icon size={18} strokeWidth={1.8} style={{ color: "var(--accent)" }} />
                    </div>

                    <h3 className="cp-display mt-4 text-lg sm:text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 cp-muted text-sm leading-relaxed flex-1">
                      {item.desc}
                    </p>

                    <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--accent)" }}>
                      Explore roles
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <SchematicDivider />

      {/* ============================ STUDENTS ============================ */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="w-full mx-auto px-4 sm:px-6 xl:px-12 2xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden border cp-border-line">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                alt="Graduate engineers onboarding"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <div className="min-w-0">
            <Reveal>
              <p className="cp-mono text-xs cp-accent-text mb-4">03 / EARLY CAREER</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="cp-display font-semibold tracking-tight" style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)" }}>
                Students & Fresh Graduates
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 cp-muted leading-relaxed text-base sm:text-lg">
                Rotational engineering programs, paid internships and a
                two-year mentorship track designed to get you shipping real
                hardware and code in your first quarter, not your third year.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8">
                <PrimaryButton>Explore Graduate Programs</PrimaryButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================ LIFE / DEMO GALLERY ============================ */}
      <section id="life" style={{ background: "var(--dark-bg)" }} className="py-16 sm:py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <p className="cp-mono text-xs text-center mb-4" style={{ color: "var(--accent)" }}>
              04 / INSIDE THE BUILD
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="cp-display text-white text-center font-semibold tracking-tight" style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)" }}>
              Life At TechGenius
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 sm:mt-14">
            <div className="demo-frame max-w-3xl mx-auto">
              <div className="demo-topbar">
                <span />
                <span />
                <span />
              </div>

              <div className="demo-screen">
                {GALLERY.map((g, i) => (
                  <img
                    key={i}
                    src={g.image}
                    alt={g.caption}
                    className={i === activeImg ? "is-active" : ""}
                  />
                ))}
                <div className="demo-caption cp-mono">
                  {String(activeImg + 1).padStart(2, "0")} / {String(GALLERY.length).padStart(2, "0")} — {GALLERY[activeImg].caption}
                </div>
              </div>

              <div className="demo-thumbs">
                {GALLERY.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`demo-thumb ${i === activeImg ? "is-active" : ""}`}
                    aria-label={`Show photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ STATS ============================ */}
      <section ref={statsRef} className="py-16 sm:py-24 lg:py-28">
        <div className="w-full mx-auto px-4 sm:px-6 xl:px-12 2xl:px-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
          {STATS.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="stat-card">
                <div className="cp-display stat-num" style={{ color: "var(--accent)" }}>
                  <Counter value={item.value} inView={statsInView} />
                  {item.suffix}
                </div>
                <p className="mt-3 cp-muted text-sm">{item.label}</p>
                <div className="stat-bar">
                  <div className={`stat-bar-fill ${statsInView ? "is-in-view" : ""}`} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SchematicDivider />

      {/* ============================ BENEFITS ============================ */}
      <section id="benefits" className="py-16 sm:py-24 lg:py-28">
        <div className="w-full mx-auto px-4 sm:px-6 xl:px-12 2xl:px-20">
          <Reveal>
            <p className="cp-mono text-xs text-center mb-4" style={{ color: "var(--accent)" }}>05 / WHY HERE</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="cp-display text-center font-semibold tracking-tight mb-12 sm:mb-16" style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)" }}>
              You Belong Here
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {BENEFITS.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={index} delay={(index % 3) * 0.08}>
                  <div className="benefit-card p-6 sm:p-8 rounded-2xl h-full transition-colors">
                    <Icon size={22} strokeWidth={1.8} style={{ color: "var(--accent)" }} />
                    <h3 className="cp-display mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2.5 text-sm cp-muted leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* ============================ CTA ============================ */}
      <section style={{ background: "var(--dark-bg)" }} className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 cp-grid-bg" style={{ opacity: 0.25 }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="cp-display text-white font-semibold tracking-tight" style={{ fontSize: "clamp(2rem, 5.5vw, 3.75rem)" }}>
              Your Next Build Starts Here
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-white/60 text-base sm:text-lg">
              Join TechGenius Systems and ship work that outlasts the trend cycle.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex justify-center">
              <PrimaryButton>Explore All Careers</PrimaryButton>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}