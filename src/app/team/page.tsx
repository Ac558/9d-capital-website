import Link from "next/link";
import { ScrollAnimator } from "@/components/ScrollAnimator";

export const metadata = {
  title: "Our Team — 9D Capital | Experienced Professionals",
  description: "Meet the team at 9D Capital — experienced professionals dedicated to serving international families and cross-border wealth management. CRD #308524.",
};

export default function TeamPage() {
  return (
    <>
      <ScrollAnimator />

      {/* Hero */}
      <section className="bg-primary-dark pt-[72px]">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-16 md:py-24">
          <p className="eyebrow hero-animate hero-animate-delay-1">Our Team</p>
          <h1 className="mt-4 font-serif font-light text-[40px] md:text-[56px] text-parchment leading-[1.12] tracking-[-0.02em] hero-animate hero-animate-delay-2">
            The people behind
            <br />
            the partnership.
          </h1>
          <p className="mt-6 font-sans text-[18px] text-white/60 leading-relaxed max-w-[580px] hero-animate hero-animate-delay-3">
            Our team combines institutional experience with a personal commitment to every client relationship. We are building a firm where the best minds in wealth management serve those who need it most.
          </p>
        </div>
      </section>

      {/* Principal — Prominent Card */}
      <section className="bg-parchment py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="animate-on-scroll bg-primary-dark grid md:grid-cols-[280px_1fr]">
              {/* Photo placeholder */}
              <div className="aspect-[3/4] md:aspect-auto bg-[#162640] flex items-center justify-center relative">
                <span className="font-serif text-[64px] text-white/10">SQ</span>
                <div className="absolute bottom-0 left-0 w-16 h-[2px] bg-gold/40" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p className="font-sans text-[13px] text-gold uppercase tracking-[0.08em]">Founder & Managing Principal</p>
                <h2 className="mt-3 font-serif text-[32px] md:text-[36px] text-parchment leading-[1.18]">
                  Sam Quashie-Blay
                </h2>
                <p className="mt-1 font-sans text-[14px] text-white/40">CFA, CFP®</p>
                <p className="mt-4 font-sans text-[15px] text-white/60 leading-[1.65]">
                  Sam founded 9D Capital to bridge the gap between Wall Street&apos;s institutional resources and the unique needs of international families. With deep expertise in cross-border wealth management, Sam leads the firm&apos;s vision and client relationships.
                </p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="font-sans text-[12px] text-white/40">
                    <span className="text-gold/60">Languages:</span> English · 中文
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* We're Growing Section */}
          <div className="mt-12 max-w-3xl mx-auto animate-on-scroll">
            <div className="bg-warm-sand p-10 md:p-12 text-center">
              <p className="eyebrow">We&apos;re Growing</p>
              <h3 className="mt-4 font-serif text-[28px] md:text-[32px] text-text-primary leading-[1.18]">
                Building an exceptional team
              </h3>
              <p className="mt-4 font-sans text-[16px] text-text-secondary max-w-lg mx-auto leading-[1.65]">
                We are actively expanding our team with experienced professionals in international client services, tax strategy, and wealth management. If you share our commitment to the fiduciary standard, we&apos;d like to hear from you.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block px-10 py-4 border border-primary-dark text-primary-dark font-sans font-semibold text-[13px] uppercase tracking-[0.1em] transition-all duration-300 hover:bg-primary-dark hover:text-parchment"
              >
                Explore Opportunities →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-warm-sand py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12 text-center animate-on-scroll">
          <p className="eyebrow">Careers</p>
          <h2 className="mt-4 font-serif text-[32px] md:text-[40px] text-text-primary leading-[1.18]">
            Join the team.
          </h2>
          <p className="mt-4 font-sans text-[17px] text-text-secondary leading-[1.65] max-w-lg mx-auto">
            We are always looking for exceptional professionals who share our commitment to client-first advisory. If you believe in the fiduciary standard and have a passion for cross-border wealth management, we&apos;d like to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block px-10 py-4 border border-primary-dark text-primary-dark font-sans font-semibold text-[13px] uppercase tracking-[0.1em] transition-all duration-300 hover:bg-primary-dark hover:text-parchment"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
