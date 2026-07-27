"use client";
import { ArrowRight } from "lucide-react";

export function InvestmentsCTA() {
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
        <div className="flex items-center gap-3 mb-8">
          <span className="blue-line" />
          <span className="text-overline text-white/60">Pitch to Us</span>
        </div>

        <h2
          className="font-display text-white mb-6"
          style={{
            fontSize: "clamp(36px, 5.2vw, 80px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: "18ch",
          }}
        >
          Looking for the Right Partner?
        </h2>

        <p
          className="text-body-lg text-white/70 mb-10 md:mb-14"
          style={{ lineHeight: 1.7, maxWidth: "580px" }}
        >
          Whether you&apos;re seeking growth capital, succession planning, or a long-term investment partner, we&apos;d welcome the opportunity to learn more about your business.
        </p>

        <div>
          <a
            href="/pitch"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 font-heading font-medium text-white transition-all duration-300"
            style={{
              fontSize: "16px",
              background: "linear-gradient(135deg, #0276E8 0%, #005CB7 100%)",
              boxShadow: "0 0 40px rgba(2,118,232,0.3)",
              letterSpacing: "-0.005em",
            }}
            data-cursor-hover
          >
            Pitch to Us
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
