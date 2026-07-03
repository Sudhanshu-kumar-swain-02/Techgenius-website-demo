import { useState, useEffect, useRef } from "react";

const FloatingParticle = ({ style }) => (
  <div
    className="absolute rounded-full opacity-20 pointer-events-none"
    style={style}
  />
);

const StatCard = ({ number, label, delay }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const target = parseInt(number);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current = Math.min(current + step, target);
        setCount(Math.floor(current));
        if (current >= target) clearInterval(interval);
      }, 16);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [visible, number, delay]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-2xl sm:text-3xl font-bold text-blue-600 tabular-nums">
        {count}{number.includes("+") ? "+" : number.includes("%") ? "%" : ""}
      </div>
      <div className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-widest font-medium">{label}</div>
    </div>
  );
};

const InfoPill = ({ icon, text }) => (
  <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 group cursor-default">
    <span className="text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">{icon}</span>
    <span className="text-sm text-slate-600 font-medium break-words">{text}</span>
  </div>
);

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", institute: "", message: "", interest: ""
  });
  const [focused, setFocused] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [particles] = useState(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      width: Math.random() * 80 + 20,
      top: Math.random() * 100,
      left: Math.random() * 100,
      bg: i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#06b6d4",
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4,
    }))
  );

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputBase =
    "w-full bg-white border-2 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-300";
  const inputClass = (name) =>
    `${inputBase} ${
      focused === name
        ? "border-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
        : "border-slate-200 hover:border-slate-300"
    }`;

  return (
    <section className="relative min-h-screen bg-white overflow-x-hidden font-sans">
      {/* Animated background particles */}
      {particles.map((p) => (
        <FloatingParticle
          key={p.id}
          style={{
            width: p.width,
            height: p.width,
            top: `${p.top}%`,
            left: `${p.left}%`,
            background: p.bg,
            animation: `floatAnim ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[min(600px,60vw)] h-[min(600px,60vw)] bg-gradient-to-bl from-blue-100/60 via-violet-100/40 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[min(500px,55vw)] h-[min(500px,55vw)] bg-gradient-to-tr from-cyan-100/50 via-blue-50/30 to-transparent rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap');
        
        @keyframes floatAnim {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-30px) scale(1.08); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0.5); }
          70% { transform: scale(1); box-shadow: 0 0 0 14px rgba(59,130,246,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59,130,246,0); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; } 50% { opacity: 0.3; }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .slide-in { animation: slideIn 0.6s ease forwards; }
        .font-display { font-family: 'Syne', 'Inter', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .pulse-ring { animation: pulseRing 2.2s ease-in-out infinite; }
        .spin-slow { animation: spinSlow 12s linear infinite; }
        .blink-dot { animation: blink 1.4s ease-in-out infinite; }
      `}</style>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 font-body">

        {/* ── HEADER ── */}
        <div
          className="text-center mb-12 sm:mb-16"
          style={{
            opacity: heroVisible ? 1 : 0,
            animation: heroVisible ? "fadeUp 0.8s ease forwards" : "none",
          }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            {/* <span className="w-1.5 h-1.5 bg-blue-500 rounded-full blink-dot flex-shrink-0" /> */}
            {/* <span className="whitespace-nowrap">Reach Out · We're Live</span> */}
          </div> <br />

          <h1 className="font-display font-extrabold text-orange-600 leading-none tracking-tight mb-4" style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}>
            Let's Build
            <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Smarter Institutes
            </span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed px-2">
            Powering education in Odisha and beyond with our flagship{" "}
            <span className="text-blue-600 font-semibold">Learning Management System</span>.
            Talk to our team — we respond within 2 hours.
          </p>
        </div>

        {/* ── STATS BAR ── */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mb-16 sm:mb-20 bg-white border border-slate-100 rounded-2xl shadow-sm px-4 sm:px-8 py-6"
          style={{ animation: heroVisible ? "fadeUp 0.9s 0.15s ease both" : "none" }}
        >
          <StatCard number="200" label="Institutes" delay={0} />
          <StatCard number="10000+" label="Students" delay={200} />
          <StatCard number="98%" label="Uptime" delay={400} />
          <StatCard number="2" label="Yrs in Odisha" delay={600} />
        </div>

        {/* ── MAIN TWO-COLUMN ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 items-start">

          {/* LEFT – Info Panel */}
          <div
            className="lg:col-span-2 space-y-6 sm:space-y-8 min-w-0"
            style={{ animation: heroVisible ? "slideIn 0.8s 0.2s ease both" : "none" }}
          >
            {/* Call Center Visual */}
            <div className="relative bg-gradient-to-br from-blue-600 to-violet-700 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl shadow-blue-200">
              {/* Decorative ring */}
              <div className="absolute -top-8 -right-8 w-40 h-40 border-[20px] border-white/10 rounded-full spin-slow" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 border-[14px] border-white/10 rounded-full" />

              {/* Agent avatar */}
              <div className="relative flex items-start gap-4 mb-6">
                <div className="pulse-ring w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                  🎧
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-base leading-snug">Online Support Team</p>
                  <p className="text-blue-200 text-xs mt-0.5">Bhubaneswar, Odisha · Mon–Sat, 9am–7pm</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full blink-dot flex-shrink-0" />
                    <span className="text-green-300 text-xs font-medium">available now</span>
                  </div>
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="space-y-3">
                {[
                  { from: "agent", text: "Hi! How can we help your institute today?" },
                  { from: "user",  text: "We need an LMS for 1,200 students." },
                  { from: "agent", text: "Great — let's schedule a free demo! 🚀" },
                ].map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                    style={{ animation: `fadeUp 0.5s ${0.4 + i * 0.15}s ease both`, opacity: 0 }}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-snug break-words ${
                        msg.from === "agent"
                          ? "bg-white/20 text-white rounded-tl-sm"
                          : "bg-white text-blue-800 font-medium rounded-tr-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {/* Typing indicator */}
                <div className="flex justify-start">
                  <div className="bg-white/20 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center">
                    {[0, 0.2, 0.4].map((d, i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 bg-white rounded-full blink-dot"
                        style={{ animationDelay: `${d}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <InfoPill icon="📍" text="Bhubaneswar, Odisha — 751001" />
              <InfoPill icon="📞" text="+91 674 000 0000" />
              <InfoPill icon="✉️" text="hello@yourlms.in" />
              <InfoPill icon="🌐" text="www.yourlms.in" />
            </div>

            {/* Why us */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">Why institutes choose us</p>
              <ul className="space-y-2.5">
                {[
                  "Multilingual support — Odia, Hindi, English",
                  "Offline-first for low-bandwidth areas",
                  "CBSE / CHSE / state board ready",
                  "Dedicated onboarding & training",
                  "99.9% uptime SLA guaranteed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-0.5 text-blue-500 flex-shrink-0">✓</span>
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT – Form */}
          <div
            className="lg:col-span-3 min-w-0"
            style={{ animation: heroVisible ? "fadeUp 0.8s 0.3s ease both" : "none" }}
          >
            <div className="bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100 p-5 sm:p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-12 sm:py-16">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-5 shadow-lg shadow-blue-200">
                    ✅
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm max-w-xs mx-auto">
                    Our team will reach out within <strong className="text-blue-600">2 business hours</strong>. Check your inbox for a confirmation.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", institute:"", message:"", interest:"" }); }}
                    className="mt-7 text-sm text-blue-600 hover:text-blue-800 font-medium underline underline-offset-4 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-1">Get in Touch</h2>
                    <p className="text-slate-500 text-sm">Fill in the form and we'll get back to you with a tailored LMS proposal.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Full Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused("")}
                          placeholder="Rajesh Kumar"
                          required
                          className={inputClass("name")}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Phone Number *</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          onFocus={() => setFocused("phone")}
                          onBlur={() => setFocused("")}
                          placeholder="+91 98765 43210"
                          required
                          className={inputClass("phone")}
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Work Email *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused("")}
                        placeholder="principal@institute.edu.in"
                        required
                        className={inputClass("email")}
                      />
                    </div>

                    {/* Row 3 */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Institute / Organisation *</label>
                      <input
                        name="institute"
                        value={form.institute}
                        onChange={handleChange}
                        onFocus={() => setFocused("institute")}
                        onBlur={() => setFocused("")}
                        placeholder="DAV Public School, Bhubaneswar"
                        required
                        className={inputClass("institute")}
                      />
                    </div>

                    {/* Row 4 – Interest */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">I'm interested in</label>
                      <div className="flex flex-wrap gap-2">
                        {["LMS Platform", "Free Demo", "Pricing & Plans", "Custom Integration", "Support"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setForm({ ...form, interest: opt })}
                            className={`text-xs px-3.5 py-2 rounded-lg font-medium border transition-all duration-200 ${
                              form.interest === opt
                                ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
                                : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Row 5 */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused("")}
                        rows={4}
                        placeholder="Tell us about your institute size, current challenges, or anything specific you're looking for in an LMS..."
                        className={`${inputClass("message")} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending your message…
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400">
                      🔒 Your data is secure. We never share your information with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Trust bar */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "⚡", title: "24-hr Response", sub: "Guaranteed reply" },
                { icon: "🎓", title: "Free Demo", sub: "No credit card" },
                { icon: "🛡️", title: "Data Secure", sub: "ISO 27001 ready" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="text-center bg-white border border-slate-100 rounded-2xl py-4 px-2 hover:border-blue-200 hover:shadow-md hover:shadow-blue-50 transition-all duration-300 group"
                >
                  <div className="text-2xl mb-1.5 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <div className="text-xs font-semibold text-slate-800">{item.title}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}