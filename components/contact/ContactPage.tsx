"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/GoldDivider";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const inquiryTypes = [
  "Residential Investment",
  "Commercial Investment",
  "Partnership Opportunity",
  "Project Information",
  "Media & Press",
  "General Inquiry",
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ minHeight: "50vh", background: "#080808" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(181,133,22,0.1) 0%, transparent 60%)" }}
        />
        <div className="gold-line absolute bottom-0 left-0 right-0" />

        <div className="container-luxury relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-4" style={{ color: "#ebbf5b" }}>Get In Touch</p>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: "#ffffff",
              }}
            >
              Let's Start a{" "}
              <span className="text-gold-gradient">Conversation</span>
            </h1>
            <p className="arabic mt-4 text-lg" style={{ color: "rgba(235,191,91,0.6)" }}>
              لنبدأ حواراً
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Whether you're looking to invest, partner, or simply learn more — our team is
              ready to provide the insight and guidance you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding" style={{ background: "#0a0a0a" }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info — Left Column */}
            <div className="lg:col-span-1 space-y-6">
              <ScrollReveal>
                <SectionLabel label="Contact Details" labelAr="تفاصيل التواصل" />
              </ScrollReveal>

              {[
                {
                  Icon: MapPin,
                  label: "Head Office",
                  labelAr: "المكتب الرئيسي",
                  value: "King Fahd Road, Al Olaya District, Riyadh 12244, KSA",
                },
                {
                  Icon: Phone,
                  label: "General Inquiries",
                  labelAr: "الاستفسارات العامة",
                  value: "+966 11 000 0000",
                  href: "tel:+96611000000",
                },
                {
                  Icon: Phone,
                  label: "Investor Hotline",
                  labelAr: "خط المستثمرين",
                  value: "+966 50 000 0001",
                  href: "tel:+966500000001",
                  highlight: true,
                },
                {
                  Icon: Mail,
                  label: "Email",
                  labelAr: "البريد الإلكتروني",
                  value: "info@nawah.sa",
                  href: "mailto:info@nawah.sa",
                },
                {
                  Icon: Clock,
                  label: "Working Hours",
                  labelAr: "ساعات العمل",
                  value: "Sun–Thu: 8:00 AM – 6:00 PM",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.07}>
                  <div
                    className="p-5 flex gap-4"
                    style={{
                      border: `1px solid ${item.highlight ? "rgba(181,133,22,0.4)" : "rgba(181,133,22,0.12)"}`,
                      background: item.highlight ? "rgba(181,133,22,0.06)" : "rgba(181,133,22,0.02)",
                    }}
                  >
                    <item.Icon size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#b58516" }} />
                    <div>
                      <p className="eyebrow mb-0.5" style={{ color: "#b58516", fontSize: "0.58rem" }}>{item.label}</p>
                      <p className="arabic text-xs" style={{ color: "rgba(181,133,22,0.45)" }}>{item.labelAr}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm mt-1 block transition-colors hover:text-[#ebbf5b]" style={{ color: item.highlight ? "#ebbf5b" : "rgba(255,255,255,0.65)" }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Map Placeholder */}
              <ScrollReveal delay={0.35}>
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "16/9", border: "1px solid rgba(181,133,22,0.2)" }}
                >
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    style={{ background: "rgba(15,14,11,0.95)" }}
                  >
                    <MapPin size={24} style={{ color: "#b58516" }} />
                    <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>
                      KING FAHD ROAD, RIYADH
                    </p>
                    <p className="arabic text-xs mt-1" style={{ color: "rgba(181,133,22,0.5)" }}>
                      طريق الملك فهد، الرياض
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-xs btn-outline-gold"
                      style={{ padding: "0.4rem 1rem" }}
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form — Right */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.05}>
                <SectionLabel label="Send a Message" labelAr="أرسل رسالة" />
              </ScrollReveal>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                  style={{ border: "1px solid rgba(181,133,22,0.3)", background: "rgba(181,133,22,0.04)" }}
                >
                  <CheckCircle size={48} style={{ color: "#b58516" }} className="mb-6" />
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#fff" }}>
                    Message Received
                  </h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                  <p className="arabic mt-2 text-sm" style={{ color: "rgba(181,133,22,0.5)" }}>
                    شكراً لتواصلك. سيرد فريقنا خلال 24 ساعة.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", message: "" }); setSelectedType(""); }}
                    className="mt-8 btn-outline-gold"
                    style={{ padding: "0.6rem 1.6rem" }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Inquiry Type */}
                  <ScrollReveal delay={0.1}>
                    <div>
                      <label className="eyebrow block mb-3" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.62rem" }}>
                        Inquiry Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSelectedType(type)}
                            className="px-4 py-2 text-xs transition-all duration-300"
                            style={{
                              border: selectedType === type ? "1px solid #ebbf5b" : "1px solid rgba(181,133,22,0.2)",
                              background: selectedType === type ? "rgba(181,133,22,0.15)" : "transparent",
                              color: selectedType === type ? "#ebbf5b" : "rgba(255,255,255,0.45)",
                              fontFamily: "var(--font-josefin)",
                              letterSpacing: "0.08em",
                              cursor: "pointer",
                            }}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Name + Email */}
                  <ScrollReveal delay={0.12}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="eyebrow block mb-2" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem" }}>Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="luxury-input"
                        />
                      </div>
                      <div>
                        <label className="eyebrow block mb-2" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem" }}>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="luxury-input"
                        />
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Phone + Company */}
                  <ScrollReveal delay={0.14}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="eyebrow block mb-2" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem" }}>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+966 5X XXX XXXX"
                          className="luxury-input"
                        />
                      </div>
                      <div>
                        <label className="eyebrow block mb-2" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem" }}>Company / Organization</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company (optional)"
                          className="luxury-input"
                        />
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Message */}
                  <ScrollReveal delay={0.16}>
                    <div>
                      <label className="eyebrow block mb-2" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem" }}>Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your interest or inquiry..."
                        className="luxury-input resize-none"
                      />
                    </div>
                  </ScrollReveal>

                  {/* Submit */}
                  <ScrollReveal delay={0.18}>
                    <button type="submit" className="btn-gold w-full sm:w-auto justify-center">
                      Send Message
                      <Send size={14} />
                    </button>
                    <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                      We respect your privacy. Your information will never be shared with third parties.
                    </p>
                  </ScrollReveal>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section
        className="py-20 relative"
        style={{ background: "linear-gradient(135deg, #0f0e00, #1a1500, #0f0e00)", borderTop: "1px solid rgba(181,133,22,0.2)" }}
      >
        <div className="container-luxury text-center">
          <ScrollReveal>
            <p className="eyebrow mb-4" style={{ color: "#b58516" }}>Exclusive Access</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
              Investor{" "}
              <span className="text-gold-gradient">Relations</span>
            </h2>
            <p className="mt-5 mx-auto max-w-lg text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              For institutional investors, family offices, and high-net-worth individuals
              seeking exclusive pre-launch access and private briefings.
            </p>
            <p className="arabic mt-3 text-sm" style={{ color: "rgba(181,133,22,0.5)" }}>
              للمستثمرين المؤسسيين والأفراد ذوي الثروات العالية الراغبين في الوصول الحصري
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="mailto:investors@nawah.sa" className="btn-gold">
                investors@nawah.sa
              </a>
              <a href="tel:+966500000001" className="btn-outline-gold">
                +966 50 000 0001
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
