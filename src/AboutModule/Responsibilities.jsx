import { useEffect, useState } from "react";
import bgImage from "../assets/bg_black.png";

export default function Responsibilities() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      title: "Digital Innovation",
      text: "We create intelligent digital products that help businesses scale, automate operations and improve customer experiences.",
      image:
        "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=1200&q=80",
    },
    {
      title: "Technology Excellence",
      text: "Our team delivers modern web, cloud and AI solutions with reliability, security and performance at the center.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    },
    {
      title: "People & Growth",
      text: "We believe technology succeeds when people succeed. We focus on collaboration, learning and long-term partnerships.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]"></div>

      {/* Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}

        <div
          className={`mb-16 transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <span className="tracking-[6px] uppercase text-slate-500 text-sm">
            Techgenius Balaji Solution
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight font-light">
            Our Responsibilities
          </h2>

          <div className="w-24 h-[2px] bg-blue-500 mt-6"></div>

          <p className="max-w-3xl mt-8 text-slate-600 text-lg leading-relaxed">
            Building future-ready digital solutions while maintaining
            exceptional quality, innovation and trust across every project.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3">

                {/* Image */}

                <div className="overflow-hidden h-[280px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-[3000ms] group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>

                {/* Content */}

                <div className="p-8">
                  <h3 className="text-2xl text-slate-900 font-light mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {item.text}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-blue-600">
                    <span className="text-sm tracking-[3px] uppercase">
                      Explore
                    </span>

                    <div className="w-10 h-[1px] bg-blue-600 group-hover:w-20 transition-all duration-500"></div>
                  </div>
                </div>

                {/* Hover Border Animation */}

                <div className="absolute inset-0 border border-transparent group-hover:border-blue-200 rounded-3xl transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}

        <div className="mt-24 text-center">
          <p className="text-slate-700 text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
            Empowering businesses through software development, cloud
            transformation, AI integration and innovative digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}