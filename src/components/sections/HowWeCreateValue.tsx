"use client";
import { useEffect, useRef, useState } from "react";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline";
import {
  Lightbulb,
  Compass,
  TrendingUp,
  Handshake,
  Sprout,
  Landmark,
  Infinity as InfinityIcon,
} from "lucide-react";

const steps = [
  { id: 1, label: "Idea", description: "Every institution begins with a compelling idea and the courage to pursue it.", icon: <Lightbulb className="size-5" /> },
  { id: 2, label: "Strategy", description: "We develop rigorous strategic frameworks to validate and refine the vision.", icon: <Compass className="size-5" /> },
  { id: 3, label: "Investment", description: "Capital, expertise, and relationships are deployed to accelerate momentum.", icon: <TrendingUp className="size-5" /> },
  { id: 4, label: "Partnership", description: "We build alliances with operators, founders, and strategic partners.", icon: <Handshake className="size-5" /> },
  { id: 5, label: "Growth", description: "Sustainable growth is pursued through disciplined execution and iteration.", icon: <Sprout className="size-5" /> },
  { id: 6, label: "Ownership", description: "We structure for long-term ownership, patient capital generating real returns.", icon: <Landmark className="size-5" /> },
  { id: 7, label: "Long-term Value", description: "Institutions are built to outlast trends and create generational impact.", icon: <InfinityIcon className="size-5" /> },
];

export function HowWeCreateValue() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Progressively "complete" the timeline as each step scrolls into view.
  useEffect(() => {
    const nodeList = sectionRef.current?.querySelectorAll<HTMLElement>(
      '[data-slot="timeline-item"]'
    );
    if (!nodeList || nodeList.length === 0) return;
    const items = Array.from(nodeList);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = items.indexOf(entry.target as HTMLElement) + 1;
            setActiveStep((prev) => (step > prev ? step : prev));
          }
        });
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-we-create-value"
      className="section-pad"
      style={{ background: "#000" }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left sticky header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-3 mb-8">
              <span className="blue-line" />
              <span className="text-overline text-white/40">How We Create Value</span>
            </div>
            <h2
              className="font-display text-white mb-6"
              style={{ fontSize: "clamp(28px, 3.5vw, 52px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              A proven pathway from idea to institution.
            </h2>
            <p className="text-body-lg text-white/50" style={{ lineHeight: 1.8, maxWidth: "380px" }}>
              Our model transforms ambitious ideas into sustainable businesses
              through a disciplined, long-term approach to value creation.
            </p>
          </div>

          {/* Right: reui timeline (brand-tinted via scoped CSS variables) */}
          <div
            style={
              {
                "--primary": "#0276E8",
                "--primary-foreground": "#ffffff",
                "--muted-foreground": "rgba(255,255,255,0.5)",
              } as React.CSSProperties
            }
          >
            <Timeline value={activeStep} orientation="vertical" className="w-full">
              {steps.map((item) => (
                <TimelineItem
                  key={item.id}
                  step={item.id}
                  data-step={item.id}
                  className="group-data-[orientation=vertical]/timeline:ms-12 group-data-[orientation=vertical]/timeline:not-last:pb-16"
                >
                  <TimelineHeader>
                    <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-9 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.75rem)] group-data-[orientation=vertical]/timeline:translate-y-[2.5rem] bg-white/10 group-data-completed/timeline-item:bg-[#0276E8] transition-colors duration-700 ease-out" />
                    <TimelineTitle className="mt-0.5 font-heading text-white text-[19px] tracking-[-0.01em]">
                      {item.label}
                    </TimelineTitle>
                    <TimelineIndicator className="bg-primary/10 text-white/40 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-11 items-center justify-center border-none transition-colors duration-500 group-data-[orientation=vertical]/timeline:-left-9">
                      {item.icon}
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="text-white/50 leading-relaxed">
                    {item.description}
                    <TimelineDate className="mt-2 mb-0 text-[#0276E8]/80 uppercase tracking-[0.15em] text-[11px] font-medium">
                      Phase {String(item.id).padStart(2, "0")}
                    </TimelineDate>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
}
