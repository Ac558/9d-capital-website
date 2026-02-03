"use client";

import Script from "next/script";

const CALENDLY_URL = "https://calendly.com/9dcapital/consultation";

export function CalendlyPopupLink() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const win = window as unknown as Record<string, unknown>;
    if (win.Calendly) {
      (win.Calendly as { initPopupWidget: (opts: { url: string }) => void }).initPopupWidget({
        url: CALENDLY_URL,
      });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  return (
    <>
      <p className="mt-4 font-sans text-[13px] text-white/45">
        Or{" "}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold/70 hover:text-gold transition-colors underline underline-offset-2 decoration-gold/30"
          onClick={handleClick}
        >
          schedule directly →
        </a>
      </p>
      {/* Calendly popup widget JS — loads its own CSS */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
