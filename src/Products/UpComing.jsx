//
import React from "react";
import {
  Building2,
  Home,
  ShieldCheck,
  Clock,
  Users,
  Sparkles,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const features = [
  {
    icon: <Home size={24} />,
    title: "PG Booking",
    desc: "Find and reserve verified PG accommodations with ease.",
  },
  {
    icon: <Building2 size={24} />,
    title: "House Booking",
    desc: "Explore rental houses and book your next stay effortlessly.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Verified Listings",
    desc: "Trusted properties with transparent information.",
  },
  {
    icon: <Users size={24} />,
    title: "Zero Brokerage",
    desc: "Transparent pricing with no hidden charges.",
  },
];

const UpComing = () => {
  return (
    <section
      
      className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black py-20 sm:py-24 scroll-mt-24"
    >
      {/* Animated Background */}
      <div id="coming-soon" className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] animate-ping"></div>
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full animate-bounce"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Main content — full width, padding only */}
      <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-40">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* LEFT */}
          <div className="space-y-7 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-400/40 bg-orange-500/10 backdrop-blur-xl text-orange-300">
              <Clock size={16} />
              Coming Soon
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
              PG & House
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent animate-pulse">
                Booking Platform
              </span>
            </h1>

            {/* Typing Animation */}
            <div className="text-xl sm:text-2xl md:text-3xl text-blue-300 font-light">
              <TypeAnimation
                sequence={[
                  "Affordable Stay",
                  2000,
                  "Luxury Stay",
                  2000,
                  "Verified Properties",
                  2000,
                  "Zero Brokerage",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Discover affordable PGs and premium houses on one trusted
              platform. Compare listings, verify details, and enjoy a completely
              transparent booking experience.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-5">
              <button className="group relative px-7 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white overflow-hidden">
                <span className="relative z-10">Launching Soon</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>

              <button className="px-7 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl text-white hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-500">
                Stay Updated
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-lg">
              {/* Rotating Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-orange-500 opacity-70 blur animate-spin-slow"></div>

              <div className="relative bg-black rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200"
                  alt="Booking Platform"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[450px] object-cover rounded-3xl transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                <div className="absolute top-5 right-5">
                  <div className="px-4 sm:px-5 py-2 rounded-full bg-orange-500 text-white font-semibold shadow-xl animate-pulse text-sm">
                    COMING SOON
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-light">
                    Your Next Stay
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base">
                    Affordable • Luxury • Verified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-24 sm:mt-28">
          <div className="text-center mb-12 sm:mb-14">
            <div className="flex justify-center mb-4">
              <Sparkles className="text-orange-400 animate-pulse" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-light">
              Premium Features
            </h2>
            <p className="text-gray-400 mt-4 text-sm sm:text-base">
              Designed for modern accommodation booking.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-orange-500/0 group-hover:from-blue-500/10 group-hover:to-orange-500/10 transition-all duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 sm:mt-28">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 p-10 sm:p-12 text-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-light mb-5">
              New Booking Experience
            </h2>
            <p className="max-w-3xl mx-auto text-white/90 text-base sm:text-lg">
              Find PGs, rental houses, luxury stays, affordable stays, verified
              listings, location insights, and enjoy a seamless booking journey
              with complete transparency.
            </p>
            <button className="mt-8 px-7 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-xl font-medium hover:scale-105 transition duration-300 shadow-xl text-sm sm:text-base">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default UpComing;