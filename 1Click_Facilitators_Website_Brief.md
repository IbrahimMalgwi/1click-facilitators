# 1Click Facilitators — Website Design Brief
**Prepared for:** Designer/Developer
**Prepared by:** Akintunde Oniti / 1Click Facilitators
**Date:** July 2026

---

## 1. Project Overview

1Click Facilitators is a Nigeria-based facilitation company covering funeral services, vault/mausoleum brokerage and construction, event planning, and photography/videography. The website should present the company as one trusted, established brand with three visible service arms:

| Brand | Service Focus |
|---|---|
| **1Click Facilitators** | Umbrella brand — funerals, casket sales, vault/mausoleum sales, brokerage, vault maintenance |
| **1Click Events** | Wedding, birthday, and general event planning & consultation |
| **Foto1Click** | Photography and videography for funerals, weddings, birthdays, and other events |

The site must build trust quickly (this is a sensitive, high-stakes service category), showcase past work, and make it easy for a grieving or event-planning client to reach the company by phone, WhatsApp, or a simple form.

---

## 2. Business Requirements (BR)

| ID | Requirement |
|---|---|
| BR-01 | The website must establish 1Click Facilitators as a credible, professional, one-stop facilitator for funeral, vault/mausoleum, and event services. |
| BR-02 | The website must clearly present all three service arms (1Click Facilitators, 1Click Events, Foto1Click) under one cohesive brand, without confusing visitors about which service they are viewing. |
| BR-03 | The website must generate qualified leads/enquiries via phone call, WhatsApp, and a contact form. |
| BR-04 | The website must showcase the owner's credentials and experience prominently, to build trust given the sensitive nature of funeral and vault services. |
| BR-05 | The website must display a portfolio of past events (burials, weddings, birthdays) and vault/mausoleum projects to demonstrate track record. |
| BR-06 | The website must clearly explain the vault/mausoleum brokerage and monthly maintenance service, since this is a unique, less-understood offering. |
| BR-07 | The website must be easy to update by the client (Akin or staff) without technical help — new galleries, testimonials, blog posts. |
| BR-08 | The website must work well on mobile, since most enquiries are expected to come from phones. |
| BR-09 | The website must be discoverable on Google for local searches (e.g. "funeral director Lagos," "casket seller Ikoyi," "event planner Lagos," "vault and mausoleum Nigeria"). |
| BR-10 | The tone throughout funeral-related pages must be respectful, calm, and reassuring — not commercial or pushy. Event pages (weddings/birthdays) can be more vibrant and celebratory. |

---

## 3. Site Structure (Proposed Sitemap)

1. **Home**
2. **About Us** (Company + Owner Profile)
3. **Services**
   - 3.1 Funeral Services & Caskets
   - 3.2 Vaults & Mausoleums (Sales, Brokerage, Construction, Monthly Maintenance)
   - 3.3 1Click Events (Weddings, Birthdays, Other Functions)
   - 3.4 Foto1Click (Photography & Videography)
4. **Portfolio / Gallery** (filterable by category: Funerals, Weddings, Birthdays, Vaults, Photography)
5. **Testimonials**
6. **Blog / Resources** (optional, e.g. "Planning a funeral checklist," "Choosing a vault")
7. **Contact Us**
8. Footer: quick links, social media, WhatsApp click-to-chat, business hours, address

---

## 4. Functional Requirements (FR)

### 4.1 Global / Site-wide
- **FR-01**: Sticky header with logo and navigation menu, visible on scroll.
- **FR-02**: A persistent WhatsApp click-to-chat floating button on every page.
- **FR-03**: Click-to-call phone number visible in the header on mobile.
- **FR-04**: Footer with contact details, business address, social media icons, and links to all three service arms.
- **FR-05**: Site must be responsive across mobile, tablet, and desktop.
- **FR-06**: All forms must send an email/notification to the admin and show a confirmation message to the user.
- **FR-07**: Basic SEO fields (page title, meta description) editable per page.

### 4.2 Home Page
- **FR-08**: Hero section introducing 1Click Facilitators with a clear one-line description of what the company does.
- **FR-09**: Three visual "service cards" linking to Funeral Services, Vaults & Mausoleums, and Events/Photography.
- **FR-10**: Snapshot of the owner (photo + 1–2 line credibility statement) with a link to full "About/Founder" page.
- **FR-11**: Featured portfolio images (rotating/carousel) from recent work.
- **FR-12**: Testimonial snippet section.
- **FR-13**: Call-to-action banner ("Speak with us today") with phone/WhatsApp/contact button.

### 4.3 About Us / Owner Profile Page
- **FR-14**: Company story section — how 1Click Facilitators started and what it offers.
- **FR-15**: Dedicated **Owner Profile** section with photo and full bio (see Section 6 below for required content).
- **FR-16**: Company values/mission statement.
- **FR-17**: Optional: team members section (if staff/photographers are to be listed).

### 4.4 Services Pages
- **FR-18**: Each service (Funerals, Vaults & Mausoleums, Events, Photography) has its own page or section with:
  - Description of the service
  - What's included
  - Process/how it works (step-by-step)
  - Related gallery images
  - CTA to enquire
- **FR-19**: Vaults & Mausoleums page must explain, in plain language: (a) sale of new vaults, (b) construction of mausoleums for families, (c) brokerage between cemeteries and clients, (d) monthly vault maintenance service with fee structure explained (or "contact for pricing").
- **FR-20**: Casket sales must be presented respectfully, ideally with categories/types rather than a public price list (unless the client wants pricing shown).

### 4.5 Portfolio / Gallery
- **FR-21**: Filterable gallery by category (Funerals / Weddings / Birthdays / Vaults & Mausoleums / Photography).
- **FR-22**: Lightbox image viewer (click to enlarge).
- **FR-23**: Admin must be able to add/remove gallery images easily.

