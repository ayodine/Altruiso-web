"use client";
import RotatingText from "@/components/ui/RotatingText";

const lines = [
  "To builders.",
  "To those who imagine.",
  "To those who create.",
  "To those who serve.",
  "To those who build.",
];

export function ClosingManifesto() {
  return (
    <section
      id="manifesto"
      className="section-pad min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ background: "#000" }}
    >
      <div className="container-site flex flex-col items-center">
        <div className="flex items-center justify-center gap-3 mb-12 md:mb-16">
          <span className="blue-line" />
          <span className="text-overline text-white/40">The Manifesto</span>
          <span className="blue-line" />
        </div>

        {/* Fixed opening line */}
        <h2
          className="font-heading font-medium text-white mx-auto"
          style={{
            fontSize: "clamp(26px, 8vw, 75.6px)",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            maxWidth: "16ch",
          }}
        >
          The future belongs
        </h2>

        {/* Rotating sentence inside a brand-blue container */}
        <div
          className="mt-6 md:mt-8 font-heading font-medium max-w-full text-center"
          style={{
            fontSize: "clamp(26px, 8vw, 75.6px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          <RotatingText
            texts={lines}
            mainClassName="px-4 sm:px-5 md:px-6 bg-[#0276E8] text-white overflow-hidden py-1 sm:py-1.5 md:py-2 justify-center"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
            splitBy="words"
          />
        </div>
      </div>
    </section>
  );
}
