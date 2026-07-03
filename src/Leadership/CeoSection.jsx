import React, { useEffect, useRef, useState } from "react";
import founderImg from "../assets/Tg_ceosir.png";

import sectionBg from "../assets/bg_black.png";



/* Three condensed paragraphs — the essentials only:
   the 32+ year summary, the TCS legacy, and the current chapter at TechGenius. */
const BIO_SEGMENTS = [
  { text: "With more than ", bold: false },
  { text: "32 years", bold: true },
  {
    text:
      " in global IT delivery, enterprise technology, and digital modernization, I have led large-scale technology programs across India, the USA, and the UK — spanning enterprise applications, cloud platforms, governance frameworks, and AI-enabled learning systems.",
    bold: false,
  },
];

const BIO_PARAGRAPHS_REST = [
  "For 26 years, I served Tata Consultancy Services as Delivery Head, Program Director, and Quality Auditor for global enterprises including JP Morgan Chase, General Electric, Deutsche Bank, and Tata Power — directing delivery programs, governance initiatives, and digital modernization across utilities, healthcare, and BFSI.",
  "Today, through Techgenius Balaji Solutions, I lead enterprise technology consulting, AI-powered learning platforms, and cloud applications — built on the same discipline of governance and delivery that defined the three decades before it.",
];

const CERTIFICATIONS = [
  { label: "PMP Certified", org: "PMI, USA" },
  { label: "CMMI Certified Professional", org: "SEI, Pittsburgh, USA" },
  { label: "TBEM Certified Professional", org: "" },
  { label: "NISM VIII & VA Certified Financial Professional", org: "" },
  { label: "MCA", org: "National Institute of Technology, Rourkela" },
];

const ACHIEVEMENTS = [
  { metric: "USD 6M+", detail: "in enterprise IT programs managed across global delivery environments" },
  { metric: "300+", detail: "professionals led across distributed technology teams worldwide" },
  { metric: "300+", detail: "enterprise IT projects audited for quality across global engagements" },
  { metric: "50K+", detail: "active learners reached through expanded digital learning platforms" },
];

const CORE_SKILLS = [
  "Digital Transformation",
  "Enterprise IT Delivery",
  "Program Management",
  "AI-Based LMS Platforms",
  "Cloud Technologies",
  "SaaS Platforms",
  "IT Governance",
  "Enterprise Applications",
];

