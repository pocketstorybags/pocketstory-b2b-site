"use client";

import { FormEvent, useState } from "react";

type Props = {
  compact?: boolean;
  source?: string;
};

export function QuoteForm({ compact = false, source = "website" }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("source", source);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        body: data
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Unable to send inquiry.");
      form.reset();
      setStatus("success");
      setMessage("Thank you. Your project details have been received.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send inquiry.");
    }
  }

  return (
    <form className={`quote-form ${compact ? "quote-form-compact" : ""}`} onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          Full Name *
          <input name="name" required placeholder="Your name" autoComplete="name" />
        </label>
        <label>
          Business Email *
          <input name="email" type="email" required placeholder="you@company.com" autoComplete="email" />
        </label>
        {!compact && (
          <>
            <label>
              Company Name
              <input name="company" placeholder="Company name" autoComplete="organization" />
            </label>
            <label>
              Country *
              <input name="country" required placeholder="Country" autoComplete="country-name" />
            </label>
          </>
        )}
        <label>
          Product Type *
          <select name="productType" required defaultValue="">
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
            <label>
              Upload Artwork
              <input name="artwork" type="file" accept=".ai,.pdf,.png,.jpg,.jpeg" />
              <span className="field-note">AI, PDF, PNG or JPG. Max 4 MB.</span>
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
      <button className="button button-gold form-button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : compact ? "Request Quote →" : "Get My Custom Quote →"}
      </button>
      {message && <p className={`form-status ${status}`}>{message}</p>}
    </form>
  );
}
