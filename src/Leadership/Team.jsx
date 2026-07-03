import React, { useEffect, useRef, useState } from "react";
import biswa from "../assets/team/biswaOfc.png"
import tghr1 from "../assets/team/debaOfc.png"
import ashisTG from "../assets/team/ashisOfc.png"
import sujalTG from "../assets/team/sujalOfc.png"
import sudhanshu from "../assets/team/sudhanshuOfc.png"
import hr2TG from "../assets/team/hr2TG.png"

const HERO_TEAM = [
  {
    name: "Biswabhusan Sahoo",
    role: "Senior Java Developer",
    quote: "Every customer conversation here actually shapes the roadmap.",
    photo: biswa,
    tilt: "-12deg",
  },
  {
    name: "Sujal Satapathy",
    role: "Java Developer",
    quote: "We start with a real user problem, never a feature for its own sake.",
    photo: sujalTG,
    tilt: "9deg",
  },
  {
    name: "Ashis kumar behera",
    role: "Java Developer",
    quote: "We ship daily, and the architecture never holds us back.",
    photo: ashisTG,
    tilt: "-8deg",
  },
  {
    name: "Sudhanshu Kumar Swain",
    role: "Frontend Developer",
    quote: "Our brand voice is honest first, clever second — customers notice.",
    photo: sudhanshu,
    tilt: "11deg",
  },
  {
    name: "Debasis Jena",
    role: "HR Executive",
    quote: "Code review here is a teaching moment, not a gate.",
    photo: tghr1,
    tilt: "-10deg",
  },
  {
    name: "Arpita Mohapatra",
    role: "HR Executive",
    quote: "Critiques here are blunt and kind at once — the work gets better fast.",
    photo: hr2TG,
    tilt: "7deg",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Biswabhusan Sahoo",
    role: "Senior Java Developer",
    quote: "What I love here is that every customer conversation actually shapes the roadmap — we're not just building features, we're solving real problems.",
    photo: biswa,
    caption: "Building the core of our product with precision and passion.",
  },
  {
    name: "Sujal Satapathy",
    role: "Java Developer",
    quote: "We move fast without breaking trust — that balance is rare, and it's exactly why I stayed and keep growing every single day.",
    photo: sujalTG,
    caption: "Turning complex logic into clean, reliable backend systems.",
  },
  {
    name: "Ashis kumar behera",
    role: "Java Developer",
    quote: "Every feature starts with a real user problem, never a feature for its own sake. That discipline makes our codebase something I'm proud of.",
    photo: ashisTG,
    caption: "Crafting scalable solutions that stand the test of time.",
  },
  {
    name: "Sudhanshu kumar swain",
    role: "Frontend Developer",
    quote: "We ship production code daily, and the architecture never feels like it's holding us back. That kind of freedom is rare in this industry.",
    photo: sudhanshu,
    caption: "Shaping every pixel of the user experience with care.",
  },
  {
    name: "Debasis Jena",
    role: "HR Executive",
    quote: "The brand voice here is honest first, clever second — and customers notice. It's refreshing to work somewhere that values authenticity.",
    photo: tghr1,
    caption: "Connecting talent with opportunity to grow our amazing team.",
  },
  {
    name: "Arpita Mohapatra",
    role: "HR Executive",
    quote: "Code review here is a teaching moment, not a gate — that's how the whole team levels up and builds something truly worth being proud of.",
    photo: hr2TG,
    caption: "Nurturing a culture where people and performance both thrive.",
  },
  {
    name: "Emily Johnson",
    role: "UX Designer",
    quote: "Design critiques are blunt and kind at the same time — it makes the work better, fast. I've grown more here than anywhere else in my career.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
    caption: "Designing experiences that feel effortless and look beautiful.",
  },
  {
    name: "Jillie Bernard",
    role: "People & Culture",
    quote: "People actually use their vacation days here, and leadership models it first. Work-life balance isn't a policy here — it's part of the culture.",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&q=80",
    caption: "Championing the well-being and growth of every team member.",
  },
];

