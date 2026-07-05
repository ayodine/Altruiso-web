"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Vision() {
  return (
    <section
      id="vision"
      className="section-pad"
      style={{ background: "#000" }}
    >
      <div className="container-site">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="blue-line" />
            <span className="text-overline text-white/40">Our Vision</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-white mb-10"
            style={{
              fontSize: "clamp(28px, 4vw, 64px)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              fontWeight: 400,
            }}
          >
            To become a globally respected venture-building and investment
            company known for creating businesses, supporting builders, and
            developing institutions that generate enduring value across
            generations.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border-l-2 pl-8 py-2"
            style={{ borderColor: "#0276E8" }}
          >
            <p className="text-body-xl text-white/55" style={{ lineHeight: 1.8 }}>
              We aspire to be a home for ambitious ideas, exceptional people, and
              meaningful opportunities—a place where builders come to create
              institutions that outlast them.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="section-pad mesh-gradient-light"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(2,118,232,1) 1px, transparent 1px), linear-gradient(90deg, rgba(2,118,232,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-site relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="blue-line" />
            <span className="text-overline text-white/40">Get In Touch</span>
            <span className="blue-line" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-medium text-white mb-6"
            style={{
              fontSize: "clamp(32px, 5vw, 72px)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
            }}
          >
            Let&rsquo;s Build Something That Lasts.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body-lg text-white/55 mb-12"
            style={{ lineHeight: 1.8 }}
          >
            Whether you&rsquo;re building a company, investing in the future, or
            exploring meaningful opportunities, we&rsquo;d love to start the
            conversation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#ecosystem"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-medium text-white"
              style={{
                fontSize: "15px",
                background: "#0276E8",
                boxShadow: "0 0 40px rgba(2,118,232,0.25)",
              }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#ecosystem")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-cursor-hover
            >
              Explore Our Ecosystem
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="mailto:ideas@altruiso.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-medium text-white border border-white/20 hover:border-white/40 transition-colors"
              style={{ fontSize: "15px" }}
              data-cursor-hover
            >
              Share Your Idea
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
