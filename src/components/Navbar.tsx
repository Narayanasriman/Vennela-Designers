import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] 
      bg-white/60 backdrop-blur-md shadow-lg rounded-2xl px-8 py-4 
      flex items-center justify-between z-50"
    >
      {/* Logo */}
      <div className="text-xl font-semibold text-[#5a3e2b] tracking-wide">
        Vennela Designers
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 text-[#5a3e2b] font-medium">
        {["Home", "About", "Gallery", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="relative group"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c6a77d] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Mobile Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#5a3e2b] text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full bg-white/90 backdrop-blur-md 
          rounded-xl shadow-md p-6 flex flex-col gap-4 md:hidden"
        >
          {["Home", "About", "Gallery", "Contact"].map((item) => (
            <a key={item} href="#" className="text-[#5a3e2b]">
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
