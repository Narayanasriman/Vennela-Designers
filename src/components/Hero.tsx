import { motion } from "framer-motion";
import women1 from "../assets/women1.png";
import women2 from "../assets/women2.png";
import women3 from "../assets/women3.png";
import background from "../assets/backgroundimage.png";

const Hero: React.FC = () => {
  return (
    <section id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat
                 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center 
                      px-4 sm:px-8 md:px-12 lg:px-[80px] xl:px-[120px]
                      gap-8 md:gap-4 py-16 md:py-0">

        {/* LEFT TEXT */}
        <div className="space-y-4 max-w-full md:max-w-[520px] text-center md:text-left">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 
                       leading-tight text-[#5a3e2b] font-serif
                       whitespace-normal md:whitespace-nowrap"
          >
            Vennela Designers
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center md:justify-start items-center"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="w-10 sm:w-14 h-[1px] bg-[#c6a77d]/50"></span>
              <p className="text-sm sm:text-base lg:text-lg text-[#7a5c45] whitespace-nowrap px-1 sm:px-2">
                Stitch Your World Here
              </p>
              <span className="w-10 sm:w-14 h-[1px] bg-[#c6a77d]/50"></span>
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative w-full max-w-[380px] sm:max-w-[420px] mx-auto md:mx-0 md:ml-0"
          >
            <input
              type="text"
              placeholder="Search"
              className="w-full h-12 sm:h-14 rounded-full pl-5 sm:pl-6 pr-28 sm:pr-32
                         bg-white/90 backdrop-blur-md shadow-xl outline-none
                         text-[#5a3e2b] placeholder-[#9a8a7a] text-sm sm:text-base"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2
                         px-4 sm:px-6 py-1.5 sm:py-2 rounded-full
                         bg-gradient-to-r from-[#c6a77d] to-[#b8966b]
                         text-white font-medium text-sm sm:text-base
                         shadow-md hover:scale-105 transition duration-300"
            >
              Search
            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGES */}
        {/* Mobile/Tablet: stacked row | Desktop: absolute positioned */}
        <div className="relative w-full">

          {/* MOBILE & TABLET (hidden on lg+) */}
          <div className="flex lg:hidden justify-center items-end gap-2 sm:gap-4 h-[280px] sm:h-[360px] md:h-[420px]">
            <motion.img
              src={women2}
              alt="Back Model"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-[28%] sm:w-[27%] self-end object-cover object-top drop-shadow-xl
                         [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
              style={{ maxHeight: "85%" }}
            />
            <motion.img
              src={women1}
              alt="Middle Model"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="w-[32%] sm:w-[31%] self-end object-cover object-top drop-shadow-xl
                         [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
              style={{ maxHeight: "95%" }}
            />
            <motion.img
              src={women3}
              alt="Front Model"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-[34%] sm:w-[33%] self-end object-cover object-top drop-shadow-xl
                         [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]"
              style={{ maxHeight: "100%" }}
            />
          </div>

          {/* DESKTOP (hidden below lg) */}
          <div className="hidden lg:flex justify-end items-end min-h-[500px] xl:min-h-[700px]">

            {/* Back Image */}
            <motion.img
              src={women2}
              alt="Back Model"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-0 z-10 drop-shadow-2xl
                         w-[200px] lg:w-[240px] xl:w-[280px]
                         right-[280px] lg:right-[320px] xl:right-[400px]
                         [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
            />

            {/* Middle Image */}
            <motion.img
              src={women1}
              alt="Middle Model"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute bottom-0 z-20 drop-shadow-2xl
                         w-[240px] lg:w-[290px] xl:w-[330px]
                         right-[130px] lg:right-[160px] xl:right-[190px]
                         [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
            />

            {/* Front Image */}
            <motion.img
              src={women3}
              alt="Front Model"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative z-30 drop-shadow-2xl
                         w-[280px] lg:w-[320px] xl:w-[360px]
                         [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;