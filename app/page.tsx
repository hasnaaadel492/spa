'use client';

import React from 'react';
import Link from 'next/link';

const featuredServices = [
  {
    id: 'swedish',
    title: 'المساج السويدي (Swedish)',
    desc: 'جلسة تدليك استرخائية كاملة لتهدئة الأعصاب وتخفيف الإجهاد اليومي.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop',
    duration: '60 - 90 دقيقة',
  },
  {
    id: 'hot-stone',
    title: 'الأحجار الساخنة (Hot Stone)',
    desc: 'احجار بركانية دافئة تساعد على ارخاء العضلات العميقة وتحسين التروية الدموية.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop',
    duration: '90 دقيقة',
  },
  {
    id: 'home-spa',
    title: 'خدمة المساج المنزلي الفاخر',
    desc: 'نأتي إليك بكامل تجهيزات السبا الاحترافية مع خبراء متمرسين في منزلك.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
    duration: '90 دقيقة',
  },
];

const testimonials = [
  {
    name: 'عبدالله العتيبي',
    role: 'عميل مميز',
    comment: 'من أفضل تجارب المساج اللي جربتها، النظافة والاحترافية عالية جداً والخدمة المنزلية مريحة للغاية.',
    rating: 5,
  },
  {
    name: 'سارة الشمري',
    role: 'عميلة دائمة',
    comment: 'جلسة الأحجار الساخنة غيرت يومي تماماً، اهتمام بأدق التفاصيل والزيوت المستخدمة رائحتها خرافية.',
    rating: 5,
  },
  {
    name: 'محمد سليمان',
    role: 'عميل مميز',
    comment: 'التعامل راقي جداً والالتزام بالمواعيد ممتاز. أنصح بشدة بـ Velour Spa.',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="-mt-20 overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 scale-105"
          style={{
backgroundImage: `url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1920&auto=format&fit=crop')`,          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/30"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-6 border border-amber-500/30 backdrop-blur-sm">
            عالم من الهدوء والاسترخاء الفاخر
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-100 mb-6 leading-tight">
            تألق براحة لا تُنسى في <span className="text-amber-400 font-serif">Velour Spa</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            تجربة استرخاء فريدة مصممة لتجديد طاقة جسدك وروحك، بأيدي أفضل خبراء المساج في المقر أو داخل منزلك.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/booking"
              className="bg-amber-500 hover:bg-amber-600 text-stone-950 text-base font-bold px-8 py-4 rounded-full transition-all shadow-xl shadow-amber-500/20"
            >
              احجز جلسة الآن
            </Link>
            <Link
              href="/services"
              className="border border-stone-600 hover:border-amber-400 backdrop-blur-md bg-stone-900/40 text-stone-200 hover:text-white text-base font-medium px-8 py-4 rounded-full transition-all"
            >
              تصفح جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Quick About Preview */}
      <section className="py-24 bg-stone-950 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">فلسفة الاسترخاء</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-100 mt-2 mb-6 ">
                نصنع لك تجربة فاخرة تفصلك عن ضغوط الحياة
              </h2>
              <p className="text-stone-400 leading-relaxed mb-6 font-light">
                في Velour Spa، نؤمن بأن التدليك ليس مجرد رفاهية، بل علاج متكامل للبدن والذهن. نعتمد على زيوت مستخلصة من الطبيعة 100% وأساليب تدليك عالمية تضمن لك الراحة والسكينة.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-stone-800/80 pt-6">
                <div>
                  <h4 className="text-2xl font-bold text-amber-400 ">+5000</h4>
                  <p className="text-xs text-stone-400">جلسة مساج ناجحة</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-amber-400 ">100%</h4>
                  <p className="text-xs text-stone-400">زيوت طبيعية وعلاجية</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop"
                alt="Velour Spa Atmosphere"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services */}
      <section className="py-24 bg-stone-900/50 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">خدماتنا المميزة</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-100 mt-2 ">اختر الجلسة الأنسب لراحتك</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-xl hover:border-amber-500/40 transition-all group flex flex-col justify-between">
                <div className="h-52 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md text-amber-400 text-xs px-3 py-1 rounded-full border border-stone-700">
                    {service.duration}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-stone-100 mb-2">{service.title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                  </div>
                  <Link href={`/booking?service=${encodeURIComponent(service.title)}`} className="bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-stone-950 text-xs px-5 py-3 rounded-full font-semibold transition-all text-center block">
                    طلب استشارة / حجز
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="text-amber-400 hover:text-amber-300 text-sm font-semibold inline-flex items-center gap-2">
              عرض جميع الخدمات والمسارات العلاجية ←
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className="py-24 bg-stone-950 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">آراء العملاء</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-100 mt-2 ">ماذا يقول عملاؤنا عن Velour؟</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-stone-900 border border-stone-800 p-8 rounded-3xl flex flex-col justify-between">
                <p className="text-stone-300 text-sm leading-relaxed mb-6 italic">"{item.comment}"</p>
                <div>
                  <div className="flex text-amber-400 mb-2">{"★".repeat(item.rating)}</div>
                  <h4 className="text-stone-100 font-bold text-sm">{item.name}</h4>
                  <span className="text-xs text-stone-500">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call To Action Banner */}
      <section className="py-20 bg-stone-900/80 border-t border-stone-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-100 mb-4 ">جاهز لتجربة الاسترخاء المثالية؟</h2>
          <p className="text-stone-400 mb-8 text-sm max-w-xl mx-auto font-light">
            احجز موعدك اليوم واستمتع بجلسة مساج استرخائية مع أفضل الخبراء في المقر أو داخل منزلك.
          </p>
          <Link
            href="/booking"
            className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-9 py-4 rounded-full transition-all shadow-xl shadow-amber-500/20 inline-block"
          >
            احجز موعدك الآن عبر WhatsApp
          </Link>
        </div>
      </section>
    </div>
  );
}