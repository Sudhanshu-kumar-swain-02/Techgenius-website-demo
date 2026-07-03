import React, { useState, useEffect, useRef } from "react";
import {
  CheckCircle,
  ArrowRight,
  Users,
  Briefcase,
  TrendingUp,
} from "lucide-react";

const services = [
  "Digital transformation strategy & execution",
  "Cloud migration (AWS, Azure, GCP)",
  "Enterprise application development",
  "RPA, AI and intelligent automation",
  "BI dashboards and advanced analytics",
];

const images = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
];

const Technology = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const sectionRef = useRef(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Typing Animation
  useEffect(() => {
    if (!visible) return;

    let charIndex = 0;

    const typing = setInterval(() => {
      if (charIndex < services[currentLine].length) {
        setTypedText(
          services[currentLine].slice(0, charIndex + 1)
        );
        charIndex++;
      } else {
        clearInterval(typing);

        setTimeout(() => {
          setCurrentLine((prev) =>
            prev < services.length - 1 ? prev + 1 : 0
          );
          setTypedText("");
        }, 1200);
      }
    }, 35);

    return () => clearInterval(typing);
  }, [currentLine, visible]);

  // Auto Image Slider
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl" />

      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* LEFT */}
          <div className="min-w-0">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wider uppercase">
              Technology
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 mt-6 leading-tight break-words">
              Enterprise
              <br />
              <span className="text-blue-400 font-bold">
                Technology Solutions
              </span>
            </h3>

            <p className="text-gray-600 text-base sm:text-lg leading-8 mt-6 max-w-xl">
              End-to-end digital transformation for large-scale
              organisations — from strategy to deployment and beyond.
              We've delivered 200+ enterprise projects across 15+
              industries worldwide.
            </p>

            {/* Services */}
            <div className="mt-10 min-h-[200px] sm:min-h-[220px] bg-white/60 backdrop-blur-lg rounded-3xl p-5 sm:p-6 border border-white shadow-xl">
              {services.slice(0, currentLine).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 mb-4"
                >
                  <CheckCircle className="text-orange-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-800 text-sm sm:text-base break-words">{item}</span>
                </div>
              ))}

              <div className="flex items-center gap-3">
                <CheckCircle className="text-orange-500 w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-slate-900 text-sm sm:text-base break-words">
                  {typedText}
                  <span className="animate-pulse text-blue-600">
                    |
                  </span>
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-12">
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl min-w-0">
                <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                <div className="flex items-start justify-between">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
                      Portfolio
                    </p>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 mt-2">
                      200+
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      Projects Delivered
                    </p>
                  </div>

                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100 flex-shrink-0">
                    <Briefcase size={18} className="text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl min-w-0">
                <div className="absolute left-0 top-0 h-full w-1 bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                <div className="flex items-start justify-between">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
                      Expertise
                    </p>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 mt-2">
                      15+
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      Industries Served
                    </p>
                  </div>

                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-orange-50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-100 flex-shrink-0">
                    <Users size={18} className="text-orange-600" />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl min-w-0">
                <div className="absolute left-0 top-0 h-full w-1 bg-emerald-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                <div className="flex items-start justify-between">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
                      Performance
                    </p>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 mt-2">
                      98%
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      Success Rate
                    </p>
                  </div>

                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-100 flex-shrink-0">
                    <TrendingUp size={18} className="text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 sm:gap-5 mt-12">
              {/* Primary Button */}
              <button className="group relative overflow-hidden rounded-2xl px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-blue-500/30">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 transition-all duration-500 group-hover:scale-110"></span>

                <span className="relative flex items-center gap-2 text-sm sm:text-base">
                  Get a Proposal
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </button>

              {/* Secondary Button */}
              <button className="group rounded-2xl border border-slate-300/70 bg-white/70 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-500 hover:shadow-orange-200 text-sm sm:text-base">
                <span className="flex items-center gap-2">
                  Talk to Expert
                  <ArrowRight
                    size={18}
                    className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative hidden lg:block">
            {/* Glow */}
            <div className="absolute -top-10 -left-10 w-44 h-44 bg-blue-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-orange-500/30 rounded-full blur-3xl" />

            {/* Image Card */}
            <div className="relative bg-white/40 backdrop-blur-xl p-4 rounded-[32px] shadow-2xl border border-white/50 overflow-hidden">
              <div className="relative h-[380px] xl:h-[460px] 2xl:h-[550px] rounded-3xl overflow-hidden">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Technology"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                      currentImage === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile image — show on smaller screens */}
        <div className="lg:hidden mt-12 relative bg-white/40 backdrop-blur-xl p-3 rounded-[32px] shadow-2xl border border-white/50 overflow-hidden">
          <div className="relative h-[240px] sm:h-[280px] md:h-[380px] rounded-3xl overflow-hidden">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Technology"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                  currentImage === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;