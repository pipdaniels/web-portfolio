# Port Plan: seunadeniyi.vercel.app → SvelteKit + shadcn-svelte

**Theme:** Studio Concrete (industrial, modern, energetic)
**Principles:** mobile-first, strictly shadcn-svelte, generous white space, plain backgrounds, premium feel
**Content source:** text pasted from the live site on 2026-11-08 (copied verbatim into the data files below)
**Package manager:** **pnpm only** (strictly enforced, see §2.1)

---

## 1. Resolved decisions and remaining items

### Resolved
| Item | Decision |
|---|---|
| GitHub | https://github.com/pipdaniels |
| LinkedIn | https://linkedin.com/in/seundeniyi (used exactly as given) |
| Twitter/X | https://twitter.com/seun_climate |
| Project descriptions | Placeholders for now; you will fill them in code (§4.4) |
| Privacy Policy / Terms of Service | **Removed** from the footer |
| WhatsApp message | Prefilled message defined in §8 |
| Contact form and "Send Email Directly" | Both open the visitor's email client via `mailto:` (§6) |
| Package manager | pnpm only |

### Still needed (non-blocking; placeholders used until then)
| # | Item | Interim handling |
|---|---|---|
| 1 | CV file for "Download CV" | `static/cv/Seun-Adeniyi-CV.pdf` placeholder path; drop the real file in |
| 2 | Link and thumbnail for each of the 6 projects | `href: "#"` and a grey placeholder thumbnail until supplied |
| 3 | Newsletter "Subscribe" mechanism | Not mentioned in your answers; confirm whether to keep the old provider or also use `mailto:` |
| 4 | Whether nav "About" maps to "My Vision & Philosophy" | Assumed yes |

Content flags (kept as requested, check before relaunch): the stats (50+ happy clients, 75+ projects, 99% uptime guarantee) and the five testimonials should be real and verifiable on a public site.

---

## 2. Tech stack

| Concern | Choice |
|---|---|
| Framework | SvelteKit (Svelte 5, runes), TypeScript |
| UI | **shadcn-svelte only** |
| Styling | Tailwind CSS v4 + shadcn-svelte CSS variables |
| Package manager | **pnpm** (only) |
| Forms | shadcn-svelte `Form` (formsnap) + `sveltekit-superforms` (SPA mode) + `zod`; submit opens `mailto:` |
| Toasts | shadcn-svelte `Sonner` |
| Icons | `@lucide/svelte`; brand glyphs (GitHub, LinkedIn, X, WhatsApp) as inline SVG components |
| Images | `@sveltejs/enhanced-img` |
| Fonts | `@fontsource` (self-hosted) |
| Deploy | `@sveltejs/adapter-vercel`, same Vercel project and domain (set install command to `pnpm install --frozen-lockfile`) |

### 2.1 pnpm-only rules

- Scaffold: `pnpm dlx sv create seunadeniyi` (choose pnpm), never `npm create` or `npx`.
- Add `"packageManager": "pnpm@<current 9 or 10 version>"` to `package.json` (Corepack pins it).
- Block other managers: `"preinstall": "pnpm dlx only-allow pnpm"` in `package.json`, `engine-strict=true` in `.npmrc`, and an `engines` entry (`"pnpm": ">=9"`).
- Commit `pnpm-lock.yaml` only; add `package-lock.json` and `yarn.lock` to `.gitignore`.
- All docs, scripts and READMEs use `pnpm add`, `pnpm dlx`, `pnpm run`, `pnpm exec`. Playwright: `pnpm exec playwright install`.

```bash
pnpm dlx shadcn-svelte@latest init
pnpm dlx shadcn-svelte@latest add button card badge separator avatar carousel \
  sheet navigation-menu input textarea label form sonner aspect-ratio \
  skeleton tooltip
pnpm add sveltekit-superforms zod @sveltejs/enhanced-img @lucide/svelte
pnpm add -D @sveltejs/adapter-vercel @playwright/test
```

---

## 3. Design system

### 3.1 Palette

| Token | Hex | Role |
|---|---|---|
| `--background` | `#f7f7f5` | Page background, negative space (plain, no gradients) |
| `--foreground` | `#2b2d31` | Headlines, primary text, dark blocks |
| `--muted-foreground` | `#5a6068` | Body copy, captions |
| `--border` / `--muted` | `#d8dadd` | Hairlines, card borders, grey slabs |
| `--primary` / `--accent` | `#ff6b4a` | Focal accent only |

