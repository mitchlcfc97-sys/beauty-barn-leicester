import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import Analytics from "@/components/analytics/Analytics";
import MobileBookingBar from "@/components/layout/MobileBookingBar";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
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
    "Leicester's premier private day spa in Scraptoft. Exclusive garden cabin and hot tub hire for your group, couples massage, full body Swedish massage, Bramley organic facials, and pamper packages from £90pp. Book online with Fresha.",
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
      "Leicester's only 100% private day spa. Relax in your exclusive garden cabin & hot tub with afternoon tea, Swedish massage, and luxury pamper packages.",
    url: "https://www.thebeautybarnleicester.co.uk",
    siteName: "The Beauty Barn Leicester",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Beauty Barn Leicester | Exclusive Private Day Spa",
    description: "Private garden cabin & hot tub pamper packages, Swedish massage, and organic facials in Scraptoft, Leicester.",
  },
  alternates: {
    canonical: "https://www.thebeautybarnleicester.co.uk",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
        <Analytics />
        <FreshaProvider>
          <Navbar />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
          <MobileBookingBar />
        </FreshaProvider>
      </body>
    </html>
  );
}
