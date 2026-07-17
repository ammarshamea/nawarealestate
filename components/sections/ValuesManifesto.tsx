"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { coreValues } from "@/lib/data/values";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

const EASE = [0.22, 1, 0.36, 1] as const;

const topSlots = ["values-spine-slot--t1", "values-spine-slot--t2", "values-spine-slot--t3"] as const;
const bottomSlots = ["values-spine-slot--b1", "values-spine-slot--b2"] as const;

const topValues = coreValues.filter((_, i) => i % 2 === 0);
const bottomValues = coreValues.filter((_, i) => i % 2 === 1);

export default function ValuesManifesto() {
  const { lang, reducedMotion } = useSite();

  return (
    <section id={sectionAnchors.values} aria-labelledby="values-heading" className="values-manifesto">
      <div className="values-manifesto-bg section-padding">
        <div className="container-luxury relative z-[1]">
          <header className="values-manifesto-header max-w-2xl">
            <StaggerReveal>
              <StaggerItem>
                <Eyebrow label={t.valuesSection.label} id="values-heading" />
              </StaggerItem>
            </StaggerReveal>
          </header>

          <div className="values-horizontal-spine mt-10 md:mt-14 lg:mt-16">
            {topValues.map((value, i) => {
              const index = i * 2;
              return (
                <ValueCard
                  key={value.id}
                  slotClass={topSlots[i]}
                  title={tx(value.title, lang)}
                  statement={tx(value.statement, lang)}
                  index={index}
                  row="top"
                  isDark={false}
                  reducedMotion={reducedMotion}
                />
              );
            })}

            <div className="values-horizontal-rail" aria-hidden="true" />

            {bottomValues.map((value, i) => {
              const index = i * 2 + 1;
              return (
                <ValueCard
                  key={value.id}
                  slotClass={bottomSlots[i]}
                  title={tx(value.title, lang)}
                  statement={tx(value.statement, lang)}
                  index={index}
                  row="bottom"
                  isDark
                  reducedMotion={reducedMotion}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  slotClass,
  title,
  statement,
  index,
  row,
  isDark,
  reducedMotion,
}: {
  slotClass: string;
  title: string;
  statement: string;
  index: number;
  row: "top" | "bottom";
  isDark: boolean;
  reducedMotion: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px -40px 0px" });
  const show = reducedMotion || inView;
  const fromY = row === "top" ? -20 : 20;

  return (
    <motion.article
      ref={ref}
      className={`values-card values-spine-slot ${slotClass}${isDark ? " values-card--dark" : ""}`}
      initial={reducedMotion ? false : { opacity: 0, y: fromY }}
      animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: EASE }}
    >
      <div className="values-card-accent" aria-hidden="true" />
      <h3 className="values-card-title">{title}</h3>
      <p className="values-card-body">{statement}</p>
    </motion.article>
  );
}
