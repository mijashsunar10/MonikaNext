"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Search, Disc, Menu, X, ShieldCheck } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#tyres", label: "Tyres & Products" },
  { href: "#finder", label: "Tyre Finder" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact Us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#09090d]/90 backdrop-blur-md">
      {/* Top Announcement & Info Bar */}
      <div className="hidden border-b border-white/5 bg-[#050508] py-2 text-xs font-medium text-slate-400 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-500 font-semibold">
              <ShieldCheck className="h-3.5 w-3.5" />
              Authorized Tyre Distributor Since 2005
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="h-3.5 w-3.5 text-slate-500" />
              Balaju & Teku, Kathmandu, Nepal
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Clock className="h-3.5 w-3.5 text-slate-500" />
              Sun - Fri: 8:00 AM - 7:00 PM
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+9779851000000"
              className="flex items-center gap-1.5 font-semibold text-orange-500 hover:text-orange-400 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              +977 98510-00000
            </a>
            <span className="text-white/20">|</span>
            <a
              href="mailto:info@monikasuppliers.com.np"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-slate-500" />
              info@monikasuppliers.com.np
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-amber-600 to-orange-500 p-0.5 shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#09090d]">
              <Disc className="h-7 w-7 text-orange-500 animate-rotate-slow group-hover:rotate-180 transition-transform duration-700" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="font-heading text-2xl font-bold tracking-wider text-white">
                MONIKA
              </span>
              <span className="font-heading text-2xl font-bold tracking-wider text-orange-500">
                TYRES
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-400">
              SUPPLIERS NEPAL
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-300 transition-all duration-200 hover:text-orange-500 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Search */}
        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-500 transition-all"
            title="Search Tyres"
          >
            <Search className="h-4 w-4" />
          </button>

          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-600 px-6 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/40"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Phone className="h-4 w-4 fill-slate-950" />
              Wholesale Inquiry
            </span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-orange-500" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Quick Search Overlay Bar */}
      {searchOpen && (
        <div className="border-t border-white/10 bg-[#0d0d14] px-6 py-3 transition-all">
          <div className="mx-auto flex max-w-3xl items-center gap-3">
            <Search className="h-5 w-5 text-orange-500" />
            <input
              type="text"
              placeholder="Search by Tyre Size (e.g. 195/65 R15), Brand (Bridgestone, Yokohama) or Vehicle..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-white placeholder-slate-500 outline-none focus:ring-0"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-xs font-semibold text-slate-400 hover:text-white"
            >
              ESC
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#0c0c14] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-orange-500 transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
              <a
                href="tel:+9779851000000"
                className="flex items-center justify-center gap-2 rounded-full bg-orange-500 py-3 text-sm font-bold text-slate-950 shadow-md"
              >
                <Phone className="h-4 w-4" />
                Call +977 98510-00000
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-amber-500" />
                Balaju & Teku, Kathmandu, Nepal
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}