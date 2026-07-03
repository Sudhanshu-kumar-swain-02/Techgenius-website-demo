
import React from "react";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const flags = [
  "https://flagcdn.com/w40/in.png",
  "https://flagcdn.com/w40/us.png",
  "https://flagcdn.com/w40/gb.png",
  "https://flagcdn.com/w40/au.png",
];

const CountryBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        inline-flex
        items-center
        gap-3
        py-3
      "
    >
      <div className="flex -space-x-2">
        {flags.map((flag, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              y: {
                duration: 2 + i,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              scale: 1.15,
              y: -8,
              rotate: 8,
              zIndex: 50,
            }}
            className="
              w-10
              h-10
              rounded-full
              overflow-hidden
              border-2
              border-orange-400
              cursor-pointer
            "
          >
            <img
              src={flag}
              alt="country"
              className="
                w-full
                h-full
                object-cover
                rounded-full
              "
            />
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Globe
          size={18}
          className="text-orange-400 animate-spin"
        />

        <span className="text-sm font-semibold text-white">
          Now serving{" "}
          <span className="text-orange-200 font-bold">
            20+ countries
          </span>
        </span>
      </div>
    </motion.div>
  );
};

export default CountryBadge;