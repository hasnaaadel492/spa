'use client';

import React from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'swedish',
    title: 'المساج السويدي (Swedish Massage)',
    description: 'جلسة تدليك استرخائية شاملة لتهدئة الأعصاب وتخفيف التوتر باستخدام الزيوت الطبيعية الفاخرة.',
    duration: '60 - 90 دقيقة',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'hot-stone',
    title: 'مساج الأحجار الساخنة (Hot Stone)',
    description: 'استخدام الأحجار البركانية الساخنة لفك تشنجات العضلات العميقة وتحسين الدورة الدموية.',
    duration: '90 دقيقة',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'deep-tissue',
    title: 'مساج الأنسجة العميقة (Deep Tissue)',
    description: 'تركيز قوي على طبقات العضلات العميقة لتخفيف الآلام المزمنة وتشنجات الظهر والرقبة.',
    duration: '60 دقيقة',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'home-spa',
    title: 'خدمة المساج المنزلي الفاخر',
    description: 'نأتي إليك بكل تجهيزات السبا الاحترافية مع أفضل الأخصائيين لراحة تامة داخل منزلك.',
    duration: '90 دقيقة',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
  },
];

export default function ServicesPage() {
  return (
    <main className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-amber-400 mb-4 font-serif">خدماتنا وجلسات الاسترخاء</h1>
        <p className="text-stone-400">اختر نوع الجلسة المناسب لك واستمتع برعاية متكاملة تحت أيدي متمرسين.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((item) => (
          <div key={item.id} className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-xl hover:border-amber-500/40 transition-all group flex flex-col justify-between">
            <div className="h-56 overflow-hidden relative">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md text-amber-400 text-xs px-3 py-1 rounded-full border border-stone-700">
                {item.duration}
              </span>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-stone-100 mb-2">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">{item.description}</p>
              </div>
              <div className="flex items-center justify-end border-t border-stone-800 pt-4 mt-auto">
                <Link href={`/booking?service=${encodeURIComponent(item.title)}`} className="bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-stone-950 text-xs px-5 py-2.5 rounded-full font-semibold transition-all">
                  طلب استشارة / حجز
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}