"use client";

import React, { useState, useEffect } from "react";
import { Disc, Car, Truck, Zap, CheckCircle2, RotateCw, Play, Pause } from "lucide-react";
import { TYRES_DATA, TyreItem } from "@/data/tyres";

// Vehicle Categories and Match Criteria
interface Vehicle {
  id: string;
  name: string;
  type: string;
  desc: string;
  frontWheel: { cx: number; cy: number; r: number };
  rearWheel: { cx: number; cy: number; r: number };
  bodyPath: string;
  windowPath: string;
  perfectTyreId: string; // The tyre ID that triggers "Perfect Match" confetti
}

const VEHICLES: Vehicle[] = [
  {
    id: "sedan",
    name: "Sport Sedan",
    type: "Car",
    desc: "Low center of gravity, built for responsive handling and highway performance.",
    frontWheel: { cx: 160, cy: 155, r: 28 },
    rearWheel: { cx: 440, cy: 155, r: 28 },
    // Custom vector car paths
    bodyPath: "M 60,155 L 60,135 Q 60,120 85,120 L 120,118 Q 135,118 150,110 L 190,75 Q 215,55 250,55 L 360,55 Q 395,55 425,78 L 470,115 L 500,115 Q 540,115 540,135 L 540,155 Z",
    windowPath: "M 200,80 L 250,80 L 250,110 L 175,110 Z M 265,80 L 350,80 L 350,110 L 265,110 Z",
    perfectTyreId: "t1", // Michelin Pilot Sport
  },
  {
    id: "suv",
    name: "Premium SUV",
    type: "SUV",
    desc: "All-weather cruiser requiring a balance of heavy load comfort and grip.",
    frontWheel: { cx: 150, cy: 150, r: 32 },
    rearWheel: { cx: 450, cy: 150, r: 32 },
    bodyPath: "M 50,150 L 50,115 Q 50,95 80,95 L 140,95 Q 160,95 180,82 L 230,50 Q 250,42 275,42 L 440,42 Q 470,42 470,75 L 470,105 L 515,108 Q 550,110 550,130 L 550,150 Z",
    windowPath: "M 195,85 L 245,55 L 320,55 L 320,85 Z M 335,55 L 430,55 L 415,85 L 335,85 Z",
    perfectTyreId: "t3", // Bridgestone Alenza
  },
  {
    id: "pickup",
    name: "Offroad Pickup",
    type: "Truck",
    desc: "Heavy utility workhorse built for rugged terrain, rocky roads and high payloads.",
    frontWheel: { cx: 145, cy: 145, r: 35 },
    rearWheel: { cx: 455, cy: 145, r: 35 },
    bodyPath: "M 40,145 L 40,110 Q 40,90 70,90 L 135,90 Q 155,90 175,75 L 210,50 Q 230,42 260,42 L 380,42 Q 395,42 395,60 L 395,110 L 530,110 Q 560,110 560,125 L 560,145 Z",
    windowPath: "M 185,82 L 225,55 L 305,55 L 305,82 Z M 320,55 L 380,55 L 380,82 L 320,82 Z",
    perfectTyreId: "t2", // Yokohama Geolandar
  },
];

