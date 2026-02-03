import Link from "next/link";
import { ScrollAnimator } from "@/components/ScrollAnimator";

export const metadata = {
  title: "Business Owners — 9D Capital | Business & Family Office Advisory",
  description: "Integrated advisory for business owners and family offices — succession, legacy, and multi-generational planning. CRD #308524.",
};

export default function BusinessOwnersPage() {
  return (
    <>
      <ScrollAnimator />

      {/* Hero */}
      <section className="bg-primary-dark pt-[72px]">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-16 md:py-24">
          <p className="eyebrow hero-animate hero-animate-delay-1">Who We Serve</p>
          <h1 className="mt-4 font-serif font-light text-[40px] md:text-[56px] text-parchment leading-[1.12] tracking-[-0.02em] hero-animate hero-animate-delay-2">
            Business Owners
            <br />
            & Family Offices
          </h1>
          <p className="mt-6 font-sans text-[18px] text-white/60 leading-relaxed max-w-[580px] hero-animate hero-animate-delay-3">
            Succession, legacy, and multi-generational planning for entrepreneurs and established families who understand that business and personal wealth are deeply intertwined.
          </p>
        </div>
      </section>

      {/* Core Challenges */}
      <section className="bg-parchment py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="text-center mb-10 animate-on-scroll">
            <p className="eyebrow">Business Owner Challenges</p>
            <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-text-primary leading-[1.18]">
              Your business is your legacy.
              <br />
              Plan accordingly.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Succession Planning", desc: "Whether passing to the next generation or preparing for sale, a comprehensive succession strategy protects your life's work." },
              { title: "Business Valuation & Exit", desc: "Understanding your business's true value and optimizing the timing and structure of a transition or exit event." },
              { title: "Wealth Integration", desc: "Aligning your personal financial plan with your business strategy so both move forward together, not in conflict." },
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

      {/* Family Office Services */}
      <section className="bg-primary-dark py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <p className="eyebrow">Family Office</p>
              <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-parchment leading-[1.18]">
                Institutional structure,
                <br />
                personal attention.
              </h2>
              <div className="mt-4 w-[60px] h-[1px] bg-gold" />
              <p className="mt-4 font-sans text-[17px] text-white/70 leading-[1.65]">
                For families with significant wealth, we provide the infrastructure and oversight of a family office without the overhead — coordinating across investments, tax, estate, philanthropy, and next-generation education.
              </p>
            </div>
            <div className="space-y-3 animate-on-scroll">
              {[
                "Business succession and exit planning",
                "Entity structure and tax optimization",
                "Key-person insurance and buy-sell agreements",
                "Consolidated family reporting",
                "Multi-generational wealth transfer",
                "Family governance frameworks",
                "Outsourced CFO services",
                "Philanthropic strategy and giving programs",
              ].map((cap, i) => (
                <div key={cap} className={`flex items-center gap-4 py-2.5 border-b border-white/10`}>
                  <span className="text-gold text-[14px]">✦</span>
                  <span className="font-sans text-[15px] text-white/80">{cap}</span>
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
            Your legacy deserves
            <br />
            intentional planning.
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
