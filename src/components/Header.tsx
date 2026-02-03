"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "International", href: "/international" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Header always has dark background now — always use light text
  const useDarkHeader = true;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(15,27,45,0.97)] backdrop-blur-[8px] border-b border-[rgba(197,148,63,0.2)]"
            : "bg-[rgba(15,27,45,0.85)] backdrop-blur-[6px]"
        }`}
      >
        <div className="max-w-content mx-auto w-full px-6 lg:px-12 flex items-center justify-between">
          {/* Wordmark with monogram */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            {/* Premium wordmark */}
            <span className="flex items-baseline gap-0">
              <span className="font-sans font-bold text-[28px] md:text-[30px] tracking-[0.04em] text-gold">9D</span>
              <span className="w-[1px] h-[22px] bg-gold/30 mx-2.5 self-center" style={{display:'inline-block',verticalAlign:'middle'}} />
              <span className="font-sans font-medium text-[16px] md:text-[18px] uppercase tracking-[0.32em] text-parchment">Capital</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-sans font-medium text-[14px] uppercase tracking-[0.08em] transition-colors duration-200 hover:text-gold group ${
                  useDarkHeader ? "text-parchment" : "text-text-primary"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold transition-all duration-200 group-hover:w-full" />
                {pathname === item.href && (
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                )}
              </Link>
            ))}
            {/* Client Login — SEI Connect portal */}
            <a
              href="https://login.sei-connect.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-semibold text-[12px] uppercase tracking-[0.1em] transition-all duration-200 flex items-center gap-1.5 px-5 py-2 rounded-sm bg-gold text-primary-dark hover:bg-gold-light shadow-[0_1px_8px_rgba(184,148,63,0.25)]"
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1a4 4 0 0 1 4 4v2h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V5a4 4 0 0 1 4-4zm2 6H6V5a2 2 0 1 1 4 0v2z"/>
              </svg>
              Client Login
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[6px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span
              className={`block w-6 h-[2px] transition-all duration-200 ${
                useDarkHeader ? "bg-parchment" : "bg-text-primary"
              } ${mobileOpen ? "rotate-45 translate-y-[8px]" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-200 ${
                useDarkHeader ? "bg-parchment" : "bg-text-primary"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-200 ${
                useDarkHeader ? "bg-parchment" : "bg-text-primary"
              } ${mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Full-screen Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[99] bg-primary-dark flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            {NAV_ITEMS.map((item, i) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="text-parchment font-sans font-medium text-[22px] uppercase tracking-[0.08em] hover:text-gold transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {i < NAV_ITEMS.length - 1 && (
                  <div className="w-8 h-[1px] bg-gold/20 mx-auto mt-8" />
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
