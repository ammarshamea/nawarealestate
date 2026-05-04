"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Housing Quality",
    desc: "Raising Saudi homeownership rates by delivering high-quality, diverse residential options for every lifestyle.",
  },
  {
    num: "02",
    title: "Economic Diversification",
    desc: "Contributing to Saudi Arabia's non-oil GDP growth through sustainable real estate investment.",
  },
  {
    num: "03",
    title: "Urban Development",
    desc: "Creating vibrant urban communities that enhance quality of life across the Kingdom.",
  },
  {
    num: "04",
    title: "Foreign Investment",
    desc: "Attracting international investors and developers to participate in Saudi Arabia's booming real estate sector.",
  },
];

export default function Vision2030() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* BG image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=1920&q=80"
          alt="Saudi Vision 2030"
          className="w-full h-full object-cover opacity-10"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(8,8,8,1) 0%, rgba(8,8,8,0.85) 50%, rgba(8,8,8,1) 100%)",
          }}
        />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <GoldDivider />
              </div>
              <p className="eyebrow" style={{ color: "#b58516" }}>
                Saudi Vision 2030
              </p>
              <p
                className="arabic mt-1 text-sm"
                style={{ color: "rgba(235,191,91,0.5)" }}
              >
                رؤية المملكة 2030
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className="mt-6"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  color: "#ffffff",
                }}
              >
                Building the{" "}
                <span className="text-gold-gradient">Kingdom's Future</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p
                className="mt-6 text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.02em" }}
              >
                Nawah is more than a real estate developer — we are a strategic contributor
                to Saudi Arabia's national transformation. Every project we build advances the
                Kingdom's Vision 2030 objectives, creating lasting value for communities,
                investors, and the nation.
              </p>
              <p
                className="arabic mt-4 text-sm leading-relaxed"
                style={{ color: "rgba(181,133,22,0.45)", lineHeight: 2 }}
              >
                نواة ليست مجرد مطور عقاري — نحن مساهم استراتيجي في التحول الوطني للمملكة.
                كل مشروع نبنيه يُعزز أهداف رؤية 2030 ويخلق قيمة دائمة للمجتمعات والمستثمرين والوطن.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div
                className="mt-10 p-6 inline-block"
                style={{
                  border: "1px solid rgba(181,133,22,0.25)",
                  background: "rgba(181,133,22,0.04)",
                }}
              >
                <p
                  className="eyebrow mb-2"
                  style={{ color: "#b58516", fontSize: "0.62rem" }}
                >
                  REGA Licensed
                </p>
                <p
                  className="text-white/80 text-sm"
                  style={{ letterSpacing: "0.04em" }}
                >
                  Fully licensed by the Real Estate General Authority
                  <br />
                  <span
                    className="arabic text-xs"
                    style={{ color: "rgba(181,133,22,0.6)" }}
                  >
                    مرخص من الهيئة العامة للعقار
                  </span>
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.num} delay={0.1 + i * 0.08}>
                <motion.div
                  className="p-6 h-full"
                  style={{
                    border: "1px solid rgba(181,133,22,0.15)",
                    background: "rgba(181,133,22,0.03)",
                  }}
                  whileHover={{
                    borderColor: "rgba(181,133,22,0.4)",
                    background: "rgba(181,133,22,0.07)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span
                    className="text-gold-gradient font-bold block mb-4"
                    style={{ fontSize: "2rem", lineHeight: 1, opacity: 0.6 }}
                  >
                    {p.num}
                  </span>
                  <h4
                    className="font-semibold mb-3"
                    style={{ fontSize: "0.9rem", letterSpacing: "0.06em", color: "#ebbf5b" }}
                  >
                    {p.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.02em" }}
                  >
                    {p.desc}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
