import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const [open, setOpen] = useState(false);

  const services = ["Stitching", "Maggam Work", "Embroidery", "Beauty Care"];

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const phoneNumber = "919948194994";
    const text = `Hello Vennela Designers,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="py-10 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 scroll-mt-12" id="contact">
      <div className="w-full">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#5a3e2b]
                     mb-6 md:mb-10 text-center leading-snug"
        >
          Visit Our Store & Book Appointment
        </motion.h2>

        {/* ── LARGE OUTER CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
         className="bg-[#fdf6f2] border-2 border-[#e0ccc4] rounded-3xl
           shadow-2xl p-4 sm:p-5 md:p-7 lg:p-8"
        >

          {/* ── TWO INNER CARDS ── */}
         <div className="grid grid-cols-1 md:grid-cols-[55%_43%] gap-4 md:gap-6 lg:gap-8">
            {/* INNER CARD 1 — Map */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative bg-white border-2 border-[#e8d5cc]
                         rounded-2xl overflow-hidden shadow-md
                         h-[260px] sm:h-[340px] md:h-full min-h-[520px] lg:min-h-[580px]"
            >
              {/* Location Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2
                              bg-white/95 backdrop-blur-sm px-3 py-1.5
                              rounded-full shadow-md border border-[#e8d5cc]">
                <MapPin size={13} className="text-[#6b4f3a]" />
                <span className="text-xs font-medium text-[#5a3e2b]">
                  Ramachandrapuram, AP
                </span>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343.429976654176!2d82.0263776338347!3d16.838957644753616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a379210e9bbd7fd%3A0xfa9eaa9b02ee592a!2sRamadurga%20Rd%2C%20Ramachandrapuram%2C%20Andhra%20Pradesh%20533255!5e1!3m2!1sen!2sin!4v1772693011588!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
              />
            </motion.div>

            {/* INNER CARD 2 — Form */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white border-2 border-[#e8d5cc]
           rounded-2xl shadow-md
           p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center"
            >
              {/* Form Header */}
              <div className="mb-5">
                <h3 className="text-xl sm:text-2xl font-serif text-[#5a3e2b] mb-1">
                  Book an Appointment
                </h3>
                <p className="text-sm text-[#9a7a6a]">
                  Fill in your details and we'll reach you on WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

                {/* Name */}
                <motion.input
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 rounded-xl
                             border border-[#e0cfc7] bg-[#fdf6f2]
                             focus:ring-2 focus:ring-[#6b4f3a] focus:bg-white
                             outline-none transition text-sm sm:text-base"
                />

                {/* Phone */}
                <motion.input
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  viewport={{ once: true }}
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 rounded-xl
                             border border-[#e0cfc7] bg-[#fdf6f2]
                             focus:ring-2 focus:ring-[#6b4f3a] focus:bg-white
                             outline-none transition text-sm sm:text-base"
                />

                {/* Dropdown */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="w-full flex justify-between items-center
                               p-3 sm:p-4 rounded-xl border border-[#e0cfc7]
                               bg-[#fdf6f2] text-sm sm:text-base text-left"
                  >
                    <span className={formData.service ? "text-[#5a3e2b]" : "text-gray-400"}>
                      {formData.service || "Select Service"}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 flex-shrink-0 transition-transform duration-300
                                  ${open ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute w-full bg-white border border-[#e8d5cc]
                                   rounded-xl shadow-xl mt-2 z-50 overflow-hidden"
                      >
                        {services.map((service, i) => (
                          <motion.div
                            key={service}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => { setFormData({ ...formData, service }); setOpen(false); }}
                            className="p-3 text-sm sm:text-base hover:bg-[#fdf6f2]
                                       cursor-pointer transition border-b border-[#f0e8e4]
                                       last:border-0 text-[#5a3e2b]"
                          >
                            {service}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Message */}
                <motion.textarea
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  viewport={{ once: true }}
                  name="message"
                  placeholder="Your Message"
                  rows={3}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 rounded-xl
                             border border-[#e0cfc7] bg-[#fdf6f2]
                             focus:ring-2 focus:ring-[#6b4f3a] focus:bg-white
                             outline-none transition text-sm sm:text-base resize-none"
                />

                {/* Submit */}
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#6b4f3a] text-white
                             py-3 sm:py-4 rounded-xl
                             text-sm sm:text-base font-medium
                             hover:bg-[#5a3e2b] transition duration-300 shadow-md"
                >
                  Send on WhatsApp
                </motion.button>

              </form>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}