import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/data/products";
import { assetUrl } from "@/lib/assets";
import { whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} for Bulk Orders`,
    description: product.description
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  return (
    <main className="inner-page">
      <section className="product-hero section">
        <div className="container product-hero-grid">
          <div className="product-detail-media">
            <img src={assetUrl(product.image)} alt={product.name} />
          </div>
          <div>
            <span className="eyebrow">CUSTOM B2B BAG SOLUTION</span>
            <h1>{product.name} for Bulk Orders</h1>
            <p className="hero-lead">{product.description}</p>
            <div className="spec-list">
              <div><span>Materials</span><strong>{product.materials}</strong></div>
              <div><span>Logo Options</span><strong>{product.logoOptions}</strong></div>
              <div><span>Applications</span><strong>{product.applications}</strong></div>
            </div>
            <div className="button-row">
              <a className="button button-primary" href={whatsappLink(`Hello PocketStory, I need a quote for ${product.shortName}.`)} target="_blank" rel="noopener noreferrer">WhatsApp Quote →</a>
              <Link className="button button-outline" href="/products">Back to Products</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container product-info-grid">
          <div>
            <span className="eyebrow">RECOMMENDED BUYERS</span>
            <h2>Designed Around Real B2B Use Cases</h2>
          </div>
          <div className="buyer-tags">
            {product.buyerTypes.map((buyer) => <span key={buyer}>{buyer}</span>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container centered narrow">
          <span className="eyebrow">CUSTOMIZATION</span>
          <h2>Share Your Design, Size and Quantity</h2>
          <p>We will review the project requirements and recommend a suitable material, logo process and packaging approach.</p>
          <a href={whatsappLink(`Hello PocketStory, I need a quote for ${product.shortName}.`)} className="button button-primary" target="_blank" rel="noopener noreferrer">Chat on WhatsApp →</a>
        </div>
      </section>
    </main>
  );
}
