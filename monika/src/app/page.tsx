import HeroSection from "@/components/HeroSection";
import BrandMarquee from "@/components/BrandMarquee";
import TyreCategoryShowcase from "@/components/TyreCategoryShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Monika Tyre Suppliers | Best Tyres in Nepal Since 2005",
  description:
    "Monika Tyre Suppliers is Nepal's leading importer and distributor of genuine tyres including Bridgestone, Yokohama, Michelin, Pirelli, MRF, and CEAT. Premium performance for cars, SUVs, trucks, and motorcycles.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#07070a] text-slate-100">
      {/* 1. HERO SECTION WITH TYRE FINDER */}
      <HeroSection />

      {/* 2. AUTHORIZED BRAND MARQUEE */}
      <BrandMarquee />

      {/* 3. PRODUCT CATALOG & CATEGORY FILTER */}
      <TyreCategoryShowcase />

      {/* 4. WHY CHOOSE MONIKA TYRE SUPPLIERS */}
      <WhyChooseUs />

      {/* 5. CUSTOMER TESTIMONIALS & REVIEWS */}
      <TestimonialsSection />

      {/* 6. WHOLESALE & RETAIL CONTACT CTA */}
      <ContactCTA />

      {/* 7. FOOTER */}
      <Footer />
    </div>
  );
}
