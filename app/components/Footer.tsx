'use client';

import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-auto border-t border-stone-800/80 py-8 text-center text-stone-500 text-sm bg-stone-950">
      <p>© {year || '2026'} Velour Spa & Wellness. جميع الحقوق محفوظة.</p>
    </footer>
  );
}