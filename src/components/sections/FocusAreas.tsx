"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// WebGL component — client only, no SSR
const InfiniteMenu = dynamic(
  () => import("@/components/ui/InfiniteMenu"),
  { ssr: false, loading: () => null }
);

const focusAreaItems = [
  {
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0276E8" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    link: "#ecosystem",
    title: "Education",
    description: "Financial literacy and skill building.",
    tag: "Focus Area 01",
  },
  {
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0276E8" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
    link: "#ecosystem",
    title: "Financial Markets",
    description: "Equities, derivatives, and FX trading.",
    tag: "Focus Area 02",
  },
  {
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0276E8" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    link: "#ecosystem",
    title: "Business Advisory",
    description: "Consulting and scaling strategies.",
    tag: "Focus Area 03",
  },
  {
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0276E8" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></svg>`,
    link: "#ecosystem",
    title: "Technology",
    description: "Venture building and digital tools.",
    tag: "Focus Area 04",
  },
  {
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0276E8" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>`,
    link: "#ecosystem",
    title: "Media",
    description: "Publications and digital presence.",
    tag: "Focus Area 05",
  },
  {
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0276E8" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    link: "#ecosystem",
    title: "Community Development",
    description: "Generational wealth and access.",
    tag: "Focus Area 06",
  },
  {
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0276E8" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    link: "#ecosystem",
    title: "Future Ventures",
    description: "Early-stage capital and partnerships.",
    tag: "Focus Area 07",
  },
];

export function FocusAreas() {
  // The WebGL sphere hides its text labels below 900px and is awkward on
  // touch, so only mount it on large screens; smaller screens get a grid.
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return (
    <section
      id="focus-areas"
      className="section-pad"
      style={{ background: "#0A0A0A" }}
    >
      <div className="container-site">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="blue-line" />
            <span className="text-overline text-white/40">Focus Areas</span>
            <span className="blue-line" />
          </div>
          <h2
            className="font-heading font-medium text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 52px)", letterSpacing: "-0.02em" }}
          >
            Where we focus our energy.
          </h2>
        </div>
      </div>

      {isDesktop ? (
        /* Infinite menu sphere — desktop only */
        <div style={{ height: "600px", position: "relative" }}>
          <InfiniteMenu items={focusAreaItems} scale={1.0} />
        </div>
      ) : (
        /* Readable grid — mobile & tablet */
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {focusAreaItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl p-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5"
                  style={{
                    background: "rgba(2,118,232,0.12)",
                    border: "1px solid rgba(2,118,232,0.25)",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: item.iconSvg.replace(
                      'stroke-width="0.4"',
                      'stroke-width="1.75"'
                    ),
                  }}
                />
                <div>
                  <div
                    className="text-overline text-[#0276E8] mb-1"
                    style={{ fontSize: "10px" }}
                  >
                    {item.tag}
                  </div>
                  <h3 className="font-heading font-medium text-white text-body-md mb-1">
                    {item.title}
                  </h3>
                  <p
                    className="text-body-sm text-white/45"
                    style={{ lineHeight: 1.6 }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
