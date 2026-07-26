"use client";

import Link from "next/link";
import { Disc, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#040407] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* BRAND COLUMN (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-slate-950">
                <Disc className="h-6 w-6 animate-rotate-slow" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-xl font-bold tracking-wider text-white">
                    MONIKA
                  </span>
                  <span className="font-heading text-xl font-bold tracking-wider text-orange-500">
                    TYRES
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-slate-400">
                  SUPPLIERS NEPAL
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Established in 2005, Monika Tyre Suppliers is Nepal&apos;s premier importer and distributor of genuine tyres for passenger cars, SUVs, heavy trucks, and motorcycles.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-orange-400">
              <ShieldCheck className="h-4 w-4" />
              <span>Official Manufacturer Warranty Included</span>
            </div>
          </div>

          {/* BRANDS WE SUPPLY */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider">Top Brands</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/tyres?search=Bridgestone" className="hover:text-orange-500 transition-colors">Bridgestone Tyres</Link></li>
              <li><Link href="/tyres?search=Yokohama" className="hover:text-orange-500 transition-colors">Yokohama Tyres</Link></li>
              <li><Link href="/tyres?search=Michelin" className="hover:text-orange-500 transition-colors">Michelin Tyres</Link></li>
              <li><Link href="/tyres?search=Pirelli" className="hover:text-orange-500 transition-colors">Pirelli Tyres</Link></li>
              <li><Link href="/tyres?search=Goodyear" className="hover:text-orange-500 transition-colors">Goodyear Tyres</Link></li>
              <li><Link href="/tyres?search=MRF" className="hover:text-orange-500 transition-colors">MRF & CEAT Radials</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home Page</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/tyre-finder" className="hover:text-orange-500 transition-colors">Tyre Finder Tool</Link></li>
              <li><Link href="/tyres?category=car" className="hover:text-orange-500 transition-colors">Passenger Car Tyres</Link></li>
              <li><Link href="/tyres?category=suv" className="hover:text-orange-500 transition-colors">SUV & 4x4 Off-Road</Link></li>
              <li><Link href="/tyres?category=truck" className="hover:text-orange-500 transition-colors">Heavy Truck Tyres</Link></li>
              <li><Link href="/why-us" className="hover:text-orange-500 transition-colors">Wheel Alignment Services</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider">Head Office</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Balaju Ring Road & Teku Market, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-500 shrink-0" />
                <a href="tel:+9779851000000" className="hover:text-white">+977 98510-00000</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-500 shrink-0" />
                <a href="mailto:info@monikasuppliers.com.np" className="hover:text-white">info@monikasuppliers.com.np</a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Monika Tyre Suppliers. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Engineered with excellence for Nepal&apos;s roads</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
