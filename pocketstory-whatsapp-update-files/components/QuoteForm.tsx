"use client";

import { FormEvent, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

type Props = {
  compact?: boolean;
  source?: string;
  defaultProduct?: string;
};

export function QuoteForm({ compact = false, source = "website", defaultProduct = "" }: Props) {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const country = String(data.get("country") || "").trim();
    const productType = String(data.get("productType") || "").trim();
    const quantity = String(data.get("quantity") || "").trim();
    const customLogo = String(data.get("customLogo") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !productType || !quantity) {
      setStatus("Please complete your name, product type and quantity before opening WhatsApp.");
      return;
    }

    const whatsappMessage = [
      "Hello PocketStory, I would like to request a custom bag quote.",
      "",
      `Name: ${name}`,
      company ? `Company: ${company}` : "",
      country ? `Country: ${country}` : "",
      `Product Type: ${productType}`,
      `Estimated Quantity: ${quantity}`,
      customLogo ? `Custom Logo: ${customLogo}` : "",
      message ? `Project Details: ${message}` : "",
      "",
      `Source: ${source}`
    ].filter(Boolean).join("\n");

    window.open(whatsappLink(whatsappMessage), "_blank", "noopener,noreferrer");
    setStatus("WhatsApp has opened. Please send the pre-filled message to start your quote request.");
  }

  return (
    <form className={`quote-form ${compact ? "quote-form-compact" : ""}`} onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          Full Name *
          <input name="name" required placeholder="Your name" autoComplete="name" />
        </label>
        {!compact && (
          <>
            <label>
              Company Name
              <input name="company" placeholder="Company name" autoComplete="organization" />
            </label>
            <label>
              Country
              <input name="country" placeholder="Country" autoComplete="country-name" />
            </label>
          </>
        )}
        <label>
          Product Type *
          <select name="productType" required defaultValue={defaultProduct}>
            <option value="" disabled>Select product type</option>
            <option>Canvas Tote Bag</option>
            <option>Cotton Tote Bag</option>
            <option>Jute Tote Bag</option>
            <option>Non Woven Tote Bag</option>
            <option>Cotton Drawstring Bag</option>
            <option>Satin Drawstring Bag</option>
            <option>Velvet Drawstring Bag</option>
            <option>Drawstring Backpack Bag</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Estimated Quantity *
          <select name="quantity" required defaultValue="">
            <option value="" disabled>Select quantity</option>
            <option>500–999 pcs</option>
            <option>1,000–2,999 pcs</option>
            <option>3,000–4,999 pcs</option>
            <option>5,000–9,999 pcs</option>
            <option>10,000+ pcs</option>
          </select>
        </label>
        {!compact && (
          <>
            <label>
              Custom Logo
              <select name="customLogo" defaultValue="Yes">
                <option>Yes</option>
                <option>No</option>
                <option>Not Sure</option>
              </select>
            </label>
            <label className="form-full">
              Project Details
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about size, material, logo, packaging, target delivery time or a reference product."
              />
            </label>
          </>
        )}
      </div>
      <button className="button button-gold form-button" type="submit">
        {compact ? "Chat on WhatsApp →" : "Send WhatsApp Inquiry →"}
      </button>
      {status && <p className="form-status success">{status}</p>}
      <p className="whatsapp-note">No email form required. Your inquiry opens directly in WhatsApp with project details.</p>
    </form>
  );
}
