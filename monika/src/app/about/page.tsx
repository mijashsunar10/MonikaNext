import AboutSection from "@/components/AboutSection";
import AboutMission from "@/components/AboutMission";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Monika Tyre Suppliers Nepal",
  description:
    "Learn about Monika Tyre Suppliers, Nepal's premier importer and distributor of international genuine tyres since 2005. Discover our journey, values, and workshops.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#07070a] text-slate-100 min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#09090f] to-[#07070a] overflow-hidden text-center">
        {/* Speed lines backdrop */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_80px,rgba(255,122,0,0.05)_100px)] animate-move-lines" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest">
            OUR STORY
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-wide text-white">
            ABOUT OUR <span className="text-orange-500">COMPANY</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Delivering performance, reliability, and security to Nepalese roads since 2005. Find out what drives us.
          </p>
        </div>
      </section>

      {/* 2. THE CORE ABOUT COMPONENT */}
      <AboutSection />

      {/* 3. MISSION, VISION & HISTORY */}
      <section className="py-24 bg-gradient-to-b from-[#07070a] via-[#0b0b14] to-[#040407] relative border-t border-white/5">
        <div className="w-full px-4 sm:px-8 lg:px-16">
          <AboutMission />
        </div>
      </section>

      {/* 4. FOOTER */}
      <Footer />
    </div>
  );
}
