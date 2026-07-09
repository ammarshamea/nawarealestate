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

export default function ValuesManifesto() {
  const { lang, reducedMotion } = useSite();

  return (
    <section id={sectionAnchors.values} aria-labelledby="values-heading" className="values-manifesto">
      <div className="values-manifesto-bg section-padding">
        <div className="container-luxury relative z-[1]">
          <header className="values-manifesto-header max-w-2xl">
            <StaggerReveal>
              <StaggerItem>
                <Eyebrow label={t.valuesSection.label} />
              </StaggerItem>
              <StaggerItem>
                <h2
                  id="values-heading"
                  className="mt-5 text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight"
                >
                  {tx(t.valuesSection.title, lang)}
                </h2>
              </StaggerItem>
              <StaggerItem>
                <div className="values-manifesto-header-line" aria-hidden="true" />
              </StaggerItem>
            </StaggerReveal>
          </header>

          <div className="values-spine mt-14 md:mt-20 lg:mt-24">
            <div className="values-spine-rail" aria-hidden="true" />
            <ol className="values-spine-list">
              {coreValues.map((value, i) => (
                <ValueCard
                  key={value.id}
                  title={tx(value.title, lang)}
                  statement={tx(value.statement, lang)}
                  index={i}
                  isDark={i % 2 === 1}
                  reducedMotion={reducedMotion}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  title,
  statement,
  index,
  isDark,
  reducedMotion,
}: {
  title: string;
  statement: string;
  index: number;
  isDark: boolean;
  reducedMotion: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px -60px 0px" });
  const show = reducedMotion || inView;
  const fromStart = index % 2 === 0;

  return (
    <li
      ref={ref}
      className={`values-spine-item${fromStart ? " values-spine-item--start" : " values-spine-item--end"}`}
    >
      <motion.article
        className={`values-card${isDark ? " values-card--dark" : ""}`}
        initial={reducedMotion ? false : { opacity: 0, y: 32, x: fromStart ? -24 : 24 }}
        animate={show ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ duration: 0.75, delay: 0.06, ease: EASE }}
      >
        <span className="values-card-node" aria-hidden="true" />
        <div className="values-card-accent" aria-hidden="true" />
        <h3 className="values-card-title">{title}</h3>
        <p className="values-card-body">{statement}</p>
      </motion.article>
    </li>
  );
}
