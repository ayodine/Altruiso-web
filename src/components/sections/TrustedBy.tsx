"use client";
import { MarqueeBand } from "@/components/ui/MarqueeBand";

// Per-logo heights tuned so the marks read at an even visual weight
// (compact marks like Royal Roads / YMCA render taller than wide wordmarks).
const partners = [
  { name: "Royal Roads University", src: "/images/logos/royal-roads.svg", height: 100 },
  { name: "YMCA", src: "/images/logos/ymca.svg", height: 64 },
  { name: "British Council", src: "/images/logos/british-council.svg", height: 56 },
  { name: "Wealthsimple", src: "/images/logos/wealthsimple.svg", height: 34 },
];

// Repeated so the marquee has enough width to loop smoothly with only 4 logos.
const track = [...partners, ...partners, ...partners];

const edgeFade =
  "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)";

export function TrustedBy() {
  return (
    <section
      className="py-5 md:py-7 border-y border-white/[0.06]"
      style={{ background: "#000" }}
    >
      <div className="mb-8 text-center">
        <span className="text-overline text-white/50" style={{ fontWeight: 700 }}>
          Trusted By
        </span>
      </div>
      <MarqueeBand
        duration={34}
        style={{ WebkitMaskImage: edgeFade, maskImage: edgeFade }}
        trackClassName="gap-x-2 pr-2 md:gap-x-4 md:pr-4"
      >
        {track.map((p, i) => (
          <span
            key={`${p.name}-${i}`}
            className="group flex items-center justify-center shrink-0 w-[300px] h-[112px] px-10 md:w-[360px] md:h-[120px] md:px-14"
            style={{ background: "rgba(255,255,255,0.045)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.src}
              alt={p.name}
              loading="lazy"
              className="w-auto object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              style={{ height: p.height, maxWidth: "100%", filter: "invert(1) brightness(1.8)" }}
            />
          </span>
        ))}
      </MarqueeBand>
    </section>
  );
}
