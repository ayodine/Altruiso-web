"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function BuildersWelcome() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Investment pitch from ${form.name}`);
    const body = encodeURIComponent(
      `Full name: ${form.name}\nEmail: ${form.email}\nPhone: ${
        form.phone || "—"
      }`
    );
    window.location.href = `mailto:ideas@altruiso.com?subject=${subject}&body=${body}`;
  };

  const fields = [
    { id: "bw-name", name: "name", type: "text", label: "Full name", placeholder: "Jane Doe", required: true },
    { id: "bw-email", name: "email", type: "email", label: "Email", placeholder: "you@company.com", required: true },
    { id: "bw-phone", name: "phone", type: "tel", label: "Phone — optional", placeholder: "+1 (555) 000-0000", required: false },
  ] as const;

  return (
    <section
      id="builders-welcome"
      className="section-pad"
      style={{ background: "#0A0A0A" }}
    >
      <div className="container-site">
        <div className="flex items-center gap-3 mb-14 md:mb-20">
          <span className="blue-line" />
          <span className="text-overline text-white/40">Partner With Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left — big statement + secondary CTA */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-white mb-8"
              style={{
                fontSize: "clamp(36px, 5vw, 78px)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                maxWidth: "14ch",
              }}
            >
              Let&rsquo;s build something that lasts.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-body-xl text-white/50 mb-10"
              style={{ lineHeight: 1.8, maxWidth: "540px" }}
            >
              Extraordinary things begin with a single idea — and the courage to
              pursue it. Whether you&rsquo;re building a company, investing in
              the future, or exploring meaningful opportunities, pitch your
              idea and we&rsquo;ll start the conversation.
            </motion.p>
          </div>

          {/* Right — contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative border border-white/10 overflow-hidden"
            style={{
              background:
                "radial-gradient(120% 90% at 100% 0%, rgba(2,118,232,0.14) 0%, transparent 55%), #0B0D10",
            }}
          >
            {/* top accent hairline */}
            <span
              className="absolute top-0 left-0 w-full h-[2px] z-10"
              style={{
                background:
                  "linear-gradient(90deg, #0276E8 0%, rgba(2,118,232,0.15) 70%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            <div className="p-8 md:p-10">
            {/* Card header */}
            <div className="mb-9">
              <span className="text-overline text-[#0276E8] block mb-3">
                Pitch for Investment
              </span>
              <p className="text-body-md text-white/45" style={{ lineHeight: 1.65 }}>
                A few details and we&rsquo;ll take it from there.
              </p>
            </div>

            {/* Editorial underline fields */}
            <div className="flex flex-col gap-7 mb-10">
              {fields.map((f) => (
                <div key={f.id} className="group/field flex flex-col gap-1">
                  <label
                    htmlFor={f.id}
                    className="text-overline text-white/35 transition-colors group-focus-within/field:text-[#0276E8]"
                    style={{ fontSize: "10px" }}
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    value={form[f.name]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    className="w-full bg-transparent border-0 border-b border-white/15 rounded-none px-0 py-3 text-white placeholder:text-white/20 outline-none focus:border-[#0276E8] transition-colors duration-300"
                    style={{ fontSize: "17px" }}
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-4 px-8 py-5 font-heading font-medium text-white transition-shadow duration-300"
              style={{
                fontSize: "16px",
                background: "linear-gradient(135deg, #0276E8 0%, #005CB7 100%)",
                boxShadow: "0 0 40px rgba(2,118,232,0.25)",
                letterSpacing: "-0.005em",
              }}
              data-cursor-hover
            >
              Pitch for Investment
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <p className="text-caption text-white/30 text-center mt-5">
              Prefer email?{" "}
              <a
                href="mailto:ideas@altruiso.com"
                className="text-white/50 hover:text-white transition-colors link-underline"
                data-cursor-hover
              >
                ideas@altruiso.com
              </a>
            </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
