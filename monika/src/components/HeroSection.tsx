"use client";

import { ArrowRight, ShieldCheck, Wrench } from "lucide-react";
import Link from "next/link";
import TyreFinder from "./TyreFinder";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-[#050508] via-[#09090f] to-[#0f0f18] text-white flex flex-col justify-center">
      {/* BACKGROUND TYRE PATTERN */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 z-0">
        <div className="h-[900px] w-[900px] rounded-full overflow-hidden animate-rotate-slow">
          <img
            src="https://monikasuppliers.com.np/wp-content/uploads/2025/12/tyre.jpeg"
            alt="Monika Tyre Suppliers Background"
            className="h-full w-full object-cover rounded-full filter saturate-200"
          />
        </div>
      </div>

      {/* DYNAMIC SPEED LINES */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0 animate-move-lines bg-[repeating-linear-gradient(90deg,transparent,transparent_80px,rgba(255,122,0,0.06)_100px)]" />

      {/* RADIAL GLOW ORB */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/15 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO HEADLINE & ACTIONS (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* SINCE 2005 BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 backdrop-blur-md shadow-lg shadow-orange-500/10">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping" />
              <span className="text-xs font-bold tracking-widest text-orange-400 uppercase">
                EST. 2005 • NEPAL&apos;S TRUSTED TYRE DISTRIBUTOR
              </span>
            </div>

            {/* MAIN HEADLINE */}
            <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-wide text-white">
              MONIKA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 drop-shadow-sm">
                TYRE SUPPLIERS
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Power, performance, and reliability on every road. We supply premium international tyre brands engineered for maximum grip, high durability, and ultimate safety.
            </p>

            {/* HERO CALL TO ACTIONS */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/tyres"
                className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50"
              >
                <span>Explore Tyres</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-orange-500/60 bg-orange-500/5 px-7 py-3.5 text-base font-bold text-orange-400 backdrop-blur-sm transition-all duration-300 hover:bg-orange-500 hover:text-slate-950 hover:border-orange-500"
              >
                <span>Wholesale & Contact</span>
              </Link>
            </div>

            {/* TRUST HIGHLIGHT STATS */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white">20+</div>
                <div className="text-xs text-slate-400 font-medium">Years Legacy</div>
              </div>
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-bold text-orange-500">50K+</div>
                <div className="text-xs text-slate-400 font-medium">Tyres Delivered</div>
              </div>
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white">100%</div>
                <div className="text-xs text-slate-400 font-medium">Genuine Guarantee</div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: REVOLVING TYRE STAGE & FAST SEARCH WIDGET (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* GLOWING TYRE STAGE */}
            <div className="relative flex items-center justify-center w-full max-w-[420px] aspect-square">
              
              {/* BACKDROP NEON RINGS */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-500/30 animate-rotate-slow" />
              <div className="absolute inset-4 rounded-full border border-orange-500/20 animate-rotate-reverse" />
              
              {/* TYRE IMAGE CONTAINMENT */}
              <div className="relative z-10 w-[82%] h-[82%] rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(255,122,0,0.25)] transition-transform duration-500 hover:scale-105">
                <img
                  src="https://monikasuppliers.com.np/wp-content/uploads/2025/12/image-Photoroom-2-1.png"
                  alt="Monika Premium Tyre"
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] animate-rotate-slow"
                />
              </div>

              {/* OVERLAY BADGE 1: HIGH TREAD GRIP */}
              <div className="absolute -top-2 -left-2 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#12121c]/80 px-3.5 py-2 backdrop-blur-md shadow-xl animate-float">
                <ShieldCheck className="h-5 w-5 text-orange-500" />
                <div>
                  <div className="text-[11px] font-bold text-white">Premium Tread</div>
                  <div className="text-[9px] text-slate-400">All-Weather Grip</div>
                </div>
              </div>

              {/* OVERLAY BADGE 2: FREE FITTING */}
              <div className="absolute -bottom-2 -right-2 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#12121c]/80 px-3.5 py-2 backdrop-blur-md shadow-xl">
                <Wrench className="h-5 w-5 text-amber-500" />
                <div>
                  <div className="text-[11px] font-bold text-white">Free Fitting</div>
                  <div className="text-[9px] text-slate-400">At Authorized Hubs</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* HERO QUICK TYRE FINDER TOOL (BAR AT BOTTOM OF HERO) */}
        <div className="mt-12">
          <TyreFinder />
        </div>

      </div>
    </section>
  );
}
