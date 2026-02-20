import { motion } from "framer-motion";
import women1 from "../assets/women1.png";
import women2 from "../assets/women2.png";
import women3 from "../assets/women3.png";
import background from "../assets/backgroundimage.png";

const Hero: React.FC = () => {
  return (
   <section
  className="relative min-h-screen flex items-center 
             bg-cover bg-center bg-no-repeat 
             [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
  style={{ backgroundImage: `url(${background})` }}
>

      <div className="w-full grid md:grid-cols-2 items-center px-[120px]">

        {/* LEFT TEXT */}
      {/* LEFT TEXT */}
<div className="space-y-4 max-w-[520px]">

  {/* Main Heading */}
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-7xl leading-tight text-[#5a3e2b] font-serif whitespace-nowrap"
  >
    Vennela Designers
  </motion.h1>

  {/* Subtitle Centered with Short Decorative Lines */}
 <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="flex justify-center items-center"
>
  <div className="flex items-center gap-4">
    
    <span className="w-14 h-[1px] bg-[#c6a77d]/50"></span>

    <p className="text-lg text-[#7a5c45] whitespace-nowrap px-2">
      Stitch Your World Here
    </p>

    <span className="w-14 h-[1px] bg-[#c6a77d]/50"></span>

  </div>
</motion.div>


  {/* Search Bar */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    className="relative w-full max-w-[420px] ml-13"
  >
    <input
      type="text"
      placeholder="Search"
      className="w-full h-14 rounded-full pl-6 pr-32 
                 bg-white/90 backdrop-blur-md 
                 shadow-xl outline-none 
                 text-[#5a3e2b] placeholder-[#9a8a7a]"
    />

    <button
      className="absolute right-2 top-1/2 -translate-y-1/2 
                 px-6 py-2 rounded-full 
                 bg-gradient-to-r from-[#c6a77d] to-[#b8966b] 
                 text-white font-medium 
                 shadow-md hover:scale-105 transition duration-300"
    >
      Search
    </button>
  </motion.div>

</div>



{/* RIGHT IMAGES */}
<div className="relative flex justify-end items-end min-h-[700px] pl-5">

  {/* Back Image */}
  <motion.img
    src={women2}
    alt="Back Model"
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="w-[280px] h-[420px] absolute bottom-0 right-[400px] z-10 drop-shadow-2xl
               [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
  />

  {/* Middle Image */}
  <motion.img
    src={women1}
    alt="Middle Model"
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="w-[330px] h-[480px] absolute bottom-0 right-[190px] z-20 drop-shadow-2xl
               [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
  />

  {/* Front Image */}
  <motion.img
    src={women3}
    alt="Front Model"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="w-[360px] relative z-30 drop-shadow-2xl
               [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]"
  />

</div>


      </div>
    </section>
  );
};

export default Hero;
