"use client";
import { CountUp } from "./CountUp";

const stats = [
  { value: "$1.2T", numericTarget: 1.2, prefix: "$", suffix: "T", label: "SEI Custody Administration" },
  { value: "12", numericTarget: 12, prefix: "", suffix: "", label: "Integrated Service Disciplines" },
  { value: "100%", numericTarget: 100, prefix: "", suffix: "%", label: "Fiduciary · Independent · Conflict-Free" },
  { value: "4", numericTarget: 4, prefix: "", suffix: "", label: "Global Regions Served", small: false, static: false },
];

export function CredibilityBar() {
  return (
    <section className="bg-obsidian py-11">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center animate-on-scroll stagger-${i + 1} ${
                i < stats.length - 1 ? "md:border-r md:border-white/10" : ""
              }`}
            >
              <div
                className={`font-sans font-light text-gold leading-none stat-number-glow ${
                  stat.small ? "text-[40px] md:text-[56px]" : "text-[56px] md:text-[80px]"
                }`}
                style={{ letterSpacing: "-0.02em" }}
              >
                {stat.static ? (
                  stat.value
                ) : (
                  <CountUp
                    target={stat.numericTarget}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="mt-3 font-sans font-medium text-[12px] uppercase tracking-[0.12em] text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
