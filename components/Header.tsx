import Link from "next/link";
import { assetUrl } from "@/lib/assets";

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
        <Link href="/get-a-quote" className="button button-primary header-cta">
          Get a Quote <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
