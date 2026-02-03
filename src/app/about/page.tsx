import Link from "next/link";
import Image from "next/image";
import { ScrollAnimator } from "@/components/ScrollAnimator";

export const metadata = {
  title: "About — 9D Capital | Our Story & Philosophy",
  description: "9D Capital is an independent, fiduciary wealth management firm built for international families and cross-border professionals. CRD #308524.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollAnimator />

      {/* Hero */}
      <section className="bg-primary-dark pt-[72px]">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-16 md:py-24">
          <p className="eyebrow hero-animate hero-animate-delay-1">Our Story</p>
          <h1 className="mt-4 font-serif font-light text-[40px] md:text-[56px] text-parchment leading-[1.12] tracking-[-0.02em] hero-animate hero-animate-delay-2">
            Built for families who
            <br />
            live between worlds.
          </h1>
          <p className="mt-6 font-sans text-[18px] text-white/60 leading-relaxed max-w-[580px] hero-animate hero-animate-delay-3">
            9D Capital was founded on a simple premise: international families deserve a financial partner who understands the full complexity of cross-border wealth.
          </p>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="bg-obsidian py-10">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "$1.2T", label: "SEI Custody Administration" },
              { value: "12", label: "Integrated Service Disciplines" },
              { value: "100%", label: "Fiduciary Standard" },
              { value: "4", label: "Regions Served" },
            ].map((stat, i) => (
              <div key={stat.label} className={`text-center animate-on-scroll stagger-${i + 1} ${i < 3 ? "md:border-r md:border-white/10" : ""}`}>
                <div className="font-sans font-light text-[36px] md:text-[52px] text-gold leading-none" style={{ letterSpacing: "-0.02em" }}>
                  {stat.value}
                </div>
                <div className="mt-2 font-sans font-medium text-[11px] uppercase tracking-[0.12em] text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generational Stewardship Image */}
      <section className="bg-parchment py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="animate-on-scroll max-w-4xl mx-auto">
            <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
              <Image
                src="/images/family-sunset.jpg"
                alt="Multi-generational family walking together at sunset on the beach"
                fill
                className="object-cover object-center"
                style={{ filter: "sepia(15%) contrast(110%) brightness(90%)" }}
              />
            </div>
            <p className="mt-4 text-center font-serif text-[16px] text-text-secondary italic leading-relaxed">
              Generational stewardship begins with understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-parchment py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <p className="eyebrow">Our Philosophy</p>
              <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-text-primary leading-[1.18]">
                Nine Dimensions of
                <br />
                Wealth Management
              </h2>
              <div className="mt-4 w-[60px] h-[1px] bg-gold" />
            </div>
            <div className="animate-on-scroll body-copy">
              <p className="font-sans text-[17px] text-text-secondary leading-[1.65]">
                True wealth management extends far beyond investment returns. It encompasses your complete financial life — from tax efficiency and estate planning to risk management and philanthropic legacy. At 9D Capital, we integrate twelve service disciplines into a single, coherent strategy because your financial life doesn&apos;t exist in silos.
              </p>
              <p className="mt-6 font-sans text-[17px] text-text-secondary leading-[1.65]">
                Every client receives a bespoke strategy that addresses their unique circumstances, whether navigating cross-border tax treaties, structuring multi-generational wealth transfers, or accessing institutional-quality private market investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Independence & Fiduciary */}
      <section className="bg-warm-sand py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <p className="eyebrow">Independence & Fiduciary</p>
              <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-text-primary leading-[1.18]">
                Independence by Design
              </h2>
              <div className="mt-4 w-[60px] h-[1px] bg-gold" />
            </div>
            <div className="animate-on-scroll body-copy">
              <p className="font-sans text-[17px] text-text-secondary leading-[1.65]">
                As an independent Registered Investment Adviser, 9D Capital is free from the conflicts that plague larger institutions. We have no proprietary products to sell, no corporate mandates to follow, and no quotas to meet. Our only obligation is to you.
              </p>
              <p className="mt-6 font-sans text-[17px] text-text-secondary leading-[1.65]">
                This independence allows us to build truly objective strategies — selecting the best solutions from across the financial landscape, whether that means institutional managers, private market opportunities, or carefully structured insurance solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="bg-parchment py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="text-center mb-10 animate-on-scroll">
            <p className="eyebrow">Global Reach</p>
            <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-text-primary leading-[1.18]">
              Headquartered in New York.
              <br />
              Serving the world.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { region: "Asia Pacific", desc: "Greater China, Southeast Asia, Japan, Korea", icon: "🌏" },
              { region: "Middle East", desc: "Saudi Arabia, UAE, Gulf Cooperation Council", icon: "🌍" },
              { region: "Europe", desc: "United Kingdom, Continental Europe, Scandinavia", icon: "🌍" },
              { region: "Americas", desc: "New York headquarters, U.S. domestic & Latin America", icon: "🌎" },
            ].map((r, i) => (
              <div key={r.region} className={`animate-on-scroll stagger-${i + 1} bg-marble border border-warm-sand p-6`}>
                <h3 className="font-serif text-[22px] text-text-primary">{r.region}</h3>
                <p className="mt-2 font-sans text-[14px] text-text-secondary leading-[1.65]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEI Custody Partnership */}
      <section className="bg-primary-dark py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[45%_55%] gap-10 items-center">
            <div className="animate-on-scroll">
              <p className="eyebrow">Institutional Custody</p>
              <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-parchment leading-[1.18]">
                SEI Private Trust Company
              </h2>
              <div className="mt-4 w-[60px] h-[1px] bg-gold" />
            </div>
            <div className="animate-on-scroll">
              <p className="font-sans text-[17px] text-white/70 leading-[1.65]">
                Your assets are custodied by SEI Private Trust Company — one of the largest and most respected custodians in the world, with over $1.2 trillion in assets under administration. SEI provides institutional-grade protection, transparent reporting, and complete separation of your assets from our firm.
              </p>
              <p className="mt-4 font-sans text-[17px] text-white/70 leading-[1.65]">
                This means your investments are held independently, providing an additional layer of security and transparency that sets the standard for fiduciary wealth management.
              </p>
              <div className="mt-6 flex items-center gap-6">
                <div className="text-center">
                  <div className="font-sans font-light text-[36px] text-gold leading-none">$1.2T</div>
                  <div className="mt-1 font-sans text-[11px] uppercase tracking-[0.1em] text-white/40">Assets Under Administration</div>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div className="text-center">
                  <div className="font-sans font-light text-[36px] text-gold leading-none">1968</div>
                  <div className="mt-1 font-sans text-[11px] uppercase tracking-[0.1em] text-white/40">Year Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fiduciary Commitment CTA */}
      <section className="bg-parchment py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="max-w-prose mx-auto text-center animate-on-scroll">
            <p className="eyebrow">Our Commitment</p>
            <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-text-primary leading-[1.18]">
              Fiduciary. Always.
            </h2>
            <div className="mt-4 mx-auto w-[60px] h-[1px] bg-gold" />
            <p className="mt-6 font-sans text-[17px] text-text-secondary leading-[1.65]">
              As a Registered Investment Adviser (CRD #308524), we are legally and ethically bound to act in your best interest. This fiduciary duty is not a marketing message — it is the foundation of every recommendation we make, every portfolio we construct, and every relationship we build.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block px-10 py-4 border border-primary-dark text-primary-dark font-sans font-semibold text-[13px] uppercase tracking-[0.1em] transition-all duration-300 hover:bg-primary-dark hover:text-parchment"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
