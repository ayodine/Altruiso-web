import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
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
        {/* Who we are — the philosophy and the two platforms */}
        <WhoWeAre />
        {/* The branch — two platforms, each linking to its own page */}
        <OurEcosystem />
        {/* Invitation + contact */}
        <BuildersWelcome />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
