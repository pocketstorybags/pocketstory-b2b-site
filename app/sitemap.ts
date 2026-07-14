import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.pocketstorybags.com";
  const pages = ["", "/products", "/get-a-quote"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));
  const productPages = products.map((product) => ({
    url: `${base}/products/${product.slug}`,
    lastModified: new Date()
  }));
  return [...pages, ...productPages];
}
