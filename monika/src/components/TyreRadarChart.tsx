"use client";

import React from "react";
import { TyreItem } from "@/data/tyres";

interface TyreRadarChartProps {
  tyres: TyreItem[];
}

export default function TyreRadarChart({ tyres }: TyreRadarChartProps) {
  const cx = 150;
  const cy = 135;
  const maxRadius = 85;

  const getMetrics = (tyre: TyreItem) => {
    // 1. Wet Grip (A: 96%, B: 80%, C: 65%)
    let wetGrip = 70;
    if (tyre.wetGrip === "A") wetGrip = 96;
    else if (tyre.wetGrip === "B") wetGrip = 80;
    else if (tyre.wetGrip === "C") wetGrip = 65;

    // 2. Fuel Saver (A: 95%, B: 80%, C: 65%)
    let fuelEff = 70;
    if (tyre.fuelEfficiency === "A") fuelEff = 95;
    else if (tyre.fuelEfficiency === "B") fuelEff = 80;
    else if (tyre.fuelEfficiency === "C") fuelEff = 65;

    // 3. Noise Comfort (lower dB is better)
    let noiseComfort = 75;
    const match = tyre.noise.match(/\d+/);
    if (match) {
      const db = parseInt(match[0], 10);
      // Map 65dB -> 98, 75dB -> 50
      const score = 98 - (db - 65) * 4.8;
      noiseComfort = Math.max(50, Math.min(98, score));
    }

    // 4. Tread Lifespan (estimated by category & brand)
    let lifespan = 78;
    const descLower = tyre.description.toLowerCase();
    const badgeLower = tyre.badge?.toLowerCase() || "";
    if (badgeLower.includes("tread") || descLower.includes("longevity") || descLower.includes("60,000")) {
      lifespan = 98;
    } else if (tyre.brand === "MICHELIN") {
      lifespan = 92;
    } else if (tyre.brand === "BRIDGESTONE") {
      lifespan = 86;
    } else if (tyre.brand === "YOKOHAMA") {
      lifespan = 84;
    } else if (tyre.category === "truck") {
      lifespan = 90;
    } else if (tyre.category === "sport") {
      lifespan = 68; // Sport tires prioritize stickiness over mileage
    }

    // 5. Price Value (utility per rupee)
    let value = 75;
    if (tyre.priceEstimate.toLowerCase().includes("call")) {
      value = 85;
    } else {
      const priceMatch = tyre.priceEstimate.match(/\d+[,]?\d*/g);
      if (priceMatch && priceMatch.length > 0) {
        const val = parseInt(priceMatch[0].replace(/,/g, ""), 10);
        if (val < 5000) value = 92;
        else if (val < 10000) value = 88;
        else if (val < 15000) value = 80;
        else if (val < 25000) value = 70;
        else value = 60;
      }
    }

    return [
      { label: "Wet Grip", value: wetGrip },
      { label: "Fuel Saver", value: fuelEff },
      { label: "Noise Comfort", value: noiseComfort },
      { label: "Tread Life", value: lifespan },
      { label: "Price Value", value: value },
    ];
  };

  const themes = [
    {
      stroke: "#FF7A00", // Orange
      fill: "rgba(255, 122, 0, 0.18)",
      glowId: "glow-orange",
      legendClass: "bg-orange-500",
      textColor: "text-orange-400",
    },
    {
      stroke: "#2FB4E5", // Cyan
      fill: "rgba(47, 180, 229, 0.18)",
      glowId: "glow-cyan",
      legendClass: "bg-cyan-500",
      textColor: "text-cyan-400",
    },
    {
      stroke: "#10B981", // Emerald
      fill: "rgba(16, 185, 129, 0.18)",
      glowId: "glow-emerald",
      legendClass: "bg-emerald-500",
      textColor: "text-emerald-400",
    },
  ];

  // Helper to draw grid pentagons (20%, 40%, 60%, 80%, 100%)
  const levels = [0.2, 0.4, 0.6, 0.8, 1.0];
  const axes = [0, 1, 2, 3, 4]; // 5 dimensional indices

  const getPentagonPoints = (radius: number) => {
    return axes
      .map((i) => {
        const angle = -Math.PI / 2 + i * ((2 * Math.PI) / 5);
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        return `${x},${y}`;
      })
      .join(" ");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black/35 rounded-2xl p-4 border border-white/5 shadow-inner">
      <div className="relative">
        <svg width="300" height="270" viewBox="0 0 300 270" className="overflow-visible">
          {/* DEFINITIONS FOR RADAR GLOW FILTERS */}
          <defs>
            {themes.map((theme) => (
              <filter id={theme.glowId} key={theme.glowId} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            ))}
          </defs>

          {/* 1. BACKGROUND GRID LEVEL PENTAGONS */}
          {levels.map((level, idx) => (
            <polygon
              key={idx}
              points={getPentagonPoints(maxRadius * level)}
              className="fill-transparent stroke-white/5 stroke-1"
            />
          ))}

          {/* 2. AXES RADIAL LINES */}
          {axes.map((i) => {
            const angle = -Math.PI / 2 + i * ((2 * Math.PI) / 5);
            const xOuter = cx + maxRadius * Math.cos(angle);
            const yOuter = cy + maxRadius * Math.sin(angle);
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={xOuter}
                y2={yOuter}
                className="stroke-white/10 stroke-1 stroke-dasharray-[3,3]"
              />
            );
          })}

          {/* 3. PERFORMANCE DATA SHAPES */}
          {tyres.map((tyre, tyreIdx) => {
            const theme = themes[tyreIdx % themes.length];
            const metrics = getMetrics(tyre);
            const points = axes
              .map((i) => {
                const angle = -Math.PI / 2 + i * ((2 * Math.PI) / 5);
                const score = metrics[i].value;
                const radius = maxRadius * (score / 100);
                const x = cx + radius * Math.cos(angle);
                const y = cy + radius * Math.sin(angle);
                return `${x},${y}`;
              })
              .join(" ");

            return (
              <g key={tyre.id}>
                {/* Filled Area */}
                <polygon
                  points={points}
                  fill={theme.fill}
                  stroke={theme.stroke}
                  strokeWidth="2"
                  filter={`url(#${theme.glowId})`}
                  className="transition-all duration-700 ease-out"
                />
                {/* Data Points */}
                {axes.map((i) => {
                  const angle = -Math.PI / 2 + i * ((2 * Math.PI) / 5);
                  const score = metrics[i].value;
                  const radius = maxRadius * (score / 100);
                  const x = cx + radius * Math.cos(angle);
                  const y = cy + radius * Math.sin(angle);
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="3.5"
                      fill={theme.stroke}
                      className="stroke-black stroke-1 transition-all duration-700 ease-out"
                    />
                  );
                })}
              </g>
            );
          })}

          {/* 4. LABELS */}
          {axes.map((i) => {
            const angle = -Math.PI / 2 + i * ((2 * Math.PI) / 5);
            // Label placement math
            const labelRadius = maxRadius + 18;
            const x = cx + labelRadius * Math.cos(angle);
            const y = cy + labelRadius * Math.sin(angle);

            const cos = Math.cos(angle);
            const sin = Math.sin(angle);

            let textAnchor: "start" | "middle" | "end" = "middle";
            if (cos > 0.1) textAnchor = "start";
            else if (cos < -0.1) textAnchor = "end";

            let dy = "0.35em";
            if (sin < -0.9) dy = "-0.2em"; // top label
            else if (sin > 0.9) dy = "0.8em"; // bottom labels

            const labels = ["Wet Grip", "Fuel Saver", "Noise Comfort", "Tread Life", "Price Value"];

            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor={textAnchor}
                dy={dy}
                className="fill-slate-400 font-heading text-[10px] sm:text-[11px] font-bold tracking-wider uppercase select-none"
              >
                {labels[i]}
              </text>
            );
          })}
        </svg>
      </div>

      {/* 5. LEGEND */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
        {tyres.map((tyre, idx) => {
          const theme = themes[idx % themes.length];
          return (
            <div key={tyre.id} className="flex items-center gap-1.5 text-[10px] font-bold">
              <span className={`h-2 w-2 rounded-full ${theme.legendClass}`} />
              <span className="text-slate-300 uppercase tracking-wide truncate max-w-[90px]">
                {tyre.brand} {tyre.name.split(" ")[0]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
