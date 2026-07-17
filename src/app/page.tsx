import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhyAltruiso } from "@/components/sections/WhyAltruiso";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { OurEcosystem } from "@/components/sections/OurEcosystem";
import { BuildersWelcome } from "@/components/sections/BuildersWelcome";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        {/* Hook — who we are in one line */}
        <Hero />
        {/* Why — the philosophy behind Altruiso */}
        <WhyAltruiso />
        {/* What we do — three pillars: Build, Acquire, Invest */}
        <WhatWeDo />
        {/* The branch — two platforms, each linking to its own page */}
        <OurEcosystem />
        {/* Invitation + contact */}
        <BuildersWelcome />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
