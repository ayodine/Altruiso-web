"use client";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80&auto=format&fit=crop",
    link: "#ecosystem",
    title: "Altruiso Strategies",
    description: "Financial Education",
    tag: "Education & Finance",
  },
  {
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&auto=format&fit=crop",
    link: "#ecosystem",
    title: "Mindset to Wealth",
    description: "Community Platform",
    tag: "Community",
  },
  {
    image: "https://images.unsplash.com/photo-1642790551116-18e4f7da4f6c?w=600&q=80&auto=format&fit=crop",
    link: "#ecosystem",
    title: "Swing Trade FX",
    description: "Trading Education",
    tag: "Financial Markets",
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format&fit=crop",
    link: "#ecosystem",
    title: "Future Advisory",
    description: "Strategic Consulting",
    tag: "Advisory",
  },
  {
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80&auto=format&fit=crop&sat=-100",
    link: "#investment-focus",
    title: "Altruiso Investments",
    description: "Capital Deployment",
    tag: "Investments",
  },
];

export function PortfolioGlobe() {
  return (
    <section
      id="portfolio-globe"
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, #0A0A0A 0%, #001020 50%, #0A0A0A 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="blue-line" />
              <span className="text-overline text-white/40">Interactive Portfolio</span>
            </div>
            <h2
              className="font-heading font-medium text-white"
              style={{
                fontSize: "clamp(24px, 3vw, 44px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Explore our universe of companies.
            </h2>
          </div>
          <p className="text-body-sm text-white/40 max-w-xs md:text-right" style={{ lineHeight: 1.7 }}>
            Explore each company in our ecosystem and discover our core offerings.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-2xl block"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "border-color 0.3s",
              }}
              data-cursor-hover
            >
              {/* Card Image */}
              <div className="relative overflow-hidden aspect-[16/10] border-b border-white/[0.04]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-overline text-[#0276E8] mb-2">{item.tag}</div>
                  <h3
                    className="font-heading font-medium text-white mb-2 group-hover:text-white transition-colors duration-300"
                    style={{ fontSize: "20px", letterSpacing: "-0.01em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center text-[#0276E8] text-xs font-mono font-bold uppercase tracking-wider gap-1.5 group-hover:translate-x-1 transition-transform duration-300">
                  Explore Briefing <span className="text-base">&#x2197;</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
