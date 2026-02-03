export const metadata = {
  title: "Terms of Service — 9D Capital",
  description: "Terms of service for the 9D Capital website.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-primary-dark pt-[72px]">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <h1 className="font-serif font-light text-[40px] md:text-[48px] text-parchment leading-[1.12]">
            Terms of Service
          </h1>
        </div>
      </section>

      <section className="bg-parchment py-[80px]">
        <div className="max-w-prose mx-auto px-6 lg:px-12 body-copy">
          <p className="font-sans text-[13px] text-text-secondary mb-8">Last updated: January 2025</p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">Agreement to Terms</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            By accessing this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website. This website is operated by 9D Capital LLC, a Registered Investment Adviser (CRD #308524).
          </p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">Informational Purposes Only</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            The content on this website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. Nothing on this website should be construed as investment, tax, legal, or other professional advice.
          </p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">No Client Relationship</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            Use of this website does not create an advisory or client relationship between you and 9D Capital LLC. Such a relationship is established only through the execution of a written advisory agreement.
          </p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">Investment Risks</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            Past performance is not indicative of future results. All investments involve risk, including the possible loss of principal. Registration as an investment adviser does not imply a certain level of skill or training.
          </p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">Intellectual Property</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            All content on this website, including text, design, and layout, is the property of 9D Capital LLC and is protected by applicable intellectual property laws.
          </p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">Contact</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            For questions regarding these terms, contact us at{" "}
            <a href="mailto:contact@9d.capital" className="text-gold hover:text-gold-hover transition-colors">contact@9d.capital</a>.
          </p>

          <div className="mt-16 pt-8 border-t border-warm-sand">
            <p className="font-sans text-[13px] text-text-secondary">
              9D Capital LLC · Registered Investment Adviser · CRD #308524
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
