"use client";

import { useState } from "react";
import { Zap, Info, Phone } from "lucide-react";

interface TyreItem {
  id: string;
  name: string;
  brand: string;
  category: "car" | "suv" | "truck" | "sport" | "bike";
  size: string;
  speedRating: string;
  loadIndex: string;
  priceEstimate: string;
  image: string;
  badge?: string;
  wetGrip: "A" | "B" | "C";
  fuelEfficiency: "A" | "B" | "C";
  noise: string;
  description: string;
}

const TYRES_DATA: TyreItem[] = [
  {
    id: "1",
    name: "Turanza T005",
    brand: "BRIDGESTONE",
    category: "car",
    size: "195/65 R15",
    speedRating: "V (Up to 240 km/h)",
    loadIndex: "91 (615 kg)",
    priceEstimate: "Rs. 11,500 - 13,200",
    image: "https://monikasuppliers.com.np/wp-content/uploads/2025/12/image-Photoroom-2-1.png",
    badge: "TOP SELLER",
    wetGrip: "A",
    fuelEfficiency: "B",
    noise: "69 dB",
    description: "Best-in-class wet braking and turning response. Designed for smooth, noise-free highway cruising.",
  },
  {
    id: "2",
    name: "Geolandar A/T G015",
    brand: "YOKOHAMA",
    category: "suv",
    size: "265/65 R17",
    speedRating: "H (Up to 210 km/h)",
    loadIndex: "112 (1120 kg)",
    priceEstimate: "Rs. 24,000 - 27,500",
    image: "https://monikasuppliers.com.np/wp-content/uploads/2025/12/image-Photoroom-2-1.png",
    badge: "OFF-ROAD TOUGH",
    wetGrip: "A",
    fuelEfficiency: "C",
    noise: "72 dB",
    description: "All-terrain monster engineered to conquer rough Nepalese mountain roads and muddy highway conditions.",
  },
  {
    id: "3",
    name: "Primacy 4+",
    brand: "MICHELIN",
    category: "car",
    size: "205/55 R16",
    speedRating: "W (Up to 270 km/h)",
    loadIndex: "91 (615 kg)",
    priceEstimate: "Rs. 14,800 - 16,500",
    image: "https://monikasuppliers.com.np/wp-content/uploads/2025/12/image-Photoroom-2-1.png",
    badge: "LONGEST TREAD LIFE",
    wetGrip: "A",
    fuelEfficiency: "A",
    noise: "68 dB",
    description: "Delivers maximum safety built to last over 60,000 km with unmatched silent cabin acoustics.",
  },
  {
    id: "4",
    name: "Super Lug S+ Radial",
    brand: "MRF",
    category: "truck",
    size: "10.00-20 16PR",
    speedRating: "K (Up to 110 km/h)",
    loadIndex: "146/143 (3000 kg)",
    priceEstimate: "Call for Wholesale Quote",
    image: "https://monikasuppliers.com.np/wp-content/uploads/2025/12/tyre.jpeg",
    badge: "HEAVY FREIGHT",
    wetGrip: "B",
    fuelEfficiency: "B",
    noise: "74 dB",
    description: "Ultra heavy-duty steel belt radial for high payload commercial trucks operating on steep inclines.",
  },
  {
    id: "5",
    name: "P Zero Corsa",
    brand: "PIRELLI",
    category: "sport",
    size: "245/40 R18",
    speedRating: "Y (Up to 300 km/h)",
    loadIndex: "97 (730 kg)",
    priceEstimate: "Rs. 32,000 - 36,000",
    image: "https://monikasuppliers.com.np/wp-content/uploads/2025/12/image-Photoroom-2-1.png",
    badge: "TRACK & HIGHWAY",
    wetGrip: "A",
    fuelEfficiency: "C",
    noise: "71 dB",
    description: "Extreme precision cornering grip developed in motorsport labs for luxury sports cars.",
  },
  {
    id: "6",
    name: "Secura Zoom F",
    brand: "CEAT",
    category: "bike",
    size: "100/80 - 17",
    speedRating: "P (Up to 150 km/h)",
    loadIndex: "52 (200 kg)",
    priceEstimate: "Rs. 4,200 - 5,100",
    image: "https://monikasuppliers.com.np/wp-content/uploads/2025/12/image-Photoroom-2-1.png",
    badge: "BIKE FAVORITE",
    wetGrip: "A",
    fuelEfficiency: "A",
    noise: "67 dB",
    description: "High direction stability and continuous tread groove for sportbikes and commuter motorcycles.",
  },
];

export default function TyreCategoryShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedTyre, setSelectedTyre] = useState<TyreItem | null>(null);

  const filteredTyres = activeCategory === "all"
    ? TYRES_DATA
    : TYRES_DATA.filter((t) => t.category === activeCategory);

  return (
    <section id="tyres" className="relative w-full bg-[#0a0a12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest">
            <Zap className="h-3.5 w-3.5" />
            CATALOGUE & PRODUCT RANGE
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            PREMIUM TYRES FOR EVERY <span className="text-orange-500">TERRAIN & VEHICLE</span>
          </h2>
          <p className="text-slate-300 text-base">
            Explore 100% genuine tyres imported from top Japanese, European, and American manufacturers with official warranty.
          </p>
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: "all", label: "All Tyres" },
            { id: "car", label: "Passenger Cars & Sedans" },
            { id: "suv", label: "SUVs & 4x4" },
            { id: "truck", label: "Heavy Duty & Commercial" },
            { id: "sport", label: "Performance & Sport" },
            { id: "bike", label: "Motorcycle & Scooter" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-6 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 shadow-lg shadow-orange-500/25 scale-105"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-orange-500/50 hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* TYRE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTyres.map((tyre) => (
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

      </div>

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
    </section>
  );
}
