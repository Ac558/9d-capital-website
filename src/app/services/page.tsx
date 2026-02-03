import Link from "next/link";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import { SERVICES, HOW_WE_WORK } from "@/lib/siteData";

export const metadata = {
  title: "Services — 9D Capital | Twelve Disciplines, One Strategy",
  description: "Twelve integrated service disciplines spanning wealth management, tax, estate, international, and advisory — all aligned to your goals. CRD #308524.",
};

export default function ServicesPage() {
  return (
    <>
      <ScrollAnimator />

      {/* Hero */}
      <section className="bg-primary-dark pt-[72px]">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-16 md:py-24">
          <p className="eyebrow hero-animate hero-animate-delay-1">Our Services</p>
          <h1 className="mt-4 font-serif font-light text-[40px] md:text-[56px] text-parchment leading-[1.12] tracking-[-0.02em] hero-animate hero-animate-delay-2">
            Twelve disciplines.
            <br />
            One integrated strategy.
          </h1>
          <p className="mt-6 font-sans text-[18px] text-white/60 leading-relaxed max-w-[580px] hero-animate hero-animate-delay-3">
            Institutional-grade financial solutions delivered with the attentiveness of a boutique practice — spanning wealth, tax, estate, and global advisory.
          </p>
        </div>
      </section>

      {/* Flagship Service Highlight */}
      <section className="bg-obsidian py-10">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-sans font-medium text-[11px] uppercase tracking-[0.12em] text-gold mb-2">Flagship Service</p>
              <h2 className="font-serif text-[28px] md:text-[36px] text-parchment leading-[1.18]">
                International Client Services
              </h2>
              <p className="mt-2 font-sans text-[16px] text-white/60 leading-[1.65] max-w-lg">
                Your Embassy on Wall Street — seamless access to U.S. capital markets with deep cross-border expertise for families living between worlds.
              </p>
            </div>
            <Link
              href="/international"
              className="flex-shrink-0 px-8 py-3 border border-gold text-gold font-sans font-semibold text-[13px] uppercase tracking-[0.1em] transition-all duration-300 hover:bg-gold hover:text-obsidian"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* 4×3 Service Tile Grid */}
      <section className="bg-warm-sand py-14 md:py-16 pattern-grid relative">
        <div className="max-w-content mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-10 animate-on-scroll">
            <p className="eyebrow">All Twelve Disciplines</p>
            <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-text-primary leading-[1.18]">
              A comprehensive suite of
              <br />
              integrated capabilities.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SERVICES.map((svc, i) => {
              const isInternational = i === 8;
              return (
                <div
                  key={svc.title}
                  className={`animate-on-scroll stagger-${Math.min(i + 1, 12)} group bg-marble border p-8 min-w-[240px] transition-all duration-[250ms] hover:bg-primary-dark ${
                    isInternational ? "border-gold" : "border-warm-sand"
                  }`}
                >
                  <div className="font-serif font-light text-[32px] text-gold leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="font-sans font-medium text-[14px] uppercase tracking-[0.06em] text-text-primary group-hover:text-parchment transition-colors duration-[250ms]">
                      {svc.title}
                    </span>
                    {isInternational && (
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    )}
                  </div>
                  <p className="mt-1 font-sans text-[12px] text-text-secondary group-hover:text-parchment/60 transition-colors duration-[250ms] leading-[1.5]">
                    {svc.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expanded Service Details */}
      <section className="bg-parchment py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="space-y-0">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className={`animate-on-scroll stagger-${Math.min(i + 1, 12)} border-b border-warm-sand py-8 first:pt-0 last:border-b-0`}
              >
                <div className="grid lg:grid-cols-[100px_1fr_1fr] gap-6 items-start">
                  {/* Number */}
                  <div className="font-serif font-light text-[40px] text-gold leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Title + Subtitle */}
                  <div>
                    <h2 className="font-serif text-[26px] text-text-primary leading-[1.3]">
                      {service.title}
                    </h2>
                    <p className="mt-1 font-sans text-[13px] text-gold uppercase tracking-[0.08em]">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description + Features */}
                  <div>
                    <p className="font-sans text-[15px] text-text-secondary leading-[1.65]">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span className="text-gold text-[12px] mt-1">✦</span>
                          <span className="font-sans text-[14px] text-text-secondary">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-warm-sand py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="text-center mb-10 animate-on-scroll">
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-text-primary leading-[1.18]">
              From discovery to stewardship.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-[30px] left-[calc(12.5%+30px)] right-[calc(12.5%+30px)] h-[1px] bg-gold/30" />

            {HOW_WE_WORK.map((step, i) => (
              <div key={step.title} className={`animate-on-scroll stagger-${i + 1} text-center`}>
                <div className="inline-flex items-center justify-center w-[60px] h-[60px] rounded-full border border-gold relative bg-warm-sand">
                  <span className="font-serif font-light text-[44px] text-gold leading-none">
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-sans font-medium text-[14px] uppercase tracking-[0.06em] text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 font-sans text-[14px] text-text-secondary leading-[1.65]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12 text-center animate-on-scroll">
          <p className="eyebrow">Get Started</p>
          <h2 className="mt-4 font-serif font-light text-[36px] md:text-[44px] text-parchment leading-[1.18]">
            Every journey begins with
            <br />
            a conversation.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block px-11 py-4 border border-gold text-gold font-sans font-semibold text-[13px] uppercase tracking-[0.1em] transition-all duration-300 hover:bg-gold hover:text-obsidian"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
