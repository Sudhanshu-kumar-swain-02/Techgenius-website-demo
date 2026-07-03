import React, { useState } from "react";

const sections = [
  {
    id: "vision",
    title: "Vision",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    content:
      "Techgenius Balaji Solution envisions a future where businesses grow through intelligent technology, seamless digital experiences, and scalable innovation.",
  },
  {
    id: "mission",
    title: "Mission",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    content:
      "Our mission is to deliver enterprise-grade software, cloud solutions, staffing services, and digital transformation strategies that create measurable impact.",
  },
  {
    id: "innovation",
    title: "Innovation",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    content:
      "Innovation drives every project. We combine AI, cloud technologies, automation, and modern development practices to help organizations stay ahead.",
  },
];

export default function Vision() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="tracking-[6px] text-slate-500 uppercase text-sm">
            Techgenius Balaji Solution
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl text-slate-900 leading-tight">
            Building The Future
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent animate-pulse">
              Through Technology
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-slate-600 text-lg">
            Empowering organizations with intelligent software solutions,
            digital transformation strategies, cloud technologies, and
            innovation-driven services.
          </p>
        </div>

        {/* Anchor Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(index)}
              className={`px-8 py-3 rounded-full transition-all duration-500
              ${
                active === index
                  ? "bg-slate-900 text-white shadow-xl scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="group relative overflow-hidden rounded-[32px]">
            <img
              src={sections[active].image}
              alt=""
              className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

            <div className="absolute bottom-8 left-8 text-white">
              <p className="tracking-[4px] uppercase text-sm mb-2">
                Techgenius Balaji Solution
              </p>

              <h3 className="text-3xl">
                {sections[active].title}
              </h3>
            </div>
          </div>

          {/* Text Area */}
          <div className="relative">

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl"></div>

            <div className="relative bg-white border border-slate-200 rounded-[32px] p-10 shadow-xl">

              <span className="text-blue-600 tracking-[5px] uppercase text-sm">
                Our Commitment
              </span>

              <h3 className="text-4xl text-slate-900 mt-4 mb-6">
                {sections[active].title}
              </h3>

              <p
                key={active}
                className="text-slate-600 text-lg leading-relaxed animate-[fadeIn_0.8s_ease]"
              >
                {sections[active].content}
              </p>

              <div className="mt-10 flex gap-4 flex-wrap">

                <a
                  href="#services"
                  className="px-6 py-3 rounded-full bg-blue-600 text-white hover:scale-105 transition"
                >
                  Explore Services
                </a>

                <a
                  href="#about"
                  className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
                >
                  About Company
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
                >
                  Contact Us
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}