# 9D Capital Website — Complete Build Playbook
## Lessons Learned & Execution Guide (Feb 3, 2026)

---

## 1. WHAT WE BUILT

**Site:** 9D Capital — Wealth management firm website
**Stack:** Next.js 14 + Tailwind CSS + TypeScript
**Hosting:** GitHub Pages (static export)
**Repo:** https://github.com/Ac558/9d-capital-website
**Live:** https://ac558.github.io/9d-capital-website/

### Pages Built:
| Page | Route | Key Sections |
|------|-------|-------------|
| Homepage | `/` | Hero, About preview, Services grid, Global presence, Insights, CTA |
| About | `/about` | Mission, Heritage, Values, Leadership philosophy |
| Services | `/services` | Wealth Management, Family Office, Investment Advisory, etc. |
| Who We Serve | `/who-we-serve` | HNW Individuals, Family Offices, Institutions, etc. |
| International | `/international` | Global offices, cross-border capabilities |
| Insights | `/insights` | Market commentary, research articles |
| Team | `/team` | Leadership profiles |
| Contact | `/contact` | Office locations, contact form, map |
| Client Login | `/client-login` | Portal access |
| Privacy/Terms/Disclosures | `/privacy`, `/terms`, `/disclosures` | Legal pages |

### Components Created:
- `Header.tsx` — Sticky nav, backdrop-blur, gold CTA button
- `Footer.tsx` — Dark bg, multi-column, legal disclaimer
- `ScrollAnimator.tsx` — Intersection Observer fade-in animations
- `CredibilityBar.tsx` — "$X.XB+ AUM | XX+ Years | XX Offices" ticker
- `CountUp.tsx` — Animated number counter
- `CalendlyPopupLink.tsx` — Calendly scheduling integration

---

## 2. DESIGN DNA — What Sam Approved

### Color Palette (FINAL — DO NOT CHANGE):
```
Primary Background: #0A0A0A (near-black)
Secondary Background: #111111
Card Background: #1A1A1A
Gold Accent: #C5943F (primary CTA, highlights)
Gold Hover: #D4A74A
Text Primary: #FFFFFF
Text Secondary: #999999
Text Muted: #666666
Border: rgba(197,148,63,0.2) (gold at 20% opacity)
```

### Typography:
- **Headings:** `Playfair Display` (serif) — elegant, institutional
- **Body:** `Inter` (sans-serif) — clean, modern
- **Heading sizes:** Hero 4.5rem, H1 3rem, H2 2.25rem, H3 1.5rem
- **Body size:** 1.125rem (18px)
- **Line height:** 1.7 for body text
- **Letter spacing:** -0.02em for headings, normal for body

