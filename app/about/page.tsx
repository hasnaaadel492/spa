'use client';

import React from 'react';
import Link from 'next/link';

const features = [
  {
    title: 'أخصائيون محترفون',
    description: 'فريق من الخبراء والمعالجين المعتمدين دولياً ذوي خبرة واسعة في مختلف تقنيات المساج والاسترخاء.',
    icon: (
      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'منتجات وزيوت طبيعية 100%',
    description: 'نستخدم أفضل أنواع الزيوت العطرية والعلاجية المستوردة لضمان أقصى درجات التغذية والاسترخاء للبشرة.',
    icon: (
      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'أجواء مخصصة للراحة',
    description: 'تصميم داخلي، إضاءة خافتة، وموسيقى هادئة تم اختيارها بعناية لفصلك عن ضغوط الحياة اليومية.',
    icon: (
      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    title: 'خدمة منزلية متكاملة',
    description: 'نصلك أينما كنت بكافة تجهيزات السبا الفاخرة لنقدم لك تجربة الاسترخاء ذاتها داخل منزلك.',
    icon: (
      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Intro Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-4 border border-amber-500/20">
            عن Velour Spa
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-100 mb-6 font-serif leading-tight">
            ملاذك الخاص لاستعادة <span className="text-amber-400">التوازن والصفاء</span>
          </h1>
          <p className="text-stone-300 leading-relaxed mb-6 font-light">
            تأسس Velour Spa ليكون وجهة الاسترخاء الأولى لمن يبحثون عن تجربة مساج استثنائية تجمع بين الفخامة والاحترافية العالية. نحن نؤمن بأن العناية بالجسد والذهن ليست مجرد رفاهية، بل جزء أساسي من نمط الحياة الصحي.
          </p>
          <p className="text-stone-400 leading-relaxed mb-8 text-sm font-light">
            سواء اخترت زيارتنا في المقر للاستمتاع بأجوائنا المصممة خصيصاً للتأمل، أو طلبت خدمة المساج المنزلي، سنضمن لك تجربة متكاملة تجدد طاقتك وتلبي احتياجاتك بدقة.
          </p>
          <div className="flex gap-8 border-t border-stone-800 pt-6">
            <div>
              <span className="block text-3xl font-bold text-amber-400 font-serif">+5000</span>
              <span className="text-xs text-stone-400">عميل سعيد</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-amber-400 font-serif">100%</span>
              <span className="text-xs text-stone-400">زيوت طبيعية</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-amber-400 font-serif">+8</span>
              <span className="text-xs text-stone-400">سنوات خبرة</span>
            </div>
          </div>
        </div>

        {/* Visual Card / Image Placeholder */}
        <div className="relative">
          <div className="relative h-[480px] rounded-3xl overflow-hidden border border-stone-800 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop"
              alt="Velour Spa Atmosphere"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-stone-100 mb-3 font-serif">لماذا تختار Velour Spa؟</h2>
          <p className="text-stone-400 text-sm">نحرص على أدق التفاصيل لتقديم تجربة حيوية تدوم نتائجها مع الوقت.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-900 border border-stone-800 p-8 rounded-3xl hover:border-amber-500/40 transition-all group"
            >
              <div className="mb-6 p-3 bg-stone-950 w-fit rounded-2xl border border-stone-800 group-hover:border-amber-500/30 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-100 mb-3">{item.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-900 to-amber-950/30 border border-stone-800 rounded-3xl p-10 md:p-14 text-center">
        <h2 className="text-3xl font-bold text-stone-100 mb-4 font-serif">هل أنت جاهز لتجربة الاسترخاء؟</h2>
        <p className="text-stone-300 max-w-xl mx-auto mb-8 text-sm font-light">
          احجز موعدك اليوم ودع خبراءنا يهتمون براحتك التامة في المقر أو في منزلك.
        </p>
        <Link
          href="/booking"
          className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-4 rounded-full transition-all inline-block shadow-lg shadow-amber-500/20"
        >
          احجز موعدك الآن
        </Link>
      </div>
    </main>
  );
}