import Link from "next/link";
import Image from "next/image";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import { CredibilityBar } from "@/components/CredibilityBar";
import { CalendlyPopupLink } from "@/components/CalendlyPopupLink";

/* ============================================
   HOMEPAGE — 9D CAPITAL
   "The Embassy, Quietly" — Round 1 Improvements
   ============================================ */

const SERVICES_LIST = [
  { num: "01", name: "Wealth & Asset Management", slug: "wealth-management", desc: "Comprehensive portfolio oversight" },
  { num: "02", name: "Family Office Services", slug: "family-office", desc: "Unified family wealth management" },
  { num: "03", name: "Tax Planning & Advisory", slug: "tax-planning", desc: "Preserving more of what you earn" },
  { num: "04", name: "Legacy & Estate Planning", slug: "estate-planning", desc: "Securing your family's future" },
  { num: "05", name: "Private Markets Access", slug: "private-markets", desc: "Exclusive investment opportunities" },
  { num: "06", name: "Corporate Workplace Solutions", slug: "corporate", desc: "Executive benefits & equity" },
  { num: "07", name: "Outsourced CFO / FC", slug: "outsourced-cfo", desc: "Strategic financial leadership" },
  { num: "08", name: "Insurance & Risk Mgmt", slug: "insurance", desc: "Protecting what matters most" },
  { num: "09", name: "International Client Svcs", slug: "international", flagship: true, desc: "Your Embassy on Wall Street" },
  { num: "10", name: "Retirement Planning", slug: "retirement", desc: "Building financial independence" },
  { num: "11", name: "Philanthropic Advisory", slug: "philanthropic", desc: "Maximizing charitable impact" },
  { num: "12", name: "Business Owner Advisory", slug: "business-owner", desc: "From growth to transition" },
];

/* ─── Decorative SVG: Gold geometric accent ── */
function GoldAccentLine({ className = "" }: { className?: string }) {
  return (
    <svg className={`${className}`} width="120" height="2" viewBox="0 0 120 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="1" x2="40" y2="1" stroke="#C5943F" strokeWidth="1" />
      <circle cx="50" cy="1" r="1.5" fill="#C5943F" />
      <line x1="60" y1="1" x2="120" y2="1" stroke="#C5943F" strokeWidth="1" />
    </svg>
  );
}

