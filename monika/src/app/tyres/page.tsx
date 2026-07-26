"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { Search, SlidersHorizontal, Info, Phone, Disc, MapPin, Wrench } from "lucide-react";
import { TYRES_DATA, TyreItem } from "@/data/tyres";

export default function TyresPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTyre, setSelectedTyre] = useState<TyreItem | null>(null);

  // Filter based on both Search Query (brand, size, name) and Active Category
  const filteredTyres = TYRES_DATA.filter((tyre) => {
    const matchesCategory = activeCategory === "all" || tyre.category === activeCategory;
    const matchesSearch =
      tyre.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tyre.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tyre.size.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tyre.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col bg-[#07070a] text-slate-100 min-h-screen">
      
      {/* 1. HERO HEADER BANNER */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#09090f] to-[#07070a] overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_80px,rgba(255,122,0,0.1)_100px)] animate-move-lines" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest">
            OFFICIAL CATALOGUE
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-wide text-white">
            EXPLORE OUR <span className="text-orange-500">TYRE INVENTORY</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Find the perfect tyre fit for your passenger car, SUV, heavy commercial truck, or motorcycle with official warranty options.
          </p>
        </div>
      </section>

      {/* 2. CATALOG INTERACTION SECTION */}
      <section className="py-12 bg-gradient-to-b from-[#07070a] via-[#0b0b14] to-[#050508] relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* SEARCH & FILTERS PANEL */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 shadow-2xl mb-12 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Search Bar Input */}
              <div className="relative w-full md:w-96 flex items-center">
                <Search className="absolute left-4 h-4 w-4 text-orange-500" />
                <input
                  type="text"
                  placeholder="Search by size (e.g. 195/65), brand, or tyre name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-white/10 bg-[#141420] text-sm text-white placeholder-slate-500 outline-none focus:border-orange-500 transition-all font-semibold"
                />
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <SlidersHorizontal className="h-4 w-4 text-orange-500" />
                Showing {filteredTyres.length} of {TYRES_DATA.length} Tyres
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
              {[
                { id: "all", label: "All Products" },
                { id: "car", label: "Cars & Sedans" },
                { id: "suv", label: "SUVs & Off-Road" },
                { id: "truck", label: "Commercial Trucks" },
                { id: "sport", label: "Sports Performance" },
                { id: "bike", label: "Bikes & Scooters" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                  }}
                  className={`rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-orange-500 text-slate-950 shadow-md shadow-orange-500/25"
                      : "border border-white/10 bg-white/5 text-slate-300 hover:border-orange-500/50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* CATALOG GRID */}
          {filteredTyres.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTyres.map((tyre) => (
                <div
                  key={tyre.id}
                  className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] border border-white/5"
                >
                  {/* BRAND & BADGE ACCENT */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="rounded-lg bg-orange-500/20 px-3 py-1 font-heading text-xs font-bold text-orange-400 tracking-wider">
                      {tyre.brand}
                    </span>
                    {tyre.badge ? (
                      <span className="rounded-full bg-amber-500 text-slate-950 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide">
                        {tyre.badge}
                      </span>
                    ) : tyre.featured ? (
                      <span className="rounded-full bg-orange-500 text-slate-950 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide">
                        FEATURED
                      </span>
                    ) : null}
                  </div>

                  {/* IMAGE GRID STAGE */}
                  <div className="relative flex h-48 w-full items-center justify-center my-2">
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent rounded-2xl" />
                    <img
                      src={tyre.image}
                      alt={tyre.name}
                      className="h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* SPEC INFO DETAILS */}
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

                    {/* RATINGS BAR */}
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

                  {/* CTA CARD FOOTER */}
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
          ) : (
            <div className="text-center py-20 rounded-3xl border border-white/5 bg-[#0e0e1a] space-y-4 max-w-xl mx-auto">
              <Disc className="h-12 w-12 text-orange-500 mx-auto animate-spin" />
              <h3 className="font-heading text-2xl font-bold text-white">No Matching Tyres Found</h3>
              <p className="text-sm text-slate-400 max-w-xs mx-auto">
                We couldn&apos;t find any tyres matching your active filter or search keywords. Please clear your search and try again.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="rounded-full bg-orange-500 text-slate-950 px-6 py-2.5 text-xs font-bold shadow-md hover:bg-orange-400 transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 3. VALUE PROPOSITION HUB */}
      <section className="py-20 bg-gradient-to-b from-[#050508] to-[#040407] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-[#0e0e1a] p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-[10px] font-bold text-orange-400 uppercase tracking-widest">
                  <Wrench className="h-3.5 w-3.5" /> Auto Workshop Services Included
                </div>
                <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white">
                  NEED A CUSTOM WHOLESALE QUOTE <span className="text-orange-500">FOR YOUR FLEET?</span>
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  We supply commercial businesses, transport groups, and local retailers with customized pricing plans. Every bulk tyre purchase includes expert mounting, 3D laser alignment, and priority courier shipping across Nepal.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3 text-center sm:text-left bg-black/40 p-6 rounded-2xl border border-white/5">
                <div className="text-xs text-slate-400">Head Office Hotline</div>
                <a href="tel:+9779851000000" className="font-heading text-2xl sm:text-3xl font-bold text-orange-400 hover:text-orange-300 transition-colors">
                  +977 98510-00000
                </a>
                <div className="flex items-center gap-1.5 justify-center sm:justify-start text-xs text-slate-400 font-medium">
                  <MapPin className="h-4 w-4 text-amber-500" /> Balaju & Teku, Kathmandu
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK MODAL DETAIL */}
      {selectedTyre && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl border border-white/15 bg-[#12121e] p-6 sm:p-8 text-white shadow-2xl">
            <button
              onClick={() => setSelectedTyre(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-lg bg-orange-500/20 px-3 py-1 font-heading text-xs font-bold text-orange-400">
                {selectedTyre.brand}
              </span>
              <h3 className="font-heading text-2xl font-bold text-white">{selectedTyre.name}</h3>
            </div>

            <div className="flex justify-center py-4">
              <img src={selectedTyre.image} alt={selectedTyre.name} className="h-40 object-contain" />
            </div>

            <p className="text-sm text-slate-300 mb-4">{selectedTyre.description}</p>

            <div className="grid grid-cols-2 gap-3 text-xs mb-6 bg-white/5 p-4 rounded-2xl border border-white/5">
              <div>Size: <strong className="text-white">{selectedTyre.size}</strong></div>
              <div>Load Index: <strong className="text-white">{selectedTyre.loadIndex}</strong></div>
              <div>Speed Index: <strong className="text-white">{selectedTyre.speedRating}</strong></div>
              <div>Est. Price: <strong className="text-orange-400">{selectedTyre.priceEstimate}</strong></div>
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

      {/* 4. FOOTER */}
      <Footer />
    </div>
  );
}
