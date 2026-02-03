import Link from "next/link";
import { ScrollAnimator } from "@/components/ScrollAnimator";

export const metadata = {
  title: "International Client Services — 9D Capital | Your Embassy on Wall Street",
  description: "For international families navigating the intersection of global wealth and American opportunity. Cross-border tax, estate, and investment expertise. CRD #308524.",
};

export default function InternationalPage() {
  return (
    <>
      <ScrollAnimator />

      {/* Hero — Most impressive on the site */}
      <section className="bg-primary-dark pt-[72px] pattern-marble-dark relative">
        {/* Subtle architectural pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#C5943F 1px, transparent 1px), linear-gradient(90deg, #C5943F 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="max-w-content mx-auto px-6 lg:px-12 py-20 md:py-28 relative z-10">
          <p className="eyebrow hero-animate hero-animate-delay-1">Your Embassy on Wall Street</p>
          <h1 className="mt-4 font-serif font-light text-[40px] md:text-[56px] lg:text-[64px] text-parchment leading-[1.12] tracking-[-0.02em] hero-animate hero-animate-delay-2 max-w-3xl">
            For those who live
            <br />
            between worlds.
          </h1>
          <p className="mt-6 font-sans text-[18px] text-white/60 leading-relaxed max-w-[600px] hero-animate hero-animate-delay-3">
            For international families navigating the complex intersection of global wealth and American opportunity, 9D Capital exists at that crossroads — providing seamless access to U.S. capital markets with deep cross-border expertise.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6 hero-animate hero-animate-delay-4">
            <div className="flex items-center gap-2">
              <span className="text-gold text-[14px]">✦</span>
              <span className="font-sans text-[14px] text-white/50">Cross-Border Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold text-[14px]">✦</span>
              <span className="font-sans text-[14px] text-white/50">Multi-Jurisdiction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold text-[14px]">✦</span>
              <span className="font-sans text-[14px] text-white/50">Fiduciary Standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* Client Segments */}
      <section className="bg-parchment py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="text-center mb-10 animate-on-scroll">
            <p className="eyebrow">Who We Serve</p>
            <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-text-primary leading-[1.18]">
              International clients across
              <br />
              every walk of life.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Diplomatic Families",
                desc: "Financial planning for diplomats navigating unique tax implications, treaty considerations, and cross-jurisdictional wealth structuring.",
                icon: (
                  <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                  </svg>
                ),
              },
              {
                title: "Expatriates & Visa Holders",
                desc: "Comprehensive wealth management for professionals living and working across borders, with expertise in NRA, FATCA, and CRS compliance.",
                icon: (
                  <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                ),
              },
              {
                title: "International Business Owners",
                desc: "Integrated advisory for entrepreneurs operating across jurisdictions — connecting personal wealth strategy with global business interests.",
                icon: (
                  <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="7" width="20" height="14" rx="0" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                ),
              },
              {
                title: "Global Family Offices",
                desc: "Institutional-grade access to U.S. markets for family offices based in Asia, the Middle East, Europe, and beyond.",
                icon: (
                  <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
            ].map((segment, i) => (
              <div key={segment.title} className={`animate-on-scroll stagger-${i + 1} bg-marble border border-warm-sand p-8 relative`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{segment.icon}</div>
                  <div>
                    <h3 className="font-serif text-[22px] text-text-primary">{segment.title}</h3>
                    <p className="mt-2 font-sans text-[15px] text-text-secondary leading-[1.65]">{segment.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions of Expertise */}
      <section className="bg-obsidian py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="text-center mb-10 animate-on-scroll">
            <p className="eyebrow">Global Reach</p>
            <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-parchment leading-[1.18]">
              Regions of Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { region: "Asia", desc: "Greater China, Hong Kong, Singapore, Japan, Korea, Southeast Asia" },
              { region: "Middle East", desc: "Saudi Arabia, UAE, Qatar, Kuwait, Bahrain" },
              { region: "Europe", desc: "United Kingdom, Germany, Switzerland, France, Scandinavia" },
              { region: "Americas", desc: "New York headquarters, Latin America, Canada" },
            ].map((r, i) => (
              <div key={r.region} className={`animate-on-scroll stagger-${i + 1} border border-white/10 p-6 relative`}>
                {/* Subtle gold accent line at top */}
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-gold/40" />
                <h3 className="font-serif text-[22px] text-gold">{r.region}</h3>
                <p className="mt-2 font-sans text-[14px] text-white/50 leading-[1.65]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-parchment py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <p className="eyebrow">Capabilities</p>
              <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-text-primary leading-[1.18]">
                Cross-border expertise,
                <br />
                institutional depth.
              </h2>
              <div className="mt-4 w-[60px] h-[1px] bg-gold" />
              <p className="mt-4 font-sans text-[17px] text-text-secondary leading-[1.65] max-w-[480px]">
                Navigating the intersection of multiple tax regimes, legal jurisdictions, and regulatory frameworks requires specialized knowledge. Our team brings that expertise to every engagement.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Cross-border tax & estate planning",
                "Multi-jurisdiction regulatory compliance",
                "NRA, FATCA, and CRS coordination",
                "International trust & entity structuring",
                "Multi-currency investment strategies",
                "Treaty-based tax optimization",
                "Repatriation & expatriation planning",
                "International custodian coordination",
              ].map((cap, i) => (
                <div key={cap} className={`animate-on-scroll stagger-${i + 1} flex items-center gap-4 py-2.5 border-b border-warm-sand`}>
                  <span className="text-gold text-[14px]">✦</span>
                  <span className="font-sans text-[15px] text-text-primary">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scenario Vignettes */}
      <section className="bg-warm-sand py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="text-center mb-10 animate-on-scroll">
            <p className="eyebrow">Client Scenarios</p>
            <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-text-primary leading-[1.18]">
              Real situations.
              <br />
              Real solutions.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Hong Kong → New York",
                desc: "A family relocating from Hong Kong needed coordinated U.S. investment accounts, cross-border estate planning, and guidance on NRA tax obligations — all before their arrival.",
              },
              {
                title: "Multi-Generational Planning",
                desc: "An international family office with members across three countries required a unified wealth strategy spanning different tax treaties, succession laws, and cultural expectations.",
              },
              {
                title: "Executive Relocation",
                desc: "A corporate executive transferring from Dubai to New York needed equity compensation planning, U.S. tax strategy, and a comprehensive wealth management framework from day one.",
              },
            ].map((v, i) => (
              <div key={v.title} className={`animate-on-scroll stagger-${i + 1} bg-marble border border-warm-sand p-8 relative`}>
                {/* Gold number indicator */}
                <div className="font-serif font-light text-[24px] text-gold/40 leading-none mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-[22px] text-text-primary">{v.title}</h3>
                <p className="mt-3 font-sans text-[15px] text-text-secondary leading-[1.65]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Embassy Experience */}
      <section className="bg-primary-dark py-14 md:py-16 pattern-marble-dark">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="text-center mb-10 animate-on-scroll">
            <p className="eyebrow">The Embassy Experience</p>
            <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-parchment leading-[1.18]">
              What you can expect.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Dedicated Point of Contact", desc: "A single relationship manager who understands your complete financial picture and coordinates across all disciplines." },
              { title: "Cultural Understanding", desc: "Advisors who speak your language — literally and figuratively — with deep experience serving clients from your region." },
              { title: "Seamless U.S. Access", desc: "From account establishment to ongoing management, we handle the complexity of U.S. market access so you don't have to." },
            ].map((item, i) => (
              <div key={item.title} className={`animate-on-scroll stagger-${i + 1} border border-white/10 p-6`}>
                <div className="w-8 h-[2px] bg-gold mb-4" />
                <h3 className="font-serif text-[20px] text-parchment">{item.title}</h3>
                <p className="mt-2 font-sans text-[14px] text-white/50 leading-[1.65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12 text-center animate-on-scroll">
          <p className="eyebrow">The Concierge</p>
          <h2 className="mt-4 font-serif font-light text-[36px] md:text-[48px] text-parchment leading-[1.12]">
            Your embassy awaits.
          </h2>
          <p className="mt-4 font-sans text-[17px] text-white/60 max-w-lg mx-auto leading-[1.65]">
            Schedule a confidential consultation to discuss how 9D Capital can serve as your trusted presence on Wall Street.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block px-11 py-4 border border-gold text-gold font-sans font-semibold text-[13px] uppercase tracking-[0.1em] transition-all duration-300 hover:bg-gold hover:text-primary-dark"
          >
            Schedule with the Concierge
          </Link>
          <p className="mt-4 font-sans text-[13px] text-white/40">
            <a href="mailto:contact@9d.capital" className="hover:text-white/60 transition-colors">contact@9d.capital</a>
          </p>
        </div>
      </section>
    </>
  );
}
