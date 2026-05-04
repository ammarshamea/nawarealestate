"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/GoldDivider";

export default function Introduction() {
  return (
    <section
      className="section-padding"
      style={{ background: "#0a0a0a" }}
    >
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <ScrollReveal>
              <SectionLabel label="Who We Are" labelAr="من نحن" />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  color: "#ffffff",
                }}
              >
                A New Standard
                <br />
                <span className="text-gold-gradient">in Saudi Real Estate</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p
                className="mt-6 leading-relaxed"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  letterSpacing: "0.02em",
                }}
              >
                Nawah Real Estate Development was founded on the principle that luxury is not
                merely about aesthetics — it is about lifestyle, legacy, and lasting value.
                Based in Riyadh, we develop landmark residential and commercial communities
                that redefine how people live, work, and invest in Saudi Arabia.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p
                className="arabic mt-4 leading-relaxed"
                style={{
                  color: "rgba(235,191,91,0.5)",
                  fontSize: "0.9rem",
                  lineHeight: 2,
                }}
              >
                تأسست نواة على مبدأ أن الفخامة ليست مجرد جماليات — بل هي أسلوب حياة وإرث
                وقيمة دائمة. نطور مجتمعات سكنية وتجارية في الرياض تُعيد تعريف مستوى المعيشة
                والاستثمار في المملكة.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="flex gap-px mt-10">
                {[
                  { n: "2008", label: "Founded" },
                  { n: "Riyadh", label: "Headquarters" },
                  { n: "Vision 2030", label: "Aligned" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="flex-1 px-5 py-4"
                    style={{
                      background: "rgba(181,133,22,0.06)",
                      borderLeft: i === 0 ? "1px solid rgba(181,133,22,0.3)" : "1px solid rgba(181,133,22,0.1)",
                    }}
                  >
                    <p
                      className="text-gold-gradient font-bold text-sm"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      {item.n}
                    </p>
                    <p
                      className="eyebrow mt-1"
                      style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.58rem" }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Image composition */}
          <ScrollReveal delay={0.15} direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85"
                  alt="Luxury Nawah development"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom right, transparent 60%, rgba(0,0,0,0.5))",
                  }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -left-6 p-6"
                style={{
                  background: "#0a0a0a",
                  border: "1px solid rgba(181,133,22,0.3)",
                  minWidth: "180px",
                }}
              >
                <p
                  className="text-gold-gradient font-bold"
                  style={{ fontSize: "2.2rem", lineHeight: 1 }}
                >
                  15+
                </p>
                <p
                  className="eyebrow mt-2"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.62rem" }}
                >
                  Years of Excellence
                </p>
                <p
                  className="arabic mt-1"
                  style={{ color: "rgba(181,133,22,0.5)", fontSize: "0.75rem" }}
                >
                  سنوات من التميز
                </p>
              </div>

              {/* Gold accent line */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24"
                style={{
                  border: "1px solid rgba(181,133,22,0.25)",
                  borderBottom: "none",
                  borderLeft: "none",
                }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
