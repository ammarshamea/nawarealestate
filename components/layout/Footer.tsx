"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

type IconProps = { size?: number; className?: string; style?: React.CSSProperties };

function Instagram({ size = 15, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Twitter({ size = 15, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.763l7.738-8.835L1.872 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
    </svg>
  );
}

function Linkedin({ size = 15, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const footerLinks = {
  pages: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    "Luxury Compounds",
    "Private Villas",
    "Premium Apartments",
    "Commercial Towers",
    "Business Centers",
    "Retail Destinations",
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(181, 133, 22, 0.15)",
      }}
    >
      {/* Top CTA Bar */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f0e0b 0%, #1a1500 50%, #0f0e0b 100%)",
          borderBottom: "1px solid rgba(181, 133, 22, 0.2)",
        }}
      >
        <div className="container-luxury py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="eyebrow" style={{ color: "#b58516" }}>
              Start Your Journey
            </p>
            <h3
              className="text-2xl font-bold mt-2"
              style={{ color: "#ffffff", letterSpacing: "0.05em" }}
            >
              Ready to Invest in Luxury?
            </h3>
            <p
              className="arabic mt-1 text-sm"
              style={{ color: "rgba(235,191,91,0.7)" }}
            >
              هل أنت مستعد للاستثمار في الفخامة؟
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link href="/contact" className="btn-gold">
              Schedule Consultation
            </Link>
            <Link href="/projects" className="btn-outline-gold">
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-luxury py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex flex-col leading-tight mb-6">
              <span
                className="text-gold-gradient font-bold"
                style={{ fontSize: "1.3rem", letterSpacing: "0.25em" }}
              >
                NAWAH
              </span>
              <span
                className="mt-1"
                style={{
                  fontFamily: "var(--font-tajawal)",
                  color: "rgba(181,133,22,0.7)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                }}
              >
                نواة التطوير العقاري
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.03em" }}
            >
              A premier Saudi luxury real estate development company based in Riyadh — crafting landmark communities aligned with Vision 2030.
            </p>
            <p
              className="arabic text-sm"
              style={{ color: "rgba(235,191,91,0.5)", fontSize: "0.85rem" }}
            >
              نصنع الفخامة… ونبني أسلوب حياة
            </p>

            <div className="flex gap-4 mt-8">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border transition-all duration-300 hover:border-[#ebbf5b] hover:bg-[rgba(181,133,22,0.1)] group"
                  style={{ border: "1px solid rgba(181,133,22,0.25)" }}
                >
                  <Icon
                    size={15}
                    className="group-hover:text-[#ebbf5b] transition-colors"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="eyebrow mb-6" style={{ color: "#b58516" }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-[#ebbf5b] flex items-center gap-2 group"
                    style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em" }}
                  >
                    <span
                      className="w-3 h-px transition-all duration-300 group-hover:w-5"
                      style={{ background: "#b58516" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="eyebrow mb-6" style={{ color: "#b58516" }}>
              Development Types
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((s) => (
                <li key={s}>
                  <span
                    className="text-sm flex items-center gap-2"
                    style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "#b58516" }}
                    />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow mb-6" style={{ color: "#b58516" }}>
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <MapPin
                  size={15}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "#b58516" }}
                />
                <div>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                    Riyadh, Kingdom of Saudi Arabia
                  </p>
                  <p
                    className="arabic text-xs mt-0.5"
                    style={{ color: "rgba(181,133,22,0.5)" }}
                  >
                    الرياض، المملكة العربية السعودية
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={15} style={{ color: "#b58516" }} />
                <a
                  href="tel:+966500000000"
                  className="text-sm transition-colors hover:text-[#ebbf5b]"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  +966 50 000 0000
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={15} style={{ color: "#b58516" }} />
                <a
                  href="mailto:info@nawah.sa"
                  className="text-sm transition-colors hover:text-[#ebbf5b]"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  info@nawah.sa
                </a>
              </li>
            </ul>

            <div
              className="mt-8 p-4"
              style={{
                border: "1px solid rgba(181,133,22,0.2)",
                background: "rgba(181,133,22,0.04)",
              }}
            >
              <p className="eyebrow mb-1" style={{ color: "#b58516", fontSize: "0.6rem" }}>
                Investor Hotline
              </p>
              <a
                href="tel:+966500000001"
                className="text-lg font-bold text-gold-gradient"
              >
                +966 50 000 0001
              </a>
            </div>
          </div>
        </div>

        <div className="gold-line my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em" }}
          >
            © {new Date().getFullYear()} Nawah Real Estate Development. All rights reserved.
          </p>
          <p
            className="arabic text-xs"
            style={{ color: "rgba(181,133,22,0.35)" }}
          >
            نواة التطوير العقاري — الرياض، المملكة العربية السعودية
          </p>
        </div>
      </div>
    </footer>
  );
}
