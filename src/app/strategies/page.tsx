import type { Metadata } from "next";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StrategiesContent } from "@/components/pages/StrategiesContent";

export const metadata: Metadata = {
  title: "Altruiso Strategies",
  description:
    "Altruiso Strategies partners with governments, public institutions, nonprofits, businesses, and community organizations to solve complex challenges through strategy, implementation, leadership, and capability building.",
  openGraph: {
    title: "Altruiso Strategies | Organizational Growth & Strategic Advisory",
    description:
      "Partnering with governments, public institutions, nonprofits, and businesses to solve complex challenges through practical strategy, leadership development, and capability building.",
    url: "https://altruiso-web-prod.web.app/strategies",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Altruiso Strategies" }],
  },
  alternates: {
    canonical: "https://altruiso-web-prod.web.app/strategies",
  },
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
