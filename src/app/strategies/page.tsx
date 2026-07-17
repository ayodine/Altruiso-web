import type { Metadata } from "next";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StrategiesContent } from "@/components/pages/StrategiesContent";

export const metadata: Metadata = {
  title: "Altruiso Strategies",
  description:
    "Our consulting and advisory company helping governments, organizations, institutions, nonprofits, and businesses solve meaningful challenges.",
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