```css
:root {
  --background: #f7f7f5;  --foreground: #2b2d31;
  --card: #f7f7f5;        --card-foreground: #2b2d31;
  --popover: #f7f7f5;     --popover-foreground: #2b2d31;
  --primary: #ff6b4a;     --primary-foreground: #2b2d31;
  --secondary: #d8dadd;   --secondary-foreground: #2b2d31;
  --muted: #d8dadd;       --muted-foreground: #5a6068;
  --accent: #ff6b4a;      --accent-foreground: #2b2d31;
  --border: #d8dadd;      --input: #d8dadd;   --ring: #ff6b4a;
  --radius: 0rem;
}
```

Light-only (no dark mode, no toggle).

### 3.2 Accent discipline

- Orange on **at most one or two shapes per screen**: the main CTA and one headline bar.
- Hero: a solid orange horizontal bar between headline blocks (echoing the red bar in the reference). The "View My Work" button is the only other orange element in view.
- Never orange for body text or list icons (orange text on `#f7f7f5` is about 2.9:1). Use it as a fill with `#2b2d31` text (about 5:1).
- Secondary buttons, tags, links: grays only.

### 3.3 Typography (from the attached sample)

The sample is an ultra-condensed heavy grotesque in all caps, tightly stacked, set as solid ink blocks on grey slabs, with small grey-on-black label blocks and warm paper stock.

| Role | Font | Treatment |
|---|---|---|
| Display (H1, H2, stat numbers) | **Anton** | UPPERCASE, `leading-[0.88]`, `tracking-tight`, `#2b2d31` |
| Labels, nav, H3, buttons | **Barlow Condensed** 600–700 | UPPERCASE, `tracking-wide`; grey text on `#2b2d31` blocks for tags like the sample's "SWISS DESIGN" |
| Body | **Inter** 400/500 | Sentence case, `#5a6068`, `leading-relaxed`, `max-w-[65ch]` |
| Metadata | **JetBrains Mono** | Tech tags, small captions |

```css
--text-display: clamp(3.5rem, 14vw, 11rem);
--text-h2:      clamp(2.5rem, 8vw, 6rem);
--text-h3:      clamp(1.25rem, 3vw, 1.75rem);
--text-body:    clamp(1rem, 0.95rem + 0.3vw, 1.125rem);
```

Hierarchy comes from color and size, not weight variety: `#2b2d31` → `#5a6068` → `#d8dadd`.

### 3.4 Layout language

- Container `max-w-6xl px-5 md:px-8`; section padding `py-24 md:py-40`; 8px spacing unit.
- Headline words stacked on solid `#2b2d31` or `#d8dadd` blocks that bleed off one edge (plain `div` + Tailwind). At most one dark block per viewport.
- Plain `#f7f7f5` background throughout; sections divided by a 1px `#d8dadd` `Separator`, not tinted bands.
- Square corners, 1px borders, no shadows.
- Motion: 200ms reveal (`transition:fly`), link underline on hover, image scale 1.02 on project hover; honors `prefers-reduced-motion`.

---

## 4. Sections: content and shadcn-svelte mapping

Nav order (verbatim): **Home · About · Tech Stack · Projects · Testimonials · Contact**

### 4.1 Header
`NavigationMenu` (md+), `Sheet` + `Button` (mobile drawer), `Separator`. Sticky, `#f7f7f5` with bottom hairline. Wordmark "Seun Adeniyi" in Anton.

### 4.2 Hero (Home)
- H1: **Seun Adeniyi**
- Subtitle: **Senior Backend Developer & System Architect**
- Body: "Crafting robust, AI Powered scalable backend systems with expertise in Golang, Python, and PHP. Building the infrastructure that powers modern applications and payment systems."
- Buttons: **View My Work** (orange, scrolls to Projects), **Download CV** (outline, links to the CV file)
- "Scroll Down" cue (small mono label with a Lucide arrow)
- Layout: name stacked in giant Anton on a dark block, orange bar below, subtitle in Barlow Condensed.
- Components: `Button`, `Separator`.

### 4.3 Technology Stack
Heading: "Technology Stack". Intro: "A comprehensive toolkit for building robust, scalable backend systems and modern web applications".

| Category | Items |
|---|---|
| Backend Languages | Golang, Python, PHP |
| Frontend Technologies | JavaScript, TypeScript |
| Databases | PostgreSQL, MySQL, MongoDB, GraphQL |
| DevOps & Tools | Docker, Kubernetes, Redis, Git |
| Web Servers | Nginx, Caddy, Apache |
| Development Tools | Postman, Podman, Linux CLI, Figma, Jira |

