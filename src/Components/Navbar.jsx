import { useState, useEffect, useRef } from "react";
import Logo from "../assets/Logo.svg";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const idleTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 30);

      // Hide navbar when scrolling down, show it again when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // Reset idle timer on every scroll event
      if (idleTimer.current) clearTimeout(idleTimer.current);

      // After 2s of no scrolling, show the navbar regardless of direction
      idleTimer.current = setTimeout(() => {
        setVisible(true);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  // Close the mobile menu whenever the viewport is resized up to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileSubOpen(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { title: "Home", path: "/" },

    {
      title: "Services",
      path: "/services",
      dropdown: [
        "Software Development",
        "Cloud Solutions",
        "Mobile Apps",
        "AI Solutions",
      ],
    },

    {
      title: "Products",
      path: "/products",
      dropdown: [
        {
          name: "Learning Management System",
          path: "/products#lms",
        },
        {
          name: "Coming Soon",
          path: "/products#coming-soon",
        },
      ],
    },

    {
      title: "Leadership",
      path: "/leadership",
      dropdown: ["CEO & Founder", "TEAM", "Leadership", "entrepreneurship"],
    },
    { title: "About", href: "/about" },
    { title: "Career", href: "/career" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      animate={{ y: visible ? 0 : -120, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div
        className={`
          h-20 px-8 flex items-center justify-between
          transition-all duration-500
          bg-transparent
        `}
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.03 }}>
          <Link to="/" className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden flex items-center justify-center">
              <img
                src={Logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-[24px] font-bold tracking-tight">
                <span style={{ color: "#2563EB" }}>TechGenius</span>
              </h2>

              <p className="text-[12px] font-bold uppercase tracking-[0.3em]">
                <span style={{ color: "#FF7A00" }}>BALAJI</span>{" "}
                <span style={{ color: "#1D4ED8" }}>SOLUTIONS</span>
              </p>
            </div>
          </Link>
        </motion.div>
        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-1 bg-gray-800/60 rounded-full px-2 py-2 border border-white/10">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setOpen(index)}
              onMouseLeave={() => setOpen(null)}
            >
              {item.dropdown ? (
                <Link
                  to={item.path || "#"}
                  className="px-4 py-2 rounded-full flex items-center gap-1 font-medium text-white/90 hover:bg-gray-600/70 hover:text-white transition-all duration-300"
                >
                  {item.title}
                  <ChevronDown
                    size={17}
                    className={`transition-all duration-300 ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </Link>
              ) : item.path ? (
                <Link
                  to={item.path}
                  className="px-4 py-2 rounded-full text-white/90 font-medium hover:bg-gray-600/70 hover:text-white transition-all duration-300"
                >
                  {item.title}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="px-4 py-2 rounded-full text-white/90 font-medium hover:bg-gray-600/70 hover:text-white transition-all duration-300"
                >
                  {item.title}
                </a>
              )}

              {/* Dropdown */}
              <AnimatePresence>
                {open === index && item.dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-14 left-0 w-[640px] max-w-[92vw] rounded-[28px] bg-black shadow-[0_30px_70px_rgba(0,0,0,0.45)] overflow-hidden p-4"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {item.dropdown.map((sub, i) => (
                        <Link
                          key={i}
                          to={typeof sub === "object" ? sub.path : "#"}
                          className={`group flex items-center justify-between gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                            i === 0
                              ? "bg-white/10"
                              : "bg-transparent hover:bg-white/5"
                          }`}
                        >
                          <div>
                            <h4 className="font-semibold text-white">
                              {typeof sub === "object" ? sub.name : sub}
                            </h4>

                            <p className="text-sm text-white/60">
                              Explore Solution
                            </p>
                          </div>

                          <div className="flex items-center justify-center w-9 h-9 rounded-full shrink-0 bg-white/10 group-hover:bg-white/20 transition-all">
                            <ChevronRight size={16} className="text-white" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex relative overflow-hidden px-7 py-3.5 rounded-full font-semibold text-[#0a0f3c] bg-white shadow-lg"
        >
          <span className="relative z-10">Get Started →</span>
        </motion.button>

        {/* MOBILE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-black/95 backdrop-blur-md overflow-hidden border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-white/10 last:border-b-0"
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileSubOpen(
                            mobileSubOpen === index ? null : index,
                          )
                        }
                        className="w-full flex items-center justify-between py-4 text-white/90 font-medium"
                      >
                        {item.title}
                        <ChevronDown
                          size={18}
                          className={`transition-all duration-300 ${
                            mobileSubOpen === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileSubOpen === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 pb-3 pl-4">
                              {item.dropdown.map((sub, i) => (
                                <Link
                                  key={i}
                                  to={typeof sub === "object" ? sub.path : "#"}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-white/80 hover:bg-white/5 transition-all duration-300"
                                >
                                  <span>
                                    {typeof sub === "object" ? sub.name : sub}
                                  </span>
                                  <ChevronRight
                                    size={15}
                                    className="text-white/50"
                                  />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : item.path ? (
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-white/90 font-medium"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-white/90 font-medium"
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}

              {/* MOBILE GET STARTED BUTTON */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="mt-4 mb-2 px-7 py-3.5 rounded-full font-semibold text-[#0a0f3c] bg-white shadow-lg"
              >
                Get Started →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
