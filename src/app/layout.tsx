import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { FreshaProvider } from "@/components/booking/FreshaModal";
import { BUSINESS_INFO } from "@/data/business";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thebeautybarnleicester.co.uk"),
  title: {
    default: "The Beauty Barn Leicester | Exclusive Private Day Spa & Luxury Salon",
    template: "%s | The Beauty Barn Leicester",
  },
  description:
    "Leicester's premier private day spa in Scraptoft. Exclusive lodge and hot tub hire with zero strangers, couples massage, full body Swedish massage, Bramley organic facials, and pamper packages from £90pp. Book online with Fresha.",
  keywords: [
    "massage leicester",
    "the beauty barn leicester",
    "private spa leicester",
    "spa day leicester",
    "couples massage leicester",
    "full body massage leicester",
    "facial leicester",
    "beauty salon scraptoft",
    "day spa leicestershire",
    "hot tub spa packages leicester"
  ],
  openGraph: {
    title: "The Beauty Barn Leicester | Exclusive Private Day Spa & Beauty Salon",
    description:
      "Leicester's only 100% private day spa. Relax in your exclusive heated lodge & hot tub with afternoon tea, Swedish massage, and luxury pamper packages.",
    url: "https://www.thebeautybarnleicester.co.uk",
    siteName: "The Beauty Barn Leicester",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Beauty Barn Leicester | Exclusive Private Day Spa",
    description: "Private lodge & hot tub pamper packages, Swedish massage, and organic facials in Scraptoft, Leicester.",
  },
  alternates: {
    canonical: "https://www.thebeautybarnleicester.co.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="font-sans antialiased bg-cream-50 text-charcoal-900 selection:bg-sage-200 selection:text-sage-900 min-h-screen flex flex-col">
        <FreshaProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </FreshaProvider>
      </body>
    </html>
  );
}
