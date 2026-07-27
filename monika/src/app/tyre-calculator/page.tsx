import TyreCalculator from "@/components/TyreCalculator";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Interactive Tyre Size Calculator | Monika Tyre Suppliers",
  description: "Calculate and compare tyre aspect ratio, sidewall height, rim diameter, total diameter, and speedometer error variations side-by-side.",
};

export default function TyreCalculatorPage() {
  return (
    <div className="flex flex-col bg-[#07070a] text-slate-100 min-h-screen">
      {/* 1. HERO HEADER BANNER */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#09090f] to-[#07070a] overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest">
            TYRE DIMENSION UTILITY
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-wide text-white">
            TYRE SIZE <span className="text-orange-500">CALCULATOR</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Compare sizing alternatives side-by-side to compute diameter variations, speedometer deviations, and ensure safe clearances.
          </p>
        </div>
      </section>

      {/* 2. CALCULATOR WIDGET */}
      <section className="py-12 bg-gradient-to-b from-[#07070a] via-[#0b0b14] to-[#050508] relative z-10">
        <div className="w-full px-4 sm:px-8 lg:px-16">
          <TyreCalculator />
        </div>
      </section>

      <Footer />
    </div>
  );
}
