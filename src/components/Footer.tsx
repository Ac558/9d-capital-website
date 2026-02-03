import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-14 pb-8">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="font-sans text-[18px] uppercase tracking-[0.25em]">
              <span className="font-bold text-gold">9D</span>
              <span className="mx-[1px] text-gold/30 font-light">|</span>
              <span className="font-semibold text-white">CAPITAL</span>
            </Link>
            <p className="mt-3 text-[13px] text-white/50 leading-relaxed">
              Registered Investment Adviser
              <br />
              CRD #308524
            </p>
            <p className="mt-4 text-[13px] text-white/50 leading-relaxed">
              Independent. Fiduciary.
              <br />
              Built for families who
              <br />
              live between worlds.
            </p>
            <p className="mt-4 text-[13px] text-white/55 leading-relaxed">
              SEI Private Trust Company
              <br />
              $1.2 trillion in assets
              <br />
              under administration.
            </p>
          </div>

          {/* Column 2 — Services */}
          <div>
            <p role="heading" aria-level={4} className="font-sans font-medium text-[11px] uppercase tracking-[0.12em] text-white/60 mb-4">
              Services
            </p>
            <ul className="space-y-1.5">
              {[
                "Wealth & Asset Management",
                "Family Office Services",
                "Tax Planning & Advisory",
                "Legacy & Estate Planning",
                "Private Markets Access",
                "Corporate Workplace Solutions",
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-[13px] text-white/50 hover:text-white transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-[13px] text-gold hover:text-white transition-colors duration-200">
                  + 6 more →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <p role="heading" aria-level={4} className="font-sans font-medium text-[11px] uppercase tracking-[0.12em] text-white/60 mb-4">
              Company
            </p>
            <ul className="space-y-1.5">
              {[
                { label: "About", href: "/about" },
                { label: "Our Approach", href: "/about" },
                { label: "International Services", href: "/international" },
                { label: "Team", href: "/team" },
                { label: "Insights", href: "/insights" },
                { label: "Careers", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13px] text-white/50 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Connect */}
          <div>
            <p role="heading" aria-level={4} className="font-sans font-medium text-[11px] uppercase tracking-[0.12em] text-white/60 mb-4">
              Connect
            </p>
            <ul className="space-y-1.5">
              <li className="text-[13px] text-white/50">244 Fifth Avenue, Suite 1211</li>
              <li className="text-[13px] text-white/50">New York, NY 10001</li>
              <li>
                <a href="tel:+12127293498" className="text-[13px] text-white/50 hover:text-white transition-colors">
                  (212) 729-3498
                </a>
              </li>
              <li>
                <a href="mailto:contact@9d.capital" className="text-[13px] text-white/50 hover:text-white transition-colors">
                  contact@9d.capital
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-[13px] text-white/50 hover:text-white transition-colors">
                  Schedule a Consultation
                </Link>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/9d-capital" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/50 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
            <p className="mt-4 text-[12px] text-white/50 leading-relaxed">
              We serve clients in:
              <br />
              English · 中文 · العربية · 한국어
            </p>
          </div>
        </div>

        {/* Gold Separator */}
        <div className="mt-10 border-t border-[rgba(197,148,63,0.15)]" />

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-[12px] text-white/50">
            © 2025 9D Capital LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Form ADV", href: "/disclosures" },
              { label: "Important Disclosures", href: "/disclosures" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[12px] text-white/50 hover:text-white/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.adviserinfo.sec.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-white/50 hover:text-white/60 transition-colors"
            >
              adviserinfo.sec.gov
            </a>
          </div>
        </div>

        {/* Full Compliance Disclaimer */}
        <p className="mt-6 text-[11px] text-white/50 leading-relaxed max-w-5xl">
          This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. Past performance is not indicative of future results. All investments involve risk, including the possible loss of principal. 9D Capital LLC is a Registered Investment Adviser (RIA) (CRD #308524). Registration does not imply a certain level of skill or training. For more information, including our Form ADV Part 2 brochure, please contact us or visit the SEC&apos;s Investment Adviser Public Disclosure website at{" "}
          <a
            href="https://www.adviserinfo.sec.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/55 hover:text-white/60 underline"
          >
            www.adviserinfo.sec.gov
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
