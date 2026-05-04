"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/GoldDivider";
import { ArrowRight, MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Nawah Palms",
    nameAr: "نخيل نواة",
    type: "Luxury Compound",
    location: "North Riyadh",
    area: "45,000 m²",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    tag: "Flagship",
  },
  {
    id: 2,
    name: "Al Noor Villas",
    nameAr: "فلل النور",
    type: "Private Villas",
    location: "Diplomatic Quarter",
    area: "12,000 m²",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85",
    tag: "Exclusive",
  },
  {
    id: 3,
    name: "Nawah Tower",
    nameAr: "برج نواة",
    type: "Commercial Tower",
    location: "King Fahd Road",
    area: "28,000 m²",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=85",
    tag: "Premium",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="section-padding" style={{ background: "#080808" }}>
      <div className="container-luxury">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <ScrollReveal>
              <SectionLabel label="Featured Projects" labelAr="المشاريع المميزة" />
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
                Landmark{" "}
                <span className="text-gold-gradient">Developments</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15}>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-sm group"
              style={{ color: "#b58516", letterSpacing: "0.1em" }}
            >
              <span className="uppercase tracking-widest text-xs font-semibold">
                View All Projects
              </span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <motion.div
                className="project-card card-gradient group"
                style={{ aspectRatio: i === 0 ? "3/4" : "4/5" }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />

                {/* Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="eyebrow px-3 py-1.5"
                    style={{
                      background: "rgba(181,133,22,0.9)",
                      color: "#000",
                      fontSize: "0.6rem",
                    }}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <p
                    className="arabic text-xs mb-1"
                    style={{ color: "rgba(235,191,91,0.7)" }}
                  >
                    {project.nameAr}
                  </p>
                  <h3
                    className="font-bold transition-colors group-hover:text-[#ebbf5b]"
                    style={{ fontSize: "1.2rem", letterSpacing: "0.04em", color: "#fff" }}
                  >
                    {project.name}
                  </h3>
                  <div
                    className="flex items-center gap-4 mt-2"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    <span className="eyebrow text-xs">{project.type}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="flex items-center gap-1 text-xs">
                      <MapPin size={10} />
                      {project.location}
                    </span>
                  </div>

                  {/* Hover reveal */}
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: "0px" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.maxHeight = "60px";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.maxHeight = "0px";
                    }}
                  >
                    <div className="gold-line my-3" />
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Area: {project.area}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="flex justify-center mt-12">
            <Link href="/projects" className="btn-outline-gold">
              Explore All Developments
              <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
