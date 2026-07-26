import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monika Tyre Suppliers | Best Tyres in Nepal Since 2005",
  description:
    "Monika Tyre Suppliers is Nepal's authorized supplier of premium tyres including Bridgestone, Yokohama, Michelin, Pirelli, and MRF. Expert wheel alignment and nationwide delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#07070a] text-slate-100 antialiased selection:bg-orange-500 selection:text-slate-950">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
