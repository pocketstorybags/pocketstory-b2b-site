import Link from "next/link";
import { assetUrl } from "@/lib/assets";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src={assetUrl("/images/pocketstory-logo.png")} alt="PocketStory" />
          <p className="footer-copy">
            Custom tote bags and drawstring bags for brands, wholesalers and promotional buyers.
          </p>
          <p className="footer-small">Email: sales@pocketstorybags.com</p>
        </div>
        <div>
          <h3>Products</h3>
          <Link href="/products">Tote Bags</Link>
          <Link href="/products">Drawstring Bags</Link>
          <Link href="/products/canvas-tote-bag">Canvas Tote Bags</Link>
          <Link href="/products/non-woven-tote-bag">Non Woven Tote Bags</Link>
        </div>
        <div>
          <h3>Customization</h3>
          <Link href="/#customization">Materials</Link>
          <Link href="/#customization">Logo Methods</Link>
          <Link href="/#customization">Structure Options</Link>
          <Link href="/#customization">Packaging Options</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/#factory">Factory & Quality</Link>
          <Link href="/#sustainability">Sustainability</Link>
          <Link href="/get-a-quote">Request a Quote</Link>
          <Link href="/#quote">Contact</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} PocketStory. All rights reserved.</span>
        <span>Built for GitHub · Vercel · Cloudflare R2 · Namecheap</span>
      </div>
    </footer>
  );
}