export default function TyreSimulator() {
  const [activeVehicle, setActiveVehicle] = useState<Vehicle>(VEHICLES[0]);
  const [activeTyre, setActiveTyre] = useState<TyreItem>(TYRES_DATA[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confetti, setConfetti] = useState<{ id: number; x: number; y: number; color: string; size: number }[]>([]);
  const [perfectMatch, setPerfectMatch] = useState(false);

  // Trigger loading spinner when vehicle changes
  const handleVehicleChange = (vehicle: Vehicle) => {
    setLoading(true);
    setActiveVehicle(vehicle);
    setTimeout(() => {
      setLoading(false);
    }, 450);
  };

  // Run confetti logic when tyre matches the vehicle's perfectTyreId
  useEffect(() => {
    if (activeTyre.id === activeVehicle.perfectTyreId) {
      setPerfectMatch(true);
      // Trigger particles
      const newParticles = Array.from({ length: 60 }).map((_, i) => ({
        id: Math.random(),
        x: Math.random() * 100, // percentage width
        y: Math.random() * 80 + 10, // percentage height
        color: ["#FF7A00", "#FFB800", "#10B981", "#2FB4E5", "#EC4899"][Math.floor(Math.random() * 5)],
        size: Math.random() * 8 + 4,
      }));
      setConfetti(newParticles);
      const timer = setTimeout(() => setConfetti([]), 3500);
      return () => clearTimeout(timer);
    } else {
      setPerfectMatch(false);
      setConfetti([]);
    }
  }, [activeTyre, activeVehicle]);

  return (
    <div className="space-y-8 relative overflow-hidden">
      
      {/* CSS Confetti Overlay */}
      {confetti.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full pointer-events-none z-50 animate-floatConfetti"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`,
          }}
        />
      ))}

      {/* VIEWPORT ROW: VEHICLE STAGE & SIMULATION STATS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left 8 cols: Car Canvas display */}
        <div className="lg:col-span-8 flex flex-col justify-between glass-card p-6 rounded-3xl border border-white/5 bg-[#0a0a14]/60 relative overflow-hidden min-h-[380px]">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/[0.02] to-transparent pointer-events-none" />

          {/* Canvas Title & Drive State */}
          <div className="flex items-center justify-between z-10">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400">Preview Stage</span>
              <h3 className="font-heading text-xl font-bold text-white mt-0.5">{activeVehicle.name}</h3>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition-all shadow-md ${
                isPlaying
                  ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-slate-950"
                  : "bg-orange-500 text-slate-950 hover:bg-orange-400 hover:scale-105"
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3.5 w-3.5 fill-red-400 group-hover:fill-slate-950" /> Stop Simulation
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 fill-slate-950" /> Simulate Drive
                </>
              )}
            </button>
          </div>

          {/* CENTRAL CAR STAGE */}
          <div className="flex-1 flex items-center justify-center py-6 relative z-10">
            {loading ? (
              <div className="flex flex-col items-center justify-center space-y-3">
                <RotateCw className="h-10 w-10 text-orange-500 animate-spin" />
                <span className="text-xs text-slate-400 font-mono">Assembling Chassis...</span>
              </div>
            ) : (
              <div className="w-full max-w-[580px] relative">
                {/* SVG Car wireframe */}
                <svg viewBox="0 0 600 200" className="w-full h-auto overflow-visible">
                  {/* Road Shadow */}
                  <ellipse cx="300" cy="165" rx="270" ry="12" className="fill-black/60 blur-[3px]" />

                  {/* Dynamic Speed lines when moving */}
                  {isPlaying && (
                    <g className="stroke-orange-500/30 stroke-1 stroke-dasharray-[8,8]">
                      <line x1="20" y1="168" x2="-80" y2="168" className="animate-[moveLines_0.6s_linear_infinite]" />
                      <line x1="580" y1="168" x2="480" y2="168" className="animate-[moveLines_0.6s_linear_infinite]" />
                      <line x1="300" y1="30" x2="200" y2="30" className="animate-[moveLines_1s_linear_infinite]" />
                    </g>
                  )}

                  {/* Car Window */}
                  <path
                    d={activeVehicle.windowPath}
                    className="fill-[#141424] stroke-white/10 stroke-[1.5]"
                  />

                  {/* Main Car Body Profile */}
                  <path
                    d={activeVehicle.bodyPath}
                    className="fill-[#10101b] stroke-white/15 stroke-2 shadow-inner"
                  />

                  {/* Rear Wheel Arch cover */}
                  <path d={`M ${activeVehicle.rearWheel.cx - activeVehicle.rearWheel.r - 8},155 A ${activeVehicle.rearWheel.r + 8},${activeVehicle.rearWheel.r + 8} 0 0,1 ${activeVehicle.rearWheel.cx + activeVehicle.rearWheel.r + 8},155`} className="fill-transparent stroke-[#1b1b26] stroke-4" />
                  {/* Front Wheel Arch cover */}
                  <path d={`M ${activeVehicle.frontWheel.cx - activeVehicle.frontWheel.r - 8},155 A ${activeVehicle.frontWheel.r + 8},${activeVehicle.frontWheel.r + 8} 0 0,1 ${activeVehicle.frontWheel.cx + activeVehicle.frontWheel.r + 8},155`} className="fill-transparent stroke-[#1b1b26] stroke-4" />

                  {/* FRONT WHEEL ASSEMBLY */}
                  <g 
                    className={isPlaying ? "animate-spin-wheel" : ""}
                    style={{ transformOrigin: `${activeVehicle.frontWheel.cx}px ${activeVehicle.frontWheel.cy}px` }}
                  >
                    {/* Outer Rubber tyre border */}
                    <circle
                      cx={activeVehicle.frontWheel.cx}
                      cy={activeVehicle.frontWheel.cy}
                      r={activeVehicle.frontWheel.r}
                      className="fill-transparent stroke-[#181822] transition-all"
                      strokeWidth="10"
                    />
                    {/* Rim Outline */}
                    <circle
                      cx={activeVehicle.frontWheel.cx}
                      cy={activeVehicle.frontWheel.cy}
                      r={activeVehicle.frontWheel.r - 5}
                      className="fill-black/80 stroke-orange-500/80 stroke-[1.5]"
                    />
                    {/* Hub Spines */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                      const rad = (angle * Math.PI) / 180;
                      const x1 = activeVehicle.frontWheel.cx + (activeVehicle.frontWheel.r - 16) * Math.cos(rad);
                      const y1 = activeVehicle.frontWheel.cy + (activeVehicle.frontWheel.r - 16) * Math.sin(rad);
                      const x2 = activeVehicle.frontWheel.cx + (activeVehicle.frontWheel.r - 5) * Math.cos(rad);
                      const y2 = activeVehicle.frontWheel.cy + (activeVehicle.frontWheel.r - 5) * Math.sin(rad);
                      return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-orange-500/40 stroke-1" />;
                    })}
                  </g>

                  {/* REAR WHEEL ASSEMBLY */}
                  <g 
                    className={isPlaying ? "animate-spin-wheel" : ""}
                    style={{ transformOrigin: `${activeVehicle.rearWheel.cx}px ${activeVehicle.rearWheel.cy}px` }}
                  >
                    {/* Outer Rubber tyre border */}
                    <circle
                      cx={activeVehicle.rearWheel.cx}
                      cy={activeVehicle.rearWheel.cy}
                      r={activeVehicle.rearWheel.r}
                      className="fill-transparent stroke-[#181822] transition-all"
                      strokeWidth="10"
                    />
                    {/* Rim Outline */}
                    <circle
                      cx={activeVehicle.rearWheel.cx}
                      cy={activeVehicle.rearWheel.cy}
                      r={activeVehicle.rearWheel.r - 5}
                      className="fill-black/80 stroke-orange-500/80 stroke-[1.5]"
                    />
                    {/* Hub Spines */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                      const rad = (angle * Math.PI) / 180;
                      const x1 = activeVehicle.rearWheel.cx + (activeVehicle.rearWheel.r - 16) * Math.cos(rad);
                      const y1 = activeVehicle.rearWheel.cy + (activeVehicle.rearWheel.r - 16) * Math.sin(rad);
                      const x2 = activeVehicle.rearWheel.cx + (activeVehicle.rearWheel.r - 5) * Math.cos(rad);
                      const y2 = activeVehicle.rearWheel.cy + (activeVehicle.rearWheel.r - 5) * Math.sin(rad);
                      return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-orange-500/40 stroke-1" />;
                    })}
                  </g>
                </svg>
              </div>
            )}
          </div>

          {/* MATCH STATUS DISPLAY */}
          <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4 z-10">
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {activeVehicle.desc}
            </p>

            {perfectMatch ? (
              <div className="flex items-center gap-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 text-xs font-bold text-emerald-400 animate-bounce">
                <CheckCircle2 className="h-4 w-4" /> Perfect Fitment Match!
              </div>
            ) : (
              <div className="flex items-center gap-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 px-4 py-2 text-xs font-bold text-amber-400">
                <Zap className="h-4 w-4" /> Alternate Match
              </div>
            )}
          </div>

        </div>

        {/* Right 4 cols: Product Specs details */}
        <div className="lg:col-span-4 flex flex-col justify-between glass-card p-6 rounded-3xl border border-white/5 bg-[#12121e]">
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400">Wheel Closeup</span>
            
            {/* Tyre image closeup stage */}
            <div className="relative flex h-[160px] w-full items-center justify-center bg-black/20 rounded-2xl border border-white/5 p-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none" />
              <img
                src={activeTyre.image}
                alt={activeTyre.name}
                className={`h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] ${
                  isPlaying ? "animate-spin-wheel-slow" : "animate-float"
                }`}
              />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded font-extrabold uppercase">{activeTyre.brand}</span>
              <h4 className="font-heading text-lg font-bold text-white">{activeTyre.name}</h4>
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{activeTyre.description}</p>
            </div>

            {/* Performance breakdown list */}
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono pt-2 border-t border-white/5 text-slate-300">
              <div className="bg-black/30 p-2.5 rounded-xl border border-white/5">
                <div>Wet Grip</div>
                <strong className="text-emerald-400 text-xs mt-0.5 block">{activeTyre.wetGrip} Class</strong>
              </div>
              <div className="bg-black/30 p-2.5 rounded-xl border border-white/5">
                <div>Fuel Efficiency</div>
                <strong className="text-amber-400 text-xs mt-0.5 block">{activeTyre.fuelEfficiency} Class</strong>
              </div>
              <div className="bg-black/30 p-2.5 rounded-xl border border-white/5">
                <div>Noise Comfort</div>
                <strong className="text-white text-xs mt-0.5 block">{activeTyre.noise}</strong>
              </div>
              <div className="bg-black/30 p-2.5 rounded-xl border border-white/5">
                <div>Size Fitment</div>
                <strong className="text-orange-400 text-xs mt-0.5 block truncate">{activeTyre.size}</strong>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 mt-4">
            <div className="text-[10px] uppercase font-mono text-slate-400">Est. Price</div>
            <div className="font-heading text-xl font-bold text-orange-400">{activeTyre.priceEstimate}</div>
          </div>
        </div>

      </div>

      {/* CONTROLS ROW: SELECT VEHICLE & SELECT TYRE */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* SELECT VEHICLE CHASSIS (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider">
            1. Select Vehicle Platform
          </h4>

          <div className="grid grid-cols-3 gap-3">
            {VEHICLES.map((v) => {
              const Icon = v.id === "sedan" ? Car : v.id === "suv" ? Disc : Truck;
              const isActive = activeVehicle.id === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => handleVehicleChange(v)}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all text-center gap-2 ${
                    isActive
                      ? "border-orange-500 bg-orange-500/10 text-orange-400"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <Icon className={`h-6 w-6 ${isActive ? "animate-pulse" : ""}`} />
                  <span className="text-xs font-bold leading-none">{v.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SELECT COMPATIBLE TYRE (7 cols) */}
        <div className="md:col-span-7 space-y-4">
          <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider">
            2. Match Tyre Profile
          </h4>

          <div className="flex flex-row items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {TYRES_DATA.map((tyre) => {
              const isActive = activeTyre.id === tyre.id;
              // Check if category matches
              let isIdeal = false;
              if (activeVehicle.id === "sedan" && (tyre.category === "car" || tyre.category === "sport")) isIdeal = true;
              if (activeVehicle.id === "suv" && tyre.category === "suv") isIdeal = true;
              if (activeVehicle.id === "pickup" && (tyre.category === "truck" || tyre.brand === "YOKOHAMA")) isIdeal = true;

              return (
                <button
                  key={tyre.id}
                  onClick={() => setActiveTyre(tyre)}
                  className={`flex items-center gap-3 p-3 rounded-2xl border min-w-[210px] shrink-0 text-left transition-all ${
                    isActive
                      ? "border-orange-500 bg-orange-500/10 text-orange-400"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <img src={tyre.image} alt={tyre.name} className="h-10 w-10 object-contain shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wide truncate">{tyre.brand}</div>
                    <div className="text-xs font-bold text-white truncate">{tyre.name}</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[9px] font-mono text-slate-400">{tyre.size}</span>
                      {isIdeal && (
                        <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-1 py-0.2 rounded font-mono font-bold uppercase shrink-0">
                          Recommended
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
