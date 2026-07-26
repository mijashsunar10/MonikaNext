"use client";

import { useState } from "react";
import { Landmark, Calendar, Award, Star } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  icon: any;
  desc: string;
}

const EVENTS: TimelineEvent[] = [
  {
    year: "2005",
    title: "Company Founded",
    icon: Landmark,
    desc: "Established a small, dedicated tyre retail outlet in Kathmandu, focus on providing quality customer service.",
  },
  {
    year: "2012",
    title: "Direct Importer Status",
    icon: Calendar,
    desc: "Partnered directly with major brands like Bridgestone and Yokohama to import and distribute genuine, high-grade radial tyres.",
  },
  {
    year: "2018",
    title: "Fitting & Alignment Upgrade",
    icon: Award,
    desc: "Launched our premium service hubs in Balaju & Teku, introducing advanced 3D laser alignment and automated fitting.",
  },
  {
    year: "2025",
    title: "20 Years Celebration",
    icon: Star,
    desc: "Celebrated 20 years of legacy. Grown into one of Nepal's most trusted tyre suppliers, servicing over 50,000+ vehicles.",
  },
];

export default function AboutTimeline() {
  const [activeIdx, setActiveIdx] = useState(3); // Start with 2025 active

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0e0e1a] p-8 lg:p-12 space-y-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
        <div>
          <h3 className="font-heading text-2xl font-bold text-white">Our Journey</h3>
          <p className="text-xs text-slate-400">Click on each milestone year to see how we have evolved since 2005</p>
        </div>

        {/* YEARS SELECTOR BUTTONS */}
        <div className="flex flex-wrap items-center gap-2">
          {EVENTS.map((evt, idx) => (
            <button
              key={evt.year}
              onClick={() => setActiveIdx(idx)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                activeIdx === idx
                  ? "bg-orange-500 text-slate-950 shadow-md shadow-orange-500/25"
                  : "border border-white/10 bg-white/5 text-slate-400 hover:text-white"
              }`}
            >
              {evt.year}
            </button>
          ))}
        </div>
      </div>

      {/* ACTIVE EVENT VIEW */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[160px] animate-fadeIn">
        <div className="md:col-span-3 flex justify-center md:justify-start">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 text-orange-500 border border-orange-500/25 shadow-xl">
            {(() => {
              const Icon = EVENTS[activeIdx].icon;
              return <Icon className="h-10 w-10 animate-pulse" />;
            })()}
          </div>
        </div>

        <div className="md:col-span-9 text-center md:text-left space-y-3">
          <span className="text-xs font-extrabold text-orange-500 tracking-widest uppercase">
            Milestone Year: {EVENTS[activeIdx].year}
          </span>
          <h4 className="font-heading text-2xl font-extrabold text-white">
            {EVENTS[activeIdx].title}
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
            {EVENTS[activeIdx].desc}
          </p>
        </div>
      </div>
    </div>
  );
}