### 4.6 Testimonials
- **FR-24**: Display client testimonials with name, event type, and (optional) photo.
- **FR-25**: Admin can add new testimonials via CMS.

### 4.7 Contact Page
- **FR-26**: Contact form with fields: Name, Phone, Email, Service Interested In (dropdown), Message.
- **FR-27**: Embedded Google Map showing business location.
- **FR-28**: Business hours and multiple contact channels listed (phone, WhatsApp, email).

### 4.8 Admin / CMS
- **FR-29**: Content management system so Akin/staff can edit text, add images, and add testimonials without a developer.

---

## 5. User Stories & Acceptance Criteria

### Epic 1: Trust & Credibility

**US-1.1** — As a grieving family member searching for funeral help, I want to quickly see who is behind this company and their experience, so I feel confident reaching out.
- **AC:** Owner's name, photo, years of experience, and past roles are visible within one click from the home page.
- **AC:** The About page loads the owner's full bio without requiring login or extra clicks.

**US-1.2** — As a potential client, I want to see past events the company has handled, so I can judge the quality of their work.
- **AC:** A portfolio/gallery page exists with at least 3 categories of past work.
- **AC:** Each gallery item can be enlarged for closer viewing.

**US-1.3** — As a potential client, I want to read what previous clients said, so I can trust the company.
- **AC:** A testimonials section is visible on the home page and has its own full page.

### Epic 2: Understanding the Services

**US-2.1** — As a family looking to bury a loved one, I want to understand all the services included in funeral facilitation (caskets, vaults, logistics), so I know what 1Click Facilitators can handle for me.
- **AC:** The Funeral Services page lists all included offerings clearly (caskets, vault sourcing, coordination, etc.).

**US-2.2** — As someone unfamiliar with vault/mausoleum brokerage, I want a plain-language explanation of how buying a vault through 1Click Facilitators works, so I understand the process before contacting them.
- **AC:** The Vaults & Mausoleums page explains, step-by-step, how the brokerage process works between the client and the cemetery.
- **AC:** The monthly vault maintenance service is clearly described, including what "maintenance" includes.

**US-2.3** — As someone planning a wedding or birthday, I want to see that 1Click Events/Foto1Click can handle both planning and photography, so I can book one team for everything.
- **AC:** The Events page cross-links to Foto1Click services and vice versa.

### Epic 3: Making Contact

**US-3.1** — As a mobile user in an urgent situation (e.g. recent bereavement), I want to call or WhatsApp the company in one tap, so I don't have to type a long message.
- **AC:** A visible phone number and WhatsApp button are present on every page, functional on mobile (tap-to-call, tap-to-chat).

**US-3.2** — As a client planning ahead, I want to fill out a contact form specifying which service I'm interested in, so the right person follows up with me.
- **AC:** Contact form includes a "Service Interested In" dropdown with all four service types.
- **AC:** On submission, client sees a confirmation message and the admin receives an email/notification.

### Epic 4: Owner Profile

**US-4.1** — As a visitor evaluating whether to trust this company with a funeral or major event, I want to read a detailed professional profile of the owner, so I can verify his expertise.
- **AC:** The About page includes a dedicated, well-formatted Owner Profile section (see Section 6).
- **AC:** Profile includes a professional photo of Akin Oniti.

### Epic 5: Content Management

**US-5.1** — As the business owner, I want to add new gallery photos and testimonials myself after a new event, so the site stays current without paying a developer each time.
- **AC:** Admin login provides access to add/edit/remove gallery images and testimonials.
- **AC:** Changes reflect on the live site without needing code changes.

---

## 6. Owner Profile — Required Content

This section should appear prominently on the **About Us** page (and a shortened version on the Home page).

**Name:** Akin Oniti
**Title/Role:** Founder & Director, 1Click Facilitators

**Suggested profile content (for the designer to build a layout around — copywriting can be refined separately):**

- Over **15 years of experience** as a Funeral Director.
- Former **Managing Director of Vaults and Gardens, Ikoyi, Lagos, Nigeria**.
- Former **Construction Engineer at Ebony Vaults and Gardens, Ikoyi, Lagos, Nigeria**.
- Academic background: studied **Electrical Engineering**.
- Professional affiliation: **Associate Member, Business Development Institute, Nigeria**.
- Track record of planning and executing numerous **burials, weddings, and birthday celebrations**.
- Expertise in **vault and mausoleum sales, construction, and brokerage** — acting as the intermediary between cemeteries and client families to facilitate vault purchases.
- Oversees ongoing **monthly maintenance of vaults**, keeping burial sites clean, dignified, and well-kept for families on an ongoing basis.

**Layout recommendation for designer:**
- Professional headshot (formal attire) on one side, bio text on the other (or stacked on mobile).
- A "credentials strip" — 3–4 short icon+text highlights (e.g. "15+ Years Experience," "Former MD, Vaults & Gardens Ikoyi," "Engineer-Trained Vault Builder," "BDI Nigeria Associate Member") for quick scanning before the full paragraph bio.
- Optional pull-quote from Akin about his philosophy on dignified funeral/event service.

---

## 7. Visual & Tone Direction (Guidance for Designer)

- **Funeral/Vault sections:** muted, calm palette (navy, charcoal, gold or bronze accents, soft neutrals). Avoid bright/loud colors. Respectful serif or clean sans-serif typography.
- **Events/Photography sections:** can shift to a warmer, more vibrant palette and richer imagery to reflect celebration.
- **Overall:** the site should feel premium and trustworthy, not like a generic template — this is a high-trust, high-emotion purchase category.
- Recommend consistent use of real photography (with client permission) over stock images wherever possible, especially for the portfolio.

---

*End of brief.*