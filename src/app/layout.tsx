import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "9D Capital — International Wealth Management | Registered Investment Adviser",
  description:
    "9D Capital is a boutique wealth management firm serving international families and cross-border professionals. Twelve integrated service disciplines. Fiduciary standard. CRD #308524.",
  keywords: [
    "wealth management",
    "investment adviser",
    "RIA",
    "fiduciary",
    "international clients",
    "cross-border wealth management",
    "family office",
    "9D Capital",
  ],
  openGraph: {
    title: "9D Capital — Where Global Wealth Finds Its Home",
    description:
      "For international families and cross-border professionals who need more than a financial advisor — they need a trusted partner.",
    type: "website",
    locale: "en_US",
    siteName: "9D Capital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`no-js ${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.remove('no-js')` }} />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: `.animate-on-scroll,.hero-animate{opacity:1!important;transform:none!important;animation:none!important}` }} />
        </noscript>
      </head>
      <body className="font-sans antialiased bg-parchment text-text-primary">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
