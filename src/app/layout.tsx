import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CookieConsent } from "@/components/ui/CookieConsent";

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
  metadataBase: new URL("https://altruiso-web-prod.web.app"),
  title: {
    template: "%s | ALTRUISO",
    default: "ALTRUISO | Building Institutions That Create Opportunity",
  },
  description:
    "Altruiso creates, invests in, and supports businesses that generate enduring value through ownership, strategic partnerships, and venture creation.",
  keywords: [
    "Altruiso",
    "Altruiso Investments",
    "Altruiso Strategies",
    "venture building",
    "private equity",
    "growth capital",
    "strategic advisory",
    "organizational strategy",
    "business acquisitions",
    "long-term investment",
  ],
  authors: [{ name: "Altruiso", url: "https://altruiso.com" }],
  creator: "Altruiso",
  publisher: "Altruiso",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://altruiso-web-prod.web.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://altruiso-web-prod.web.app",
    siteName: "ALTRUISO",
    title: "ALTRUISO | Building Institutions That Create Opportunity",
    description:
      "Altruiso creates, invests in, and supports businesses that generate enduring value through ownership, strategic partnerships, and venture creation.",
    images: [
      {
        url: "/altruiso-opengraph.png",
        width: 1200,
        height: 630,
        alt: "ALTRUISO | Building Institutions That Create Opportunity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALTRUISO | Building Institutions That Create Opportunity",
    description:
      "Altruiso creates, invests in, and supports businesses that generate enduring value through ownership, strategic partnerships, and venture creation.",
    images: ["/altruiso-opengraph.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/brand/favicon.svg",
    apple: "/brand/favicon.svg",
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
                "https://www.linkedin.com/company/altruiso-inc/",
                "https://www.instagram.com/altruisoholdings/",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
