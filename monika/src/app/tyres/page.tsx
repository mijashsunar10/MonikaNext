"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { Search, SlidersHorizontal, Info, Phone, Disc, MapPin, Wrench, ArrowRightLeft, Trash2, X } from "lucide-react";
import { TYRES_DATA, TyreItem } from "@/data/tyres";
import TyreRadarChart from "@/components/TyreRadarChart";

export default function TyresPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTyre, setSelectedTyre] = useState<TyreItem | null>(null);
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc" | "grip">("name");
  const [comparedTyres, setComparedTyres] = useState<TyreItem[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const search = params.get("search");
      const category = params.get("category");
      if (search) setSearchQuery(search);
      if (category) setActiveCategory(category);
    }
  }, []);

  const handleToggleCompare = (tyre: TyreItem) => {
    setComparedTyres((prev) => {
      const exists = prev.find((t) => t.id === tyre.id);
      if (exists) {
        return prev.filter((t) => t.id !== tyre.id);
      }
      if (prev.length >= 3) {
        alert("You can compare up to 3 tyres at a time.");
        return prev;
      }
      return [...prev, tyre];
    });
  };

  const getMinPrice = (priceStr: string) => {
    if (priceStr.toLowerCase().includes("call")) return 999999;
    const matches = priceStr.match(/\d+[,]?\d*/g);
    if (matches && matches.length > 0) {
      return parseInt(matches[0].replace(/,/g, ""), 10);
    }
    return 0;
  };

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

  // Sort filtered tyres
  const sortedTyres = [...filteredTyres].sort((a, b) => {
    if (sortBy === "price-asc") {
      return getMinPrice(a.priceEstimate) - getMinPrice(b.priceEstimate);
    }
    if (sortBy === "price-desc") {
      return getMinPrice(b.priceEstimate) - getMinPrice(a.priceEstimate);
    }
    if (sortBy === "grip") {
      return a.wetGrip.localeCompare(b.wetGrip);
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="flex flex-col bg-[#07070a] text-slate-100 min-h-screen">
      
      {/* CATALOG INTERACTION SECTION */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-[#09090f] via-[#0b0b14] to-[#050508] relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* PAGE HEADING */}
          <div className="mb-8">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-wide text-white">
              EXPLORE OUR <span className="text-orange-500">TYRE INVENTORY</span>
            </h1>
            <p className="text-slate-400 text-sm mt-1.5 max-w-3xl">
              Find the perfect tyre fit for your passenger car, SUV, heavy commercial truck, or motorcycle with official warranty options.
            </p>
          </div>
          
          {/* SEARCH & FILTERS PANEL */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 shadow-2xl mb-12 space-y-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              
              {/* Search Bar Input */}
              <div className="relative w-full lg:w-96 flex items-center">
                <Search className="absolute left-4 h-4 w-4 text-orange-500" />
                <input
                  type="text"
                  placeholder="Search by size (e.g. 195/65), brand, or tyre name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-white/10 bg-[#141420] text-sm text-white placeholder-slate-500 outline-none focus:border-orange-500 transition-all font-semibold"
                />
              </div>

              {/* Sorting and Summary */}
              <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-semibold whitespace-nowrap">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="rounded-xl border border-white/10 bg-[#141420] px-3 py-2 text-xs font-bold text-white outline-none focus:border-orange-500 cursor-pointer"
                  >
                    <option value="name">Name (A-Z)</option>
                    <option value="price-asc">Price (Low to High)</option>
                    <option value="price-desc">Price (High to Low)</option>
                    <option value="grip">Wet Grip (A-Z)</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <SlidersHorizontal className="h-4 w-4 text-orange-500" />
                  Showing {sortedTyres.length} of {TYRES_DATA.length} Tyres
                </div>
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
          {sortedTyres.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedTyres.map((tyre) => (
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
                  <div className="mt-6 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 pt-4 border-t border-white/10">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400">Est. Price</div>
                      <div className="font-heading text-sm font-bold text-orange-400">{tyre.priceEstimate}</div>
                    </div>

                    <div className="flex gap-2 w-full xl:w-auto">
                      <button
                        onClick={() => handleToggleCompare(tyre)}
                        className={`flex flex-1 xl:flex-none items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all border ${
                          comparedTyres.some((t) => t.id === tyre.id)
                            ? "bg-amber-500/20 text-amber-400 border-amber-500/50"
                            : "bg-white/5 text-slate-400 border-white/10 hover:border-amber-500/40 hover:text-amber-400"
                        }`}
                      >
                        {comparedTyres.some((t) => t.id === tyre.id) ? "✓ Compared" : "+ Compare"}
                      </button>

                      <button
                        onClick={() => setSelectedTyre(tyre)}
                        className="flex flex-1 xl:flex-none items-center justify-center gap-1.5 rounded-xl bg-orange-500/20 px-3 py-2 text-xs font-bold text-orange-400 border border-orange-500/30 hover:bg-orange-500 hover:text-slate-950 transition-all"
                      >
                        <Info className="h-3.5 w-3.5" />
                        Details
                      </button>
                    </div>
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

      {/* COMPARISON TRAY BAR */}
      {comparedTyres.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0c0c14]/95 border-t border-white/10 py-4 px-6 backdrop-blur-md shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ArrowRightLeft className="h-5 w-5 text-orange-500" />
              <div>
                <h4 className="text-sm font-bold text-white">Tyre Comparison ({comparedTyres.length}/3)</h4>
                <p className="text-xs text-slate-400 hidden sm:block">Select up to 3 tyres to compare features side-by-side</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {comparedTyres.map((tyre) => (
                  <div key={tyre.id} className="relative group bg-white/5 border border-white/10 rounded-xl p-1.5 flex items-center gap-2 pr-6">
                    <img src={tyre.image} alt={tyre.name} className="h-7 w-7 object-contain" />
                    <span className="text-[11px] font-bold text-white truncate max-w-[80px]">{tyre.name}</span>
                    <button
                      onClick={() => handleToggleCompare(tyre)}
                      className="absolute top-1 right-1 text-slate-400 hover:text-white"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowComparison(true)}
                  disabled={comparedTyres.length < 2}
                  className="rounded-xl bg-orange-500 text-slate-950 px-5 py-2.5 text-xs font-bold shadow-md hover:bg-orange-400 disabled:opacity-50 disabled:hover:bg-orange-500 transition-colors"
                >
                  Compare Now
                </button>
                <button
                  onClick={() => setComparedTyres([])}
                  className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  title="Clear Comparison"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <div className="text-xs text-slate-400">Head Office Helpline</div>
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

      {/* COMPARISON MODAL */}
      {showComparison && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#12121e] p-6 sm:p-8 text-white shadow-2xl">
            <button
              onClick={() => setShowComparison(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="font-heading text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <ArrowRightLeft className="text-orange-500 h-6 w-6" />
              Side-by-Side Tyre Comparison
            </h3>

            {/* RADIAL VISUAL INTERACTIVE COMPARISON OVERLAY */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8 bg-[#0a0a10]/50 p-6 rounded-3xl border border-white/5 shadow-inner">
              <div className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-3">
                <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider">Visual Performance Spectrum</h4>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed font-medium">
                  Overlap metrics for Grip, Fuel Economy, Comfort, Life, and Price utility values.
                </p>
                <div className="w-full max-w-[280px]">
                  <TyreRadarChart tyres={comparedTyres} />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {comparedTyres.map((tyre, idx) => {
                    const colors = ["border-orange-500/30 bg-orange-500/[0.02]", "border-cyan-500/30 bg-cyan-500/[0.02]", "border-emerald-500/30 bg-emerald-500/[0.02]"];
                    const textColors = ["text-orange-400", "text-cyan-400", "text-emerald-400"];
                    const dots = ["bg-orange-500", "bg-cyan-500", "bg-emerald-500"];
                    return (
                      <div key={tyre.id} className={`p-4 rounded-2xl border ${colors[idx % 3]} space-y-2`}>
                        <div className="flex items-center gap-2">
                          <span className={`h-2.5 w-2.5 rounded-full ${dots[idx % 3]}`} />
                          <span className="font-heading text-sm font-bold text-white">{tyre.brand} {tyre.name}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-medium line-clamp-2">{tyre.description}</p>
                        <div className="flex justify-between items-center text-[10px] font-mono pt-1">
                          <span className="text-slate-300">Size: {tyre.size}</span>
                          <span className={textColors[idx % 3]}>{tyre.priceEstimate}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 pr-4 font-bold text-slate-400 uppercase tracking-wider text-xs">Specification</th>
                    {comparedTyres.map((tyre) => (
                      <th key={tyre.id} className="py-4 px-4 min-w-[200px]">
                        <div className="flex flex-col items-center text-center space-y-2">
                          <img src={tyre.image} alt={tyre.name} className="h-20 object-contain my-2" />
                          <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-md font-extrabold uppercase">{tyre.brand}</span>
                          <span className="font-heading text-lg font-bold text-white">{tyre.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3 pr-4 text-xs font-semibold text-slate-400">Estimated Price</td>
                    {comparedTyres.map((tyre) => (
                      <td key={tyre.id} className="py-3 px-4 font-bold text-orange-400">{tyre.priceEstimate}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-xs font-semibold text-slate-400">Tyre Size</td>
                    {comparedTyres.map((tyre) => (
                      <td key={tyre.id} className="py-3 px-4 font-semibold text-slate-200">{tyre.size}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-xs font-semibold text-slate-400">Category</td>
                    {comparedTyres.map((tyre) => (
                      <td key={tyre.id} className="py-3 px-4 capitalize text-slate-200">{tyre.category}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-xs font-semibold text-slate-400">Speed Rating</td>
                    {comparedTyres.map((tyre) => (
                      <td key={tyre.id} className="py-3 px-4 text-slate-200">{tyre.speedRating}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-xs font-semibold text-slate-400">Load Index</td>
                    {comparedTyres.map((tyre) => (
                      <td key={tyre.id} className="py-3 px-4 text-slate-200">{tyre.loadIndex}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-xs font-semibold text-slate-400">Wet Grip Class</td>
                    {comparedTyres.map((tyre) => (
                      <td key={tyre.id} className="py-3 px-4">
                        <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-bold ${
                          tyre.wetGrip === "A" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                        }`}>{tyre.wetGrip} (Excellent)</span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-xs font-semibold text-slate-400">Fuel Efficiency</td>
                    {comparedTyres.map((tyre) => (
                      <td key={tyre.id} className="py-3 px-4">
                        <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-bold ${
                          tyre.fuelEfficiency === "A" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                        }`}>{tyre.fuelEfficiency}</span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-xs font-semibold text-slate-400">Noise Level</td>
                    {comparedTyres.map((tyre) => (
                      <td key={tyre.id} className="py-3 px-4 text-slate-200 font-mono">{tyre.noise}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-xs font-semibold text-slate-400">Description</td>
                    {comparedTyres.map((tyre) => (
                      <td key={tyre.id} className="py-3 px-4 text-slate-400 text-xs leading-relaxed max-w-[250px]">{tyre.description}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <a
                href="tel:+9779851000000"
                className="flex items-center gap-2 rounded-xl bg-orange-500 py-3 px-6 text-sm font-bold text-slate-950 shadow-lg hover:bg-orange-400"
              >
                <Phone className="h-4 w-4" />
                Call Desk For Wholesale Quote
              </a>
              <button
                onClick={() => setShowComparison(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-white/10"
              >
                Go Back
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
