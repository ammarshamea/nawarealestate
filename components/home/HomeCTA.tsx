"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, Phone } from "lucide-react";

export default function HomeCTA() {
  return (
    <section
      className="relative overflow-hidden py-32"
      style={{
        background: "linear-gradient(135deg, #0f0e00 0%, #1a1500 40%, #0f0e00 100%)",
      }}
    >
      {/* Gold gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(181,133,22,0.15) 0%, transparent 65%)",
        }}
      />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #b58516 0px, #b58516 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* Top + bottom border lines */}
      <div className="gold-line absolute top-0 left-0 right-0" />
      <div className="gold-line absolute bottom-0 left-0 right-0" />

      <div className="container-luxury relative z-10 text-center">
        <ScrollReveal>
          <p className="eyebrow" style={{ color: "#b58516", marginBottom: "1rem" }}>
            Begin Your Journey
          </p>
          <p
            className="arabic mb-3"
            style={{
              fontFamily: "var(--font-tajawal)",
              color: "rgba(235,191,91,0.6)",
              fontSize: "1rem",
            }}
          >
            ابدأ رحلتك مع نواة
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            Ready to Own{" "}
            <span className="text-gold-animate">Excellence?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <p
            className="mt-6 mx-auto max-w-xl text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.03em" }}
          >
            Schedule a private consultation with our investment advisors and discover
            how a Nawah property can transform your portfolio and lifestyle.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link href="/contact" className="btn-gold text-base">
              Schedule Private Consultation
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+966500000001" className="btn-outline-gold">
              <Phone size={14} />
              Investor Hotline
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.32}>
          <div
            className="flex items-center justify-center gap-8 mt-14 pt-10"
            style={{ borderTop: "1px solid rgba(181,133,22,0.15)" }}
          >
            {["REGA Licensed", "ISO Certified", "Vision 2030 Partner"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#b58516" }}
                />
                <span
                  className="eyebrow"
                  style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem" }}
                >
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
