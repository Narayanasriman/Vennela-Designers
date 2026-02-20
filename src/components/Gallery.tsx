import { motion } from "framer-motion";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";

export default function Gallery() {
    const images=[
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
    ]
  return (
    <section className="py-24">
      <div className="container mx-auto px-20">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#5a3e2b]">
            Our Work Gallery
          </h2>
          <p className="text-lg text-[#6b4f3a] mt-4">
            Explore the artistry of our tailored and embroidered masterpieces.
          </p>
        </div>

       <div className="grid md:grid-cols-3 gap-10">
  {images.map((img, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full h-[280px] rounded-3xl shadow-md hover:shadow-xl transition duration-500 overflow-hidden"
    >
      <img
        src={img}
        alt="Gallery"
        className="w-full h-full object-cover hover:scale-105 transition duration-500"
      />
    </motion.div>
  ))}
</div>


      </div>
    </section>
  );
}
