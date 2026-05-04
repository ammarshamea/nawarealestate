import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "@/lib/context";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nawah Real Estate Development | نواة التطوير العقاري",
  description:
    "Nawah Real Estate Development — Saudi Arabia's premier luxury real estate developer in Riyadh. Crafting Luxury… Building Lifestyles. نصنع الفخامة… ونبني أسلوب حياة",
  keywords:
    "luxury real estate, Saudi Arabia, Riyadh, real estate development, luxury villas, premium apartments, Vision 2030, نواة التطوير العقاري",
  openGraph: {
    title: "Nawah Real Estate Development | نواة التطوير العقاري",
    description: "Crafting Luxury… Building Lifestyles | نصنع الفخامة… ونبني أسلوب حياة",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* lang/dir are set dynamically by SiteProvider on the client */
    <html lang="en" dir="ltr" data-theme="dark" className={`${josefinSans.variable} font-josefin h-full`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
