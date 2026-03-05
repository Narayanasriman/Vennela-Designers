import { Mail, Linkedin, Phone, ArrowUpRight, Code2, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a0f0a 0%, #2d1a10 40%, #1a0f0a 100%)", fontFamily: "'Georgia', serif" }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(180,120,80,0.08) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(243,231,227,0.05) 0%, transparent 40%)`,
        }}
      />

      {/* Top accent line */}
      <div className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #c4855a, #f3e7e3, #c4855a, transparent)" }}
      />

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-10 sm:pt-12 md:pt-16 pb-8 md:pb-10">

        {/* Grid: 1 col mobile → 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-8 md:gap-12 lg:gap-16 items-start">

          {/* LEFT: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={13} color="#c4855a" />
              <span className="text-[10px] tracking-[3px] uppercase text-[#c4855a]">
                Web Design & Development
              </span>
            </div>

            <h2 className="text-2xl sm:text-[26px] md:text-[28px] font-bold text-[#f3e7e3] leading-tight tracking-tight mb-4">
              Console
              <br />
              <span className="text-[#c4855a]">Devlovepers</span>
            </h2>

            <p className="text-xs sm:text-[13px] text-[#a08070] leading-relaxed max-w-[260px]">
             We don't just build websites — we build your brand's digital identity.
            </p>
          </div>

          {/* CENTER: Divider — only visible on md+ */}
          <div
            className="hidden md:block w-px self-stretch"
            style={{ background: "linear-gradient(to bottom, transparent, #c4855a55, transparent)" }}
          />

          {/* RIGHT: Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-[10px] tracking-[3px] uppercase text-[#c4855a]">
              Get in Touch
            </p>

            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Developer Name */}
              <div className="flex items-center gap-2">
                <Code2 size={14} color="#c4855a" className="flex-shrink-0" />
                <span className="text-xs sm:text-[13px] text-[#f3e7e3] font-semibold">
                  Developed by Sriman
                </span>
              </div>

              {/* Contact Links */}
              {[
                { icon: <Mail size={14} />, label: "v.d.s.narayana2002@gmail.com", href: "mailto:v.d.s.narayana2002@gmail.com" },
                { icon: <Phone size={14} />, label: "+91 99481 94994", href: "tel:+919948194994" },
                { icon: <Linkedin size={14} />, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/sriman-narayan-878704228/", external: true },
              ].map((item, i) => (
                <a
                
                  key={i}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-2 sm:gap-3 text-[#a08070] hover:text-[#f3e7e3]
                             no-underline transition-colors duration-200 cursor-pointer
                             text-xs sm:text-[13px] break-all"
                >
                  <span className="text-[#c4855a] flex-shrink-0">{item.icon}</span>
                  <span className="break-all">{item.label}</span>
                  {item.external && (
                    <ArrowUpRight size={12} className="opacity-50 flex-shrink-0" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider line for mobile between sections */}
        <div className="block md:hidden h-px my-6 w-full"
          style={{ background: "linear-gradient(90deg, transparent, #c4855a33, transparent)" }}
        />

        {/* Bottom bar */}
        <div
          className="mt-8 md:mt-12 pt-5 flex flex-col sm:flex-row justify-between items-center
                     gap-3 flex-wrap text-center sm:text-left"
          style={{
            borderTop: "1px solid transparent",
            borderImage: "linear-gradient(90deg, transparent, #c4855a33, transparent) 1",
          }}
        >
          <p className="text-[10px] sm:text-[11px] text-[#604030] tracking-wide m-0">
            © 2026 Vennela Designers. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}