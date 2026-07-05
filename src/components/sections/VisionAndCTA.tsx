"use client";
import { motion } from "framer-motion";
import SplitText from "@/components/ui/SplitText";

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

          <SplitText
            tag="h2"
            text="To become a globally respected venture-building and investment company known for creating businesses, supporting builders, and developing institutions that generate enduring value across generations."
            className="font-display text-white mb-10 text-[clamp(28px,4vw,64px)] leading-[1.1] tracking-[-0.025em] font-normal"
            splitType="words"
            delay={28}
            duration={0.7}
            ease="power3.out"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-80px"
            textAlign="left"
          />

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