/* Types out BIO_SEGMENTS character by character once isVisible flips true. */
function useTypewriter(segments, isVisible, speed = 32, startDelay = 300) {
  const [charCount, setCharCount] = useState(0);
  const ran = useRef(false);
  const fullLength = segments.reduce((sum, seg) => sum + seg.text.length, 0);

  useEffect(() => {
    if (!isVisible || ran.current) return;
    ran.current = true;

    let frame;
    let cancelled = false;

    const startTimeout = setTimeout(() => {
      const start = performance.now();
      const tick = (now) => {
        if (cancelled) return;
        const elapsed = now - start;
        const nextCount = Math.min(Math.floor(elapsed / speed), fullLength);
        setCharCount(nextCount);
        if (nextCount < fullLength) {
          frame = requestAnimationFrame(tick);
        }
      };
      frame = requestAnimationFrame(tick);
    }, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(startTimeout);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [isVisible, fullLength, speed, startDelay]);

  let remaining = charCount;
  const renderedSegments = segments.map((seg) => {
    const take = Math.max(0, Math.min(seg.text.length, remaining));
    remaining -= take;
    return { text: seg.text.slice(0, take), bold: seg.bold };
  });

  return { renderedSegments, isDone: charCount >= fullLength };
}

/* Reveals children with a staggered fade/rise once the section scrolls into view. */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

/* Gold double-rule divider — the page's recurring signature mark. */
function GoldRule({ className = "" }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`} aria-hidden="true">
      <span className="h-px w-7" style={{ backgroundColor: "#C9A24B" }} />
      <span className="h-px w-2.5" style={{ backgroundColor: "#C9A24B" }} />
    </div>
  );
}

export default function CeoSection() {
  const [sectionRef, visible] = useReveal();
  const { renderedSegments, isDone } = useTypewriter(BIO_SEGMENTS, visible);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden pb-20 pt-24 sm:pb-28 sm:pt-32 scroll-mt-24"
      style={{
        backgroundColor: "#F7F4EC",
        backgroundImage: `
          linear-gradient(
            rgba(247,244,236,0.93),
            rgba(247,244,236,0.97)
          ),
          url(${sectionBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <div className="mx-auto w-full max-w-6xl">

          {/* Letterhead masthead */}
          <div
            className="text-center transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
            }}
          >
            <div className="mx-auto flex items-center justify-center gap-3">
              <span className="h-px w-10" style={{ backgroundColor: "#C9A24B" }} />
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.32em]"
                style={{ color: "#8A6E2F" }}
              >
                Office of the Founder
              </span>
              <span className="h-px w-10" style={{ backgroundColor: "#C9A24B" }} />
            </div>
            <h1
              className="mt-5 font-display text-[2.4rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
              style={{ color: "#0B1B2B" }}
            >
              Manoranjan Panda
            </h1>
            <p
              className="mt-2 text-[13px] font-medium uppercase tracking-[0.18em] sm:text-sm"
              style={{ color: "#5B6573" }}
            >
              Founder &amp; Chief Executive Officer
            </p>
          </div>

          {/* Body: portrait + narrative */}
          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

            {/* Portrait — museum-plaque frame */}
            <div
              className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(22px)",
                transition: "opacity 800ms ease 120ms, transform 800ms ease 120ms",
              }}
            >
              <div className="mx-auto max-w-[300px]">
                <div
                  className="p-2.5"
                  style={{ border: "1px solid #C9A24B", borderRadius: 0 }}
                >
                  <div
                    className="relative aspect-[4/5] w-full overflow-hidden"
                    style={{ backgroundColor: "#E7E1D2" }}
                  >
                    <img
                      src={founderImg}
                      alt="Manoranjan Panda, Founder & CEO of TechGenius Balaji Solutions"
                      className="h-full w-full object-cover"
                      style={{ filter: "saturate(0.94) contrast(1.03)" }}
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="h-px w-5" style={{ backgroundColor: "#C9A24B" }} />
                  <p
                    className="text-center text-[11px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: "#8A6E2F" }}
                  >
                    32 Years in Enterprise Technology
                  </p>
                  <span className="h-px w-5" style={{ backgroundColor: "#C9A24B" }} />
                </div>
                <p
                  className="mt-2 text-center text-[12.5px]"
                  style={{ color: "#5B6573" }}
                >
                  Bhubaneswar, Odisha &middot; Global Practice
                </p>
              </div>
            </div>

            {/* Narrative + credentials */}
            <div
              className="lg:col-span-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(22px)",
                transition: "opacity 800ms ease 240ms, transform 800ms ease 240ms",
              }}
            >
              {/* Typed lead paragraph */}
              <p
                className="font-serif text-[1.15rem] leading-[1.75] sm:text-[1.3rem]"
                style={{ color: "#1C2229" }}
              >
                {renderedSegments.map((seg, i) =>
                  seg.bold ? (
                    <span key={i} style={{ color: "#0B1B2B", fontWeight: 700 }}>
                      {seg.text}
                    </span>
                  ) : (
                    <React.Fragment key={i}>{seg.text}</React.Fragment>
                  )
                )}
                <span
                  aria-hidden="true"
                  className="ml-0.5 inline-block h-[1em] w-[2px] -translate-y-[2px] align-middle"
                  style={{
                    backgroundColor: "#C9A24B",
                    opacity: isDone ? 0 : 1,
                    animation: isDone ? "none" : "ceo-caret-blink 0.9s steps(1) infinite",
                    transition: "opacity 300ms ease",
                  }}
                />
              </p>

              {/* Remaining narrative */}
              <div className="mt-5 space-y-4">
                {BIO_PARAGRAPHS_REST.map((para, i) => (
                  <p
                    key={i}
                    className="text-[15px] leading-[1.8] sm:text-base"
                    style={{ color: "#3A4250" }}
                  >
                    {para}
                  </p>
                ))}
              </div>

            

              {/* Achievements — quiet metric rows, no chips */}
              <div>
                <h3
                  className="font-display text-base font-bold tracking-tight sm:text-lg"
                  style={{ color: "#0B1B2B" }}
                >
                  Significant Key Achievements
                </h3>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {ACHIEVEMENTS.map((item) => (
                    <div
                      key={item.detail}
                      className="border-l pl-4"
                      style={{ borderColor: "#C9A24B" }}
                    >
                      <p
                        className="font-display text-2xl font-bold tracking-tight sm:text-[1.6rem]"
                        style={{ color: "#0B1B2B" }}
                      >
                        {item.metric}
                      </p>
                      <p
                        className="mt-1 text-[13.5px] leading-snug"
                        style={{ color: "#5B6573" }}
                      >
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
                <p
                  className="mt-5 text-[14px] leading-relaxed sm:text-[15px]"
                  style={{ color: "#3A4250" }}
                >
                  He also directed the Tata Power SMRD smart metering and revenue
                  digitization initiative and supported CMMI maturity programs through
                  governance and process consulting.
                </p>
              </div>


              {/* Closing note */}
              <p
                className="font-serif text-[15.5px] italic leading-[1.8] sm:text-base"
                style={{ color: "#3A4250" }}
              >
                "I remain open to connecting with enterprises, technology leaders,
                startups, and institutions seeking guidance in enterprise IT programs,
                AI learning ecosystems, cloud adoption, and large-scale technology
                delivery initiatives."
              </p>

              {/* LinkedIn — final call to action */}
              <div className="mt-9">
                <a
                  href="#"
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-[13.5px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                  style={{ backgroundColor: "#0B1B2B", color: "#F7F4EC" }}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18V9.75H5.67V18h2.67zM7.005 8.66c.93 0 1.51-.616 1.51-1.387-.017-.787-.58-1.387-1.493-1.387-.912 0-1.51.6-1.51 1.387 0 .77.58 1.387 1.476 1.387h.017zM18.34 18v-4.7c0-2.517-1.344-3.69-3.137-3.69-1.447 0-2.095.795-2.457 1.353V9.75H10.08s.035.747 0 8.25h2.667v-4.607c0-.246.018-.493.09-.67.198-.492.65-1.002 1.41-1.002.993 0 1.39.757 1.39 1.868V18h2.703z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes ceo-caret-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          [aria-hidden="true"][style*="ceo-caret-blink"] { animation: none !important; opacity: 0 !important; }
        }
      `}</style>
    </section>
  );
}