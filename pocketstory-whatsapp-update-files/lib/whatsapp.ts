const DEFAULT_WHATSAPP_NUMBER = "8613800000000";

export function getWhatsappNumber(): string {
  return (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER).replace(/\D/g, "");
}

export function whatsappLink(message: string): string {
  const number = getWhatsappNumber();
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
