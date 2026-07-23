"use client";
import { MarqueeBand } from "@/components/ui/MarqueeBand";

// Placeholder wordmarks — swap for real logo SVGs when provided.
const partners = ["Royal Roads University", "YMCA", "British Council", "Wealthsimple"];

export function TrustedBy() {
  return (
    <section
      className="py-16 md:py-24 border-y border-white/[0.06]"
      style={{ background: "#000" }}
    >
      <div className="container-site mb-10 md:mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="blue-line" />
          <span className="text-overline text-white/40">Trusted By</span>
        </div>
        <p className="text-body-md text-white/45" style={{ lineHeight: 1.7, maxWidth: "420px" }}>
          Organizations we&rsquo;ve had the privilege of working with.
        </p>
      </div>
      <MarqueeBand duration={30} trackClassName="gap-x-6 pr-6 md:gap-x-8 md:pr-8">
        {partners.map((name) => (
          <span
            key={name}
            className="inline-flex items-center justify-center px-10 py-5 whitespace-nowrap"
            style={{ border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.02)" }}
          >
            <span
              className="font-display text-white/45"
              style={{ fontSize: "clamp(18px, 1.8vw, 26px)", letterSpacing: "-0.01em" }}
            >
              {name}
            </span>
          </span>
        ))}
      </MarqueeBand>
    </section>
  );
}
