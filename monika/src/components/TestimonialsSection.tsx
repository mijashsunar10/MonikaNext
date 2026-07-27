"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const REVIEWS = [
  {
    name: "Ramesh Shrestha",
    role: "Transport Fleet Owner, Kathmandu",
    rating: 5,
    comment: "Monika Tyre Suppliers has been our exclusive tyre vendor for our 15 commercial trucks since 2012. Their MRF & Yokohama radials offer incredible durability on rough highway routes.",
    verified: "Verified Business Buyer",
  },
  {
    name: "Anish Gurung",
    role: "SUV Owner & Off-Road Enthusiast",
    rating: 5,
    comment: "Bought Yokohama Geolandar A/T for my Scorpio 4x4. Fantastic grip in Mustang dirt roads and rain! Outstanding service and quick wheel balancing at their Balaju outlet.",
    verified: "Verified Customer",
  },
  {
    name: "Bikram Adhikari",
    role: "Taxi Association Manager, Pokhara",
    rating: 5,
    comment: "The team at Monika provided us bulk pricing for Bridgestone Turanza tyres. Very genuine products with official warranty certificate. Highly recommended!",
    verified: "Verified Wholesale Client",
  },
];

export default function TestimonialsSection() {
  const [revealRef, isRevealed] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={revealRef as any}
      id="testimonials"
      className={`relative w-full bg-[#0b0b14] py-24 text-white reveal-element ${
        isRevealed ? "revealed" : ""
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-16">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-stagger-item">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest">
            TESTIMONIALS & REVIEWS
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
            TRUSTED BY THOUSANDS ACROSS <span className="text-orange-500">NEPAL</span>
          </h2>
          <p className="text-slate-400 text-base">
            Read real feedback from private car owners, transport companies, and commercial drivers.
          </p>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className="reveal-stagger-item"
            >
              <div className="glass-card relative flex flex-col justify-between rounded-3xl p-8 transition-all hover:border-orange-500/40 h-full">
                <Quote className="h-10 w-10 text-orange-500/20 absolute top-6 right-6" />

                <div className="space-y-4">
                  {/* RATING STARS */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* COMMENT */}
                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                {/* USER INFO */}
                <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between">
                  <div>
                    <div className="font-heading text-lg font-bold text-white">{rev.name}</div>
                    <div className="text-xs text-slate-400">{rev.role}</div>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="h-3 w-3" />
                    {rev.verified}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
