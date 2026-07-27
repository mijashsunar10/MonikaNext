"use client";

import { Info, ArrowRight, ShieldCheck, Wrench, Calendar, Settings } from "lucide-react";
import Link from "next/link";
import { TYRES_DATA } from "@/data/tyres";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FeaturedShowcase() {
  const featured = TYRES_DATA.filter((t) => t.featured).slice(0, 3);
  const [revealRef, isRevealed] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={revealRef as any}
      className={`relative w-full bg-[#07070d] py-20 text-white overflow-hidden border-t border-white/5 reveal-element ${
        isRevealed ? "revealed" : ""
      }`}
    >
      {/* Background neon orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest">
              HOT SELLERS
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
              POPULAR <span className="text-orange-500">TYRE CHOICE</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Explore our highest rated tyres chosen by vehicle owners across Nepal for their superior road safety and tread longevity.
            </p>
          </div>
          <Link
            href="/tyres"
            className="inline-flex items-center gap-2 text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors border-b border-orange-500/30 pb-1"
          >
            <span>View All Tyres</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* FEATURED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((tyre, idx) => (
            <div
              key={tyre.id}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className="reveal-stagger-item"
            >
              <div className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] border border-white/5 h-full">
                {/* BRAND */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="rounded-lg bg-orange-500/20 px-3 py-1 font-heading text-xs font-bold text-orange-400 tracking-wider">
                    {tyre.brand}
                  </span>
                  {tyre.badge && (
                    <span className="rounded-full bg-amber-500 text-slate-950 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wide">
                      {tyre.badge}
                    </span>
                  )}
                </div>

                {/* IMAGE */}
                <div className="relative flex h-40 w-full items-center justify-center my-4">
                  <img
                    src={tyre.image}
                    alt={tyre.name}
                    className="h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:rotate-6 transition-transform duration-500"
                  />
                </div>

                {/* DETAILS */}
                <div className="space-y-3 mt-4">
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {tyre.name}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-300 font-mono bg-white/5 rounded-xl px-3 py-2 border border-white/5">
                    <span>Size: <strong className="text-white">{tyre.size}</strong></span>
                    <span>Wet Grip: <strong className="text-emerald-400">{tyre.wetGrip}</strong></span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {tyre.description}
                  </p>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="font-heading text-sm font-bold text-orange-400">{tyre.priceEstimate}</span>
                    <Link
                      href={`/tyres?search=${encodeURIComponent(tyre.name)}`}
                      className="flex items-center gap-1.5 rounded-xl bg-orange-500/20 px-3.5 py-2 text-xs font-bold text-orange-400 border border-orange-500/30 hover:bg-orange-500 hover:text-slate-950 transition-all"
                    >
                      <Info className="h-3.5 w-3.5" />
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HOW IT WORKS / FITMENT PROCESS */}
        <div className="mt-24 pt-16 border-t border-white/5">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest">
              SERVICE WORKFLOW
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              HOW TO GET YOUR TYRES <span className="text-orange-500">FITTED</span>
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Simple 3-step process to get genuine tyres delivered or fitted with official manufacturer warranty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              {
                num: 1,
                title: "Select Your Tyre",
                desc: "Use our interactive tyre finder tool or browse our catalog by brand, size, or vehicle category.",
                color: "orange",
              },
              {
                num: 2,
                title: "Get Wholesale Quote",
                desc: "Submit an instant quote form or contact our Balaju/Teku hotline for customized pricing and bulk freight details.",
                color: "amber",
              },
              {
                num: 3,
                title: "Free Fitting or Delivery",
                desc: "Visit our state-of-the-art Kathmandu workshops for free expert fitting and 3D wheel balancing, or enjoy express freight shipping.",
                color: "orange",
              },
            ].map((step, idx) => (
              <div
                key={step.num}
                style={{ transitionDelay: `${idx * 150}ms` }}
                className="reveal-stagger-item"
              >
                <div className="glass-card rounded-3xl p-8 relative border border-white/5 space-y-4 h-full">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    step.color === "orange"
                      ? "bg-orange-500/10 text-orange-500 border border-orange-500/20"
                      : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                  } font-heading text-xl font-bold`}>
                    {step.num}
                  </div>
                  <h4 className="font-heading text-xl font-bold text-white">{step.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

