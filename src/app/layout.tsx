import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// PP Neue Montreal — headings / UI
const ppNeue = localFont({
  variable: "--font-pp-neue",
  display: "swap",
  src: [
    { path: "./fonts/PPNeueMontreal-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/PPNeueMontreal-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/PPNeueMontreal-Semibold.otf", weight: "600", style: "normal" },
  ],
});

// PP Fragment Serif — editorial display
const ppFragment = localFont({
  variable: "--font-pp-fragment",
  display: "swap",
  src: [
    { path: "./fonts/PPFragment-SerifLight.otf", weight: "300", style: "normal" },
    { path: "./fonts/PPFragment-SerifRegular.otf", weight: "400", style: "normal" },
    { path: "./fonts/PPFragment-SerifExtraBold.otf", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://altruiso.com"),
  title: {
    template: "%s | ALTRUISO",
    default: "ALTRUISO — Building Institutions That Create Opportunity",
  },
  description:
    "Altruiso creates, invests in, and supports businesses that generate enduring value through ownership, strategic partnerships, and venture creation.",
  keywords: [
    "venture building",
    "investment",
    "Altruiso",
    "private equity",
    "strategic partnerships",
    "venture creation",
  ],
  authors: [{ name: "Altruiso" }],
  creator: "Altruiso",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://altruiso.com",
    siteName: "ALTRUISO",
    title: "ALTRUISO — Building Institutions That Create Opportunity",
    description:
      "Altruiso creates, invests in, and supports businesses that generate enduring value through ownership, strategic partnerships, and venture creation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALTRUISO — Building Institutions That Create Opportunity",
    description:
      "Altruiso creates, invests in, and supports businesses that generate enduring value.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/brand/favicon.svg",
    shortcut: "/brand/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, ppNeue.variable, ppFragment.variable, "font-sans", geist.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Altruiso",
              url: "https://altruiso.com",
              description:
                "A venture-building and investment company creating businesses, supporting builders, and developing institutions that generate enduring value.",
              sameAs: [
                "https://linkedin.com/company/altruiso",
                "https://x.com/altruiso",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
