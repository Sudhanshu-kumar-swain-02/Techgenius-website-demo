import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/previewImg_1.png";
import image2 from "../assets/previewImg_2.png";
import image3 from "../assets/previewImg_3.png";

const DashboardPreview = () => {
  const [hover, setHover] = useState(false);


const images = [image1, image2, image3];
const [currentImage, setCurrentImage] = useState(0);

 useEffect(() => {

  const interval = setInterval(() => {

    setCurrentImage(
      (prev) => (prev + 1) % images.length
    );

  }, 2500);

  return () => clearInterval(interval);

}, []);


  return (
    <div
      className="relative flex justify-center items-center py-10 px-4"
      style={{ marginTop: "clamp(-160px, -25vw, -320px)" }}
    >

      {/* Glow */}

      <div
        className="absolute bg-blue-200/30 rounded-full blur-[100px]"
        style={{ width: "clamp(200px, 40vw, 350px)", height: "clamp(200px, 40vw, 350px)" }}
      />

      <motion.div
        className="relative w-full"
        style={{
          perspective: "1500px",
          maxWidth: "650px",
          width: "min(92vw, 650px)",
          aspectRatio: "650 / 520",
        }}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >

        {/* Back Card */}

        <motion.div
          animate={{
            x: hover ? -70 : -25,
            y: hover ? 35 : 15,
            rotateZ: hover ? -12 : -5,
            rotateY: hover ? -15 : 0,
            scale: hover ? 0.95 : 0.92,
          }}
          transition={{ duration: 0.5 }}
          className="
          absolute
          inset-0
          rounded-[35px]
          overflow-hidden
          shadow-2xl
          "
        >
          <img
            src={images[2]}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Middle Card */}

        <motion.div
          animate={{
            x: hover ? 70 : 25,
            y: hover ? 20 : 10,
            rotateZ: hover ? 10 : 5,
            rotateY: hover ? 15 : 0,
            scale: hover ? 0.97 : 0.95,
          }}
          transition={{ duration: 0.5 }}
          className="
          absolute
          inset-0
          rounded-[35px]
          overflow-hidden
          shadow-2xl
          "
        >
          <img
            src={images[1]}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/15" />
        </motion.div>

        {/* Main Card */}

        <motion.div
          animate={{
            y: hover ? -18 : 0,
            rotateX: hover ? 8 : 0,
            rotateY: hover ? -8 : 0,
            scale: hover ? 1.03 : 1,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 120,
          }}
          className="
          absolute
          inset-0
          bg-white
          rounded-[40px]
          overflow-hidden
          shadow-[0_40px_100px_rgba(0,0,0,0.18)]
          border border-gray-100
          "
        >

          {/* Top Content */}

          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 max-w-[80%]">

            <p className="text-blue-600 font-semibold text-xs sm:text-sm tracking-widest uppercase">
              Learning Platform
            </p>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4 text-gray-900 leading-tight">
              Learn
              <br />
              Smarter.
            </h1>

            <p className="hidden sm:block text-gray-500 mt-5 max-w-[280px] leading-7">
              Interactive learning experiences designed for modern teams and
              institutions.
            </p>

          <motion.button
  whileHover={{
    scale: 1.05,
  }}
  whileTap={{
    scale: 0.95,
  }}
  className="
  mt-4
  sm:mt-7
  px-4
  sm:px-6
  py-2
  sm:py-3
  rounded-full
  bg-black
  text-white
  font-semibold
  text-sm
  sm:text-base
  "
>
  Get Started
</motion.button>

{/* 94% completion */}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="
  hidden
  sm:block
  mt-7
  bg-white
  rounded-3xl
  p-5
  shadow-xl
  w-[270px]
  max-w-full
  "
>

  <div className="flex justify-between">

    <div>

      <p className="text-sm text-gray-500">
        Course Completion
      </p>

      <h2 className="text-3xl font-bold">
        94%
      </h2>

    </div>

    <motion.div

      animate={{
        scale: [1,1.3,1]
      }}

      transition={{
        repeat: Infinity,
        duration: 1.5
      }}

      className="
      w-4
      h-4
      rounded-full
      bg-green-500
      mt-3
      "

    />

  </div>


  <div className="mt-4 h-3 bg-gray-200 rounded-full overflow-hidden">

    <motion.div

      initial={{ width: 0 }}

      animate={{
        width: "94%"
      }}

      transition={{
        duration: 2
      }}

      className="
      h-full
      rounded-full
      bg-gradient-to-r
      from-blue-500
      to-purple-600
      "

    />

  </div>

</motion.div>
          </div>

          {/* Image */}

         <div

  className="
  mt-10
  relative
  h-[55%]
  rounded-[28px]
  overflow-hidden
  "

  onMouseEnter={() => setHover(true)}

  onMouseLeave={() => setHover(false)}

>

  <AnimatePresence mode="wait">

    <motion.img

      key={currentImage}

      src={images[currentImage]}

      alt=""

      initial={{

        opacity: 0,

        x: 80,

        scale: 0.95,

      }}

      animate={{

        opacity: 1,

        x: 0,

        scale: 1,

      }}

      exit={{

        opacity: 0,

        x: -80,

        scale: 0.95,

      }}

      transition={{

        duration: 0.6,

      }}

      className="

      absolute

      inset-0

      w-full

      h-full

      object-cover

      rounded-[28px]

      "

    />

  </AnimatePresence>

</div>

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />

          {/* Floating Badge */}

          <motion.div
            animate={{
              y: hover ? -10 : 0,
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5,
            }}
            className="
            absolute
            bottom-4
            right-4
            sm:bottom-8
            sm:right-8
            bg-white
            rounded-2xl
            sm:rounded-3xl
            px-4
            py-3
            sm:px-6
            sm:py-4
            shadow-xl
            z-30
            "
          >
            <h3 className="text-xl sm:text-3xl font-bold text-gray-900">
              45K+
            </h3>

            <p className="text-xs sm:text-base text-gray-500">
              Active Students
            </p>
          </motion.div>

        </motion.div>

      </motion.div>
    </div>
  );
};

export default DashboardPreview;