// --------------------------- Helpers ------------------------------

function getRoleBadgeStyle(role) {
  const r = role.toLowerCase();
  if (r.includes("senior"))
    return { bg: "bg-violet-100", text: "text-violet-700", border: "border-violet-200", dot: "bg-violet-400" };
  if (r.includes("java"))
    return { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200", dot: "bg-blue-400" };
  if (r.includes("frontend"))
    return { bg: "bg-cyan-100", text: "text-cyan-700", border: "border-cyan-200", dot: "bg-cyan-400" };
  if (r.includes("ux") || r.includes("design"))
    return { bg: "bg-pink-100", text: "text-pink-700", border: "border-pink-200", dot: "bg-pink-400" };
  if (r.includes("hr") || r.includes("people") || r.includes("culture"))
    return { bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-400" };
  return { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200", dot: "bg-slate-400" };
}

// --------------------------- Typing Hook ------------------------------

function useTypingEffect(text, isActive, speed = 22) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isActive) {
      setDisplayed("");
      setDone(false);
      return;
    }
    let i = 0;
    setDisplayed("");
    setDone(false);

    function type() {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        if (i === text.length) setDone(true);
        i++;
        timeoutRef.current = setTimeout(type, speed);
      }
    }
    timeoutRef.current = setTimeout(type, 120);
    return () => clearTimeout(timeoutRef.current);
  }, [isActive, text, speed]);

  return { displayed, done };
}

// --------------------------- Sub Components ------------------------------

function HeroCard({ member, alt }) {
  return (
    <div
      className="group relative h-60 w-44 shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-200/70 transition-all duration-300 ease-out hover:z-20 hover:-translate-y-3 hover:rotate-0 hover:shadow-2xl hover:shadow-indigo-200/60 sm:h-72 sm:w-56"
      style={{ transform: `rotate(${member.tilt})` }}
    >
      <img
        src={member.photo}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-indigo-700/95 via-indigo-700/40 to-transparent p-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
        <p className="text-[11px] font-medium uppercase tracking-wide text-indigo-200">
          {member.role}
        </p>
        <h3 className="mt-0.5 text-base font-semibold text-white">
          {member.name}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-indigo-50">
          &ldquo;{member.quote}&rdquo;
        </p>
      </div>
    </div>
  );
}

