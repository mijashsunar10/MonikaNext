"use client";

import { ShieldCheck, Truck, Wrench, Award, DollarSign, Headset } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "100% Genuine Brands",
    description: "Direct importer and authorized supplier of top global manufacturers like Bridgestone, Yokohama, Michelin, and MRF.",
  },
  {
    icon: Award,
    title: "Established Since 2005",
    description: "Over 20 years of trusted automotive service supplying high quality tyres to over 50,000 satisfied vehicle owners.",
  },
  {
    icon: Wrench,
    title: "State-of-the-Art Fitting",
    description: "Equipped with modern 3D wheel balancing, laser alignment, and automatic tyre changers at our Balaju & Teku hubs.",
  },
  {
    icon: Truck,
    title: "Nationwide Express Shipping",
    description: "Fast wholesale freight dispatch across Kathmandu, Pokhara, Chitwan, Butwal, Biratnagar, and all 77 districts.",
  },
  {
    icon: DollarSign,
    title: "Wholesale & Retail Pricing",
    description: "Unbeatable prices directly from factory shipments with special bulk pricing tiers for transport operators and dealers.",
  },
  {
    icon: Headset,
    title: "24/7 Technical Support",
    description: "Expert guidance on choosing the right tread depth, load index, and tyre pressure specs tailored for Nepal&apos;s roads.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative w-full bg-[#07070d] py-24 text-white overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest">
            THE MONIKA ADVANTAGE
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            WHY VEHICLE OWNERS TRUST <span className="text-orange-500">MONIKA TYRES</span>
          </h2>
          <p className="text-slate-400 text-base">
            We don&apos;t just sell tyres — we deliver safety, road control, and maximum tread longevity on every journey.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="glass-card group relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 text-orange-500 border border-orange-500/20 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-slate-950 transition-all duration-300 shadow-lg shadow-orange-500/10 mb-6">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
