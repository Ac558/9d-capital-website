export const metadata = {
  title: "Insights — 9D Capital | Cross-Border Intelligence",
  description: "Cross-border intelligence and market insights from 9D Capital. CRD #308524.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="bg-primary-dark pt-[72px]">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-16 md:py-24">
          <p className="eyebrow">Insights</p>
          <h1 className="mt-4 font-serif font-light text-[40px] md:text-[56px] text-parchment leading-[1.12] tracking-[-0.02em]">
            Cross-border intelligence.
          </h1>
        </div>
      </section>

      <section className="bg-parchment py-14 md:py-16">
        <div className="max-w-content mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-lg mx-auto">
            <p className="font-serif text-[28px] text-text-primary leading-[1.3]">
              Coming Soon
            </p>
            <div className="mt-4 mx-auto w-[60px] h-[1px] bg-gold" />
            <p className="mt-4 font-sans text-[17px] text-text-secondary leading-[1.65]">
              We are preparing thoughtful research and commentary on cross-border wealth management, international tax developments, and global market perspectives.
            </p>
            <p className="mt-6 font-sans text-[14px] text-text-secondary">
              In the meantime, reach us at{" "}
              <a href="mailto:contact@9d.capital" className="text-gold hover:text-gold-hover transition-colors">
                contact@9d.capital
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
