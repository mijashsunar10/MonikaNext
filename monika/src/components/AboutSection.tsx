"use client";

import { CheckCircle2, ShieldCheck, Landmark } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#07070a] via-[#090910] to-[#050508] py-20 sm:py-24 text-white overflow-hidden">
      {/* Premium ambient light effects */}
      <div className="absolute top-1/4 left-0 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-orange-500/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-amber-500/5 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      {/* Decorative Speed Lines Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_80px,rgba(255,122,0,0.1)_100px)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT (6 cols for balanced spacing) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/5 px-4 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest">
              <Landmark className="h-3.5 w-3.5" />
              Who We Are
            </div>

            {/* Redesigned Heading with perfect balance and premium typography */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] text-white">
              M
              <span className="inline-block align-middle animate-[rotateSlow_12s_linear_infinite] mx-0.5 select-none hover:scale-110 transition-transform duration-300">
                <span className="text-[#ff7a18] drop-shadow-[0_0_8px_rgba(255,122,24,0.5)] text-[0.9em] font-sans">🛞</span>
              </span>
              NIKA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 drop-shadow-sm">
                TYRE SUPPLIERS
              </span>
            </h2>

            {/* Content paragraph with highly readable font layout */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p className="border-l-2 border-orange-500/50 pl-4 py-1 bg-white/[0.01] rounded-r-xl">
                <strong className="text-white font-semibold">Monika Tyre Suppliers</strong> is built on precision, trust, and performance.
                We believe tyres are not just rubber. They are the foundation of safety,
                control, and confidence on every road in Nepal.
              </p>

              <p className="text-slate-400">
                With expert technicians, modern equipment, and a commitment to quality,
                we deliver reliable tyre solutions that keep your journey smooth and secure.
              </p>
            </div>

            {/* Premium feature tags with micro-shadows */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Trusted Experts",
                "Modern Technology",
                "Customer Satisfaction"
              ].map((feat, idx) => (
                <span 
                  key={idx}
                  className="flex items-center gap-2 bg-[#12121c]/65 border border-white/5 shadow-md shadow-black/20 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-orange-400 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300 cursor-default"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  {feat}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE (6 cols for balanced spacing) */}
          <div className="lg:col-span-6">
            <div className="relative p-2 rounded-3xl bg-gradient-to-tr from-orange-500/10 to-transparent border border-white/10 shadow-2xl shadow-orange-500/5 max-w-lg mx-auto lg:max-w-none">
              
              {/* Outer frame border accent */}
              <div className="relative rounded-2xl overflow-hidden group">
                {/* Visual gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Img element */}
                <img 
                  src="https://monikasuppliers.com.np/wp-content/uploads/2025/12/monika.jpg" 
                  alt="Monika Tyre Boutique Outlet" 
                  className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Overlaid Badge */}
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-[#09090d]/80 px-3 py-1.5 backdrop-blur-md shadow-lg animate-float">
                  <ShieldCheck className="h-4 w-4 text-orange-500" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200">
                    Authorized Boutique Hub
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