### Layout Rules:
- Max content width: 1280px (max-w-7xl)
- Section padding: py-24 (desktop), py-16 (mobile)
- Card style: bg-[#1A1A1A] border border-white/10, hover:border-[#C5943F]/40
- Rounded corners: rounded-xl for cards, rounded-full for buttons
- Grid: 3-column on desktop, 1-column mobile

### Hero Section Pattern:
```
- Full viewport height (min-h-screen)
- Background image with dark overlay (bg-black/60)
- Centered content
- Serif heading (Playfair Display, 4.5rem)
- Gold accent line (w-24 h-[2px] bg-[#C5943F])
- Subtitle in sans-serif
- CTA button: gold border, transparent bg, hover fills gold
```

### Animation Pattern:
```tsx
// ScrollAnimator component wraps sections
// Uses Intersection Observer
// Starts: opacity-0, translateY(30px)
// Animates to: opacity-1, translateY(0)
// Duration: 800ms, ease-out
// Stagger children with delay prop
```

### Image Treatment:
- Hero images: Full bleed with gradient overlays
- City photos: Grayscale with gold border on hover
- All images: `object-cover` for consistent aspect ratios
- Lazy loading for below-fold images, `priority` for hero

---

## 3. CRITICAL TECHNICAL LESSONS

### GitHub Pages Deployment (Static Export):

**next.config.mjs pattern:**
```javascript
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGitHubPages ? "/REPO-NAME" : "",
  assetPrefix: isGitHubPages ? "/REPO-NAME/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/REPO-NAME" : "",
  },
};
```

**⚠️ CRITICAL BUG:** Next.js `<Image>` component does NOT automatically apply `basePath` in static export mode with `unoptimized: true`. You MUST manually prefix image paths:
```tsx
// WRONG — images will 404 on GitHub Pages:
<Image src="/images/hero.jpg" ... />

// CORRECT — use env var:
<Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/hero.jpg`} ... />
```

**GitHub Actions workflow (.github/workflows/deploy.yml):**
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [master]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

**GitHub Pages setup:**
1. Go to repo Settings → Pages
2. Source: GitHub Actions (NOT "Deploy from a branch")
3. The workflow handles everything

### Link Handling:
All `<Link>` components automatically get basePath prepended. No manual fix needed for links.

### Tailwind + Next.js Static Export:
- CSS works fine with static export
- Google Fonts: Import in `layout.tsx` using `next/font/google`
- No API routes possible (static only)

---

## 4. MISTAKES MADE & HOW TO AVOID

### Mistake 1: Images not loading on GitHub Pages
- **Cause:** `<Image>` component doesn't prepend basePath in static export
- **Fix:** Always use `process.env.NEXT_PUBLIC_BASE_PATH` prefix
- **Prevention:** Create a helper function `getAssetPath(path)` from day 1

### Mistake 2: Vercel deployment struggles
- **Cause:** Tried Vercel first, ran into config issues
- **Fix:** GitHub Pages is simpler for static sites, free, reliable
- **Prevention:** For static sites, default to GitHub Pages

### Mistake 3: Multiple design iterations wasting time
- **Cause:** Agent generated designs that didn't match institutional standards
- **Fix:** Lock down design DNA early (colors, fonts, spacing) and enforce strictly
- **Prevention:** Use this playbook's design system as the starting template

### Mistake 4: Background filter effects causing performance issues
- **Cause:** Heavy CSS filters on background images
- **Fix:** Removed filters, used pre-processed images
- **Prevention:** Keep hero images simple — dark overlay only, no CSS filters

### Mistake 5: Lack of content structure upfront
- **Cause:** Content was scattered, not organized before build
- **Fix:** Created content/ directory with all page copy
- **Prevention:** Always start with content/ directory organized BEFORE coding

---

## 5. EXECUTION CHECKLIST (For Future Builds)

### Phase 1: Setup (30 min)
- [ ] Create Next.js project: `npx create-next-app@14 --typescript --tailwind --app`
- [ ] Set up GitHub repo
- [ ] Add deploy workflow (.github/workflows/deploy.yml)
- [ ] Configure next.config.mjs with basePath and NEXT_PUBLIC_BASE_PATH
- [ ] Add Google Fonts in layout.tsx
- [ ] Create globals.css with base styles
- [ ] Test deploy to GitHub Pages (blank site)

### Phase 2: Content (1 hour)
- [ ] Create content/ directory
- [ ] Write all page copy (home, about, services, contact, etc.)
- [ ] Collect/generate all images → public/images/
- [ ] Write legal pages (privacy, terms, disclosures)

### Phase 3: Components (1 hour)
- [ ] Header.tsx (sticky nav, mobile menu)
- [ ] Footer.tsx (multi-column, legal links)
- [ ] ScrollAnimator.tsx (fade-in on scroll)
- [ ] Any page-specific components

### Phase 4: Pages (2 hours)
- [ ] Homepage (hero + all sections)
- [ ] About page
- [ ] Services page
- [ ] Contact page
- [ ] All remaining pages

### Phase 5: QA & Deploy (30 min)
- [ ] Test all images load (check basePath!)
- [ ] Test mobile responsive (375px, 768px, 1024px, 1440px)
- [ ] Test all links work
- [ ] Lighthouse audit (target 90+)
- [ ] Push to master → auto-deploy
- [ ] Verify live site

---

## 6. REUSABLE CODE SNIPPETS

### Gold CTA Button:
```tsx
<Link href="/contact"
  className="inline-block px-8 py-3 border-2 border-[#C5943F] text-[#C5943F] 
             rounded-full font-semibold tracking-wider uppercase text-sm
             hover:bg-[#C5943F] hover:text-black transition-all duration-300">
  Schedule Consultation
</Link>
```

### Section Heading:
```tsx
<div className="text-center mb-16">
  <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
    Section Title
  </h2>
  <div className="w-24 h-[2px] bg-[#C5943F] mx-auto mb-6" />
  <p className="text-[#999] text-lg max-w-2xl mx-auto">
    Subtitle text goes here
  </p>
</div>
```

### Service Card:
```tsx
<div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-8
                hover:border-[#C5943F]/40 transition-all duration-300 group">
  <div className="text-[#C5943F] text-3xl mb-4">{icon}</div>
  <h3 className="font-playfair text-xl font-semibold text-white mb-3">
    {title}
  </h3>
  <p className="text-[#999] leading-relaxed">{description}</p>
</div>
```

### Dark Page Wrapper:
```tsx
<main className="bg-[#0A0A0A] text-white min-h-screen">
  {/* Hero */}
  <section className="relative min-h-[60vh] flex items-center justify-center">
    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/hero.jpg`}
           alt="" fill className="object-cover" priority />
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
        Page Title
      </h1>
      <div className="w-24 h-[2px] bg-[#C5943F] mx-auto" />
    </div>
  </section>
  {/* Content sections */}
</main>
```

---

## 7. FILE STRUCTURE REFERENCE

```
workspace/
├── .github/workflows/deploy.yml
├── next.config.mjs
├── tailwind.config.ts
├── package.json
├── public/
│   └── images/
│       ├── hero-main.jpg
│       ├── library.jpg
│       ├── nyse.jpg
│       ├── london.jpg
│       └── ... (city photos, section images)
├── src/
│   ├── app/
│   │   ├── layout.tsx (fonts, metadata, Header/Footer)
│   │   ├── page.tsx (homepage)
│   │   ├── globals.css
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── who-we-serve/page.tsx
│   │   ├── international/page.tsx
│   │   ├── insights/page.tsx
│   │   ├── team/page.tsx
│   │   ├── client-login/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── disclosures/page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollAnimator.tsx
│   │   ├── CredibilityBar.tsx
│   │   ├── CountUp.tsx
│   │   └── CalendlyPopupLink.tsx
│   └── lib/
│       └── basePath.ts
└── content/
    └── 9d-capital/ (all page copy as .txt files)
```

---

*This playbook was generated from the actual 9D Capital build session on Feb 3, 2026.*
*Follow this exactly for consistent, fast results.*
