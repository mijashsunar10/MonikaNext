"use client";

import { Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BRANDS = [
  { name: "BRIDGESTONE", country: "Japan", highlight: "Premium Comfort & Safety" },
  { name: "MICHELIN", country: "France", highlight: "Unrivaled Mileage & Efficiency" },
  { name: "YOKOHAMA", country: "Japan", highlight: "Advanced Japanese Technology" },
  { name: "PIRELLI", country: "Italy", highlight: "High Speed Performance" },
  { name: "GOODYEAR", country: "USA", highlight: "All-Weather Reliability" },
  { name: "DUNLOP", country: "UK", highlight: "Precision Traction Control" },
  { name: "CONTINENTAL", country: "Germany", highlight: "German Engineering Excellence" },
  { name: "MRF", country: "India", highlight: "Heavy Duty & Tough Terrain" },
  { name: "CEAT", country: "India", highlight: "Superior Grip & Long Life" },
  { name: "HANKOOK", country: "South Korea", highlight: "Eco-Friendly Driving" },
];

export default function BrandMarquee() {
  const [revealRef, isRevealed] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={revealRef as any}
      className={`relative w-full border-y border-white/10 bg-[#07070c] py-8 overflow-hidden reveal-element ${
        isRevealed ? "revealed" : ""
      }`}
    >

      <div className="w-full px-4 sm:px-8 lg:px-16 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
            <Award className="h-4 w-4" />
            <span>AUTHORIZED DISTRIBUTOR & IMPORTER FOR WORLD-CLASS BRANDS</span>
          </div>
          <span className="hidden text-xs text-slate-500 md:inline">100% Original Manufacturer Warranty</span>
        </div>
      </div>

      {/* INFINITE MARQUEE STRIP */}
      <div className="relative flex w-full overflow-hidden mask-gradient">
        <div className="flex min-w-full shrink-0 gap-6 animate-marquee">
          {BRANDS.concat(BRANDS).map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0d0d16] px-6 py-3.5 backdrop-blur-md transition-all hover:border-orange-500/50 hover:bg-[#12121e]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 font-heading font-bold text-orange-500">
                {brand.name[0]}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-lg font-bold tracking-wider text-white">
                    {brand.name}
                  </span>
                  <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold text-slate-400">
                    {brand.country}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  {brand.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
