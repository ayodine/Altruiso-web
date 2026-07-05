import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatsList } from "@/components/sections/StatsList";
import { MissionStatement } from "@/components/sections/MissionStatement";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { HowWeCreateValue } from "@/components/sections/HowWeCreateValue";
import { OurEcosystem } from "@/components/sections/OurEcosystem";
import { InvestmentFocus } from "@/components/sections/InvestmentFocus";
import { Portfolio } from "@/components/sections/Portfolio";
import { FocusAreas } from "@/components/sections/FocusAreas";
import { Philosophy } from "@/components/sections/Philosophy";
import { BuildersWelcome } from "@/components/sections/BuildersWelcome";
import { Vision, FinalCTA } from "@/components/sections/VisionAndCTA";
import { ClosingManifesto } from "@/components/sections/ClosingManifesto";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        {/* Hook */}
        <Hero />
        {/* Manifesto — bold ethos statement, sets the tone up front */}
        <ClosingManifesto />
        {/* Why — the purpose behind the work */}
        <MissionStatement />
        {/* Who — the people and identity */}
        <WhoWeAre />
        {/* What — the offerings / pillars */}
        <WhatWeDo />
        {/* How — the method by which we create value */}
        <HowWeCreateValue />
        {/* Proof — the numbers that back it up */}
        <StatsList />
        {/* The companies — family, then detailed cards */}
        <OurEcosystem />
        <Portfolio />
        {/* The investment lens & the sectors we focus on */}
        <InvestmentFocus />
        <FocusAreas />
        {/* Beliefs & the long-term aspiration */}
        <Philosophy />
        <Vision />
        {/* Invitation → conversion */}
        <BuildersWelcome />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