Components: `Card` per category, `Badge` per tool (grey). Grid 1 col → 2 (`sm`) → 3 (`lg`).
One deliberate change: the original emoji category icons (🔧 🎨 🗄️ ⚙️ 🌐 🛠️) become Lucide icons (`Terminal`, `Palette`, `Database`, `Settings`, `Globe`, `Wrench`) for the premium look. Say if you want the emoji kept.

### 4.4 Notable Projects
Six projects, titles verbatim, each with a thumbnail and a clickable card:

1. Scenic Pay - Payment Gateway System
2. AFEXPay - Payment Settlement Platform
3. CCI Church Attendance API Server
4. Sport Prediction App (OneTruChamp)
5. Sipstory - AI Social Media Management
6. CLI Server Monitoring Tool
7. Clooper.com ( A business Travel Management Platform)
8. Remex (A compliance and tax management platform for businesses)
9. Cudie - An alternative payment solution for individuals
10. Saka - An AI agent for legal support and research
11. Cicada - A dMRV platform for climate and sustainability reporting
12. NGDetailing portfolio website
13. Lix Energy - A renewable energy solutions marketplace


- Card: `Card` + `AspectRatio` 16:10 thumbnail (`enhanced:img`, `sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"`), title, `Badge` tags, arrow icon.
- The whole card is one `<a>` (`rel="noopener noreferrer"`, `target="_blank"` for external, `aria-label="Open {title}"`). Hover: image scale, title underline, arrow slides in. Visible focus ring.
- Display-only split of titles at " - " (name in Anton, subtitle in Barlow Condensed); stored text is unchanged.
- Thumbnails: use existing images if any; otherwise capture 1600×1000 screenshots with `scripts/shots.ts` (Playwright). Fallback: `#d8dadd` block with title.
- Grid: 1 → 2 → 3 columns.
- **Placeholder descriptions (you will edit these in code):** each project gets
  `description: "Project description coming soon."` and `tags: []` in `src/lib/data/projects.ts`. The card hides the tag row when `tags` is empty, so nothing breaks. A `// TODO: add description` comment marks each entry.
- Placeholder links and images: `href: "#"` and `image: "/projects/placeholder.svg"` (grey `#d8dadd` block with the project title in Anton) until real ones are added.

### 4.5 My Vision & Philosophy (likely the "About" anchor)
Intro: "As a backend developer with expertise in payment systems and scalable architectures, I believe technology should empower businesses to achieve their goals efficiently and securely."

| Title | Text |
|---|---|
| Precision & Performance | Every line of code serves a purpose. I believe in writing clean, efficient backend systems that scale seamlessly with business growth. |
| Security First | Building secure payment systems and APIs requires unwavering attention to security. I implement robust authentication and data protection from the ground up. |
| Innovation Through Simplicity | Complex problems require elegant solutions. I focus on creating maintainable architectures that solve real business challenges. |
| Continuous Evolution | Technology evolves rapidly. I stay ahead by constantly learning new tools and methodologies to deliver cutting-edge solutions. |

Status tags kept: **System Online**, **Secure & Scalable** (small `Badge`s; "System Online" may use a tiny grey dot, no orange).
Components: `Card` (borderless, hairline-separated), `Badge`. Numbered 01–04 in Anton as grey `#d8dadd` large numerals.

### 4.6 Proven Track Record
Heading "Proven Track Record"; intro "Numbers that speak to the quality and reliability of my work".

| Stat | Label |
|---|---|
| 50+ | Happy Clients |
| 75+ | Projects Completed |
| 5 | Years Experience |
| 99% | Uptime Guarantee |

Huge Anton numerals in `#2b2d31`, labels in Barlow Condensed `#5a6068`; 2×2 on mobile, 4 across on desktop; separated by hairlines. No count-up animation unless reduced-motion is off.

### 4.7 Client Testimonials
Heading "Client Testimonials"; intro "Don't just take my word for it. Here's what clients and colleagues say about working with me."

