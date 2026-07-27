import AboutSection from "@/components/AboutSection";
import AboutTimeline from "@/components/AboutTimeline";
import Footer from "@/components/Footer";
import { ShieldCheck, Target, Award, Users } from "lucide-react";

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* CARD 1: GENUINE QUALITY */}
            <div className="glass-card p-8 rounded-3xl space-y-4 border border-white/5 hover:border-orange-500/30 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">Genuine Quality</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We import directly from top-tier global brands, ensuring zero compromises on rubber quality, load index, and speed ratings.
              </p>
            </div>

            {/* CARD 2: OUR MISSION */}
            <div className="glass-card p-8 rounded-3xl space-y-4 border border-white/5 hover:border-orange-500/30 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">Our Mission</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                To keep Nepal moving safely by providing heavy vehicle transport fleets, passenger cars, and motorbikes with custom-fitted tyres designed for local roads.
              </p>
            </div>

            {/* CARD 3: 20+ YEARS LEGACY */}
            <div className="glass-card p-8 rounded-3xl space-y-4 border border-white/5 hover:border-orange-500/30 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">20+ Years Legacy</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Since our humble beginnings in 2005, we have grown into one of the country&apos;s most respected tyre importers and services hubs.
              </p>
            </div>

            {/* CARD 4: CUSTOMER-FIRST */}
            <div className="glass-card p-8 rounded-3xl space-y-4 border border-white/5 hover:border-orange-500/30 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">Customer-First</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our support team and specialized mechanics offer precise fitting, balancing, and tyre maintenance tips at every visit.
              </p>
            </div>

          </div>

          {/* INTERACTIVE TIMELINE */}
          <div className="mt-16">
            <AboutTimeline />
          </div>

          {/* HISTORICAL WORKSHOP BRIEF */}
          <div className="mt-16 rounded-3xl border border-white/10 bg-[#0c0c14] p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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
      </section>

      {/* 4. FOOTER */}
      <Footer />
    </div>
  );
}
