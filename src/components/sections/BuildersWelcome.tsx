"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function BuildersWelcome() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New idea from ${form.name}`);
    const body = encodeURIComponent(
      `Full name: ${form.name}\nEmail: ${form.email}\nPhone: ${
        form.phone || "—"
      }`
    );
    window.location.href = `mailto:ideas@altruiso.com?subject=${subject}&body=${body}`;
  };

  const fieldStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
  };

  return (
    <section
      id="builders-welcome"
      className="section-pad"
      style={{ background: "#0A0A0A" }}
    >
      <div className="container-site">
        <div className="flex items-center gap-3 mb-14 md:mb-20">
          <span className="blue-line" />
          <span className="text-overline text-white/40">Builders Welcome</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left — big statement */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-heading font-medium text-white mb-8"
              style={{
                fontSize: "clamp(34px, 5vw, 76px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Extraordinary things begin with a single idea — and the courage to
              pursue it.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-body-xl text-white/50"
              style={{ lineHeight: 1.8, maxWidth: "520px" }}
            >
              We want to hear from ambitious people building meaningful things.
              Share your idea with us — we&rsquo;re always looking for the next
              great institution to help build.
            </motion.p>
          </div>

          {/* Right — contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 rounded-[24px] border border-white/10 p-8 md:p-10 flex flex-col gap-5"
            style={{
              background:
                "linear-gradient(160deg, rgba(2,118,232,0.10) 0%, rgba(10,10,10,0.6) 60%)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="bw-name"
                className="text-caption text-white/50 font-heading"
              >
                Full name
              </label>
              <input
                id="bw-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full rounded-xl px-4 py-3.5 text-white text-body-md placeholder:text-white/25 outline-none focus:border-[#0276E8] transition-colors"
                style={fieldStyle}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="bw-email"
                className="text-caption text-white/50 font-heading"
              >
                Email
              </label>
              <input
                id="bw-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full rounded-xl px-4 py-3.5 text-white text-body-md placeholder:text-white/25 outline-none focus:border-[#0276E8] transition-colors"
                style={fieldStyle}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="bw-phone"
                className="text-caption text-white/50 font-heading"
              >
                Phone{" "}
                <span className="text-white/25">(optional)</span>
              </label>
              <input
                id="bw-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-xl px-4 py-3.5 text-white text-body-md placeholder:text-white/25 outline-none focus:border-[#0276E8] transition-colors"
                style={fieldStyle}
              />
            </div>

            <button
              type="submit"
              className="group mt-3 inline-flex w-full items-center justify-center gap-4 px-8 py-5 rounded-full font-heading font-medium text-white"
              style={{
                fontSize: "16px",
                background: "linear-gradient(135deg, #0276E8 0%, #005CB7 100%)",
                boxShadow: "0 0 40px rgba(2,118,232,0.3)",
                letterSpacing: "-0.005em",
              }}
              data-cursor-hover
            >
              Share Your Idea
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
