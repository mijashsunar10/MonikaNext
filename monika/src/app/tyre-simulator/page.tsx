import TyreSimulator from "@/components/TyreSimulator";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Interactive Tyre Preview Simulator | Monika Tyre Suppliers",
  description: "Test drive tyre fitments on Sedans, SUVs, and Pickup trucks with our interactive showcase simulator.",
};

export default function TyreSimulatorPage() {
  return (
    <div className="flex flex-col bg-[#07070a] text-slate-100 min-h-screen">
      {/* 1. HERO HEADER BANNER */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#09090f] to-[#07070a] overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest">
            INTERACTIVE PREVIEW
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-wide text-white">
            TYRE SHOWCASE <span className="text-orange-500">SIMULATOR</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Preview different tyre tread profiles and load designs on Sedans, SUVs, or Pickup trucks. Rotate the wheels to preview driving stance.
          </p>
        </div>
      </section>

      {/* 2. SIMULATOR CANVAS */}
      <section className="py-12 bg-gradient-to-b from-[#07070a] via-[#0b0b14] to-[#050508] relative z-10">
        <div className="w-full px-4 sm:px-8 lg:px-16">
          <TyreSimulator />
        </div>
      </section>

      <Footer />
    </div>
  );
}
