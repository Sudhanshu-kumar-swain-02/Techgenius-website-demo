import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  MonitorSmartphone,
  Lightbulb,
} from "lucide-react";

const cmsServices = [
  "WordPress, Drupal, Joomla enterprise builds",
  "Headless CMS (Contentful, Strapi, Sanity)",
  "eCommerce (WooCommerce, Shopify, custom)",
  "SEO optimisation and performance tuning",
  "CMS migration from legacy systems",
];

const consultingServices = [
  "Technology assessment and roadmapping",
  "Architecture design and review",
  "IT governance and risk management",
  "Vendor selection and management",
];

const typingLines = [
  "Content Management & Web Platforms",
  "IT Consulting & Strategy",
];

export default function CmsServices() {
  const [displayText, setDisplayText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      const currentLine = typingLines[lineIndex];

      if (charIndex <= currentLine.length) {
        setDisplayText(currentLine.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);

        setTimeout(() => {
          setLineIndex((prev) => (prev + 1) % typingLines.length);
        }, 1800);
      }
    }, 70);

    return () => clearInterval(typeInterval);
  }, [lineIndex]);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-100 blur-3xl opacity-70"></div>

      <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm">
            Digital Technology Services
          </span>

          <h2 className="mt-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-900 font-normal leading-tight min-h-[50px] sm:min-h-[60px] md:min-h-[70px] lg:min-h-[80px] break-words px-2">
            {displayText}
            <span className="animate-pulse text-orange-500">|</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 text-base sm:text-lg leading-relaxed font-normal px-2">
            Helping businesses modernize platforms, optimize digital
            operations, and create scalable technology foundations for
            sustainable growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
          {/* CMS Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative bg-white border border-blue-100 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 min-w-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

            <div className="relative min-w-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 flex-shrink-0">
                <MonitorSmartphone className="text-blue-600" size={28} />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-900 font-normal mb-5 break-words">
                Content Management
                <br />
                & Web Platforms
              </h3>

              <p className="text-slate-600 leading-relaxed mb-8 text-sm sm:text-base">
                We build, manage, and optimise content management systems that
                help your teams publish faster, maintain quality, and scale
                your digital presence globally.
              </p>

              <div className="space-y-4">
                {cmsServices.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-orange-500 mt-1 flex-shrink-0"
                    />
                    <span className="text-sm sm:text-base break-words">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Consulting Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative bg-white border border-orange-100 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 min-w-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

            <div className="relative min-w-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 flex-shrink-0">
                <Lightbulb className="text-orange-600" size={28} />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-900 font-normal mb-5 break-words">
                IT Consulting
                <br />
                & Strategy
              </h3>

              <p className="text-slate-600 leading-relaxed mb-8 text-sm sm:text-base">
                Strategic technology advisory that helps you navigate digital
                transformation, build the right architecture, and make
                technology decisions that pay off for years.
              </p>

              <div className="space-y-4">
                {consultingServices.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-blue-500 mt-1 flex-shrink-0"
                    />
                    <span className="text-sm sm:text-base break-words">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-16 sm:mt-20"
        >
          <div className="rounded-[32px] bg-gradient-to-r from-blue-600 to-orange-500 p-[1px]">
            <div className="bg-white rounded-[32px] px-6 sm:px-8 py-10 sm:py-12 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-900 font-normal break-words">
                Ready to transform your digital platforms?
              </h3>

              <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
                From enterprise CMS implementation to strategic technology
                consulting, we help organizations build scalable digital
                ecosystems that drive long-term business success.
              </p>

              <button className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 transition duration-300 text-sm sm:text-base">
                Get in Touch
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}