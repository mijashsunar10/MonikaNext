"use client";

import { ShieldCheck, Target, Award, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AboutTimeline from "./AboutTimeline";

export default function AboutMission() {
  const [revealRef, isRevealed] = useScrollReveal({ threshold: 0.1 });
  const [briefRef, briefRevealed] = useScrollReveal({ threshold: 0.15 });

  const CARDS = [
    {
      icon: ShieldCheck,
      title: "Genuine Quality",
      desc: "We import directly from top-tier global brands, ensuring zero compromises on rubber quality, load index, and speed ratings.",
      color: "orange",
    },
    {
      icon: Target,
      title: "Our Mission",
      desc: "To keep Nepal moving safely by providing heavy vehicle transport fleets, passenger cars, and motorbikes with custom-fitted tyres designed for local roads.",
      color: "amber",
    },
    {
      icon: Award,
      title: "20+ Years Legacy",
      desc: "Since our humble beginnings in 2005, we have grown into one of the country's most respected tyre importers and services hubs.",
      color: "orange",
    },
    {
      icon: Users,
      title: "Customer-First",
      desc: "Our support team and specialized mechanics offer precise fitting, balancing, and tyre maintenance tips at every visit.",
      color: "amber",
    },
  ];

  return (
    <div className="space-y-16">
      {/* 4 CARDS GRID */}
      <div
        ref={revealRef as any}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-element ${
          isRevealed ? "revealed" : ""
        }`}
      >
        {CARDS.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className="reveal-stagger-item"
            >
              <div className="glass-card p-8 rounded-3xl space-y-4 border border-white/5 hover:border-orange-500/30 transition-all h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    card.color === "orange"
                      ? "bg-orange-500/10 text-orange-500 border border-orange-500/20"
                      : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">{card.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* INTERACTIVE TIMELINE */}
      <AboutTimeline />

      {/* HISTORICAL WORKSHOP BRIEF */}
      <div
        ref={briefRef as any}
        className={`rounded-3xl border border-white/10 bg-[#0c0c14] p-8 lg:p-12 reveal-element ${
          briefRevealed ? "revealed" : ""
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center reveal-stagger-item">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              OUR HUBS IN <span className="text-orange-500">KATHMANDU</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Monika Tyre Suppliers operates two premium service hubs in Kathmandu. Our Balaju and Teku centers are equipped with 3D laser wheel aligners and automated tyre mounting units. Whether you come for standard replacement, tyre pressure tuning, or dynamic wheel balancing, our certified mechanics ensure your vehicle leaves in pristine driving condition.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3 text-center sm:text-left bg-black/40 p-6 rounded-2xl border border-white/5">
            <div className="text-xs text-slate-400">Head Office Helpline</div>
            <a href="tel:+9779851000000" className="font-heading text-2xl font-bold text-orange-400 hover:text-orange-300 transition-colors">
              +977 98510-00000
            </a>
            <div className="text-[10px] text-slate-500">Open Daily: 9:00 AM - 7:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
}
