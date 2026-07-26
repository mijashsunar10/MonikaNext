import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | Monika Tyre Suppliers",
  description: "Get in touch with Monika Tyre Suppliers. Contact our Balaju or Teku hubs for wholesale quotes, manufacturer warranty queries, or tyre fitment advice.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-[#07070a] text-slate-100 min-h-screen">
      <div className="pt-16">
        <ContactCTA />
      </div>
      <Footer />
    </div>
  );
}
