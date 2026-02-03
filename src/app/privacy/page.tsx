export const metadata = {
  title: "Privacy Policy — 9D Capital",
  description: "Privacy policy for 9D Capital LLC.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-primary-dark pt-[72px]">
        <div className="max-w-content mx-auto px-6 lg:px-12 py-24">
          <h1 className="font-serif font-light text-[40px] md:text-[48px] text-parchment leading-[1.12]">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="bg-parchment py-[80px]">
        <div className="max-w-prose mx-auto px-6 lg:px-12 body-copy">
          <p className="font-sans text-[13px] text-text-secondary mb-8">Last updated: January 2025</p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">Information We Collect</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            9D Capital LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects information you provide directly to us, including your name, email address, phone number, and any other information you choose to provide when you contact us, request a consultation, or use our services.
          </p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">How We Use Your Information</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            We use the information we collect to provide, maintain, and improve our services, to communicate with you about our services, and to respond to your requests and inquiries. We do not sell your personal information to third parties.
          </p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">Information Security</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. Client data is handled in accordance with our obligations as a Registered Investment Adviser.
          </p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">Cookies and Tracking</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            Our website may use cookies and similar technologies to improve your experience. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="font-serif text-[24px] text-text-primary mt-12 mb-4">Contact Us</h2>
          <p className="font-sans text-[16px] text-text-secondary leading-[1.65]">
            If you have questions about this Privacy Policy, please contact us at{" "}
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
