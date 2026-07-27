"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Info, Phone, ArrowRight } from "lucide-react";
import { TYRES_DATA, TyreItem } from "@/data/tyres";
import TyreRadarChart from "./TyreRadarChart";

export default function TyreCategoryShowcase() {
  const [selectedTyre, setSelectedTyre] = useState<TyreItem | null>(null);

  // Home page only shows the tyres marked as featured: true
  const featuredTyres = TYRES_DATA.filter((t) => t.featured);

  return (
    <section id="tyres" className="relative w-full bg-[#0a0a12] py-20 text-white">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest">
            <Zap className="h-3.5 w-3.5" />
            Featured Products
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            OUR FEATURED <span className="text-orange-500">TYRE RANGE</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover our hand-picked selection of high-performance tyres built for maximum safety, speed endurance, and grip on Nepal&apos;s roads.
          </p>
        </div>

        {/* TYRE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTyres.map((tyre) => (
            <div
              key={tyre.id}
              className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* TOP BADGE */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="rounded-lg bg-orange-500/20 px-3 py-1 font-heading text-xs font-bold text-orange-400 tracking-wider">
                  {tyre.brand}
                </span>
                {tyre.badge && (
                  <span className="rounded-full bg-amber-500 text-slate-950 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide">
                    {tyre.badge}
                  </span>
                )}
              </div>

              {/* IMAGE STAGE */}
              <div className="relative flex h-48 w-full items-center justify-center my-2">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent rounded-2xl" />
                <img
                  src={tyre.image}
                  alt={tyre.name}
                  className="h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* TYRE SPECS INFO */}
              <div className="mt-4 space-y-3">
                <h3 className="font-heading text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  {tyre.name}
                </h3>
                
                <div className="flex items-center justify-between text-xs text-slate-300 font-mono bg-white/5 rounded-xl px-3 py-2 border border-white/5">
                  <span>Size: <strong className="text-white">{tyre.size}</strong></span>
                  <span>Speed: <strong className="text-orange-400">{tyre.speedRating.split(" ")[0]}</strong></span>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {tyre.description}
                </p>

                {/* SPEC RATINGS */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-[11px] text-center">
                  <div className="rounded-lg bg-black/40 py-1.5 border border-white/5">
                    <div className="text-slate-400">Wet Grip</div>
                    <div className="font-bold text-emerald-400">{tyre.wetGrip}</div>
                  </div>
                  <div className="rounded-lg bg-black/40 py-1.5 border border-white/5">
                    <div className="text-slate-400">Fuel Saver</div>
                    <div className="font-bold text-amber-400">{tyre.fuelEfficiency}</div>
                  </div>
                  <div className="rounded-lg bg-black/40 py-1.5 border border-white/5">
                    <div className="text-slate-400">Noise</div>
                    <div className="font-bold text-slate-200">{tyre.noise}</div>
                  </div>
                </div>
              </div>

              {/* FOOTER CTA & PRICE */}
              <div className="mt-6 flex items-center justify-between gap-3 pt-4 border-t border-white/10">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">Est. Price</div>
                  <div className="font-heading text-base font-bold text-orange-400">{tyre.priceEstimate}</div>
                </div>

                <button
                  onClick={() => setSelectedTyre(tyre)}
                  className="flex items-center gap-2 rounded-xl bg-orange-500/20 px-4 py-2 text-xs font-bold text-orange-400 border border-orange-500/30 hover:bg-orange-500 hover:text-slate-950 transition-all"
                >
                  <Info className="h-3.5 w-3.5" />
                  Quick Details
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* CTA TO SEPARATE FULL CATALOGUE PAGE */}
        <div className="mt-16 text-center">
          <Link
            href="/tyres"
            className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-orange-500/20 hover:scale-105 hover:shadow-orange-500/40 transition-all duration-300"
          >
            <span>Explore Full Tyre Catalogue</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

      {/* QUICK MODAL DETAIL */}
      {selectedTyre && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-3xl border border-white/15 bg-[#12121e] p-6 sm:p-8 text-white shadow-2xl">
            <button
              onClick={() => setSelectedTyre(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="rounded-lg bg-orange-500/20 px-3 py-1 font-heading text-xs font-bold text-orange-400">
                {selectedTyre.brand}
              </span>
              <h3 className="font-heading text-2xl font-bold text-white">{selectedTyre.name}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-6">
              {/* Left Column: Image & Radar Chart */}
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="relative flex h-36 w-full items-center justify-center bg-black/20 rounded-2xl p-2 border border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none" />
                  <img src={selectedTyre.image} alt={selectedTyre.name} className="h-full object-contain animate-float relative z-10" />
                </div>
                <div className="w-full">
                  <TyreRadarChart tyres={[selectedTyre]} />
                </div>
              </div>

              {/* Right Column: Specs & Description */}
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/[0.01] p-3.5 rounded-2xl border border-white/5 font-medium">
                  {selectedTyre.description}
                </p>

                <div className="grid grid-cols-1 gap-2.5 text-[11px] font-mono bg-[#0a0a10]/60 p-4 rounded-2xl border border-white/5">
                  <div>Size: <strong className="text-white">{selectedTyre.size}</strong></div>
                  <div>Load Index: <strong className="text-slate-300">{selectedTyre.loadIndex}</strong></div>
                  <div>Speed Rating: <strong className="text-slate-300">{selectedTyre.speedRating}</strong></div>
                  <div>Wet Grip Class: <strong className="text-emerald-400">{selectedTyre.wetGrip}</strong></div>
                  <div>Fuel Saver Class: <strong className="text-amber-400">{selectedTyre.fuelEfficiency}</strong></div>
                  <div>Noise Rating: <strong className="text-slate-300">{selectedTyre.noise}</strong></div>
                  <div className="pt-2 border-t border-white/5 mt-1">
                    Est. Price: <strong className="text-orange-400">{selectedTyre.priceEstimate}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <a
                href={`tel:+9779851000000`}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 text-sm font-bold text-slate-950 shadow-lg hover:bg-orange-400"
              >
                <Phone className="h-4 w-4" />
                Call +977 98510-00000 For Price
              </a>
              <button
                onClick={() => setSelectedTyre(null)}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300 hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
