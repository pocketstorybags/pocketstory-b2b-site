import Link from "next/link";
import { assetUrl } from "@/lib/assets";
import { whatsappLink } from "@/lib/whatsapp";

const nav = [
  ["Home", "/"],
  ["Products", "/products"],
  ["Customization", "/#customization"],
  ["Industries", "/#industries"],
  ["Factory & Quality", "/#factory"],
  ["Sustainability", "/#sustainability"],
  ["Contact", "/#quote"]
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="PocketStory home">
          <img src={assetUrl("/images/pocketstory-logo.png")} alt="PocketStory" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={label} href={href}>{label}</Link>
          ))}
        </nav>
        <a
          href={whatsappLink("Hello PocketStory, I would like to get a custom bag quote.")}
          className="button button-primary header-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Quote <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
