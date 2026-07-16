# PocketStory B2B Website 1.0

A deployment-ready Next.js starter for a B2B inquiry-focused custom bag website.

## Included

- Home page
- Product catalog page
- 8 product detail pages
- Get a Quote page
- Inquiry API route
- SEO metadata, sitemap and robots
- Mobile responsive CSS
- Local image fallback plus Cloudflare R2 public URL support

## Product order

1. Canvas Tote Bag
2. Cotton Tote Bag
3. Jute Tote Bag
4. Non Woven Tote Bag
5. Cotton Drawstring Bag
6. Satin Drawstring Bag
7. Velvet Drawstring Bag
8. Drawstring Backpack Bag

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## GitHub + Vercel deployment

1. Create a GitHub repository, for example `pocketstory-b2b-site`.
2. Upload all project files.
3. In Vercel, choose **Add New Project** and import the GitHub repository.
4. Add the environment variables shown in `.env.example`.
5. Deploy.

## Cloudflare R2

The site works with local images immediately.

To switch site images to R2:

1. Create an R2 bucket.
2. Mirror the local `public/images/` path under an `images/` folder in the bucket.
3. Connect a public custom domain, for example:

```text
https://assets.pocketstorybags.com
```

4. Set:

```bash
NEXT_PUBLIC_R2_PUBLIC_URL=https://assets.pocketstorybags.com
```

The site asset helper will then request:

```text
https://assets.pocketstorybags.com/images/canvas-tote.webp
```

instead of the local file.

## Inquiry email

The `/api/inquiry` route is configured for a Resend-style email API request.

Set:

```bash
INQUIRY_EMAIL=sales@pocketstorybags.com
RESEND_API_KEY=your_api_key
RESEND_FROM=PocketStory Website <quote@pocketstorybags.com>
```

Until the email variables are configured, the form deliberately returns a clear configuration message rather than pretending the inquiry was sent.

## Namecheap

After Vercel creates the production deployment:

1. Add your domain in Vercel.
2. Use the DNS records Vercel shows for that project.
3. Add those records in Namecheap DNS, or move DNS management to Cloudflare.
4. Confirm the domain in Vercel.

Use the actual records displayed by Vercel for your project rather than copying an old hard-coded IP from a tutorial.

## Important image note before public launch

Several product photos were supplied as reference images and include visible names, sample artwork or third-party style references. Before a public commercial launch, replace any image you do not own or license with your own factory/product photography or approved brand-neutral visuals.

The factory and sustainability visuals in this starter are concept-support images for layout preview. Replace them with real factory, QC, packing and material photography for stronger B2B trust.


## WhatsApp Inquiry Setup

This version uses WhatsApp instead of email forms.

Set your WhatsApp number in Vercel:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=8613800000000
```

Use international format without `+`, spaces or dashes.

Examples:

```text
China: 8613812345678
US: 12125551234
UK: 447911123456
```

After adding or changing this environment variable in Vercel, redeploy the project.

All main CTA buttons and the quote form now open WhatsApp with a pre-filled B2B inquiry message.
