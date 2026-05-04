"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ── Line-mask reveal: each word/line slides up from an overflow:hidden clip ── */
function LineReveal({
  children,
  delay = 0,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ overflow: "hidden", ...style }}>
      <motion.div
        className={className}
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{
          duration: 1.1,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ── Fade-up for supporting elements ── */
function FadeUp({
  children,
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  /* Parallax: image moves down, text moves up */
  const imgY    = useTransform(scrollY, [0, 700], [0,  90]);
  const textY   = useTransform(scrollY, [0, 700], [0, -55]);
  const opacity = useTransform(scrollY, [0, 450], [1,  0]);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh" }}
    >

      {/* ── Background image with parallax + scale reveal ── */}
      <motion.div
        style={{ y: imgY, position: "absolute", inset: 0 }}
        className="scale-110 origin-center"
      >
        <motion.img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=90"
          alt="Luxury real estate — Nawah"
          initial={{ scale: 1.18, opacity: 0 }}
          animate={{ scale: 1.08, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.0, 0.0, 0.2, 1] }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>

      {/* ── Layered overlays ── */}
      {/* Main dark gradient */}
      <div
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.88) 100%)",
        }}
      />
      {/* Gold ambient glow — top left */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 20% 40%, rgba(181,133,22,0.1) 0%, transparent 55%)",
        }}
      />
      {/* Gold light sweep (animated) */}
      <motion.div
        initial={{ opacity: 0.6, x: "-20%" }}
        animate={{ opacity: 0, x: "120%" }}
        transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(105deg, transparent 30%, rgba(235,191,91,0.12) 50%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        style={{ y: textY, opacity, position: "relative", zIndex: 10, width: "100%" }}
        className="container-luxury"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            minHeight: "100svh",
            paddingTop: "8rem",
            paddingBottom: "7rem",
          }}
        >
          <div style={{ maxWidth: "56rem" }}>

            {/* — Overline — */}
            <FadeUp delay={0.4}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: "block", height: "1px", width: "40px",
                    background: "linear-gradient(90deg, transparent, #ebbf5b)",
                    transformOrigin: "left",
                  }}
                />
                <span
                  className="eyebrow"
                  style={{ color: "#ebbf5b", fontSize: "0.62rem" }}
                >
                  Riyadh · Saudi Arabia
                </span>
                <span
                  className="eyebrow arabic"
                  style={{ color: "rgba(235,191,91,0.5)", fontSize: "0.6rem" }}
                >
                  · نواة التطوير العقاري
                </span>
              </div>
            </FadeUp>

            {/* — Arabic tagline — */}
            <LineReveal delay={0.5}>
              <p
                className="arabic"
                style={{
                  fontFamily: "var(--font-tajawal)",
                  fontSize: "clamp(0.95rem, 1.8vw, 1.25rem)",
                  color: "rgba(235,191,91,0.65)",
                  fontWeight: 300,
                  marginBottom: "0.6rem",
                }}
              >
                نصنع الفخامة… ونبني أسلوب حياة
              </p>
            </LineReveal>

            {/* — Headline line 1 — */}
            <LineReveal delay={0.65}>
              <h1
                style={{
                  fontSize: "clamp(3.2rem, 7.5vw, 8rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 0.92,
                  color: "#ffffff",
                }}
              >
                Crafting
              </h1>
            </LineReveal>

            {/* — Headline line 2 — gold animated — */}
            <LineReveal delay={0.8}>
              <h1
                className="text-gold-animate"
                style={{
                  fontSize: "clamp(3.2rem, 7.5vw, 8rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 0.92,
                }}
              >
                Luxury.
              </h1>
            </LineReveal>

            {/* — Headline line 3 — */}
            <LineReveal delay={0.95}>
              <h1
                style={{
                  fontSize: "clamp(3.2rem, 7.5vw, 8rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 0.92,
                  color: "#ffffff",
                  marginBottom: "2.5rem",
                }}
              >
                Building{" "}
                <span className="text-gold-gradient">Lifestyles.</span>
              </h1>
            </LineReveal>

            {/* — Gold divider line — */}
            <FadeUp delay={1.15}>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  height: "1px",
                  width: "80px",
                  background: "linear-gradient(90deg, #b58516, #ebbf5b)",
                  transformOrigin: "left",
                  marginBottom: "2rem",
                }}
              />
            </FadeUp>

            {/* — Subheadline — */}
            <FadeUp delay={1.25}>
              <p
                style={{
                  fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
                  color: "rgba(255,255,255,0.58)",
                  lineHeight: 1.85,
                  letterSpacing: "0.025em",
                  fontWeight: 300,
                  maxWidth: "38rem",
                  marginBottom: "2.5rem",
                }}
              >
                Nawah Real Estate Development is a premier Saudi luxury developer
                creating landmark residential and commercial communities in Riyadh —
                aligned with Vision 2030.
              </p>
            </FadeUp>

            {/* — CTA Buttons — */}
            <FadeUp delay={1.45}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link href="/projects" className="btn-gold">
                  Explore Projects
                  <ArrowRight size={15} />
                </Link>
                <Link href="/contact" className="btn-outline-gold">
                  Investor Inquiry
                </Link>
              </div>
            </FadeUp>

            {/* — Stats strip — */}
            <FadeUp delay={1.7}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "2.5rem",
                  marginTop: "4rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid rgba(181,133,22,0.18)",
                }}
              >
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "10K+", label: "m² Developed" },
                  { value: "15+", label: "Years Experience" },
                  { value: "98%", label: "Client Satisfaction" },
                ].map((s) => (
                  <div key={s.label}>
                    <p
                      className="text-gold-gradient font-bold"
                      style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "0.02em" }}
                    >
                      {s.value}
                    </p>
                    <p
                      className="eyebrow"
                      style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.58rem", marginTop: "4px" }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        style={{
          opacity,
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 10,
        }}
      >
        <span className="eyebrow" style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.55rem" }}>
          Scroll
        </span>
        {/* Animated scroll line */}
        <div style={{ width: "1px", height: "40px", background: "rgba(181,133,22,0.25)", position: "relative", overflow: "hidden" }}>
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              height: "50%",
              background: "linear-gradient(180deg, transparent, #ebbf5b, transparent)",
            }}
          />
        </div>
      </motion.div>

      {/* ── Bottom-edge gold line ── */}
      <div
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(181,133,22,0.4), transparent)",
        }}
      />
    </section>
  );
}
