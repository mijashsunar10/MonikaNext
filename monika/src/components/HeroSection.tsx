"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck, Wrench, Search } from "lucide-react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"size" | "vehicle">("size");
  const [vehicleType, setVehicleType] = useState("Car / Sedan");
  const [tyreWidth, setTyreWidth] = useState("195");
  const [aspectRatio, setAspectRatio] = useState("65");
  const [rimSize, setRimSize] = useState("15");

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
              <a
                href="#tyres"
                className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50"
              >
                <span>Explore Tyres</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-orange-500/60 bg-orange-500/5 px-7 py-3.5 text-base font-bold text-orange-400 backdrop-blur-sm transition-all duration-300 hover:bg-orange-500 hover:text-slate-950 hover:border-orange-500"
              >
                <span>Wholesale & Contact</span>
              </a>
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
        <div id="finder" className="mt-12 rounded-3xl border border-white/10 bg-[#10101a]/95 p-6 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 text-orange-500">
                <Search className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">INTERACTIVE TYRE FINDER</h3>
                <p className="text-xs text-slate-400">Select your specifications to find matching tyres immediately</p>
              </div>
            </div>

            {/* TAB SELECTOR */}
            <div className="flex items-center rounded-full bg-white/5 p-1 border border-white/10">
              <button
                onClick={() => setActiveTab("size")}
                className={`rounded-full px-5 py-1.5 text-xs font-bold transition-all ${
                  activeTab === "size"
                    ? "bg-orange-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Search by Size
              </button>
              <button
                onClick={() => setActiveTab("vehicle")}
                className={`rounded-full px-5 py-1.5 text-xs font-bold transition-all ${
                  activeTab === "vehicle"
                    ? "bg-orange-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Search by Vehicle
              </button>
            </div>
          </div>

          {/* SEARCH BY SIZE FIELDS */}
          {activeTab === "size" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">WIDTH (mm)</label>
                <select
                  value={tyreWidth}
                  onChange={(e) => setTyreWidth(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#161624] px-4 py-3 text-sm font-semibold text-white outline-none focus:border-orange-500"
                >
                  <option value="175">175 mm</option>
                  <option value="185">185 mm</option>
                  <option value="195">195 mm</option>
                  <option value="205">205 mm</option>
                  <option value="215">215 mm</option>
                  <option value="225">225 mm</option>
                  <option value="265">265 mm</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 font-sans">ASPECT RATIO (%)</label>
                <select
                  value={aspectRatio}
                  onChange={(e) => setAspectRatio(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#161624] px-4 py-3 text-sm font-semibold text-white outline-none focus:border-orange-500"
                >
                  <option value="55">55</option>
                  <option value="60">60</option>
                  <option value="65">65</option>
                  <option value="70">70</option>
                  <option value="75">75</option>
                  <option value="80">80</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">RIM SIZE (Inches)</label>
                <select
                  value={rimSize}
                  onChange={(e) => setRimSize(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#161624] px-4 py-3 text-sm font-semibold text-white outline-none focus:border-orange-500"
                >
                  <option value="13">R13&quot;</option>
                  <option value="14">R14&quot;</option>
                  <option value="15">R15&quot;</option>
                  <option value="16">R16&quot;</option>
                  <option value="17">R17&quot;</option>
                  <option value="18">R18&quot;</option>
                  <option value="20">R20&quot;</option>
                </select>
              </div>

              <a
                href="#tyres"
                className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg hover:bg-orange-400 transition-all cursor-pointer"
              >
                <Search className="h-4 w-4" />
                Search Tyres ({tyreWidth}/{aspectRatio} R{rimSize})
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">VEHICLE TYPE</label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#161624] px-4 py-3 text-sm font-semibold text-white outline-none focus:border-orange-500"
                >
                  <option value="Car / Sedan">Passenger Car / Hatchback / Sedan</option>
                  <option value="SUV / 4x4">SUV / Pickup / 4x4 Cross</option>
                  <option value="Truck & Bus">Heavy Duty Truck & Commercial Bus</option>
                  <option value="Motorcycle">Motorcycle & Scooter</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">DRIVING CONDITIONS</label>
                <select className="w-full rounded-xl border border-white/10 bg-[#161624] px-4 py-3 text-sm font-semibold text-white outline-none focus:border-orange-500">
                  <option>City Highway Driving</option>
                  <option>All-Terrain / Off-Road Dirt</option>
                  <option>Heavy Freight / Load Bearing</option>
                  <option>High Speed Performance</option>
                </select>
              </div>

              <a
                href="#tyres"
                className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg hover:bg-orange-400 transition-all"
              >
                <Search className="h-4 w-4" />
                Find Tyres for {vehicleType}
              </a>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
