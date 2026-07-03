import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const services = [
  {
    id: 0,
    title: "AI & Data Analytics",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80",
    caption:
      "Unlock business intelligence through AI-powered analytics, automation, and predictive insights.",
  },
  {
    id: 1,
    title: "Cloud Migration",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    caption:
      "Move your applications and infrastructure to the cloud with security, scalability, and speed.",
  },
  {
    id: 2,
    title: "Custom Software Development",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80",
    caption:
      "Build enterprise-grade applications tailored to your business requirements and growth goals.",
  },
  {
    id: 3,
    title: "Cyber Security",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop&q=80",
    caption:
      "Protect critical systems and customer data with advanced security frameworks and monitoring.",
  },
  {
    id: 4,
    title: "DevOps & Automation",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&auto=format&fit=crop&q=80",
    caption:
      "Accelerate software delivery with CI/CD pipelines, automation, and cloud-native practices.",
  },
];

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-40">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm">
            Our Services
          </span>

          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight tracking-tight break-words">
            World-Class Services
            <br />
            for Global Organisations
          </h2>

          <p className="mt-5 text-slate-500 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-2">
            Helping enterprises accelerate innovation, transform digitally,
            and achieve sustainable growth through technology.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1fr_1.4fr_1fr] gap-8 xl:gap-12 items-center">
          {/* LEFT SERVICES */}
          <div className="order-2 lg:order-1 min-w-0">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActive(index)}
                className={`w-full flex items-center gap-4 py-5 lg:py-6 border-b transition-all duration-300 text-left
                ${
                  active === index
                    ? "text-blue-700 font-semibold"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                <FaChevronRight
                  className={`text-sm transition-all duration-300 flex-shrink-0 ${
                    active === index ? "translate-x-1" : ""
                  }`}
                />

                <span className="text-base lg:text-lg break-words">{service.title}</span>
              </button>
            ))}
          </div>

          {/* CENTER STACKED IMAGES */}
          <div className="relative flex justify-center order-1 lg:order-2 min-h-[280px] sm:min-h-[420px] lg:min-h-[500px]">
            {services.map((item, index) => {
              const isActive = index === active;

              return (
                <motion.div
                  key={item.id}
                  animate={{
                    y: isActive ? 0 : -index * 18,
                    scale: isActive ? 1 : 0.92,
                    opacity: isActive ? 1 : 0.45,
                    zIndex: isActive ? 20 : services.length - index,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className={`absolute rounded-3xl overflow-hidden shadow-2xl bg-white
                  ${
                    isActive
                      ? "w-full max-w-[90%] sm:max-w-[480px] lg:max-w-[550px] h-[260px] sm:h-[380px] lg:h-[420px]"
                      : "w-[80%] sm:w-[75%] h-[220px] sm:h-[340px] lg:h-[380px]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-3 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                  Service Overview
                </span>

                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-900 mb-4 mt-2 leading-tight tracking-tight break-words">
                  {services[active].title}
                </h3>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md">
                  {services[active].caption}
                </p>

                <button className="mt-8 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">
                  Learn More
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;