| Quote | Initials | Name | Role |
|---|---|---|---|
| "Seun's expertise in backend development is exceptional. His work on our payment gateway system was flawless, handling millions of transactions with zero downtime." | SJ | Sarah Johnson | CTO, TechStart Inc |
| "Working with Seun on AFEXPay was a game-changer. His deep understanding of payment settlement systems and attention to security made our platform rock-solid." | MC | Michael Chen | Product Manager, AFEX |
| "Seun developed the AI-powered backend for our social media management platform. His innovative approach and technical excellence exceeded all our expectations." | VD | Victoria Daniel | Founder, Sipstory |
| "The sport prediction application Seun built for the US market handles massive data loads effortlessly. His scalable architecture design is truly impressive." | TA | Tom Stanley | UI/UX Designer, OneTruChamp |
| "Seun's CLI monitoring tool has become an essential part of our server management workflow. It's elegant, powerful, and saves us hours of manual work daily." | AK | Alex Kumar | Infrastructure Manager |

Components: `Carousel` (swipe on mobile, one per view; 2–3 across on desktop), `Card`, `Avatar` with initials fallback. Quote in Inter 18–20px `#2b2d31`; attribution in Barlow Condensed uppercase `#5a6068`; large quote mark in `#d8dadd`. All text copied in full.

### 4.8 Contact
Heading "Let's Work Together". Body: "Ready to build something amazing? I'm always open to discussing new opportunities and challenging projects. Let's turn your ideas into reality."

