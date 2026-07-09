"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import MagneticCTA from "@/components/ui/MagneticCTA";
import BrandImage from "@/components/ui/BrandImage";
import { StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { leadInterestTypes } from "@/lib/data/company";
import { brandImages } from "@/lib/data/images";
import { sectionAnchors } from "@/lib/data/sections";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";
import { leadFormSchema, type LeadFormValues } from "@/lib/validation/leadForm";

export default function ContactExperience() {
  const { lang } = useSite();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: { interest: "general", name: "", phone: "", email: "", privacy: undefined },
  });

  const interest = watch("interest");

  const onSubmit = (data: LeadFormValues) => {
    console.info("[NAWAH LEAD]", data);
    setSubmitted(true);
  };

  return (
    <section id={sectionAnchors.contact} className="section-padding surface-dark-brand">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-12">
        <StaggerReveal>
          <StaggerItem image>
            <div className="relative aspect-video overflow-hidden mb-8 lg:mb-0 lg:hidden">
              <BrandImage
                src={brandImages.partnershipsMeeting}
                alt=""
                className="h-full w-full object-cover opacity-80"
              />
            </div>
          </StaggerItem>
          <StaggerItem>
            <Eyebrow label={t.contact.label} />
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              {tx(t.contact.h1a, lang)}{" "}
              <span className="text-gold-gradient">{tx(t.contact.h1b, lang)}</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-4" style={{ color: "var(--c-text-2)" }}>
              {tx(t.contact.sub, lang)}
            </p>
          </StaggerItem>
          <StaggerItem>
            <ul className="mt-8 space-y-3 text-sm" style={{ color: "var(--c-text-2)" }}>
              <li>{tx(t.contact.officeVal, lang)}</li>
              <li>
                <a href="tel:+966500000000" className="link-arch ltr-inline">
                  +966 50 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:info@nawah.sa" className="link-arch ltr-inline">
                  info@nawah.sa
                </a>
              </li>
            </ul>
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal>
          <StaggerItem>
            <div className="surface-ivory p-6 md:p-8" style={{ color: "var(--color-brand-black)" }}>
              {submitted ? (
                <div className="py-12 text-center">
                  <h3 className="text-2xl font-bold">{tx(t.contact.successTitle, lang)}</h3>
                  <p className="mt-4 text-sm opacity-70">{tx(t.contact.successSub, lang)}</p>
                  <button type="button" className="btn-outline-gold mt-8" onClick={() => setSubmitted(false)}>
                    {tx(t.contact.sendAnother, lang)}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <AnimatePresence mode="wait">
                    {step === 0 && (
                      <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <p className="font-bold mb-4">{tx(t.contact.step1, lang)}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {leadInterestTypes.map((opt) => (
                            <label
                              key={opt.id}
                              className="flex items-center gap-2 p-3 border cursor-pointer text-sm"
                              style={{
                                borderColor: interest === opt.id ? "var(--color-brand-gold)" : "rgba(0,0,0,0.15)",
                                background: interest === opt.id ? "rgba(181,133,22,0.1)" : "transparent",
                              }}
                            >
                              <input
                                type="radio"
                                value={opt.id}
                                {...register("interest")}
                                className="accent-[#b58516]"
                              />
                              {tx(opt, lang)}
                            </label>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    {step === 1 && (
                      <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                        <p className="font-bold">{tx(t.contact.step2, lang)}</p>
                        <div>
                          <label className="text-xs font-bold block mb-2">{tx(t.contact.name, lang)}</label>
                          <input className="luxury-input" {...register("name")} placeholder={tx(t.contact.namePh, lang)} />
                          {errors.name && <p className="text-xs mt-1 text-red-700">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="text-xs font-bold block mb-2">{tx(t.contact.phone, lang)}</label>
                          <input className="luxury-input" {...register("phone")} placeholder={tx(t.contact.phonePh, lang)} dir="ltr" />
                          {errors.phone && <p className="text-xs mt-1 text-red-700">{errors.phone.message}</p>}
                        </div>
                        <div>
                          <label className="text-xs font-bold block mb-2">{tx(t.contact.email, lang)}</label>
                          <input className="luxury-input" type="email" {...register("email")} placeholder={tx(t.contact.emailPh, lang)} />
                        </div>
                        <label className="flex gap-2 text-xs items-start">
                          <input type="checkbox" {...register("privacy")} className="mt-1 accent-[#b58516]" />
                          {tx(t.contact.privacy, lang)}
                        </label>
                        {errors.privacy && <p className="text-xs text-red-700">{errors.privacy.message}</p>}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-8 flex gap-3">
                    {step > 0 && (
                      <button type="button" className="btn-outline-gold flex-1" onClick={() => setStep(0)}>
                        {tx(t.contact.back, lang)}
                      </button>
                    )}
                    {step === 0 ? (
                      <MagneticCTA type="button" className="btn-gold btn-magnetic flex-1" onClick={() => setStep(1)}>
                        {tx(t.contact.next, lang)}
                      </MagneticCTA>
                    ) : (
                      <MagneticCTA type="submit" className="btn-gold btn-magnetic flex-1">
                        {tx(t.contact.send, lang)}
                      </MagneticCTA>
                    )}
                  </div>
                </form>
              )}
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
