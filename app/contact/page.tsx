import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Nawah | Investor Inquiries & Consultations — تواصل معنا",
  description:
    "Contact Nawah Real Estate Development for investment inquiries, project information, partnership opportunities, and private consultations. Based in Riyadh, Saudi Arabia.",
};

export default function Contact() {
  return <ContactPage />;
}