/* ─── S2: HERO ─────────────────────────────── */
function Hero() {
  return (
    <section className="min-h-[58vh] md:min-h-[62vh] flex items-center bg-parchment texture-parchment pt-[72px] relative overflow-hidden">
      {/* Hero background image — Manhattan skyline at dusk */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/hero-main.jpg`}
          alt=""
          fill
          className="object-cover object-center"
          priority
          style={{ opacity: 1 }}
        />
      </div>
      {/* Gradient overlay for text readability over vivid hero image */}
      {/* No overlay — pure image */}
      {/* No atmosphere overlay — pure image */}
      <div className="max-w-content mx-auto w-full px-6 lg:px-12 py-8 relative z-10">
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-8 items-center">
          {/* Left Zone — Text */}
          <div className="lg:pl-[8vw]">
            <p className="eyebrow hero-animate hero-animate-delay-1">
              International Wealth Management
            </p>

            <h1 className="mt-4 font-serif font-light text-[40px] md:text-[52px] lg:text-[64px] text-white leading-[1.12] tracking-[-0.02em] hero-animate hero-animate-delay-1" style={{textShadow:'0 2px 20px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)'}}>
              Where Global Wealth
              <br />
              Finds Its Home
            </h1>

            <p className="mt-4 font-sans text-[18px] text-white/90 leading-relaxed max-w-[480px] hero-animate hero-animate-delay-2" style={{textShadow:'0 1px 12px rgba(0,0,0,0.6)'}}>
              For international families and cross-border professionals who need more than a financial advisor — they need a trusted partner who understands the complexity of global wealth.
            </p>

            <div className="mt-5 flex items-center gap-3 text-[15px] text-white/80 font-sans hero-animate hero-animate-delay-3" style={{textShadow:'0 1px 8px rgba(0,0,0,0.5)'}}>
              <span>Registered Investment Adviser</span>
              <span className="text-gold">·</span>
              <span>Fiduciary Standard</span>
              <span className="text-gold">·</span>
              <span>SEI Custody</span>
            </div>
          </div>

          {/* Right Zone — Audience Routing Cards */}
          <div className="flex flex-col gap-3 hero-animate hero-animate-delay-3">
            {[
              {
                title: "International Families",
                desc: "Cross-border wealth strategy for families across borders",
                href: "/international",
              },
              {
                title: "Corporate Executives",
                desc: "Equity compensation, exit planning & concentrated stock",
                href: "/who-we-serve/executives",
              },
              {
                title: "Business Owners & Family Offices",
                desc: "Succession, legacy & multi-generational planning",
                href: "/who-we-serve/business-owners",
              },
            ].map((card, i) => (
              <Link
                key={card.title}
                href={card.href}
                className="group flex items-start gap-4 bg-marble border border-warm-sand border-l-[3px] border-l-gold p-6 transition-all duration-[250ms] ease-out hover:bg-primary-dark hover:border-primary-dark"
                style={{ animationDelay: `${500 + i * 100}ms` }}
              >
                <span className="text-gold text-[16px] mt-0.5 transition-transform duration-[250ms] group-hover:translate-x-1.5 group-hover:text-gold">→</span>
                <div>
                  <p className="font-sans font-medium text-[17px] text-text-primary group-hover:text-parchment transition-colors duration-[250ms]">
                    {card.title}
                  </p>
                  <p className="mt-1 font-sans text-[14px] text-text-secondary group-hover:text-parchment/70 transition-colors duration-[250ms]">
                    {card.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── S3: CREDIBILITY BAR — Now a client component in @/components/CredibilityBar ── */

/* ─── S4: THE 9D DIFFERENCE ────────────────── */
function NineDDifference() {
  const features = [
    {
      title: "Your Embassy on Wall Street",
      body: "All of Wall Street's resources, one trusted entry point. We serve as your single point of institutional access.",
      accent: true,
    },
    {
      title: "Global Fluency",
      body: "Serving clients from Asia, Middle East, and beyond with cultural understanding and cross-border expertise.",
    },
    {
      title: "Fiduciary First",
      body: "Independent, conflict-free advice with open architecture and no proprietary products. Your interests, only.",
    },
  ];

  return (
    <section className="bg-parchment py-12 md:py-16 relative overflow-hidden">
      {/* Library background — subtle warmth */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/library.jpg`}
          alt=""
          fill
          className="object-cover object-center"
          style={{ filter: "sepia(15%) contrast(110%) brightness(90%)", opacity: 0.07 }}
        />
      </div>
      {/* Gold rule divider at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <GoldAccentLine />
      </div>
      <div className="max-w-content mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[40%_60%] gap-8 items-start">
          {/* Left Column */}
          <div className="animate-on-scroll">
            <p className="eyebrow">What Sets Us Apart</p>
            <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-text-primary leading-[1.18]">
              Boutique Service,
              <br />
              Institutional Strength
            </h2>
            <div className="mt-4 gold-rule-left" />
            <p className="mt-4 font-sans text-[17px] text-text-secondary leading-[1.65] max-w-[380px]">
              Your wealth deserves both: the personal attention of a boutique advisory firm and the institutional-grade infrastructure of Wall Street&apos;s finest.
            </p>
          </div>

          {/* Right Column — Feature Cards */}
          <div className="flex flex-col gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`animate-on-scroll stagger-${i + 1} bg-marble border border-warm-sand p-6 transition-all duration-300 hover:border-t-2 hover:border-t-gold relative ${
                  f.accent ? "border-t-2 border-t-gold" : ""
                }`}
              >
                <h3 className="font-serif text-[22px] text-text-primary">
                  {f.title}
                </h3>
                <p className="mt-2 font-sans text-[15px] text-text-secondary leading-[1.65]">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── S5: SERVICES — TWELVE DISCIPLINES ────── */
function ServicesGrid() {
  return (
    <section className="bg-warm-sand py-12 md:py-16 pattern-grid relative">
      <div className="max-w-content mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 animate-on-scroll">
          <p className="eyebrow">Our Services</p>
          <h2 className="mt-4 font-serif text-[32px] md:text-[44px] text-text-primary leading-[1.18]">
            Twelve disciplines.
            <br />
            One integrated strategy.
          </h2>
        </div>

        {/* 4×3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SERVICES_LIST.map((svc, i) => (
            <Link
              key={svc.slug}
              href={svc.flagship ? "/international" : "/services"}
              className={`animate-on-scroll stagger-${i + 1} group service-tile bg-marble border border-warm-sand p-8 min-w-[240px] ${
                svc.flagship ? "border-gold service-tile-flagship" : ""
              }`}
            >
              <div className="font-serif font-light text-[32px] text-gold leading-none">
                {svc.num}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="font-sans font-medium text-[14px] uppercase tracking-[0.06em] text-text-primary service-tile-label transition-colors duration-[250ms]">
                  {svc.name}
                </span>
                {svc.flagship && (
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── S6: INTERNATIONAL SPOTLIGHT ──────────── */
function InternationalSpotlight() {
  return (
    <section className="pattern-marble-dark py-20 md:py-[120px]">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* City skyline strip — 6 global markets */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12 animate-on-scroll">
          {[
            { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/nyse.jpg`, alt: "New York Stock Exchange facade", caption: "New York" },
            { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/london.jpg`, alt: "London skyline with Tower Bridge", caption: "London" },
            { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/paris.jpg`, alt: "Paris cityscape with Eiffel Tower", caption: "Paris" },
            { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/riyadh.jpg`, alt: "Riyadh skyline at sunset", caption: "Riyadh" },
            { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/singapore.jpg`, alt: "Singapore Marina Bay Sands aerial view", caption: "Singapore" },
            { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/shanghai.jpg`, alt: "Shanghai Pudong skyline at night", caption: "Shanghai" },
          ].map((city) => (
            <div key={city.caption} className="flex flex-col">
              <div className="relative h-[140px] md:h-[180px] overflow-hidden rounded">
                <Image
                  src={city.src}
                  alt={city.alt}
                  fill
                  className="object-cover"
                  style={{ filter: "sepia(12%) contrast(115%) brightness(85%)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <p className="absolute bottom-2 left-0 right-0 text-center font-sans text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-white/80 font-medium">
                  {city.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[55%_45%] gap-10 items-center">
          {/* Left Column */}
          <div className="animate-on-scroll">
            <p className="eyebrow !text-gold">Your Embassy on Wall Street</p>

            <h2 className="mt-4 font-serif font-light text-[32px] md:text-[44px] text-parchment leading-[1.18]">
              For Those Who Live
              <br />
              Between Worlds
            </h2>

            <p className="mt-6 font-sans text-[17px] text-white/70 leading-[1.65] max-w-[480px]">
              For international families navigating the complex intersection of global wealth and American opportunity, 9D Capital exists at that crossroads.
            </p>

            <ul className="mt-6 space-y-2">
              {[
                "Cross-border tax & estate planning",
                "Multi-jurisdiction compliance",
                "International client services",
                "Diplomatic & expatriate advisory",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold text-[15px] mt-0.5">✦</span>
                  <span className="font-sans text-[15px] text-white/80">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/international"
              className="mt-8 inline-block px-10 py-4 bg-gradient-to-b from-[#D4A843] via-[#C5943F] to-[#A67C35] text-primary-dark font-sans font-semibold text-[13px] uppercase tracking-[0.1em] transition-all duration-300 hover:from-[#E0BA55] hover:via-[#D4A843] hover:to-[#B88D3A] shadow-[0_2px_12px_rgba(197,148,63,0.35)] hover:shadow-[0_4px_20px_rgba(197,148,63,0.5)] rounded-sm"
            >
              Explore International Services →
            </Link>
          </div>

          {/* Right Column — Enhanced Global Network Map */}
          <div className="hidden lg:flex items-center justify-center animate-on-scroll">
            <svg viewBox="0 0 480 360" className="w-full max-w-[600px]" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Defs for glow effects */}
              <defs>
                <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#C5943F" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#C5943F" stopOpacity="0" />
                </radialGradient>
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Decorative double frame */}
              <rect x="8" y="8" width="464" height="344" stroke="#C5943F" strokeWidth="0.5" opacity="0.12" rx="2" />
              <rect x="16" y="16" width="448" height="328" stroke="#C5943F" strokeWidth="0.3" opacity="0.08" rx="1" />

              {/* Latitude lines — more refined */}
              {[70, 110, 150, 190, 230, 270].map((y) => (
                <path key={y} d={`M24,${y} Q240,${y - 8} 456,${y}`} stroke="#C5943F" strokeWidth="0.4" opacity="0.12" />
              ))}

              {/* Longitude lines */}
              {[72, 140, 208, 276, 344, 412].map((x) => (
                <path key={x} d={`M${x},24 Q${x + 2},180 ${x},336`} stroke="#C5943F" strokeWidth="0.4" opacity="0.1" />
              ))}

              {/* Refined continent shapes */}
              {/* North America */}
              <path d="M55,80 Q75,62 108,68 Q138,75 148,98 Q142,125 125,148 Q100,155 78,138 Q60,118 55,80Z" stroke="#C5943F" strokeWidth="0.7" opacity="0.18" fill="#C5943F" fillOpacity="0.04" />
              {/* Europe */}
              <path d="M205,60 Q228,52 252,62 Q262,78 258,98 Q240,108 222,100 Q208,88 205,60Z" stroke="#C5943F" strokeWidth="0.7" opacity="0.18" fill="#C5943F" fillOpacity="0.04" />
              {/* Middle East / Arabia */}
              <path d="M268,108 Q288,98 308,112 Q315,132 305,148 Q285,152 270,138 Q262,122 268,108Z" stroke="#C5943F" strokeWidth="0.7" opacity="0.18" fill="#C5943F" fillOpacity="0.04" />
              {/* Asia */}
              <path d="M320,58 Q358,48 395,65 Q412,88 408,118 Q392,148 362,155 Q332,150 318,128 Q308,98 320,58Z" stroke="#C5943F" strokeWidth="0.7" opacity="0.18" fill="#C5943F" fillOpacity="0.04" />
              {/* Africa hint */}
              <path d="M230,150 Q248,142 260,158 Q265,185 255,210 Q240,218 228,205 Q222,178 230,150Z" stroke="#C5943F" strokeWidth="0.5" opacity="0.1" fill="#C5943F" fillOpacity="0.02" />

              {/* Animated connection arcs from New York to each city */}
              {[
                { to: "240,72", ctrl: "180,40" },   /* → London */
                { to: "242,82", ctrl: "195,55" },    /* → Paris */
                { to: "290,112", ctrl: "220,75" },   /* → Riyadh */
                { to: "370,95", ctrl: "260,50" },    /* → Hong Kong */
                { to: "385,135", ctrl: "270,80" },   /* → Singapore */
                { to: "400,105", ctrl: "280,55" },   /* → Shanghai */
              ].map((arc, i) => (
                <g key={i}>
                  <path d={`M108,92 Q${arc.ctrl} ${arc.to}`} stroke="#C5943F" strokeWidth="0.6" opacity="0.25" strokeDasharray="6,4">
                    <animate attributeName="strokeDashoffset" values="0;-20" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                  </path>
                </g>
              ))}

              {/* City nodes with enhanced glow */}
              {[
                { cx: 108, cy: 92, label: "New York", lx: 58, ly: 112, primary: true },
                { cx: 240, cy: 72, label: "London", lx: 246, ly: 68, primary: false },
                { cx: 242, cy: 82, label: "Paris", lx: 248, ly: 95, primary: false },
                { cx: 290, cy: 112, label: "Riyadh", lx: 296, ly: 108, primary: false },
                { cx: 370, cy: 95, label: "Hong Kong", lx: 376, ly: 90, primary: false },
                { cx: 385, cy: 135, label: "Singapore", lx: 365, ly: 153, primary: false },
                { cx: 400, cy: 105, label: "Shanghai", lx: 406, ly: 100, primary: false },
              ].map((city) => (
                <g key={city.label}>
                  {/* Outer pulse glow */}
                  <circle cx={city.cx} cy={city.cy} r={city.primary ? 18 : 12} fill="url(#goldGlow)">
                    <animate attributeName="r" values={city.primary ? "14;20;14" : "9;14;9"} dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
                  </circle>
                  {/* Mid ring */}
                  <circle cx={city.cx} cy={city.cy} r={city.primary ? 8 : 5.5} fill="none" stroke="#C5943F" strokeWidth="0.5" opacity="0.25" />
                  {/* Core dot */}
                  <circle cx={city.cx} cy={city.cy} r={city.primary ? 4.5 : 3} fill="#C5943F" opacity={city.primary ? 1 : 0.85} filter="url(#softGlow)" />
                  {/* City label */}
                  <text x={city.lx} y={city.ly} fill="#C5943F" fontSize={city.primary ? "10" : "8.5"} fontFamily="DM Sans, sans-serif" opacity={city.primary ? 0.8 : 0.55} fontWeight={city.primary ? "600" : "500"} letterSpacing="0.06em">
                    {city.label}
                  </text>
                </g>
              ))}

              {/* Compass rose — bottom right */}
              <g transform="translate(430,300)" opacity="0.2">
                <circle cx="0" cy="0" r="12" stroke="#C5943F" strokeWidth="0.4" fill="none" />
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#C5943F" strokeWidth="0.5" />
                <line x1="-10" y1="0" x2="10" y2="0" stroke="#C5943F" strokeWidth="0.5" />
                <polygon points="0,-10 -2,-4 2,-4" fill="#C5943F" opacity="0.6" />
                <text x="-3" y="-14" fill="#C5943F" fontSize="7" fontFamily="DM Sans, sans-serif" fontWeight="600">N</text>
              </g>

              {/* Title — subtle */}
              <text x="240" y="330" fill="#C5943F" fontSize="8" fontFamily="DM Sans, sans-serif" opacity="0.25" textAnchor="middle" letterSpacing="0.15em" fontWeight="500">
                GLOBAL NETWORK
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── S7: OUR APPROACH ─────────────────────── */
function OurApproach() {
  const steps = [
    { num: "01", title: "Discovery & Consultation", desc: "We listen before we advise. Understanding your complete financial life comes first." },
    { num: "02", title: "Strategy Development", desc: "A comprehensive plan built around your situation — across jurisdictions, tax regimes, and generations." },
    { num: "03", title: "Implementation & Execution", desc: "Coordinated deployment across custodians, tax, legal, and insurance. All 12 disciplines aligned." },
    { num: "04", title: "Ongoing Monitoring & Review", desc: "Your strategy evolves as your life does. Regular reviews ensure continuous alignment." },
  ];

  return (
    <section className="bg-parchment py-12 md:py-16 relative overflow-hidden">
      {/* Fountain pen background — subtle warmth */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/fountain-pen.jpg`}
          alt=""
          fill
          className="object-cover object-center"
          style={{ filter: "sepia(15%) contrast(110%) brightness(90%)", opacity: 0.06 }}
        />
      </div>
      {/* Gold rule divider at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <GoldAccentLine />
      </div>
      <div className="max-w-content mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 animate-on-scroll">
          <p className="eyebrow">Our Approach</p>
          <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-text-primary leading-[1.18]">
            Discovery to stewardship.
            <br />
            Four phases, one relationship.
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[30px] left-[calc(12.5%+30px)] right-[calc(12.5%+30px)] h-[1px] bg-gold/30" />

          {steps.map((step, i) => (
            <div key={step.num} className={`animate-on-scroll stagger-${i + 1} text-center md:text-center`}>
              {/* Step number in circle */}
              <div className="inline-flex items-center justify-center w-[60px] h-[60px] rounded-full border border-gold relative bg-parchment">
                <span className="font-serif font-light text-[44px] text-[#A07D2E] leading-none" style={{ letterSpacing: "-0.02em" }}>
                  {step.num}
                </span>
              </div>
              <h3 className="mt-4 font-sans font-medium text-[15px] uppercase tracking-[0.06em] text-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 font-sans text-[15px] text-text-secondary leading-[1.65]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── S8: CONCIERGE CTA ────────────────────── */
