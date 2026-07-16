import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { QuoteForm } from "@/components/QuoteForm";
import { whatsappLink } from "@/lib/whatsapp";
import { products } from "@/data/products";
import { assetUrl } from "@/lib/assets";

const trust = [
  ["Flexible MOQ", "Support trial and bulk orders"],
  ["Custom Logo", "Printing & embroidery options"],
  ["OEM & ODM", "Size, material & structure"],
  ["Quality Control", "Inspection before shipment"],
  ["Global Shipping", "Export support for global buyers"]
];

const customization = [
  ["Materials", "Cotton, canvas, jute, non woven, satin, velvet and polyester."],
  ["Logo Methods", "Screen printing, embroidery, heat transfer, DTF and labels."],
  ["Structure Options", "Custom size, handles, pockets, zipper, gusset and lining."],
  ["Packaging Options", "Paper bands, hang tags, barcode labels and retail-ready packing."]
];

const buyers = [
  ["Retail & Fashion Brands", "Custom tote bags for retail packaging and brand merchandise."],
  ["Corporate Gift Companies", "Promotional bags for employee and client gifting programs."],
  ["Wholesalers & Distributors", "Flexible bulk production and stable repeat-order supply."],
  ["Trade Shows & Events", "Cost-effective custom bags for exhibitions and campaigns."],
  ["DTC & E-commerce Brands", "Private label bags for online brands and customer packaging."],
  ["Sustainable Brands", "Reusable cotton, canvas and jute bag solutions."]
];

const reasons = [
  ["Flexible MOQ", "Test new designs before scaling larger orders."],
  ["Full Customization", "Customize material, size, structure and logo."],
  ["Stable Bulk Production", "Reliable production for repeat and volume orders."],
  ["Quality Inspection", "Fabric, stitching and logo quality checked before shipment."],
  ["Fast Sampling", "Turn your design or reference into a physical sample."],
  ["Global Export Support", "Packing and shipping support for international buyers."]
];

const process = [
  ["01", "Sample Development", "Confirm design, size and materials."],
  ["02", "Logo Production", "Printing or embroidery based on artwork."],
  ["03", "Sewing", "Bag construction and skilled assembly."],
  ["04", "Quality Check", "Multi-step inspection before packing."],
  ["05", "Packing", "Export packing prepared for delivery."]
];

export default function HomePage() {
  return (
    <main>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">CUSTOM BAGS FOR B2B BUYERS</span>
            <h1>Custom Tote Bags & Drawstring Bags for Brands and Bulk Orders</h1>
            <p className="hero-lead">
              Custom tote bags and drawstring bags with flexible materials, logo printing,
              embroidery and private label options for brands, wholesalers and promotional buyers.
            </p>
            <div className="button-row">
              <a className="button button-primary" href={whatsappLink("Hello PocketStory, I would like to get a custom bag quote.")} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <span>→</span></a>
              <Link className="button button-outline" href="/products">Explore Products <span>→</span></Link>
            </div>
            <div className="hero-proof">
              <span className="proof-stars" aria-label="Five star service">★★★★★</span>
              <span>Built around custom projects, repeat orders and bulk supply.</span>
            </div>
          </div>
          <div className="hero-media">
            <img src={assetUrl("/images/canvas-tote.webp")} alt="Custom canvas tote bag" />
            <div className="hero-note">
              <strong>Send your design.</strong>
              <span>We help match material, logo method and order quantity.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-wrap">
        <div className="container trust-bar">
          {trust.map(([title, copy], index) => (
            <div className="trust-item" key={title}>
              <span className="mini-icon">{String(index + 1).padStart(2, "0")}</span>
              <div><strong>{title}</strong><span>{copy}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section products-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">OUR PRODUCTS</span>
            <h2>Custom Bag Solutions for Your Brand</h2>
            <p>Tote bags are our core product line. Drawstring bags extend the range for gifts, accessories and events.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
          <div className="center-action">
            <Link href="/products" className="button button-primary">View All Products <span>→</span></Link>
          </div>
        </div>
      </section>

      <section id="customization" className="section soft-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">CUSTOMIZATION</span>
            <h2>Tailored to Your Brand</h2>
            <p>Build a bag around your market, budget and brand experience.</p>
          </div>
          <div className="feature-grid four">
            {customization.map(([title, copy], index) => (
              <article className="feature-card" key={title}>
                <span className="feature-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="center-action">
            <Link href="/get-a-quote" className="text-link large">Send Your Design <span>→</span></Link>
          </div>
        </div>
      </section>

      <section id="industries" className="section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">B2B SOLUTIONS</span>
            <h2>Bag Solutions for Different Business Buyers</h2>
          </div>
          <div className="feature-grid three">
            {buyers.map(([title, copy]) => (
              <article className="buyer-card" key={title}>
                <div className="line-icon" aria-hidden>✦</div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">WHY POCKETSTORY</span>
            <h2>Built for B2B Custom Bag Projects</h2>
          </div>
          <div className="reason-grid">
            {reasons.map(([title, copy], index) => (
              <article className="reason-card" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section best-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">POPULAR CHOICES</span>
            <h2>Popular Custom Bags for Brand Projects</h2>
          </div>
          <div className="best-strip">
            {products.map((product) => (
              <Link href={`/products/${product.slug}`} className="best-item" key={product.slug}>
                <img src={assetUrl(product.image)} alt={product.shortName} loading="lazy" />
                <span>{product.shortName}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="factory" className="section factory-section">
        <div className="container factory-grid">
          <div className="factory-copy">
            <span className="eyebrow">FACTORY & QUALITY</span>
            <h2>Built for Reliable Bulk Production</h2>
            <p>
              From material sourcing and sample development to printing, sewing, quality inspection and packing,
              we support custom bag projects from concept to bulk delivery.
            </p>
            <ul className="check-list">
              <li>Sample development before bulk production</li>
              <li>Logo printing and embroidery options</li>
              <li>Inspection of fabric, stitching and logo quality</li>
              <li>Export packing for international orders</li>
            </ul>
          </div>
          <div className="factory-media">
            <img src={assetUrl("/images/factory-production.webp")} alt="Bag production support visual" loading="lazy" />
          </div>
        </div>
        <div className="container process-grid">
          {process.map(([num, title, copy]) => (
            <article className="process-card" key={num}>
              <span>{num}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="sustainability" className="section sustainability-section">
        <div className="container sustainability-grid">
          <div>
            <span className="eyebrow">RESPONSIBLE OPTIONS</span>
            <h2>Better Bags for a Better Future</h2>
            <p>
              Reusable materials and durable designs can support more responsible packaging programs without
              making claims your project cannot verify.
            </p>
            <ul className="check-list">
              <li>Reusable cotton, canvas and jute options</li>
              <li>Durable bag structures for repeat use</li>
              <li>Plastic-free packaging options where suitable</li>
            </ul>
          </div>
          <img src={assetUrl("/images/sustainability.webp")} alt="Reusable bag and natural leaves" loading="lazy" />
        </div>
      </section>

      <section id="quote" className="quote-band">
        <div className="container quote-band-grid">
          <div>
            <span className="eyebrow eyebrow-light">START YOUR PROJECT</span>
            <h2>Ready to Create Custom Bags for Your Brand?</h2>
            <p>
              Share your product type and estimated quantity. We will review your project and help match the
              material, logo method and production solution.
            </p>
            <div className="quote-points">
              <span>✓ WhatsApp quick response</span>
              <span>✓ Share artwork in chat</span>
              <span>✓ B2B bulk order support</span>
            </div>
          </div>
          <QuoteForm compact source="homepage" />
        </div>
      </section>
    </main>
  );
}
