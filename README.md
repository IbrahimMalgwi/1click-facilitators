# 1Click Facilitators

A mobile-first, editorial Next.js website for 1Click Facilitators, 1Click Events and Foto1Click.

## Concept and information architecture

The visual system is “quietly assured”: deep ink and warm ivory carry the master brand, bronze signals experience, forest supports memorial architecture, and wine distinguishes events. Layouts use rules, asymmetry and typography instead of repeated rounded cards.

Primary routes are Home, About, four service pages, Portfolio, Testimonials, Resources and Contact. Funeral support is always one tap away on mobile.

## Local setup

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add configured values.
4. Run `npm run dev`.

The form validates server-side and works as a safe success-path demo without email credentials. Add `RESEND_API_KEY` and `CONTACT_EMAIL` to send admin notifications.

## Sanity setup

1. Create a Sanity project and dataset.
2. Add the project ID and dataset to `.env.local`.
3. Install the Sanity CLI and run `npx sanity dev`.
4. Create Site settings and Founder documents first, then services, projects, testimonials and articles.

The schemas include editor-friendly descriptions and never enable public casket pricing by default.

## Content editing

- Use only approved founder and client photography.
- Fill alternative text with what the image communicates, not a keyword list.
- Never publish a testimonial without client approval.
- Keep funeral copy calm, specific and non-promotional.
- Replace every bracketed placeholder before launch.

## Vercel deployment

Import the repository in Vercel, add all `.env.example` keys in Project Settings, and deploy. Set `NEXT_PUBLIC_SITE_URL` to the production domain. Configure the domain in Sanity CORS and Resend.

## Launch checklist

- Replace phone, WhatsApp, email, address and hours.
- Upload approved logo, founder portrait and project images.
- Review all service details with Akin Oniti.
- Configure Resend and Cloudflare Turnstile.
- Connect Sanity queries to published content.
- Add GA4 only after consent requirements are reviewed.
- Verify forms, mobile contact links, metadata and structured data.
- Run accessibility, keyboard, Lighthouse and cross-browser checks.

## Placeholder visual

`public/images/editorial-hero-placeholder.png` was AI-generated for layout development and is visibly labeled on the site. Replace it with approved brand photography before launch.
