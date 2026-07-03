import React, { useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah Johnson",
    position: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    review:
      "The LMS platform transformed how our team learns and collaborates globally."
  },
  {
    name: "David Wilson",
    position: "HR Director",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    review:
      "Outstanding learning experience with seamless user management features."
  },
  {
    name: "Emma Brown",
    position: "Training Lead",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review:
      "Engaging courses and intuitive design helped boost employee participation."
  },
  {
    name: "Michael Lee",
    position: "CEO",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    review:
      "The best LMS solution we have implemented in our organization."
  },
  {
    name: "Olivia Clark",
    position: "Learning Manager",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    review:
      "Excellent analytics and reporting tools for tracking learner progress."
  },
  {
    name: "James Martin",
    position: "Operations Head",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    review:
      "Reliable, scalable, and extremely easy to use for our distributed teams."
  }
];

const duplicatedReviews = [...reviews, ...reviews];

export default function Reviews() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-white via-blue-50 to-sky-100">
      
      {/* Soft Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-300/30 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 blur-[140px]" />

      <div
        className="relative z-10 mx-auto px-4 sm:px-6"
        style={{ width: "100%", maxWidth: "1600px" }}
      >
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-blue-300 bg-blue-100 text-blue-700 text-sm font-medium mb-5">
            Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight break-words">
            Trusted By Teams
            <span className="block bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              Across The World
            </span>
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mt-6 text-base sm:text-lg px-2">
            Thousands of professionals rely on our LMS platform to deliver
            engaging learning experiences at scale.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative overflow-hidden">
          
          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-20" />

          <div className="flex animate-marquee gap-5 sm:gap-6 md:gap-8 w-max hover:[animation-play-state:paused]">
            {duplicatedReviews.map((item, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{
                  y: -12,
                  scale: 1.03
                }}
                className="
                  relative
                  w-[78vw]
                  min-w-[78vw]
                  sm:w-[320px]
                  sm:min-w-[320px]
                  md:w-[360px]
                  md:min-w-[360px]
                  rounded-3xl
                  overflow-hidden
                  border border-blue-100
                  bg-white/90
                  backdrop-blur-xl
                  p-5
                  sm:p-6
                  md:p-7
                  shadow-xl
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-sky-100 to-blue-100" />

                {/* Quote */}
                <div className="text-6xl text-blue-200 font-serif absolute top-3 right-6">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-yellow-500 text-lg"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-slate-700 leading-relaxed text-[15px] min-h-[110px] relative z-10">
                  {hovered === index
                    ? item.review
                    : item.review.length > 90
                    ? item.review.substring(0, 90) + "..."
                    : item.review}
                </p>

                {/* User */}
                <div className="mt-8 flex items-center gap-4 border-t border-blue-100 pt-5">
                  <motion.img
                    whileHover={{ rotate: 5 }}
                    src={item.image}
                    alt={item.name}
                    className="
                      w-14
                      h-14
                      rounded-full
                      object-cover
                      border-2
                      border-blue-500
                      flex-shrink-0
                    "
                  />

                  <div className="min-w-0">
                    <h4 className="text-slate-900 font-semibold truncate">
                      {item.name}
                    </h4>

                    <p className="text-blue-600 text-sm truncate">
                      {item.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}