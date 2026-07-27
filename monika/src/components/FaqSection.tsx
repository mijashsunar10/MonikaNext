"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Are your tyres genuine and covered by warranty?",
    answer: "Yes, 100% of our products are genuine imports directly from global manufacturers like Bridgestone, Yokohama, Michelin, and MRF. Every tyre comes with an official manufacturer warranty for tread defect protection.",
  },
  {
    question: "Where are your workshop hubs located, and is fitting free?",
    answer: "Our main workshops are in Balaju Ring Road (near the Industrial District Gate) and Teku Auto Market, Kathmandu. Yes, expert mounting, digital wheel balancing, and technical inspections are completely free with every tyre purchase.",
  },
  {
    question: "Do you ship tyres outside of Kathmandu Valley?",
    answer: "Absolutely. We provide nationwide express freight shipping to major hubs like Pokhara, Butwal, Chitwan, Biratnagar, Nepalgunj, and all 77 districts of Nepal. Wholesale deliveries are dispatched within 24 hours.",
  },
  {
    question: "How do I request a custom price quote for transport fleets or dealers?",
    answer: "You can submit an instant inquiry using our Quote Request Form on the Contact Us page, or call our direct hotline at +977 98510-00000. Our wholesale department offers specialized volume pricing tiers.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [revealRef, isRevealed] = useScrollReveal({ threshold: 0.15 });

  const toggleFaq = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      ref={revealRef as any}
      className={`relative w-full bg-[#0b0b14] py-20 text-white overflow-hidden border-t border-white/5 reveal-element ${
        isRevealed ? "revealed" : ""
      }`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest">
            FAQ HELP DESK
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            FREQUENTLY ASKED <span className="text-orange-500">QUESTIONS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Get instant answers to the most common queries about tyre fitment, warranty, shipping, and wholesale options.
          </p>
        </div>

        {/* ACCORDION ITEMS */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="reveal-stagger-item"
              >
                <div
                  className="glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-350"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="flex items-center gap-3 font-heading text-base sm:text-lg font-bold text-white pr-4">
                      <HelpCircle className="h-5 w-5 text-orange-500 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-orange-500" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[200px] border-t border-white/5 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="p-5 sm:p-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

