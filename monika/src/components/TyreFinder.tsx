"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

export default function TyreFinder() {
  const [activeTab, setActiveTab] = useState<"size" | "vehicle">("size");
  const [vehicleType, setVehicleType] = useState("Car / Sedan");
  const [tyreWidth, setTyreWidth] = useState("195");
  const [aspectRatio, setAspectRatio] = useState("65");
  const [rimSize, setRimSize] = useState("15");

  const getCategoryFromVehicle = (type: string) => {
    if (type.includes("SUV")) return "suv";
    if (type.includes("Truck")) return "truck";
    if (type.includes("Motorcycle")) return "bike";
    return "car";
  };

  return (
    <div id="finder" className="rounded-3xl border border-white/10 bg-[#10101a]/95 p-6 backdrop-blur-xl shadow-2xl">
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

          <Link
            href={`/tyres?search=${tyreWidth}/${aspectRatio}%20R${rimSize}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg hover:bg-orange-400 transition-all cursor-pointer"
          >
            <Search className="h-4 w-4" />
            Search Tyres ({tyreWidth}/{aspectRatio} R{rimSize})
          </Link>
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

          <Link
            href={`/tyres?category=${getCategoryFromVehicle(vehicleType)}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg hover:bg-orange-400 transition-all"
          >
            <Search className="h-4 w-4" />
            Find Tyres for {vehicleType}
          </Link>
        </div>
      )}
    </div>
  );
}
