import Link from "next/link";
import type { Product } from "@/data/products";
import { assetUrl } from "@/lib/assets";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="product-card">
      <div className="product-image-wrap">
        <img src={assetUrl(product.image)} alt={product.name} loading="lazy" />
      </div>
      <div className="product-card-body">
        <h3>{product.shortName}</h3>
        <p>{product.description}</p>
        <span className="text-link">Explore product <span aria-hidden>→</span></span>
      </div>
    </Link>
  );
}
