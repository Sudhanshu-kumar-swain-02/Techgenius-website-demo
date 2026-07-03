import React from "react";
import { Globe } from "lucide-react";

import bg from "../assets/bg_black.png";

import indiaFlag from "../assets/Flags/Flag_of_India.svg?url";
import usaFlag from "../assets/Flags/Flag_of_the_Usa.svg?url";
import ukFlag from "../assets/Flags/Flag_of_the_Uk.svg?url";
import canadaFlag from "../assets/Flags/Flag_of_Ca.svg?url";
import australiaFlag from "../assets/Flags/Flag_of_Aus.svg?url";
import germanyFlag from "../assets/Flags/Flag_of_G.svg?url";
import franceFlag from "../assets/Flags/Flag_of_France.svg?url";
import singaporeFlag from "../assets/Flags/Flag_of_Singapore.svg?url";
import japanFlag from "../assets/Flags/JapanFLag.svg?url";
import uaeFlag from "../assets/Flags/Flag_of_the_U.svg?url";

const countries = [
  { name: "India", flag: indiaFlag },
  { name: "United States", flag: usaFlag },
  { name: "United Kingdom", flag: ukFlag },
  { name: "Canada", flag: canadaFlag },
  { name: "Australia", flag: australiaFlag },
  { name: "Germany", flag: germanyFlag },
  { name: "France", flag: franceFlag },
  { name: "Singapore", flag: singaporeFlag },
  { name: "Japan", flag: japanFlag },
  { name: "UAE", flag: uaeFlag },
];

export default function GlobalReach() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 shadow-sm">
            <Globe className="h-4 w-4 text-blue-600 flex-shrink-0" />
            <span className="text-sm font-medium text-blue-700">
              Global Presence
            </span>
          </div>

          <h2 className="mb-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl break-words">
            Serving organisations across
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              20+ countries
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600 md:text-xl">
            Our platform is built for international organisations —
            multi-language, multi-currency, multi-timezone, enabling teams
            worldwide to collaborate seamlessly.
          </p>
        </div>

        {/* Country Grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {countries.map((country, index) => (
            <div
              key={country.name}
              className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white/90 p-4 shadow-md backdrop-blur-sm transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(37,99,235,0.18)]"
              style={{
                animation: "fadeUp 0.8s ease forwards",
                animationDelay: `${index * 0.08}s`,
                opacity: 0,
              }}
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-all duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col items-center text-center min-w-0">
                {/* Flag */}
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-white flex-shrink-0">
                  <img
                    src={country.flag}
                    alt={`${country.name} Flag`}
                    className="h-10 w-10 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Country */}
                <h3 className="text-sm font-semibold text-slate-800 transition-colors duration-500 group-hover:text-white truncate max-w-full">
                  {country.name}
                </h3>

                <span className="mt-1 text-xs text-slate-500 transition-colors duration-500 group-hover:text-blue-100">
                  Active Region
                </span>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-blue-100 transition-all duration-500 group-hover:scale-[5] group-hover:bg-white/10" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}