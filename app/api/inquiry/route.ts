import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 4 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "application/pdf",
  "image/png",
  "image/jpeg",
  "application/postscript"
]);

function value(form: FormData, key: string): string {
  const entry = form.get(key);
  return typeof entry === "string" ? entry.trim() : "";
}

function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return map[char] || char;
  });
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const name = value(form, "name");
    const email = value(form, "email");
    const productType = value(form, "productType");
    const quantity = value(form, "quantity");

    if (!name || !email || !productType || !quantity) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid business email." }, { status: 400 });
    }

    const artworkEntry = form.get("artwork");
    let attachment: { filename: string; content: string } | undefined;

    if (artworkEntry instanceof File && artworkEntry.size > 0) {
      if (artworkEntry.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: "Artwork must be 4 MB or smaller." }, { status: 400 });
      }
      if (artworkEntry.type && !ALLOWED_TYPES.has(artworkEntry.type)) {
        return NextResponse.json({ error: "Artwork must be AI, PDF, PNG or JPG." }, { status: 400 });
      }
      const buffer = Buffer.from(await artworkEntry.arrayBuffer());
      attachment = {
        filename: artworkEntry.name || "artwork",
        content: buffer.toString("base64")
      };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.INQUIRY_EMAIL;
    const from = process.env.RESEND_FROM || "PocketStory Website <onboarding@resend.dev>";

    if (!apiKey || !to) {
      return NextResponse.json(
        { error: "Inquiry email is not configured yet. Please email sales@pocketstorybags.com." },
        { status: 503 }
      );
    }

    const rows = [
      ["Name", name],
      ["Email", email],
      ["Company", value(form, "company")],
      ["Country", value(form, "country")],
      ["Product Type", productType],
      ["Quantity", quantity],
      ["Custom Logo", value(form, "customLogo")],
      ["Project Details", value(form, "message")],
      ["Source", value(form, "source")]
    ];

    const htmlRows = rows
      .map(([label, item]) => `<tr><td style="padding:8px;border:1px solid #ddd"><strong>${escapeHtml(label)}</strong></td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(item || "-")}</td></tr>`)
      .join("");

    const payload: Record<string, unknown> = {
      from,
      to: [to],
      reply_to: email,
      subject: `New PocketStory Inquiry — ${productType} — ${quantity}`,
      html: `<h2>New PocketStory B2B Inquiry</h2><table style="border-collapse:collapse">${htmlRows}</table>`
    };

    if (attachment) payload.attachments = [attachment];

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend error:", response.status, detail);
      return NextResponse.json({ error: "Your inquiry could not be sent. Please try again or email us." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry error:", error);
    return NextResponse.json({ error: "Unexpected error. Please try again." }, { status: 500 });
  }
}
