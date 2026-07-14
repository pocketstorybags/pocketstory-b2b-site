import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Custom Tote Bags & Drawstring Bags",
  description: "Explore PocketStory custom canvas, cotton, jute, non woven tote bags and drawstring bags for B2B bulk orders."
};

export default function ProductsPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">PRODUCT CATALOG</span>
          <h1>Custom Tote Bags & Drawstring Bags</h1>
          <p>Explore our core custom bag categories for brands, wholesalers, retailers and promotional buyers.</p>
        </div>
      </section>
      <section className="section">
        <div className="container product-grid">
          {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>
    </main>
  );
}
