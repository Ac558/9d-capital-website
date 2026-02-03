import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Login — 9D Capital",
  description: "Access your 9D Capital client portal powered by SEI.",
};

export default function ClientLoginPage() {
  return (
    <main className="pt-[72px] min-h-screen bg-parchment">
      {/* Thin branded bar */}
      <div className="bg-obsidian text-parchment py-3 px-6 lg:px-12">
        <div className="max-w-content mx-auto flex items-center justify-between">
          <p className="font-sans text-[13px] tracking-wide">
            <span className="text-gold">●</span>{" "}
            9D Capital Client Portal — Powered by SEI
          </p>
          <a
            href="mailto:contact@9d.capital"
            className="font-sans text-[12px] text-white/50 hover:text-gold transition-colors"
          >
            Need help? Contact us
          </a>
        </div>
      </div>

      {/* SEI iframe embed */}
      <iframe
        src="https://login.sei-connect.com/"
        title="9D Capital Client Portal — SEI Connect"
        className="w-full border-0"
        style={{ height: "calc(100vh - 72px - 48px)" }}
        allow="clipboard-write"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation"
      />
    </main>
  );
}
