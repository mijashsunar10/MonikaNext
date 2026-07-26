import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Client Reviews | Monika Tyre Suppliers",
  description: "Read real client testimonials and reviews from private car owners, transport companies, and commercial fleets across Nepal.",
};

export default function ReviewsPage() {
  return (
    <div className="flex flex-col bg-[#07070a] text-slate-100 min-h-screen">
      <div className="pt-16">
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
}
