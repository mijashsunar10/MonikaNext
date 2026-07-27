"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [revealRef, isRevealed] = useScrollReveal({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      ref={revealRef as any}
      id="contact"
      className={`relative w-full bg-gradient-to-b from-[#07070d] via-[#0b0b14] to-[#040408] py-24 text-white reveal-element ${
        isRevealed ? "revealed" : ""
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: CONTACT DETAILS & LOCATIONS (6 cols) */}
          <div className="lg:col-span-6 space-y-8 reveal-stagger-item">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest">
              GET IN TOUCH WITH OUR TYRE EXPERTS
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold leading-tight text-white">
              NEED WHOLESALE PRICE OR <span className="text-orange-500">EXPERT ADVICE?</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Whether you need a single set of tyres for your personal car or bulk inventory for a transport fleet, our team is ready to give you the best deal in Nepal.
            </p>

            {/* DIRECT CONTACT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+9779851000000"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-orange-500/50 hover:bg-orange-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-slate-950">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Hotline</div>
                  <div className="font-heading text-lg font-bold text-white">+977 98510-00000</div>
                </div>
              </a>

              <a
                href="mailto:info@monikasuppliers.com.np"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-orange-500/50 hover:bg-orange-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-slate-950">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email Inquiry</div>
                  <div className="font-heading text-sm font-bold text-white truncate">info@monikasuppliers.com.np</div>
                </div>
              </a>
            </div>

            {/* STORE HUB LOCATIONS */}
            <div className="rounded-2xl border border-white/10 bg-[#0e0e1a] p-6 space-y-4">
              <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                Our Primary Outlets & Warehouses:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                  <strong className="text-orange-400 block text-sm mb-1">Balaju Hub (Kathmandu)</strong>
                  Near Industrial District Gate, Balaju Ring Road, Kathmandu.
                </div>
                <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                  <strong className="text-orange-400 block text-sm mb-1">Teku Hub (Kathmandu)</strong>
                  Teku Auto Market Compound, Kathmandu.
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: QUICK QUOTE FORM (6 cols) */}
          <div className="lg:col-span-6 reveal-stagger-item" style={{ transitionDelay: "150ms" }}>
            <div className="rounded-3xl border border-white/10 bg-[#10101b] p-8 backdrop-blur-xl shadow-2xl relative">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Request an Instant Quote</h3>
              <p className="text-xs text-slate-400 mb-6">Fill in your requirements and our team will call you back within 30 minutes.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-white">Inquiry Received!</h4>
                  <p className="text-xs text-slate-300 max-w-xs">
                    Thank you! Our tyre specialist will contact you shortly with the best quote and stock availability.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mijash Sunar"
                        className="w-full rounded-xl border border-white/10 bg-[#181826] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9841000000"
                        className="w-full rounded-xl border border-white/10 bg-[#181826] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Vehicle Type / Model</label>
                      <input
                        type="text"
                        placeholder="e.g. Hyundai Creta / Scorpio"
                        className="w-full rounded-xl border border-white/10 bg-[#181826] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Tyre Size / Quantity</label>
                      <input
                        type="text"
                        placeholder="e.g. 215/60 R17 (4 Tyres)"
                        className="w-full rounded-xl border border-white/10 bg-[#181826] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Additional Message / Location</label>
                    <textarea
                      rows={3}
                      placeholder="Specify preferred brand (Bridgestone, Yokohama) or wholesale delivery destination..."
                      className="w-full rounded-xl border border-white/10 bg-[#181826] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-orange-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3.5 text-base font-bold text-slate-950 shadow-xl shadow-orange-500/25 hover:scale-[1.01] transition-all"
                  >
                    <Send className="h-4 w-4" />
                    Submit Wholesale Quote Request
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
