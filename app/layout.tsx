import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.pocketstorybags.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Custom Tote Bags & Drawstring Bags Manufacturer | PocketStory",
    template: "%s | PocketStory"
  },
  description:
    "PocketStory creates custom canvas, cotton, jute, non woven tote bags and drawstring bags for brands, wholesalers and promotional buyers.",
  openGraph: {
    title: "PocketStory Custom Bags",
    description:
      "Custom tote bags and drawstring bags with logo printing, OEM & ODM support and reliable bulk production.",
    url: siteUrl,
    siteName: "PocketStory",
    images: ["/images/canvas-tote.webp"],
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
