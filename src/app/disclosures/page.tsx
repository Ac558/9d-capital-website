export const metadata = {
  title: "Important Disclosures — 9D Capital",
  description: "Important disclosures, Form ADV information, and regulatory notices for 9D Capital LLC.",
};

export default function DisclosuresPage() {
  return (
    <>
      <section className="bg-primary-dark pt-[72px]">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <h1 className="font-serif font-light text-[40px] md:text-[48px] text-parchment leading-[1.12]">
            Important Disclosures
          </h1>
        </div>
      </section>

      <section className="bg-parchment py-[80px]">
        <div className="max-w-prose mx-auto px-6 lg:px-12 body-copy">
          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">Registration</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            9D Capital LLC is a Registered Investment Adviser (RIA) with CRD #308524. Registration as an investment adviser does not imply a certain level of skill or training.
          </p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">Form ADV</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            A copy of our Form ADV Part 2A brochure is available upon request. You may also view our public filings through the SEC&apos;s Investment Adviser Public Disclosure (IAPD) website at{" "}
            <a
              href="https://www.adviserinfo.sec.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-hover transition-colors"
            >
              www.adviserinfo.sec.gov
            </a>.
          </p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">Custody</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            Client assets are custodied by SEI Private Trust Company, with over $1.2 trillion in assets under administration. SEI provides institutional-grade custody, reporting, and administration services.
          </p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">Fiduciary Standard</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            As a Registered Investment Adviser, 9D Capital LLC is held to a fiduciary standard. This means we are legally and ethically obligated to act in the best interests of our clients at all times. We maintain an open architecture platform with no proprietary products.
          </p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">Investment Risk</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            Past performance is not indicative of future results. All investments involve risk, including the possible loss of principal. The value of investments may fluctuate and investors may not receive back the amount originally invested.
          </p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">Full Disclaimer</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. Past performance is not indicative of future results. All investments involve risk, including the possible loss of principal. 9D Capital LLC is a Registered Investment Adviser (RIA) (CRD #308524). Registration does not imply a certain level of skill or training. For more information, including our Form ADV Part 2 brochure, please contact us or visit the SEC&apos;s Investment Adviser Public Disclosure website at{" "}
            <a
              href="https://www.adviserinfo.sec.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-hover transition-colors"
            >
              www.adviserinfo.sec.gov
            </a>.
          </p>

          <div className="mt-16 pt-8 border-t border-warm-sand">
            <p className="font-sans text-[13px] text-text-secondary">
              9D Capital LLC · Registered Investment Adviser · CRD #308524
            </p>
            <p className="font-sans text-[13px] text-text-secondary mt-2">
              © 2025 9D Capital LLC. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
