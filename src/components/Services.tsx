import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import needle from "../assets/needle.png";
import stitching from "../assets/stitching.png";  
import maggam from "../assets/maggamwork.png";
import machineEmbroidery from "../assets/machineembroidery.png";
import BeautyCare from '../assets/Beautycare.png';

const services = [
  { id: 1, name: "Stitching", image: stitching },
  { id: 2, name: "Maggam Work", image: maggam },
  { id: 3, name: "Computer Embroidery", image: machineEmbroidery },
  { id: 4, name: "Beauty Care", image: BeautyCare },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const active = services[activeIndex];

  return (
    <section className="pt-12 pb-20">
      <div className="container mx-auto px-25">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl text-[#5a3e2b] font-serif leading-none"
        >
          Our Services
        </motion.h1>

        <motion.img
          src={needle}
          alt="Needle underline"
          className="-mt-2 w-[220px]"
        />

        <div className="grid md:grid-cols-2 gap-20 mt-5 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-12">

            {services.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className="flex items-center gap-6 cursor-pointer py-3"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >

                {/* Minimal Checkbox */}
{/* Minimal Checkbox */}
<div className="relative w-8 h-8 border-2 border-[#6b4f3a] rounded-md flex items-center justify-center">

  <AnimatePresence>
    {isActive && (
      <motion.span
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-[#6b4f3a] text-lg font-bold"
      >
        ✓
      </motion.span>
    )}
  </AnimatePresence>

</div>


                  {/* Text */}
                  <motion.span
                    animate={{
                      color: isActive ? "#6b4f3a" : "#5a3e2b",
                      x: isActive ? 6 : 0,
                      fontWeight: isActive ? 700 : 500
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl"
                  >
                    {service.name}
                  </motion.span>

                </motion.div>
              );
            })}

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative h-[450px]">

            <AnimatePresence mode="wait">
            <motion.img
  key={active.id}
  src={active.image}
  alt={active.name}
  initial={{ opacity: 0, x: 80, scale: 0.95 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  exit={{ opacity: 0, x: -80, scale: 0.95 }}
  transition={{ duration: 0.6 }}
  className="absolute -top-8 w-full max-w-[480px]
  [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]
  [mask-repeat:no-repeat]
  [mask-size:100%_100%]"
/>

            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
