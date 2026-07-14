import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Custom Bag Quote",
  description: "Send PocketStory your bag type, quantity, logo and artwork requirements for a project-based B2B quotation."
};

export default function QuotePage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">GET A QUOTE</span>
          <h1>Tell Us About Your Custom Bag Project</h1>
          <p>Share your product type, estimated quantity and artwork. We will review the project requirements before quoting.</p>
        </div>
      </section>
      <section className="section">
        <div className="container quote-page-grid">
          <div className="quote-side">
            <h2>What helps us quote accurately</h2>
            <ul className="check-list">
              <li>Bag type or reference image</li>
              <li>Estimated order quantity</li>
              <li>Size and material requirement</li>
              <li>Logo artwork or printing preference</li>
              <li>Packaging and delivery target</li>
            </ul>
            <div className="contact-box">
              <strong>Business inquiry email</strong>
              <span>sales@pocketstorybags.com</span>
            </div>
          </div>
          <QuoteForm source="quote-page" />
        </div>
      </section>
    </main>
  );
}
