import { whatsappLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink("Hello PocketStory, I would like to discuss a custom bag project.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PocketStory on WhatsApp"
    >
      <span className="whatsapp-icon">☎</span>
      <span>WhatsApp</span>
    </a>
  );
}
