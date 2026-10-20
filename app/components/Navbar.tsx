'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/services', label: 'الخدمات' },
    { href: '/about', label: 'عن Velour' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-950/20 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-wider text-amber-500 ">VELOUR</span>
          <span className="text-xs uppercase tracking-widest text-stone-300 border-r border-stone-700 pr-2 mr-2">
            SPA & WELLNESS
          </span>
        </Link>

        {/* روابط التنقل */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-400'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* زر احجز الآن */}
        <Link
          href="/booking"
          className="bg-amber-500 hover:bg-amber-600 text-stone-950 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-amber-500/20"
        >
          احجز الآن
        </Link>
      </div>
    </header>
  );
}