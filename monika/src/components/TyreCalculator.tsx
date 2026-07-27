"use client";

import React, { useState } from "react";
import { Info, AlertTriangle, CheckCircle, RefreshCw, Compass } from "lucide-react";

// Standard tyre dimensions lists
const WIDTHS = [145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315];
const RATIOS = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85];
const RIMS = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

export default function TyreCalculator() {
  // Tyre A (Current/Original)
  const [widthA, setWidthA] = useState(195);
  const [ratioA, setRatioA] = useState(65);
  const [rimA, setRimA] = useState(15);

  // Tyre B (New/Target)
  const [widthB, setWidthB] = useState(205);
  const [ratioB, setRatioB] = useState(55);
  const [rimB, setRimB] = useState(16);

  // Math calculations
  const calculateSpecs = (w: number, r: number, rimSize: number) => {
    const sidewall = w * (r / 100); // mm
    const rimMm = rimSize * 25.4; // mm
    const diameter = rimMm + 2 * sidewall; // mm
    const circumference = Math.PI * diameter; // mm
    const revsPerKm = 1000000 / circumference; // revs/km
    return {
      sidewall: Math.round(sidewall * 10) / 10,
      rimMm: Math.round(rimMm * 10) / 10,
      diameter: Math.round(diameter * 10) / 10,
      circumference: Math.round(circumference * 10) / 10,
      revsPerKm: Math.round(revsPerKm * 10) / 10,
    };
  };

  const specsA = calculateSpecs(widthA, ratioA, rimA);
  const specsB = calculateSpecs(widthB, ratioB, rimB);

  // Comparisons
  const diameterDiff = Math.round((specsB.diameter - specsA.diameter) * 10) / 10;
  const percentDiff = Math.round(((specsB.diameter - specsA.diameter) / specsA.diameter) * 100 * 100) / 100;
  const speedError = Math.round((100 * (specsB.diameter / specsA.diameter)) * 10) / 10;

  const isWarning = Math.abs(percentDiff) > 3.0;

  // Visual scaling math (Scale SVG tyres so they fit within 220px box, max diameter is roughly 800mm)
  const maxVisualDiameter = 820; // mm
  const boxSize = 220; // SVG viewBox dimensions (220x220)
  const center = boxSize / 2;

  const getVisualScale = (diameter: number) => {
    // Outer tire radius relative to boxSize
    const maxRadius = (boxSize / 2) - 10; // margin
    const radius = (diameter / maxVisualDiameter) * maxRadius;
    return radius;
  };

  const radiusA = getVisualScale(specsA.diameter);
  const radiusB = getVisualScale(specsB.diameter);

  // Rim radius relative to outer tire diameter
  const rimRadiusA = (specsA.rimMm / specsA.diameter) * radiusA;
  const rimRadiusB = (specsB.rimMm / specsB.diameter) * radiusB;

  return (
    <div className="space-y-10">
      
      {/* INTRO CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-3xl border border-white/5 space-y-2">
          <div className="h-10 w-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center border border-orange-500/20">
            <Info className="h-5 w-5" />
          </div>
          <h4 className="font-heading text-lg font-bold text-white">Why Size Matters</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Changing the outer diameter of your tyres affects your gear ratios, speedometer accuracy, suspension clearance, and overall fuel efficiency.
          </p>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-white/5 space-y-2">
          <div className="h-10 w-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
            <Compass className="h-5 w-5" />
          </div>
          <h4 className="font-heading text-lg font-bold text-white">The 3% Golden Rule</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Automotive engineering standards recommend keeping tyre diameter changes within <strong className="text-orange-400">±3%</strong> to avoid speedometer error and stability system faults.
          </p>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-white/5 space-y-2">
          <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
            <RefreshCw className="h-5 w-5 animate-spin-slow" />
          </div>
          <h4 className="font-heading text-lg font-bold text-white">Speedometer Lag</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            If your new tyre is larger than original, your actual speed will be higher than shown. If smaller, actual speed will be lower.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* INPUT COLUMN (5 cols) */}
        <div className="xl:col-span-5 space-y-6">
          
          {/* TYRE A (ORIGINAL) */}
          <div className="glass-card p-6 rounded-3xl border border-orange-500/20 bg-orange-500/[0.02] space-y-4">
            <div className="flex items-center justify-between border-b border-orange-500/20 pb-3">
              <span className="font-heading text-lg font-extrabold text-white">TYRE A : ORIGINAL SIZE</span>
              <span className="text-[10px] uppercase font-mono font-bold bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-md">
                Baseline Size
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1.5">Width (mm)</label>
                <select
                  value={widthA}
                  onChange={(e) => setWidthA(parseInt(e.target.value))}
                  className="w-full rounded-xl border border-white/10 bg-[#12121e] px-3 py-2.5 text-sm font-bold text-white outline-none focus:border-orange-500 cursor-pointer"
                >
                  {WIDTHS.map(w => <option key={w} value={w}>{w}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1.5">Aspect Ratio</label>
                <select
                  value={ratioA}
                  onChange={(e) => setRatioA(parseInt(e.target.value))}
                  className="w-full rounded-xl border border-white/10 bg-[#12121e] px-3 py-2.5 text-sm font-bold text-white outline-none focus:border-orange-500 cursor-pointer"
                >
                  {RATIOS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1.5">Rim Size (in)</label>
                <select
                  value={rimA}
                  onChange={(e) => setRimA(parseInt(e.target.value))}
                  className="w-full rounded-xl border border-white/10 bg-[#12121e] px-3 py-2.5 text-sm font-bold text-white outline-none focus:border-orange-500 cursor-pointer"
                >
                  {RIMS.map(r => <option key={r} value={r}>{r}&quot;</option>)}
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-mono bg-black/40 rounded-xl px-4 py-2 border border-white/5 text-slate-300">
              <span>Overall Diameter: <strong className="text-white">{specsA.diameter} mm</strong></span>
              <span>Circumference: <strong className="text-white">{specsA.circumference} mm</strong></span>
            </div>
          </div>

          {/* TYRE B (NEW SIZE) */}
          <div className="glass-card p-6 rounded-3xl border border-cyan-500/20 bg-cyan-500/[0.02] space-y-4">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
              <span className="font-heading text-lg font-extrabold text-white">TYRE B : TARGET SIZE</span>
              <span className="text-[10px] uppercase font-mono font-bold bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-md">
                New Target
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1.5">Width (mm)</label>
                <select
                  value={widthB}
                  onChange={(e) => setWidthB(parseInt(e.target.value))}
                  className="w-full rounded-xl border border-white/10 bg-[#12121e] px-3 py-2.5 text-sm font-bold text-white outline-none focus:border-cyan-500 cursor-pointer"
                >
                  {WIDTHS.map(w => <option key={w} value={w}>{w}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1.5">Aspect Ratio</label>
                <select
                  value={ratioB}
                  onChange={(e) => setRatioB(parseInt(e.target.value))}
                  className="w-full rounded-xl border border-white/10 bg-[#12121e] px-3 py-2.5 text-sm font-bold text-white outline-none focus:border-cyan-500 cursor-pointer"
                >
                  {RATIOS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-1.5">Rim Size (in)</label>
                <select
                  value={rimB}
                  onChange={(e) => setRimB(parseInt(e.target.value))}
                  className="w-full rounded-xl border border-white/10 bg-[#12121e] px-3 py-2.5 text-sm font-bold text-white outline-none focus:border-cyan-500 cursor-pointer"
                >
                  {RIMS.map(r => <option key={r} value={r}>{r}&quot;</option>)}
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-mono bg-black/40 rounded-xl px-4 py-2 border border-white/5 text-slate-300">
              <span>Overall Diameter: <strong className="text-white">{specsB.diameter} mm</strong></span>
              <span>Circumference: <strong className="text-white">{specsB.circumference} mm</strong></span>
            </div>
          </div>

          {/* DIAGNOSTIC ERROR DISPLAY */}
          <div className={`p-6 rounded-3xl border ${
            isWarning 
              ? "border-red-500/30 bg-red-500/5 text-red-200" 
              : "border-emerald-500/30 bg-emerald-500/5 text-emerald-200"
          } space-y-4`}>
            <div className="flex items-start gap-4">
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center border shrink-0 ${
                isWarning 
                  ? "bg-red-500/10 border-red-500/20 text-red-400" 
                  : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
              }`}>
                {isWarning ? <AlertTriangle className="h-6 w-6 animate-pulse" /> : <CheckCircle className="h-6 w-6" />}
              </div>
              <div className="space-y-1">
                <h4 className="font-heading text-lg font-bold text-white">
                  Diameter Change: <span className={isWarning ? "text-red-400" : "text-emerald-400"}>{percentDiff > 0 ? `+${percentDiff}` : percentDiff}%</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {isWarning 
                    ? "WARNING: Diameter difference exceeds the maximum recommended limit of ±3%. This size swap is not recommended as it could cause vehicle stability issues or scrape wheel arches."
                    : "COMPATIBILITY CHECK PASSED: This tyre size falls safely within the ±3% tolerance limit. Fits safely with minimal speedometer error."}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-center font-mono">
              <div className="bg-black/30 p-3 rounded-2xl border border-white/5">
                <div className="text-[10px] text-slate-400 uppercase tracking-wide">Actual Speed @ 100 Km/h</div>
                <div className={`text-lg font-extrabold mt-1 ${isWarning ? "text-red-400" : "text-white"}`}>
                  {speedError} km/h
                </div>
              </div>

              <div className="bg-black/30 p-3 rounded-2xl border border-white/5">
                <div className="text-[10px] text-slate-400 uppercase tracking-wide">Diameter Variance</div>
                <div className={`text-lg font-extrabold mt-1 ${diameterDiff > 0 ? "text-emerald-400" : "text-red-400"}`}>
                  {diameterDiff > 0 ? `+${diameterDiff}` : diameterDiff} mm
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* VISUAL COMPONENT & DETAILS SHEET (7 cols) */}
        <div className="xl:col-span-7 space-y-6">
          
          {/* THE SVG COMPARATIVE VISUALIZER */}
          <div className="glass-card p-6 rounded-3xl border border-white/5 relative overflow-hidden bg-black/40">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/[0.02] to-transparent pointer-events-none" />
            <h4 className="font-heading text-base font-bold text-white mb-6 uppercase tracking-wider text-center">
              Tyre Size Comparative Profile
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
              
              {/* TYRE A DRAWING */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-xs font-bold text-orange-400 font-mono tracking-widest uppercase">
                  TYRE A ({widthA}/{ratioA} R{rimA})
                </div>

                <div className="relative flex h-[240px] w-[240px] items-center justify-center bg-black/35 rounded-3xl border border-orange-500/10 p-2">
                  <svg width="220" height="220" viewBox="0 0 220 220" className="overflow-visible select-none">
                    {/* Tyre Outer Wall */}
                    <circle
                      cx={center}
                      cy={center}
                      r={radiusA}
                      className="fill-transparent stroke-[#1b1b22] transition-all duration-500"
                      strokeWidth="22"
                    />
                    {/* Tread Lines Accent */}
                    <circle
                      cx={center}
                      cy={center}
                      r={radiusA + 10}
                      className="fill-transparent stroke-orange-500/20 stroke-1 stroke-dasharray-[6,6] transition-all duration-500"
                    />
                    {/* Tyre Inner Rim Interface */}
                    <circle
                      cx={center}
                      cy={center}
                      r={rimRadiusA}
                      className="fill-[#121219] stroke-orange-500/60 stroke-2 transition-all duration-500"
                    />
                    {/* Alloy Spokes representation */}
                    <g className="stroke-orange-500/30 stroke-1 transition-all duration-500">
                      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => {
                        const rad = (angle * Math.PI) / 180;
                        const x2 = center + rimRadiusA * Math.cos(rad);
                        const y2 = center + rimRadiusA * Math.sin(rad);
                        return <line key={angle} x1={center} y1={center} x2={x2} y2={y2} />;
                      })}
                    </g>
                    {/* Measurement Indicators */}
                    <line x1={center - radiusA - 15} y1={center - radiusA} x2={center - radiusA - 15} y2={center + radiusA} className="stroke-orange-400/50 stroke-1 stroke-dasharray-[2,2]" />
                    <circle cx={center - radiusA - 15} cy={center - radiusA} r="2" className="fill-orange-400" />
                    <circle cx={center - radiusA - 15} cy={center + radiusA} r="2" className="fill-orange-400" />
                  </svg>
                  
                  {/* Height Overlay Indicator */}
                  <div className="absolute left-1.5 top-1/2 -translate-y-1/2 bg-black/80 border border-orange-500/30 px-2 py-0.5 rounded text-[10px] font-mono text-orange-400 font-bold z-10 shadow">
                    {specsA.diameter}mm
                  </div>
                </div>

                <div className="text-center font-mono text-[11px] text-slate-400">
                  Sidewall: <strong className="text-white">{specsA.sidewall} mm</strong>
                </div>
              </div>

              {/* TYRE B DRAWING */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-xs font-bold text-cyan-400 font-mono tracking-widest uppercase">
                  TYRE B ({widthB}/{ratioB} R{rimB})
                </div>

                <div className="relative flex h-[240px] w-[240px] items-center justify-center bg-black/35 rounded-3xl border border-cyan-500/10 p-2">
                  <svg width="220" height="220" viewBox="0 0 220 220" className="overflow-visible select-none">
                    {/* Tyre Outer Wall */}
                    <circle
                      cx={center}
                      cy={center}
                      r={radiusB}
                      className="fill-transparent stroke-[#1b1b22] transition-all duration-500"
                      strokeWidth="22"
                    />
                    {/* Tread Lines Accent */}
                    <circle
                      cx={center}
                      cy={center}
                      r={radiusB + 10}
                      className="fill-transparent stroke-cyan-500/20 stroke-1 stroke-dasharray-[6,6] transition-all duration-500"
                    />
                    {/* Tyre Inner Rim Interface */}
                    <circle
                      cx={center}
                      cy={center}
                      r={rimRadiusB}
                      className="fill-[#121219] stroke-cyan-500/60 stroke-2 transition-all duration-500"
                    />
                    {/* Alloy Spokes representation */}
                    <g className="stroke-cyan-500/30 stroke-1 transition-all duration-500">
                      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => {
                        const rad = (angle * Math.PI) / 180;
                        const x2 = center + rimRadiusB * Math.cos(rad);
                        const y2 = center + rimRadiusB * Math.sin(rad);
                        return <line key={angle} x1={center} y1={center} x2={x2} y2={y2} />;
                      })}
                    </g>
                    {/* Measurement Indicators */}
                    <line x1={center + radiusB + 15} y1={center - radiusB} x2={center + radiusB + 15} y2={center + radiusB} className="stroke-cyan-400/50 stroke-1 stroke-dasharray-[2,2]" />
                    <circle cx={center + radiusB + 15} cy={center - radiusB} r="2" className="fill-cyan-400" />
                    <circle cx={center + radiusB + 15} cy={center + radiusB} r="2" className="fill-cyan-400" />
                  </svg>
                  
                  {/* Height Overlay Indicator */}
                  <div className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-black/80 border border-cyan-500/30 px-2 py-0.5 rounded text-[10px] font-mono text-cyan-400 font-bold z-10 shadow">
                    {specsB.diameter}mm
                  </div>
                </div>

                <div className="text-center font-mono text-[11px] text-slate-400">
                  Sidewall: <strong className="text-white">{specsB.sidewall} mm</strong>
                </div>
              </div>

            </div>
          </div>

          {/* DETAILED SPECIFICATIONS COMPACT COMPARISON SHEET */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#10101b] p-6 shadow-xl">
            <h4 className="font-heading text-base font-bold text-white mb-4 uppercase tracking-wider">
              Side-by-Side Dimension breakdown
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400">
                    <th className="py-2.5 pr-4 uppercase">Parameter</th>
                    <th className="py-2.5 px-4 text-orange-400">Tyre A (Orig)</th>
                    <th className="py-2.5 px-4 text-cyan-400">Tyre B (New)</th>
                    <th className="py-2.5 pl-4 text-right">Difference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-200">
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-slate-400">Section Width</td>
                    <td className="py-3 px-4">{widthA} mm</td>
                    <td className="py-3 px-4">{widthB} mm</td>
                    <td className={`py-3 pl-4 text-right font-bold ${widthB - widthA > 0 ? "text-emerald-400" : widthB - widthA < 0 ? "text-red-400" : "text-slate-400"}`}>
                      {widthB - widthA > 0 ? `+${widthB - widthA}` : widthB - widthA} mm ({Math.round(((widthB - widthA) / widthA) * 1000) / 10}%)
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3 pr-4 font-semibold text-slate-400">Sidewall Height</td>
                    <td className="py-3 px-4">{specsA.sidewall} mm</td>
                    <td className="py-3 px-4">{specsB.sidewall} mm</td>
                    <td className={`py-3 pl-4 text-right font-bold ${Math.round((specsB.sidewall - specsA.sidewall) * 10) / 10 > 0 ? "text-emerald-400" : Math.round((specsB.sidewall - specsA.sidewall) * 10) / 10 < 0 ? "text-red-400" : "text-slate-400"}`}>
                      {Math.round((specsB.sidewall - specsA.sidewall) * 10) / 10 > 0 ? `+${Math.round((specsB.sidewall - specsA.sidewall) * 10) / 10}` : Math.round((specsB.sidewall - specsA.sidewall) * 10) / 10} mm
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3 pr-4 font-semibold text-slate-400">Rim Diameter</td>
                    <td className="py-3 px-4">{rimA} inches ({specsA.rimMm} mm)</td>
                    <td className="py-3 px-4">{rimB} inches ({specsB.rimMm} mm)</td>
                    <td className={`py-3 pl-4 text-right font-bold ${specsB.rimMm - specsA.rimMm > 0 ? "text-emerald-400" : specsB.rimMm - specsA.rimMm < 0 ? "text-red-400" : "text-slate-400"}`}>
                      {specsB.rimMm - specsA.rimMm > 0 ? `+${Math.round((specsB.rimMm - specsA.rimMm) * 10) / 10}` : Math.round((specsB.rimMm - specsA.rimMm) * 10) / 10} mm
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3 pr-4 font-semibold text-slate-400">Total Diameter</td>
                    <td className="py-3 px-4 text-orange-400 font-bold">{specsA.diameter} mm</td>
                    <td className="py-3 px-4 text-cyan-400 font-bold">{specsB.diameter} mm</td>
                    <td className={`py-3 pl-4 text-right font-bold ${diameterDiff > 0 ? "text-emerald-400" : diameterDiff < 0 ? "text-red-400" : "text-slate-400"}`}>
                      {diameterDiff > 0 ? `+${diameterDiff}` : diameterDiff} mm ({percentDiff > 0 ? `+${percentDiff}` : percentDiff}%)
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3 pr-4 font-semibold text-slate-400">Circumference</td>
                    <td className="py-3 px-4">{specsA.circumference} mm</td>
                    <td className="py-3 px-4">{specsB.circumference} mm</td>
                    <td className={`py-3 pl-4 text-right font-bold ${Math.round((specsB.circumference - specsA.circumference) * 10) / 10 > 0 ? "text-emerald-400" : Math.round((specsB.circumference - specsA.circumference) * 10) / 10 < 0 ? "text-red-400" : "text-slate-400"}`}>
                      {Math.round((specsB.circumference - specsA.circumference) * 10) / 10 > 0 ? `+${Math.round((specsB.circumference - specsA.circumference) * 10) / 10}` : Math.round((specsB.circumference - specsA.circumference) * 10) / 10} mm
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3 pr-4 font-semibold text-slate-400">Revolutions per Km</td>
                    <td className="py-3 px-4">{specsA.revsPerKm} revs</td>
                    <td className="py-3 px-4">{specsB.revsPerKm} revs</td>
                    <td className={`py-3 pl-4 text-right font-bold ${Math.round((specsB.revsPerKm - specsA.revsPerKm) * 10) / 10 > 0 ? "text-emerald-400" : Math.round((specsB.revsPerKm - specsA.revsPerKm) * 10) / 10 < 0 ? "text-red-400" : "text-slate-400"}`}>
                      {Math.round((specsB.revsPerKm - specsA.revsPerKm) * 10) / 10 > 0 ? `+${Math.round((specsB.revsPerKm - specsA.revsPerKm) * 10) / 10}` : Math.round((specsB.revsPerKm - specsA.revsPerKm) * 10) / 10} revs
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
