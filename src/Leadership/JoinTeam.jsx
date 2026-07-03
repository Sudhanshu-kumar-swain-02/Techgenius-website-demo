import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Briefcase } from "lucide-react";
import bgImage from "../assets/bg_black.png";

export default function JoinTeam() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Animated Gradient Blob */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[500px] h-[500px] max-w-[90vw] max-h-[90vw] rounded-full bg-cyan-500/20 blur-3xl top-10 -left-32"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[450px] h-[450px] max-w-[85vw] max-h-[85vw] rounded-full bg-violet-500/20 blur-3xl bottom-0 right-0"
      />

      {/* Floating Dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
          }}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 mb-8"
                >
                  <Sparkles size={18} />
                  Growing Together
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-7xl text-white leading-tight"
                >
                  Want to Join
                  <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text animate-pulse">
                    Our Team?
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-300 text-lg mt-8 max-w-xl leading-relaxed"
                >
                  We are always open to exceptional people, partners
                  and collaborators. Join a team building innovative
                  digital solutions for tomorrow.
                </motion.p>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(34,211,238,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white flex items-center gap-3"
                >
                  Contact Us
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition"
                  />
                </motion.button>
              </div>

              {/* Right Image */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
                  alt="Hiring Team"
                  className="w-full rounded-3xl shadow-2xl border border-white/10 object-cover"
                />

                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full border-2 border-cyan-400/40"
                />

                <motion.div
                  animate={{
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full border border-violet-400/50"
                />
              </motion.div>
            </div>

            {/* Bottom Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-16">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md"
              >
                <Users className="text-cyan-400 mb-4" size={32} />
                <div className="text-white text-xl mb-2">
                  Collaborative Culture
                </div>
                <p className="text-gray-400">
                  Work alongside passionate innovators and
                  industry experts.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md"
              >
                <Briefcase className="text-violet-400 mb-4" size={32} />
                <div className="text-white text-xl mb-2">
                  Career Growth
                </div>
                <p className="text-gray-400">
                  Continuous learning, mentorship and exciting
                  opportunities.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            animate={{
              d: [
                "M0,64L80,69.3C160,75,320,85,480,85.3C640,85,800,75,960,64C1120,53,1200,43,1200,43L1200,120L0,120Z",
                "M0,48L80,58.7C160,69,320,91,480,90.7C640,91,800,69,960,58.7C1120,48,1200,48,1200,48L1200,120L0,120Z",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            fill="rgba(255,255,255,0.04)"
          />
        </svg>
      </div>
    </section>
  );
}