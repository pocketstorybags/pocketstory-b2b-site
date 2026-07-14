export type Product = {
  slug: string;
  name: string;
  shortName: string;
  image: string;
  description: string;
  applications: string;
  materials: string;
  logoOptions: string;
  buyerTypes: string[];
};

export const products: Product[] = [
  {
    slug: "canvas-tote-bag",
    name: "Custom Canvas Tote Bags",
    shortName: "Canvas Tote Bag",
    image: "/images/canvas-tote.webp",
    description: "Durable canvas bags for retail, gifting, brand merchandise and long-term promotional programs.",
    applications: "Retail, fashion brands, bookstores, museums, gifting",
    materials: "Canvas, heavy cotton canvas, custom fabric weights",
    logoOptions: "Screen printing, embroidery, heat transfer, woven label",
    buyerTypes: ["Retail brands", "Fashion brands", "Wholesalers", "Corporate gift buyers"]
  },
  {
    slug: "cotton-tote-bag",
    name: "Custom Cotton Tote Bags",
    shortName: "Cotton Tote Bag",
    image: "/images/cotton-tote.webp",
    description: "Lightweight cotton bags for events, promotions, shopping and everyday brand visibility.",
    applications: "Events, promotions, shopping, brand packaging",
    materials: "Natural cotton, dyed cotton, recycled cotton options",
    logoOptions: "Screen printing, heat transfer, DTF, embroidery",
    buyerTypes: ["Event buyers", "DTC brands", "Promotional companies", "Retailers"]
  },
  {
    slug: "jute-tote-bag",
    name: "Custom Jute Tote Bags",
    shortName: "Jute Tote Bag",
    image: "/images/jute-tote.webp",
    description: "Natural jute bags for retail, grocery, organic brands and sustainability-led campaigns.",
    applications: "Grocery, organic retail, gifts, sustainable campaigns",
    materials: "Jute, laminated jute, cotton-jute combinations",
    logoOptions: "Screen printing, transfer printing, labels",
    buyerTypes: ["Organic brands", "Supermarkets", "Gift companies", "Wholesalers"]
  },
  {
    slug: "non-woven-tote-bag",
    name: "Custom Non Woven Tote Bags",
    shortName: "Non Woven Tote Bag",
    image: "/images/non-woven-tote.webp",
    description: "Cost-effective reusable bags for promotions, exhibitions and large-volume campaigns.",
    applications: "Trade shows, campaigns, grocery, large-volume promotions",
    materials: "Non woven polypropylene in multiple weights and colors",
    logoOptions: "Screen printing, heat transfer, full-color printing options",
    buyerTypes: ["Promotional buyers", "Event companies", "Retail chains", "Distributors"]
  },
  {
    slug: "cotton-drawstring-bag",
    name: "Custom Cotton Drawstring Bags",
    shortName: "Cotton Drawstring Bag",
    image: "/images/cotton-drawstring.webp",
    description: "Natural cotton pouches for gifts, shoes, accessories, samples and reusable packaging.",
    applications: "Gift packaging, shoes, accessories, product samples",
    materials: "Cotton, muslin, canvas",
    logoOptions: "Screen printing, transfer printing, embroidery, label",
    buyerTypes: ["Gift brands", "Beauty brands", "Footwear brands", "E-commerce sellers"]
  },
  {
    slug: "satin-drawstring-bag",
    name: "Custom Satin Drawstring Bags",
    shortName: "Satin Drawstring Bag",
    image: "/images/satin-drawstring.webp",
    description: "Smooth satin pouches for beauty, weddings, jewelry and premium gift packaging.",
    applications: "Beauty, weddings, perfume, jewelry, premium gifts",
    materials: "Satin in multiple weights, finishes and colors",
    logoOptions: "Foil print, screen printing, heat transfer, embroidery",
    buyerTypes: ["Beauty brands", "Wedding suppliers", "Jewelry brands", "Gift companies"]
  },
  {
    slug: "velvet-drawstring-bag",
    name: "Custom Velvet Drawstring Bags",
    shortName: "Velvet Drawstring Bag",
    image: "/images/velvet-drawstring.webp",
    description: "Premium velvet pouches for jewelry, watches, fragrance and luxury gifting.",
    applications: "Jewelry, watches, fragrance, premium gifts",
    materials: "Velvet and soft-touch fabric options",
    logoOptions: "Foil print, embroidery, screen printing, woven label",
    buyerTypes: ["Jewelry brands", "Watch brands", "Luxury gifting", "Beauty brands"]
  },
  {
    slug: "drawstring-backpack-bag",
    name: "Custom Drawstring Backpack Bags",
    shortName: "Drawstring Backpack Bag",
    image: "/images/drawstring-backpack.webp",
    description: "Lightweight drawstring bags for sports, schools, events and promotional use.",
    applications: "Sports, schools, events, shoe bags, promotions",
    materials: "Polyester and lightweight fabric options",
    logoOptions: "Screen printing, heat transfer, DTF",
    buyerTypes: ["Schools", "Sports brands", "Event companies", "Promotional buyers"]
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
