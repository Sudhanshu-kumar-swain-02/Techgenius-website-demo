import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { CheckCircle } from "lucide-react";

const users = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43d?w=200&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
];

const TrustedCompanies = () => {
  return (
    <div className="relative w-fit">

      {/* Main Content */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
        bg-white
        rounded-[30px]
        px-8
        py-7
        pr-36
        shadow-xl
        border
        border-gray-100
        "
      >

        {/* Top */}

        <div className="flex items-center gap-3 mb-5">

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            <CheckCircle
              size={22}
              className="text-green-500"
            />
          </motion.div>

          <span className="text-sm uppercase tracking-[3px] font-semibold text-green-600">

            Trusted Worldwide

          </span>

        </div>

        {/* Heading */}
<div>
  <div className="flex items-center gap-3 flex-wrap">
    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
      Trusted by

      <span className="text-blue-600 mx-2">
        500+
      </span>

      Organisations
    </h2>

    {/* Rating Badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: [1, 1.05, 1],
        y: [0, -3, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.1 }}
      className="flex items-center gap-1 px-3 py-1.5 rounded-full
      bg-yellow-50 border border-yellow-200 shadow-md"
    >
      {[...Array(4)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}

      {/* Half Star */}
      <div className="relative">
        <Star size={16} className="text-yellow-400" />
        <div className="absolute inset-0 overflow-hidden w-1/2">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
        </div>
      </div>

      <span className="ml-1 text-sm font-semibold text-gray-700">
        4.8
      </span>
    </motion.div>
  </div>

  <p className="text-gray-500 mt-3 max-w-md">
    Empowering businesses and learners with modern technology
    and innovative solutions.
  </p>
</div>


        {/* Images */}

        <div className="flex items-center mt-6">

          {users.map((user, index) => (

            <motion.img
              key={index}
              src={user}
              alt=""
              whileHover={{
                scale: 1.1,
                y: -4,
              }}
              className="
              w-14
              h-14
              rounded-full
              object-cover
              border-4
              border-white
              -ml-3
              first:ml-0
              shadow-md
              "
            />

          ))}

          <div
            className="
            w-14
            h-14
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            font-semibold
            border-4
            border-white
            -ml-3
            "
          >

            +9K

          </div>

        </div>

      </motion.div>



      {/* OVERLAP CARD */}

      <motion.div

        animate={{
          y: [0, -8, 0],
        }}

        transition={{
          repeat: Infinity,
          duration: 4,
        }}

        className="
        absolute
        -right-16
        top-1/2
        -translate-y-1/2

        bg-blue-600
        text-white

        rounded-[28px]

        px-8
        py-7

        shadow-2xl
        "
      >

        <h2 className="text-4xl font-bold">

          15K+

        </h2>

        <p className="text-blue-100">

          Active Users

        </p>

        <div className="h-[1px] bg-blue-400 my-5"></div>

        <h2 className="text-4xl font-bold">

          98%

        </h2>

        <p className="text-blue-100">

          Satisfaction

        </p>

      </motion.div>

    </div>
  );
};

export default TrustedCompanies;