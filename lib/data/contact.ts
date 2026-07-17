/** WhatsApp business line — update when verified */
export const WHATSAPP_NUMBER = "966500000000";

export function whatsAppUrl(lang: "en" | "ar"): string {
  const text =
    lang === "ar"
      ? "مرحباً، أود التواصل مع نواة التطوير العقاري."
      : "Hello, I would like to get in touch with Nawa Real Estate Development.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
