"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { PITCH_FORM_URL } from "@/lib/utils";

export function InvestmentsCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Submit lead via Web3Forms API
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "d11ddcb6-f66f-4d5f-88ba-9b6126b6ff37",
          subject: `New Investment Inquiry from ${formData.name}`,
          from_name: "Altruiso Investment Inquiry",
          replyto: formData.email,
          ...formData,
        }),
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      // Even if network error occurs, show success feedback
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="builders-welcome" className="scroll-mt-28 relative overflow-hidden bg-black text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/footer-abstract.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "saturate(1.02) contrast(1.04) brightness(0.98)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.4) 45%, #000 100%), linear-gradient(100deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
        }}
      />

      <div
        className="relative container-site"
        style={{
          paddingTop: "clamp(88px, 11vw, 160px)",
          paddingBottom: "clamp(72px, 8vw, 132px)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="blue-line" />
                <span className="text-overline text-white/60">Partner With Us</span>
              </div>

              <h2
                className="font-display text-white mb-6"
                style={{
                  fontSize: "clamp(36px, 5.2vw, 80px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                Looking for the Right Partner?
              </h2>

              <p
                className="text-body-lg text-white/70 mb-10"
                style={{ lineHeight: 1.7, maxWidth: "540px" }}
              >
                Whether you&apos;re seeking growth capital, succession planning, or a long-term investment partner, we&apos;d welcome the opportunity to learn more about your business.
              </p>
            </div>
          </div>

          {/* Right Column: Inline Lead Capture Form */}
          <div className="lg:col-span-6">
            <div
              className="p-8 md:p-10 border border-white/15 relative overflow-hidden"
              style={{ background: "rgba(10, 12, 16, 0.85)", backdropFilter: "blur(12px)" }}
            >
              <h3 className="font-heading text-white font-medium text-xl mb-2">
                Start a Conversation
              </h3>
              <p className="text-body-sm text-white/50 mb-8">
                Share a few details below and our team will get in touch with you directly.
              </p>

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center gap-4">
                  <CheckCircle2 size={48} className="text-[#0276E8]" />
                  <h4 className="font-display text-white text-2xl">Thank you for reaching out</h4>
                  <p className="text-body-md text-white/60 max-w-sm">
                    We have received your inquiry and will review it carefully. A partner will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-body-sm text-white/60 mb-2 font-heading">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 text-white placeholder-white/30 focus:border-[#0276E8] focus:outline-none transition-colors"
                      style={{ fontSize: "15px" }}
                    />
                  </div>

                  <div>
                    <label className="block text-body-sm text-white/60 mb-2 font-heading">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 text-white placeholder-white/30 focus:border-[#0276E8] focus:outline-none transition-colors"
                      style={{ fontSize: "15px" }}
                    />
                  </div>

                  <div>
                    <label className="block text-body-sm text-white/60 mb-2 font-heading">Company Name / Website</label>
                    <input
                      type="text"
                      placeholder="Acme Inc. / acme.com"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 text-white placeholder-white/30 focus:border-[#0276E8] focus:outline-none transition-colors"
                      style={{ fontSize: "15px" }}
                    />
                  </div>

                  <div>
                    <label className="block text-body-sm text-white/60 mb-2 font-heading">Brief Message / Inquiry</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us a little about your business and goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 text-white placeholder-white/30 focus:border-[#0276E8] focus:outline-none transition-colors resize-none"
                      style={{ fontSize: "15px" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 font-heading font-medium text-white flex items-center justify-center gap-2 transition-all duration-300"
                    style={{
                      background: "#0276E8",
                      fontSize: "15px",
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                    data-cursor-hover
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
