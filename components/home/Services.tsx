"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/GoldDivider";
import { Building2, Home, Layers, ShoppingBag, Briefcase, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    Icon: Home,
    title: "Luxury Compounds",
    titleAr: "المجمعات السكنية الفاخرة",
    desc: "Gated communities with world-class amenities, security, and master-planned landscapes.",
  },
  {
    Icon: Building2,
    title: "Private Villas",
    titleAr: "الفلل الخاصة",
    desc: "Bespoke villa designs tailored to the lifestyle and tastes of Saudi Arabia's elite.",
  },
  {
    Icon: Layers,
    title: "Premium Apartments",
    titleAr: "الشقق الفاخرة",
    desc: "High-rise and mid-rise residences with premium finishes and smart home technology.",
  },
  {
    Icon: TrendingUp,
    title: "Commercial Towers",
    titleAr: "الأبراج التجارية",
    desc: "Grade-A commercial towers strategically positioned in Riyadh's prime business districts.",
  },
  {
    Icon: Briefcase,
    title: "Business Centers",
    titleAr: "مراكز الأعمال",
    desc: "Integrated business hubs designed for productivity, networking, and corporate excellence.",
  },
  {
    Icon: ShoppingBag,
    title: "Retail Destinations",
    titleAr: "وجهات التسوق",
    desc: "Curated retail environments that blend luxury shopping with premium experiences.",
  },
];

export default function Services() {
  return (
    <section
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #0f0e0b 50%, #0a0a0a 100%)",
      }}
    >
      <div className="container-luxury">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <ScrollReveal>
              <SectionLabel label="What We Build" labelAr="ماذا نبني" />
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
                Six Development{" "}
                <span className="text-gold-gradient">Categories</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15} direction="left">
            <p
              className="max-w-sm text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.03em" }}
            >
              From signature villas to landmark towers, every Nawah project carries the
              same uncompromising commitment to quality and vision.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "rgba(181,133,22,0.1)" }}
        >
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.07}>
              <motion.div
                className="group p-8 flex flex-col gap-5 h-full"
                style={{ background: "#0a0a0a" }}
                whileHover={{ background: "rgba(181,133,22,0.05)" }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-all duration-400 group-hover:bg-[rgba(181,133,22,0.15)]"
                  style={{ border: "1px solid rgba(181,133,22,0.3)" }}
                >
                  <service.Icon size={20} style={{ color: "#b58516" }} />
                </div>

                <div>
                  <h3
                    className="font-semibold transition-colors duration-300 group-hover:text-[#ebbf5b]"
                    style={{
                      fontSize: "0.95rem",
                      letterSpacing: "0.08em",
                      color: "#ffffff",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="arabic mt-1 text-xs"
                    style={{ color: "rgba(181,133,22,0.5)" }}
                  >
                    {service.titleAr}
                  </p>
                </div>

                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.02em" }}
                >
                  {service.desc}
                </p>

                <div
                  className="h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "linear-gradient(90deg, #b58516, #ebbf5b)" }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
