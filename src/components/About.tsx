import { motion } from "framer-motion";
import aboutImage from "../assets/aboutImage.png";

export default function About() {
  return (
    <section className="py-20 scroll-mt-12" id='about'>
      <div className="container mx-auto px-20 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE TEXT */}
        <div className="space-y-6">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-[#5a3e2b]"
          >
            About Vennela Designers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg font-medium text-[#6b4f3a] leading-relaxed"
          >
            With over <span className="font-semibold text-[#5a3e2b]">30 years of experience</span> 
            in the tailoring industry, Vennela Designers has been crafting garments 
            with precision, passion, and perfection.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg font-medium text-[#6b4f3a] leading-relaxed"
          >
            We specialize in stitching for ladies, gents, and kids, offering 
            customized designs that combine comfort and elegance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg font-medium text-[#6b4f3a] leading-relaxed"
          >
            Our expertise includes bridal wear, formal wear, Punjabi suits, 
            chudidhars, and detailed Maggam work.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-lg font-medium text-[#6b4f3a] leading-relaxed"
          >
            With over <span className="font-semibold text-[#5a3e2b]">10 years of embroidery experience</span>, 
            we design each piece stone by stone, thread by thread, creating 
            spectacular handcrafted masterpieces.
          </motion.p>

        </div>

      <motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative"
>
<div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-xl">
  <img
    src={aboutImage}
    alt="Bridal Embroidery Work"
    className="w-full h-full object-cover hover:scale-105 transition duration-500"
  />
</div>

</motion.div>


      </div>
    </section>
  );
}
