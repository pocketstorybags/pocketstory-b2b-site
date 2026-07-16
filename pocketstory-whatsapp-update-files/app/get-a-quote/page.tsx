import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "WhatsApp Custom Bag Quote",
  description: "Start a WhatsApp inquiry with PocketStory for custom tote bags and drawstring bags."
};

export default function QuotePage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">GET A QUOTE</span>
          <h1>Start Your WhatsApp Quote Request</h1>
          <p>Fill in the key project details and open WhatsApp with a ready-to-send quotation message.</p>
        </div>
      </section>
      <section className="section">
        <div className="container quote-page-grid">
          <div className="quote-side">
            <h2>What to share on WhatsApp</h2>
            <ul className="check-list">
              <li>Bag type or reference image</li>
              <li>Estimated order quantity</li>
              <li>Size and material requirement</li>
              <li>Logo artwork or printing preference</li>
              <li>Packaging and delivery target</li>
            </ul>
            <div className="contact-box">
              <strong>WhatsApp inquiry support</strong>
              <span>Click the form button to open WhatsApp</span>
            </div>
          </div>
          <QuoteForm source="quote-page" />
        </div>
      </section>
    </main>
  );
}
