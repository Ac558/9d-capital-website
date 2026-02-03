import Link from "next/link";
import { ScrollAnimator } from "@/components/ScrollAnimator";

export const metadata = {
  title: "Corporate Executives — 9D Capital | Executive Wealth Management",
  description: "Strategic wealth management for corporate executives navigating equity compensation, concentrated positions, and complex benefit structures. CRD #308524.",
};

export default function ExecutivesPage() {
  return (
    <>
      <ScrollAnimator />

      {/* Hero */}
      <section className="bg-primary-dark pt-[72px]">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-16 md:py-24">
          <p className="eyebrow hero-animate hero-animate-delay-1">Who We Serve</p>
          <h1 className="mt-4 font-serif font-light text-[40px] md:text-[56px] text-parchment leading-[1.12] tracking-[-0.02em] hero-animate hero-animate-delay-2">
            Corporate Executives
            <br />
            & Entrepreneurs
          </h1>
          <p className="mt-6 font-sans text-[18px] text-white/60 leading-relaxed max-w-[580px] hero-animate hero-animate-delay-3">
            Strategic financial planning for executives navigating equity compensation, concentrated positions, and complex benefit structures.
          </p>
        </div>
      </section>

      {/* Core Challenges */}
      <section className="bg-parchment py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="text-center mb-10 animate-on-scroll">
            <p className="eyebrow">Executive Challenges</p>
            <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-text-primary leading-[1.18]">
              The complexity you navigate
              <br />
              deserves specialized expertise.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Equity Compensation", desc: "RSUs, stock options, and deferred compensation require careful timing and tax optimization to maximize after-tax value." },
              { title: "Concentrated Stock", desc: "Managing significant single-stock exposure demands a disciplined diversification strategy that balances risk with tax efficiency." },
              { title: "Exit & Liquidity Planning", desc: "Whether through IPO, acquisition, or secondary sale, we help you plan for and manage liquidity events strategically." },
              { title: "Executive Benefits", desc: "From supplemental executive retirement plans to corporate insurance strategies, we optimize your total compensation package." },
            ].map((item, i) => (
              <div key={item.title} className={`animate-on-scroll stagger-${i + 1} bg-marble border border-warm-sand p-8`}>
                <div className="w-8 h-[2px] bg-gold mb-4" />
                <h3 className="font-serif text-[22px] text-text-primary">{item.title}</h3>
                <p className="mt-2 font-sans text-[15px] text-text-secondary leading-[1.65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Executives */}
      <section className="bg-warm-sand py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <p className="eyebrow">How We Help</p>
              <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-text-primary leading-[1.18]">
                Integrated advisory
                <br />
                for your career arc.
              </h2>
              <div className="mt-4 w-[60px] h-[1px] bg-gold" />
            </div>
            <div className="space-y-3 animate-on-scroll">
              {[
                "Stock option exercise timing and strategy",
                "RSU vesting and tax planning",
                "10b5-1 plan design and execution",
                "Concentrated stock diversification",
                "Executive deferred compensation planning",
                "IPO and M&A liquidity event advisory",
                "Comprehensive retirement modeling",
                "Estate planning for executive assets",
              ].map((cap, i) => (
                <div key={cap} className={`flex items-center gap-4 py-2.5 border-b border-parchment`}>
                  <span className="text-gold text-[14px]">✦</span>
                  <span className="font-sans text-[15px] text-text-primary">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12 text-center animate-on-scroll">
          <p className="eyebrow">The Concierge</p>
          <h2 className="mt-4 font-serif font-light text-[36px] md:text-[44px] text-parchment leading-[1.18]">
            Your career deserves
            <br />
            a financial partner to match.
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
