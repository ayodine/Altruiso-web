"use client";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <div id="builders-welcome" className="scroll-mt-28 relative overflow-hidden">
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
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.14) 45%, #000 100%), linear-gradient(100deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.08) 46%, transparent 66%)",
        }}
      />
      <div
        className="relative container-site"
        style={{
          paddingTop: "clamp(88px, 11vw, 180px)",
          paddingBottom: "clamp(72px, 8vw, 132px)",
        }}
      >
        <div className="flex items-center gap-3 mb-8">
          <span className="blue-line" />
          <span className="text-overline text-white/60">Work with Us</span>
        </div>
        <h2
          className="font-display text-white mb-6"
          style={{
            fontSize: "clamp(40px, 6vw, 92px)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            maxWidth: "15ch",
          }}
        >
          Let&rsquo;s build something that lasts.
        </h2>
        <p
          className="text-body-lg text-white/70 mb-10 md:mb-14"
          style={{ lineHeight: 1.7, maxWidth: "640px" }}
        >
          Whether you&apos;re developing a new strategy, leading organizational change, building internal capability, or delivering a community initiative, we&apos;d welcome the opportunity to explore how we can help.
        </p>
        <div className="flex">
          <a
            href="https://calendly.com/thealtruiso/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 font-heading font-medium text-white transition-shadow duration-300"
            style={{
              fontSize: "16px",
              background: "linear-gradient(135deg, #0276E8 0%, #005CB7 100%)",
              boxShadow: "0 0 40px rgba(2,118,232,0.22)",
              letterSpacing: "-0.005em",
            }}
            data-cursor-hover
          >
            Work with Us
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
