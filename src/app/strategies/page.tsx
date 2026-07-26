import type { Metadata } from "next";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StrategiesContent } from "@/components/pages/StrategiesContent";

export const metadata: Metadata = {
  title: "Altruiso Strategies",
  description:
    "Altruiso Strategies partners with governments, public institutions, nonprofits, businesses, and community organizations to solve complex challenges through strategy, implementation, leadership, and capability building. Together, we turn ideas into practical action and measurable results.",
};

export default function StrategiesPage() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <StrategiesContent />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
