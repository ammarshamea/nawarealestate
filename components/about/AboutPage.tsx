"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/GoldDivider";
import { GoldDivider } from "@/components/ui/GoldDivider";
import {
  Gem,
  Eye,
  Target,
  Leaf,
  Handshake,
  Award,
  MapPin,
  Palette,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const values = [
  { Icon: Gem, title: "Excellence", titleAr: "التميز", desc: "Uncompromising commitment to quality in every aspect of design, construction, and delivery." },
  { Icon: Eye, title: "Integrity", titleAr: "النزاهة", desc: "Transparent dealings, honest communication, and ethical business practices in all we do." },
  { Icon: Target, title: "Innovation", titleAr: "الابتكار", desc: "Constantly pushing boundaries in architecture, sustainability, and community design." },
  { Icon: Leaf, title: "Sustainability", titleAr: "الاستدامة", desc: "Building with environmental responsibility — green spaces, energy efficiency, and sustainable materials." },
  { Icon: Handshake, title: "Trust", titleAr: "الثقة", desc: "Long-term relationships with investors, partners, and residents built on consistent delivery." },
  { Icon: Award, title: "Legacy", titleAr: "الإرث", desc: "Creating developments that stand the test of time and become generational assets." },
];

const philosophy = [
  {
    Icon: MapPin,
    title: "Location",
    titleAr: "الموقع",
    desc: "Every Nawah project is situated in a strategic, high-demand location — chosen for connectivity, prestige, and long-term appreciation potential.",
    num: "01",
  },
  {
    Icon: Palette,
    title: "Design",
    titleAr: "التصميم",
    desc: "Architecture that blends contemporary global aesthetics with Saudi cultural identity — timeless, elegant, and built to inspire.",
    num: "02",
  },
  {
    Icon: TrendingUp,
    title: "Value",
    titleAr: "القيمة",
    desc: "Every decision — from material selection to community planning — is made to maximise investor returns and resident quality of life.",
    num: "03",
  },
];

const timeline = [
  { year: "2008", event: "Nawah founded in Riyadh by a group of Saudi real estate visionaries.", eventAr: "تأسيس نواة في الرياض على يد مجموعة من رواد العقارات السعوديين." },
  { year: "2012", event: "Delivered first luxury compound — Nawah Palms Phase I.", eventAr: "تسليم أول مجمع فاخر — نخيل نواة المرحلة الأولى." },
  { year: "2016", event: "Expanded into commercial real estate with the launch of Nawah Business Hub.", eventAr: "التوسع في العقارات التجارية بإطلاق مركز نواة للأعمال." },
  { year: "2020", event: "Aligned development roadmap with Saudi Vision 2030 objectives.", eventAr: "محاذاة خارطة طريق التطوير مع أهداف رؤية السعودية 2030." },
  { year: "2023", event: "Launched the iconic Nawah Tower — the company's most ambitious commercial project.", eventAr: "إطلاق برج نواة الأيقوني — أكثر مشاريعنا التجارية طموحاً." },
  { year: "2025+", event: "Portfolio exceeds 50 projects. Expanding across the Kingdom.", eventAr: "المحفظة تتجاوز 50 مشروعاً. التوسع في أنحاء المملكة." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1920&q=85"
            alt="About Nawah"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.9) 100%)",
            }}
          />
        </div>

        <div className="container-luxury relative z-10 pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-4" style={{ color: "#ebbf5b" }}>Our Story</p>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: "#ffffff",
              }}
            >
              Built on{" "}
              <span className="text-gold-gradient">Purpose.</span>
              <br />
              Driven by{" "}
              <span className="text-gold-gradient">Vision.</span>
            </h1>
            <p className="arabic mt-4 text-lg" style={{ color: "rgba(235,191,91,0.6)" }}>
              مبني على هدف. مدفوع برؤية.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding" style={{ background: "#0a0a0a" }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <SectionLabel label="Company Story" labelAr="قصة الشركة" />
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.1 }}>
                  From a Vision to a{" "}
                  <span className="text-gold-gradient">Kingdom Legacy</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-6 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9 }}>
                  Nawah was born from a simple conviction: that Saudi Arabia deserved real estate
                  developments of the highest international caliber — crafted not just for shelter,
                  but for life. Our founders saw a gap between the aspirations of Saudi residents
                  and investors and what was available in the market.
                </p>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.9 }}>
                  Over 15 years, we have grown from a boutique developer to one of Riyadh's most
                  trusted names in luxury real estate — delivering 50+ projects that have redefined
                  standards for residential and commercial development in the Kingdom.
                </p>
                <p className="arabic mt-5 text-sm leading-relaxed" style={{ color: "rgba(181,133,22,0.5)", lineHeight: 2 }}>
                  وُلدت نواة من قناعة بسيطة: أن المملكة العربية السعودية تستحق تطويرات عقارية
                  بأعلى المعايير الدولية — مصنوعة ليس فقط للمأوى، بل لأسلوب الحياة.
                </p>
              </ScrollReveal>
            </div>

            {/* Timeline */}
            <ScrollReveal delay={0.1} direction="left">
              <div className="relative pl-8" style={{ borderLeft: "1px solid rgba(181,133,22,0.25)" }}>
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="mb-8 last:mb-0 relative"
                  >
                    {/* Dot */}
                    <div
                      className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full"
                      style={{ background: "linear-gradient(135deg, #b58516, #ebbf5b)" }}
                    />
                    <p className="text-gold-gradient font-bold text-sm mb-1" style={{ letterSpacing: "0.1em" }}>
                      {item.year}
                    </p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                      {item.event}
                    </p>
                    <p className="arabic text-xs mt-1" style={{ color: "rgba(181,133,22,0.4)" }}>
                      {item.eventAr}
                    </p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding" style={{ background: "#0f0e0b" }}>
        <div className="container-luxury">
          <ScrollReveal className="text-center mb-14">
            <SectionLabel label="Direction" labelAr="التوجه" />
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
              Vision &{" "}
              <span className="text-gold-gradient">Mission</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ background: "rgba(181,133,22,0.12)" }}>
            <ScrollReveal delay={0.1}>
              <div className="p-12 h-full" style={{ background: "#0f0e0b" }}>
                <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ border: "1px solid rgba(181,133,22,0.3)" }}>
                  <Eye size={20} style={{ color: "#b58516" }} />
                </div>
                <p className="eyebrow mb-3" style={{ color: "#b58516" }}>Vision</p>
                <p className="arabic mb-2 text-sm" style={{ color: "rgba(181,133,22,0.5)" }}>رؤيتنا</p>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#fff", letterSpacing: "0.02em" }}>
                  To be the most trusted luxury real estate developer in Saudi Arabia
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }}>
                  To be recognized as the Kingdom's most trusted and prestigious luxury real estate developer — creating communities that become benchmarks for design excellence, sustainable living, and investment performance.
                </p>
                <p className="arabic mt-4 text-sm leading-relaxed" style={{ color: "rgba(181,133,22,0.45)", lineHeight: 2 }}>
                  أن نكون المطور العقاري الفاخر الأكثر ثقة والأرفع مكانةً في المملكة العربية السعودية.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="p-12 h-full" style={{ background: "#0a0a0a" }}>
                <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ border: "1px solid rgba(181,133,22,0.3)" }}>
                  <Target size={20} style={{ color: "#b58516" }} />
                </div>
                <p className="eyebrow mb-3" style={{ color: "#b58516" }}>Mission</p>
                <p className="arabic mb-2 text-sm" style={{ color: "rgba(181,133,22,0.5)" }}>مهمتنا</p>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#fff", letterSpacing: "0.02em" }}>
                  To deliver developments that exceed expectations and inspire lifestyles
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }}>
                  To develop exceptional real estate assets in Saudi Arabia that combine world-class design, strategic location, and investment value — while contributing to Vision 2030 and enriching the lives of residents and investors alike.
                </p>
                <p className="arabic mt-4 text-sm leading-relaxed" style={{ color: "rgba(181,133,22,0.45)", lineHeight: 2 }}>
                  تطوير أصول عقارية استثنائية تجمع بين التصميم العالمي والموقع الاستراتيجي والقيمة الاستثمارية.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding" style={{ background: "#080808" }}>
        <div className="container-luxury">
          <ScrollReveal className="text-center mb-14">
            <SectionLabel label="What We Stand For" labelAr="ما نؤمن به" />
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
              Our Core{" "}
              <span className="text-gold-gradient">Values</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.07}>
                <motion.div
                  className="p-8 h-full group"
                  style={{ border: "1px solid rgba(181,133,22,0.12)", background: "rgba(181,133,22,0.02)" }}
                  whileHover={{ borderColor: "rgba(181,133,22,0.4)", background: "rgba(181,133,22,0.06)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-11 h-11 flex items-center justify-center mb-5" style={{ border: "1px solid rgba(181,133,22,0.3)" }}>
                    <v.Icon size={18} style={{ color: "#b58516" }} />
                  </div>
                  <h4 className="font-bold mb-1 transition-colors group-hover:text-[#ebbf5b]" style={{ color: "#fff", letterSpacing: "0.06em", fontSize: "0.95rem" }}>
                    {v.title}
                  </h4>
                  <p className="arabic text-xs mb-3" style={{ color: "rgba(181,133,22,0.5)" }}>{v.titleAr}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{v.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="section-padding" style={{ background: "#0a0a0a" }}>
        <div className="container-luxury">
          <ScrollReveal className="text-center mb-14">
            <SectionLabel label="Development Philosophy" labelAr="فلسفة التطوير" />
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
              Three Pillars of{" "}
              <span className="text-gold-gradient">Excellence</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {philosophy.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="relative p-10 h-full" style={{ border: "1px solid rgba(181,133,22,0.2)" }}>
                  <span
                    className="absolute top-6 right-6 font-bold"
                    style={{ fontSize: "3.5rem", lineHeight: 1, color: "rgba(181,133,22,0.08)" }}
                  >
                    {p.num}
                  </span>
                  <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ background: "rgba(181,133,22,0.1)", border: "1px solid rgba(181,133,22,0.3)" }}>
                    <p.Icon size={20} style={{ color: "#ebbf5b" }} />
                  </div>
                  <h4 className="font-bold text-xl mb-1" style={{ color: "#fff", letterSpacing: "0.04em" }}>{p.title}</h4>
                  <p className="arabic text-sm mb-4" style={{ color: "rgba(181,133,22,0.55)" }}>{p.titleAr}</p>
                  <div className="gold-line mb-4" />
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Partnerships */}
      <section className="section-padding" style={{ background: "#0f0e0b" }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Sustainability */}
            <div>
              <ScrollReveal>
                <SectionLabel label="Sustainability" labelAr="الاستدامة" />
                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15 }}>
                  Building for{" "}
                  <span className="text-gold-gradient">Tomorrow</span>
                </h3>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }}>
                  Nawah embeds sustainability into every layer of its development process — from
                  site selection and architectural design to construction practices and long-term
                  asset management. We pursue LEED certification across our commercial portfolio,
                  integrate smart energy systems, and design green corridors that reduce urban
                  heat islands in Riyadh's climate.
                </p>
                <p className="arabic mt-4 text-sm" style={{ color: "rgba(181,133,22,0.45)", lineHeight: 2 }}>
                  تُدمج نواة الاستدامة في كل طبقة من عملية التطوير — من اختيار الموقع والتصميم
                  المعماري إلى ممارسات البناء وإدارة الأصول طويلة الأمد.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { v: "LEED", l: "Certified" },
                    { v: "30%", l: "Energy Reduction" },
                    { v: "40%", l: "Green Coverage" },
                  ].map((s) => (
                    <div key={s.l} className="p-4 text-center" style={{ border: "1px solid rgba(181,133,22,0.2)", background: "rgba(181,133,22,0.04)" }}>
                      <p className="text-gold-gradient font-bold text-lg">{s.v}</p>
                      <p className="eyebrow mt-1" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.58rem" }}>{s.l}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Partnerships */}
            <div>
              <ScrollReveal>
                <SectionLabel label="Partnerships" labelAr="الشراكات" />
                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15 }}>
                  A Network of{" "}
                  <span className="text-gold-gradient">Excellence</span>
                </h3>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }}>
                  Nawah partners with the world's leading architecture firms, engineering consultancies,
                  interior design houses, and property managers — ensuring every project benefits from
                  the best global expertise, tailored to Saudi Arabia's unique context and culture.
                </p>
                <p className="arabic mt-4 text-sm" style={{ color: "rgba(181,133,22,0.45)", lineHeight: 2 }}>
                  تتشارك نواة مع أبرز شركات الهندسة المعمارية والتصميم الداخلي وإدارة الأصول عالمياً.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    "International Architecture Firms (Zaha Hadid Associates, HOK)",
                    "Saudi Aramco & NEOM Ecosystem Partners",
                    "Global Investment Funds & Family Offices",
                    "Saudi Ministry of Housing — Developer Program",
                  ].map((partner) => (
                    <div key={partner} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#b58516" }} />
                      {partner}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="section-padding" style={{ background: "#080808" }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div className="relative" style={{ aspectRatio: "4/3" }}>
                <img
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=85"
                  alt="Competitive advantage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom right, rgba(181,133,22,0.1), transparent)" }} />
                <div className="absolute top-0 left-0 w-16 h-16" style={{ border: "1px solid rgba(181,133,22,0.4)", borderRight: "none", borderBottom: "none" }} />
                <div className="absolute bottom-0 right-0 w-16 h-16" style={{ border: "1px solid rgba(181,133,22,0.4)", borderLeft: "none", borderTop: "none" }} />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <SectionLabel label="Competitive Advantage" labelAr="الميزة التنافسية" />
                <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
                  Why <span className="text-gold-gradient">Nawah</span> Stands Apart
                </h3>
              </ScrollReveal>
              <div className="mt-8 space-y-6">
                {[
                  { t: "End-to-End Development", d: "We control the full development lifecycle — from land acquisition to handover — ensuring quality at every stage." },
                  { t: "In-House Design Studio", d: "Our dedicated architecture and interior design team creates bespoke identities for every project." },
                  { t: "After-Sales Excellence", d: "Dedicated property management and concierge services for residents, ensuring lasting satisfaction." },
                  { t: "Transparent Pricing", d: "Clear, market-benchmarked pricing with no hidden fees — full financial transparency for investors." },
                ].map((item, i) => (
                  <ScrollReveal key={item.t} delay={0.1 + i * 0.07}>
                    <div className="flex gap-4 group">
                      <span className="text-gold-gradient font-bold flex-shrink-0" style={{ fontSize: "1.3rem" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="font-semibold mb-1 text-sm transition-colors group-hover:text-[#ebbf5b]" style={{ color: "#fff", letterSpacing: "0.06em" }}>{item.t}</h4>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{item.d}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f0e00, #1a1500, #0f0e00)" }}>
        <div className="gold-line absolute top-0 left-0 right-0" />
        <div className="container-luxury relative z-10">
          <ScrollReveal>
            <p className="eyebrow mb-4" style={{ color: "#b58516" }}>Work With Us</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
              Partner With{" "}
              <span className="text-gold-gradient">Nawah</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/contact" className="btn-gold">
                Get In Touch
                <ArrowRight size={15} />
              </Link>
              <Link href="/projects" className="btn-outline-gold">
                View Portfolio
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
