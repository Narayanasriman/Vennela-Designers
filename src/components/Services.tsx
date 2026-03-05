import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import needle from "../assets/needle.png";
import stitching from "../assets/stitching.png";
import maggam from "../assets/maggamwork.png";
import machineEmbroidery from "../assets/machineembroidery.png";
import BeautyCare from "../assets/Beautycare.png";

const services = [
  { id: 1, name: "Stitching", image: stitching },
  { id: 2, name: "Maggam Work", image: maggam },
  { id: 3, name: "Computer Embroidery", image: machineEmbroidery },
  { id: 4, name: "Beauty Care", image: BeautyCare },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const active = services[activeIndex];

  return (
    <section className="pt-10 pb-16 md:pt-12 md:pb-20" id="services">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl text-[#5a3e2b] font-serif leading-none"
        >
          Our Services
        </motion.h1>

        <motion.img
          src={needle}
          alt="Needle underline"
          className="-mt-2 w-[160px] sm:w-[200px] md:w-[220px]"
        />

        {/* MOBILE: Image on top, list below | MD+: side by side */}
        <div className="mt-5 flex flex-col md:grid md:grid-cols-2 md:gap-16 lg:gap-20 items-start">

          {/* IMAGE — shows first on mobile, second on desktop */}
          <div className="order-1 md:order-2 relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[450px] mb-6 md:mb-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.image}
                alt={active.name}
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -60, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute top-0 md:-top-8 w-full
                           max-w-full md:max-w-[480px]
                           h-full object-cover object-center
                           [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]
                           [mask-repeat:no-repeat]
                           [mask-size:100%_100%]"
              />
            </AnimatePresence>
          </div>

          {/* SERVICE LIST — shows second on mobile, first on desktop */}
          <div className="order-2 md:order-1 space-y-5 sm:space-y-7 md:space-y-10 lg:space-y-12 w-full">
            {services.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className="flex items-center gap-4 sm:gap-6 cursor-pointer py-2 sm:py-3"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Checkbox */}
                  <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0
                                  border-2 border-[#6b4f3a] rounded-md
                                  flex items-center justify-center">
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="text-[#6b4f3a] text-sm sm:text-base md:text-lg font-bold"
                        >
                          ✓
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Label */}
                  <motion.span
                    animate={{
                      color: isActive ? "#6b4f3a" : "#5a3e2b",
                      x: isActive ? 6 : 0,
                      fontWeight: isActive ? 700 : 500,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-xl sm:text-2xl md:text-2xl lg:text-3xl"
                  >
                    {service.name}
                  </motion.span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}