- **Send Me a Message** form: Name, Email, Subject, Message, **Send Message** button (the section's single orange element). On submit it opens the visitor's email client with the message prefilled to `seun@adeniyi.com` (§6).
- **Get In Touch:** Email `seun@adeniyi.com`; Phone (both numbers, §8); Location "Abuja, Nigeria".
- **Quick Actions:** "Send WhatsApp Message" (opens WhatsApp with the prefilled message, §8), "Send Email Directly" (opens the email client, §6).
- Components: `Form`, `Input`, `Textarea`, `Label`, `Button`, `Sonner`, `Card`, `Separator`. Two columns on desktop (form left, details right), stacked on mobile.

### 4.9 Newsletter
Heading "Stay Updated with My Journey". Body: "Get insights into backend development, payment systems architecture, and updates on my latest projects. No spam, just valuable content."
Email input + **Subscribe** button; three feature tags: Technical insights, Project updates, Industry trends.
Components: `Input`, `Button`, `Badge`, `Sonner`. Grey button (orange is already used by the Contact CTA in the same screen range).

### 4.10 Footer
- Brand: "Seun Adeniyi" / "Senior Backend Developer specializing in scalable systems, payment gateways, and robust API architectures."
- Quick Links: About, Tech Stack, Projects, Testimonials, Contact
- Services: Backend API Development, Payment System Integration, Database Architecture, System Optimization, Technical Consulting, Code Review & Auditing
- Contact: `seun@adeniyi.com`, `+234 8055457495`, Abuja, Nigeria
- Social icons: LinkedIn, GitHub, Twitter/X (URLs in §1)
- © 2026 Seun Adeniyi. All rights reserved. (Privacy Policy and Terms of Service links removed.)
- Components: `Separator`, `Button` (ghost icon). Four columns on desktop, stacked on mobile.

---

## 5. Data files

```
src/lib/data/
  site.ts            # name, title, hero copy, nav, stats, vision items, services
  stack.ts           # 6 categories + tools
  projects.ts        # { slug, title, description?, tags?, image, href, external }
  testimonials.ts    # { quote, initials, name, role }
  links.ts           # single source of truth, see below
```

```ts
// src/lib/data/links.ts
export const links = {
  github: "https://github.com/pipdaniels",
  linkedin: "https://linkedin.com/in/seundeniyi",
  twitter: "https://twitter.com/seun_climate",
  email: "seun@adeniyi.com",
  phoneContact: "+234 9138328927",
  phoneFooter: "+234 8055457495",
  whatsapp: "https://wa.me/2349138328927",
  cv: "/cv/Seun-Adeniyi-CV.pdf" // placeholder path
};
```

`links.ts` feeds header, hero, contact, newsletter text and footer so nothing drifts.

---

## 6. Logic retained

1. **Contact form, opens the email client (no backend):**
   - Client-side only: `sveltekit-superforms` in SPA mode with a `zod` schema (name, valid email, subject, message ≤ 1500 characters so the `mailto:` URL stays within client limits).
   - `onUpdate` builds and opens:
     ```ts
     const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
     window.location.href =
       `mailto:seun@adeniyi.com?subject=${encodeURIComponent(subject)}` +
       `&body=${encodeURIComponent(body)}`;
     ```
   - `Sonner` toast: "Opening your email client…" with a "Copy email address" action as a fallback for visitors with no mail app configured.
   - Nothing is stored or sent from the server, so no API keys or env secrets are needed and the site can be fully prerendered (`export const prerender = true`).
2. **"Send Email Directly":** plain `mailto:seun@adeniyi.com` link styled as a `Button`.
3. **"Send WhatsApp Message"**: `https://wa.me/2349138328927?text=<encoded message from §8>`, new tab, `rel="noopener noreferrer"`.
4. **Newsletter:** unresolved (see §1, item 3); keep the same behavior as the current site, or switch to `mailto:` if you prefer.
5. **Social links and Download CV:** from `links.ts`; CV uses a native `download` attribute.
6. **Nav anchors:** smooth scroll to `#about`, `#tech-stack`, `#projects`, `#testimonials`, `#contact`, with `scroll-margin-top` for the sticky header.

---

## 7. Mobile-first and responsive spec

- Build at 360px first; enhance at `sm 640`, `md 768`, `lg 1024`, `xl 1280`.
- Tap targets ≥ 44px; form inputs 16px font minimum (prevents iOS zoom).
- Hero type via `clamp`; no overflow at 320px (long words stacked one per line).
- Nav: `Sheet` drawer under `md`; `NavigationMenu` at `md+`.
- Responsive `srcset`; lazy-load below the fold; `dvh` instead of `vh`.
- Test: iPhone SE, iPhone 15, Pixel 7, iPad portrait, 1280 and 1920 desktop.

---

## 8. Contact details and WhatsApp message

| Where | Value |
|---|---|
| Email (everywhere) | seun@adeniyi.com |
| Phone, Contact section | +234 9138328927 |
| Phone, Footer | +234 8055457495 |
| Location | Abuja, Nigeria |

**WhatsApp number:** the Contact-section number (`2349138328927`); change in `links.ts` if you prefer the footer number.

**Prefilled message:**

> Hello Seun, I came across your portfolio and I'd like to discuss a project with you. Are you available for a quick chat?

```ts
const waText = "Hello Seun, I came across your portfolio and I'd like to discuss a project with you. Are you available for a quick chat?";
const waHref = `${links.whatsapp}?text=${encodeURIComponent(waText)}`;
```

---

## 9. Build phases

| Phase | Work | Output |
|---|---|---|
| 0 | Confirm remaining items in §1 (CV file, project links, newsletter) | Inventory closed |
| 1 | `pnpm dlx sv create`, pnpm enforcement (§2.1), Tailwind v4, `pnpm dlx shadcn-svelte init`, tokens, fonts | Themed empty app |
| 2 | Populate `src/lib/data/*` from §4 verbatim | Typed content |
| 3 | Header (mobile `Sheet`), footer, layout shell | Responsive shell |
| 4 | Hero + Vision (locks type system and accent bar) | Design baseline for review |
| 5 | Tech Stack, Stats | Static sections done |
| 6 | Projects with thumbnails and clickable cards | 6/6 live |
| 7 | Testimonials carousel | 5/5 verified against §4.7 |
| 8 | Contact form (`mailto:`), "Send Email Directly", WhatsApp, newsletter | Logic parity |
| 9 | SEO (title "SEUN ADENIYI | Golang Developer" reviewed against the new "Senior Backend Developer" positioning), OG image, sitemap, a11y pass | Lighthouse targets |
| 10 | Vercel preview, side-by-side parity check with the old site, domain swap | Production |

---

## 10. Acceptance criteria

- [ ] All 10 sections present with text identical to §4.
- [ ] 5/5 testimonials and 6/6 projects present; every project has a thumbnail and a working link.
- [ ] LinkedIn, GitHub, Twitter/X, email and WhatsApp links match §1 and §8.
- [ ] Contact form and "Send Email Directly" open the email client with the correct recipient, subject and body.
- [ ] "Send WhatsApp Message" opens WhatsApp with the §8 message.
- [ ] Footer has no Privacy Policy or Terms of Service links.
- [ ] Project cards render with placeholder descriptions and thumbnails without errors.
- [ ] Only `pnpm-lock.yaml` exists; `pnpm install --frozen-lockfile` passes in CI and on Vercel.
- [ ] Only shadcn-svelte components for UI; no other UI libraries.
- [ ] Palette limited to the five hex values; orange on ≤ 2 shapes per viewport.
- [ ] No horizontal scroll from 320px up; tap targets ≥ 44px.
- [ ] Lighthouse mobile: Performance ≥ 90; Accessibility, Best Practices, SEO ≥ 95.