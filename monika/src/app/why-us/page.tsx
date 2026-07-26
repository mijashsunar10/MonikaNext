import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Why Choose Us | Monika Tyre Suppliers",
  description: "Learn about the Monika Tyre Suppliers advantage—our premium quality, 20+ years of legacy, professional workshop equipment, and wholesale prices.",
};

export default function WhyUsPage() {
  return (
    <div className="flex flex-col bg-[#07070a] text-slate-100 min-h-screen">
      <div className="pt-16">
        <WhyChooseUs />
      </div>
      <Footer />
    </div>
  );
}