function ConciergeCTA() {
  return (
    <section className="bg-obsidian py-14 md:py-20">
      <div className="max-w-content mx-auto px-6 lg:px-12 text-center">
        <div className="animate-on-scroll">
          <p className="eyebrow !text-gold">The Concierge</p>

          <h2 className="mt-4 font-serif font-light text-[36px] md:text-[48px] text-parchment leading-[1.12]">
            The door is open.
          </h2>

          <p className="mt-4 font-sans text-[17px] text-white/60 max-w-lg mx-auto leading-[1.65]">
            Schedule a confidential consultation.
            <br />
            No obligation. No pressure. Just clarity.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block px-11 py-4 bg-gradient-to-b from-[#D4A843] via-[#C5943F] to-[#A67C35] text-primary-dark font-sans font-semibold text-[13px] uppercase tracking-[0.1em] transition-all duration-300 hover:from-[#E0BA55] hover:via-[#D4A843] hover:to-[#B88D3A] shadow-[0_2px_12px_rgba(197,148,63,0.4)] hover:shadow-[0_4px_20px_rgba(197,148,63,0.55)] rounded-sm"
          >
            Request a Consultation
          </Link>

          {/* Calendly popup — Sam: update URL in CalendlyPopupLink.tsx */}
          <CalendlyPopupLink />

          <p className="mt-4 font-sans text-[13px] text-white/55">
            Or reach us directly:
            <br />
            <a href="mailto:contact@9d.capital" className="hover:text-white/60 transition-colors">contact@9d.capital</a> · <a href="tel:+12127293498" className="hover:text-white/60 transition-colors">(212) 729-3498</a>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE EXPORT ──────────────────────────── */
export default function HomePage() {
  return (
    <>
      <ScrollAnimator />
      <Hero />
      <CredibilityBar />
      <NineDDifference />
      <ServicesGrid />
      <InternationalSpotlight />
      <OurApproach />
      <ConciergeCTA />
    </>
  );
}
