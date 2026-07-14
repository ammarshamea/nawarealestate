import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteProvider } from "@/lib/context";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { josefinSans, tajawal } from "@/lib/fonts";
import { publicPath } from "@/lib/publicPath";

function siteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (explicit) return explicit;
  const host = process.env.VERCEL_URL?.trim();
  if (host) return `https://${host}`;
  return "http://localhost:3000";
}

const logoOgPath = publicPath("nawa_logo.svg");

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: "نواة للتطوير العقاري والمقاولات | Nawah Real Estate Development & Contracting",
  description:
    "نواة للتطوير العقاري والمقاولات | Nawah Real Estate Development & Contracting. Crafting Luxury… Building Lifestyles | نصنع الفخامة… ونبني أسلوب حياة",
  keywords:
    "luxury real estate, Saudi Arabia, Riyadh, real estate development, contracting, luxury villas, premium apartments, Vision 2030, نواة للتطوير العقاري والمقاولات",
  icons: {
    icon: [{ url: logoOgPath, type: "image/svg+xml", sizes: "any" }],
    shortcut: logoOgPath,
    apple: logoOgPath,
  },
  openGraph: {
    title: "نواة للتطوير العقاري والمقاولات | Nawah Real Estate Development & Contracting",
    description: "Crafting Luxury… Building Lifestyles | نصنع الفخامة… ونبني أسلوب حياة",
    type: "website",
    images: [
      {
        url: logoOgPath,
        alt: "نواة التطوير العقاري | Nawah Real Estate Development",
      },
    ],
    locale: "en_US",
    alternateLocale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "نواة للتطوير العقاري والمقاولات | Nawah Real Estate Development & Contracting",
    description: "Crafting Luxury… Building Lifestyles | نصنع الفخامة… ونبني أسلوب حياة",
    images: [logoOgPath],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f9edd1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${josefinSans.variable} ${tajawal.variable} h-full`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        <SiteProvider>
          <Navbar />
          <main className="site-shell flex-1 min-w-0 w-full overflow-x-clip">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </SiteProvider>
      </body>
    </html>
  );
}