function TeamCard({ member, index, visible, isHovered, onHover, onLeave }) {
  const { displayed, done } = useTypingEffect(member.quote, isHovered, 22);
  const badge = getRoleBadgeStyle(member.role);

  return (
    <div
      className="transition-all duration-700 ease-out"
      style={{
        transitionDelay: `${(index % 3) * 80}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
      }}
    >
      {/* Outer wrapper handles blur + scale for non-hovered cards */}
      <div
        className="transition-all duration-300 ease-out"
        style={{
          filter: isHovered === false ? "blur(2px)" : "none",
          transform: isHovered === false ? "scale(0.97)" : isHovered ? "scale(1.02)" : "scale(1)",
          zIndex: isHovered ? 10 : 1,
          position: "relative",
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div
          className="rounded-2xl border bg-white overflow-hidden transition-all duration-300 ease-out"
          style={{
            borderColor: isHovered ? "#818cf8" : "#e2e8f0",
            boxShadow: isHovered
              ? "0 20px 48px -8px rgba(99,102,241,0.22), 0 4px 16px -2px rgba(99,102,241,0.12)"
              : "0 1px 4px 0 rgba(0,0,0,0.04)",
          }}
        >
          {/* ---- Main row: image left + info right ---- */}
          <div className="flex items-stretch gap-0">

            {/* Left: image — rounded on hover, circular at rest */}
            <div className="shrink-0 p-4 flex items-center">
              <div
                className="overflow-hidden transition-all duration-500 ease-out"
                style={{
                  width: isHovered ? "88px" : "68px",
                  height: isHovered ? "88px" : "68px",
                  borderRadius: isHovered ? "12px" : "50%",
                  border: `2.5px solid ${isHovered ? "#818cf8" : "#e2e8f0"}`,
                  flexShrink: 0,
                }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right: name + role badge + typing quote */}
            <div className="flex-1 py-4 pr-4 flex flex-col justify-center min-w-0">
              <h3
                className="text-sm font-semibold leading-tight truncate transition-colors duration-300"
                style={{ color: isHovered ? "#4338ca" : "#0f172a" }}
              >
                {member.name}
              </h3>

              {/* Role highlight badge */}
              <span
                className={`mt-1.5 inline-flex items-center gap-1.5 self-start rounded-full px-2.5 py-0.5 text-[10px] font-semibold border ${badge.bg} ${badge.text} ${badge.border}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${badge.dot} shrink-0`} />
                {member.role}
              </span>

              {/* Typing quote — only visible on hover */}
              <div
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{
                  maxHeight: isHovered ? "120px" : "0px",
                  opacity: isHovered ? 1 : 0,
                  marginTop: isHovered ? "10px" : "0px",
                }}
              >
                <p className="text-xs leading-relaxed" style={{ color: "#4f46e5" }}>
                  &ldquo;{displayed}
                  {!done && (
                    <span
                      className="inline-block w-0.5 h-3 ml-0.5 align-middle animate-pulse"
                      style={{ backgroundColor: "#6366f1" }}
                    />
                  )}
                  {done && <>&rdquo;</>}
                </p>
              </div>
            </div>

          </div>

          {/* ---- Bottom: company caption ---- */}
          <div
            className="px-4 py-2.5 transition-all duration-300"
            style={{
              borderTop: `1px solid ${isHovered ? "#e0e7ff" : "#f1f5f9"}`,
              backgroundColor: isHovered ? "#f5f3ff" : "#f8fafc",
            }}
          >
            <p
              className="text-[11px] leading-snug transition-colors duration-300"
              style={{ color: isHovered ? "#6366f1" : "#94a3b8" }}
            >
              <span
                className="mr-1.5 font-semibold"
                style={{ color: isHovered ? "#4f46e5" : "#64748b" }}
              >
                ✦
              </span>
              {member.caption}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

// ------------------------------ Main Export -------------------------------

export default function Team() {
  const loopTeam = [...HERO_TEAM, ...HERO_TEAM, ...HERO_TEAM];

  const [gridVisible, setGridVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white pb-20 sm:pb-28">

      {/* ---------------------------- Hero header ---------------------------- */}
      {/* <div className="px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32 text-center">
        <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
          The people behind the product
        </span>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Meet our team
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 sm:text-lg">
          A diverse team of passionate professionals with unique skills
          driving innovation and excellence in every project.
        </p>
      </div> */}

      {/* ------------------- Hero Looping Fanned Marquee ------------------- */}
      {/* <div className="relative mt-16 w-full overflow-hidden py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />
        <div className="flex w-max animate-marquee-slow gap-8 sm:gap-10">
          {loopTeam.map((member, i) => (
            <HeroCard
              key={i}
              member={member}
              alt={`${member.name}, ${member.role}`}
            />
          ))}
        </div>
      </div> */}

      {/* ----------------------------- Team grid ----------------------------- */}
      <div className="mt-8 px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Meet our team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">
            Hover a card to hear directly from each person about life here.
          </p>
        </div>

        <div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TEAM_MEMBERS.map((member, i) => (
            <TeamCard
              key={member.name}
              member={member}
              index={i}
              visible={gridVisible}
              isHovered={hoveredIndex === null ? null : hoveredIndex === i}
              onHover={() => setHoveredIndex(i)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>

      {/* ------------------------- Keyframes ------------------------- */}
      <style>{`
        @keyframes marquee-slow {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 70s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-slow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}