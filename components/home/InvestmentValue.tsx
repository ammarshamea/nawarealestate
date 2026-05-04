"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/GoldDivider";
import { ShieldCheck, TrendingUp, Globe, Gem } from "lucide-react";

const pillars = [
  {
    Icon: Gem,
    title: "Premium Positioning",
    titleAr: "الموقع المتميز",
    desc: "All Nawah developments are positioned in Riyadh's most coveted addresses, ensuring long-term appreciation.",
  },
  {
    Icon: TrendingUp,
    title: "Investment Returns",
    titleAr: "العوائد الاستثمارية",
    desc: "Portfolio assets have delivered consistent returns above market averages, backed by strong leasing demand.",
  },
  {
    Icon: ShieldCheck,
    title: "Trusted Developer",
    titleAr: "مطور موثوق",
    desc: "Licensed by REGA and compliant with all Saudi real estate regulations, providing full investor protection.",
  },
  {
    Icon: Globe,
    title: "Vision 2030 Aligned",
    titleAr: "متوافق مع رؤية 2030",
    desc: "Our developments directly support Saudi Vision 2030 goals for housing quality, economic diversification, and urban development.",
  },
];

export default function InvestmentValue() {
  return (
    <section
      className="section-padding relative"
      style={{ background: "#0f0e0b" }}
    >
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=900&q=85"
                  alt="Investment value"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(181,133,22,0.15), transparent 60%)",
                  }}
                />
              </div>

              {/* Overlay card */}
              <div
                className="absolute -bottom-8 -right-8 p-6 max-w-xs"
                style={{
                  background: "rgba(10,10,10,0.97)",
                  border: "1px solid rgba(181,133,22,0.3)",
                }}
              >
                <p
                  className="eyebrow mb-2"
                  style={{ color: "#b58516", fontSize: "0.6rem" }}
                >
                  Average Annual Return
                </p>
                <p
                  className="text-gold-gradient font-bold"
                  style={{ fontSize: "2.5rem", lineHeight: 1 }}
                >
                  12–18%
                </p>
                <p
                  className="text-xs mt-2 leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Consistent returns across our residential and commercial portfolio
                </p>
              </div>

              {/* Gold corner */}
              <div
                className="absolute top-0 left-0 w-16 h-16"
                style={{
                  border: "1px solid rgba(181,133,22,0.4)",
                  borderRight: "none",
                  borderBottom: "none",
                }}
              />
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <div>
            <ScrollReveal>
              <SectionLabel label="Investment Value" labelAr="القيمة الاستثمارية" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  color: "#ffffff",
                }}
              >
                Why Invest{" "}
                <span className="text-gold-gradient">With Nawah</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p
                className="mt-5 mb-10 text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.02em" }}
              >
                Nawah delivers more than property — we deliver portfolio-grade assets with
                institutional quality, transparent pricing, and a proven track record of returns.
              </p>
            </ScrollReveal>

            <div className="space-y-5">
              {pillars.map((p, i) => (
                <ScrollReveal key={p.title} delay={0.2 + i * 0.07}>
                  <div className="flex gap-5 group">
                    <div
                      className="w-10 h-10 flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors duration-300 group-hover:bg-[rgba(181,133,22,0.15)]"
                      style={{ border: "1px solid rgba(181,133,22,0.25)" }}
                    >
                      <p.Icon size={16} style={{ color: "#b58516" }} />
                    </div>
                    <div>
                      <h4
                        className="font-semibold text-sm transition-colors group-hover:text-[#ebbf5b]"
                        style={{ letterSpacing: "0.08em", color: "#fff" }}
                      >
                        {p.title}
                      </h4>
                      <p
                        className="arabic text-xs mt-0.5 mb-2"
                        style={{ color: "rgba(181,133,22,0.45)" }}
                      >
                        {p.titleAr}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
