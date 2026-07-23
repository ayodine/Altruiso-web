import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { OurEcosystem } from "@/components/sections/OurEcosystem";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { BuildersWelcome } from "@/components/sections/BuildersWelcome";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        {/* Hook — who we are in one line */}
        <Hero />
        {/* Who we are — the philosophy and the two platforms */}
        <WhoWeAre />
        {/* What we do — three pillars: Build, Acquire, Invest */}
        <WhatWeDo />
        {/* The branch — two platforms, each linking to its own page */}
        <OurEcosystem />
        {/* Social proof — organizations we've worked with */}
        <TrustedBy />
        {/* Invitation + contact */}
        <BuildersWelcome />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
