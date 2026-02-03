import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ScrollAnimator } from "@/components/ScrollAnimator";

export const metadata = {
  title: "Contact — 9D Capital | Schedule a Consultation",
  description: "Schedule a confidential consultation with 9D Capital. No obligation. No pressure. Just clarity. CRD #308524.",
};

export default function ContactPage() {
  return (
    <>
      <ScrollAnimator />

      {/* Hero */}
      <section className="bg-primary-dark pt-[72px] relative overflow-hidden">
        {/* World map background */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/images/world-map.jpg"
            alt=""
            fill
            className="object-cover object-center"
            style={{ filter: "sepia(15%) contrast(110%) brightness(90%)", opacity: 0.1 }}
          />
        </div>
        <div className="max-w-content mx-auto px-6 lg:px-12 py-16 md:py-24 relative z-10">
          <p className="eyebrow hero-animate hero-animate-delay-1">The Concierge</p>
          <h1 className="mt-4 font-serif font-light text-[40px] md:text-[56px] text-parchment leading-[1.12] tracking-[-0.02em] hero-animate hero-animate-delay-2">
            The door is open.
          </h1>
          <p className="mt-6 font-sans text-[18px] text-white/60 leading-relaxed max-w-[480px] hero-animate hero-animate-delay-3">
            Schedule a confidential consultation. No obligation. No pressure. Just clarity.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-parchment py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <h2 className="font-serif text-[28px] text-text-primary leading-[1.3]">
                Request a Consultation
              </h2>
              <p className="mt-3 font-sans text-[16px] text-text-secondary leading-[1.65]">
                Tell us a little about yourself and we&apos;ll arrange a confidential conversation.
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-[13px] font-medium text-text-primary mb-1.5">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-marble border border-warm-sand font-sans text-[15px] text-text-primary placeholder:text-text-secondary/50"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[13px] font-medium text-text-primary mb-1.5">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-marble border border-warm-sand font-sans text-[15px] text-text-primary placeholder:text-text-secondary/50"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[13px] font-medium text-text-primary mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-marble border border-warm-sand font-sans text-[15px] text-text-primary placeholder:text-text-secondary/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[13px] font-medium text-text-primary mb-1.5">Phone (optional)</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-marble border border-warm-sand font-sans text-[15px] text-text-primary placeholder:text-text-secondary/50"
                    placeholder="+1 (212) 000-0000"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[13px] font-medium text-text-primary mb-1.5">How can we help?</label>
                  <select className="w-full px-4 py-3 bg-marble border border-warm-sand font-sans text-[15px] text-text-secondary">
                    <option>Select a topic</option>
                    <option>Wealth Management</option>
                    <option>International Services</option>
                    <option>Family Office</option>
                    <option>Tax Planning</option>
                    <option>Estate Planning</option>
                    <option>Business Advisory</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-[13px] font-medium text-text-primary mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-marble border border-warm-sand font-sans text-[15px] text-text-primary placeholder:text-text-secondary/50 resize-none"
                    placeholder="Tell us about your situation..."
                  />
                </div>

                <button
                  type="submit"
                  className="px-10 py-4 bg-primary-dark text-parchment font-sans font-semibold text-[13px] uppercase tracking-[0.1em] transition-all duration-300 hover:bg-gold hover:text-primary-dark"
                >
                  Submit Request
                </button>
              </form>
            </div>

            {/* Sidebar — Contact Info + Calendly */}
            <div className="animate-on-scroll space-y-4">
              <div className="bg-marble border border-warm-sand p-8">
                <h3 className="font-serif text-[22px] text-text-primary">Office</h3>
                <p className="mt-3 font-sans text-[15px] text-text-secondary leading-[1.65]">
                  244 Fifth Avenue, Suite 1211<br />
                  New York, NY 10001
                </p>
                <a href="tel:+12127293498" className="mt-2 block font-sans text-[15px] text-gold hover:text-gold-hover transition-colors">
                  (212) 729-3498
                </a>
              </div>

              <div className="bg-marble border border-warm-sand p-8">
                <h3 className="font-serif text-[22px] text-text-primary">Email</h3>
                <a href="mailto:contact@9d.capital" className="mt-3 block font-sans text-[15px] text-gold hover:text-gold-hover transition-colors">
                  contact@9d.capital
                </a>
              </div>

              <div className="bg-marble border border-warm-sand p-8">
                <h3 className="font-serif text-[22px] text-text-primary">Languages</h3>
                <p className="mt-3 font-sans text-[15px] text-text-secondary leading-[1.65]">
                  English · 中文 · العربية · 한국어
                </p>
              </div>

              {/* Calendly Inline Embed — Sam: update data-url with your real Calendly link */}
              <div className="bg-marble border border-warm-sand p-8">
                <h3 className="font-serif text-[22px] text-text-primary">Schedule Directly</h3>
                <p className="mt-3 font-sans text-[14px] text-text-secondary leading-[1.65]">
                  Prefer to book a time directly? Use our scheduling tool.
                </p>
                <div className="mt-4 calendly-embed-container">
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/9dcapital/consultation?hide_gdpr_banner=1&background_color=fafaf7&text_color=1a1a1a&primary_color=c5943f"
                    style={{ minWidth: "280px", height: "420px" }}
                  />
                  {/* Fallback if Calendly doesn't load (visible by default, hidden when widget loads) */}
                  <noscript>
                    <a
                      href="mailto:contact@9d.capital?subject=Consultation%20Request%20-%209D%20Capital"
                      className="block px-6 py-4 bg-primary-dark text-center font-sans font-semibold text-[13px] uppercase tracking-[0.1em] text-parchment transition-all duration-300 hover:bg-gold hover:text-primary-dark"
                    >
                      Book Via Email →
                    </a>
                  </noscript>
                </div>
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="lazyOnload"
                />
              </div>

              {/* Google Maps */}
              <div className="bg-marble border border-warm-sand overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175912761!2d-73.9899!3d40.7448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a4119ce0e7%3A0x1a0e4b4b3f4b4b4b!2s244%20Fifth%20Ave%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="9D Capital Office Location"
                />
              </div>

              <div className="bg-obsidian p-8">
                <p className="font-sans text-[13px] text-white/50 leading-[1.65]">
                  9D Capital LLC is a Registered Investment Adviser (CRD #308524). All consultations are confidential. We do not share your information with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
