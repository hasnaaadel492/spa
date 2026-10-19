'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function BookingForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') || 'المساج السويدي (Swedish Massage)';

  const [service, setService] = useState(initialService);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('04:00 مساءً');
  const [location, setLocation] = useState('center');

  // قائمة الأوقات المتاحة للاختيار السريع
  const availableTimes = [
    '02:00 مساءً',
    '04:00 مساءً',
    '06:00 مساءً',
    '08:00 مساءً',
    '10:00 مساءً',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '201060540916';
    const msg = `مرحباً Velour Spa، أرغب في تأكيد حجز:%0A- الخدمة: ${service}%0A- الاسم: ${name}%0A- الجوال: ${phone}%0A- التاريخ: ${date}%0A- الوقت: ${timeSlot}%0A- المكان: ${location === 'center' ? 'في المركز' : 'خدمة منزلية'}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 md:p-10 shadow-2xl">
      <h1 className="text-3xl font-bold text-center text-amber-400 mb-2 ">حجز موعد</h1>
      <p className="text-stone-400 text-center text-sm mb-8">قم بتحديد خياراتك وسيتم تحويل طلبك مباشرة عبر الواتساب</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* اختيار الخدمة */}
        <div>
          <label className="block text-sm font-medium text-stone-300 mb-2">اختر الخدمة</label>
          <div className="relative">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-stone-950 border border-stone-800 rounded-xl px-5 py-3.5 pr-5 pl-12 text-stone-200 focus:outline-none focus:border-amber-500 appearance-none transition-colors cursor-pointer"
            >
              <option value="المساج السويدي (Swedish Massage)">المساج السويدي (Swedish Massage)</option>
              <option value="مساج الأحجار الساخنة (Hot Stone)">مساج الأحجار الساخنة (Hot Stone)</option>
              <option value="مساج الأنسجة العميقة (Deep Tissue)">مساج الأنسجة العميقة (Deep Tissue)</option>
              <option value="خدمة المساج المنزلي الفاخر">خدمة المساج المنزلي الفاخر</option>
            </select>
            {/* سهم مسافات مريحة عن الحافة */}
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-amber-500">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* الاسم والجوال */}
        <div>
          <label className="block text-sm font-medium text-stone-300 mb-2">الاسم الكامل</label>
          <input
            type="text"
            required
            placeholder="أدخل اسمك"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-stone-950 border border-stone-800 rounded-xl px-5 py-3.5 text-stone-200 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-300 mb-2">رقم الجوال</label>
          <input
            type="tel"
            required
            placeholder="01xxxxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-stone-950 border border-stone-800 rounded-xl px-5 py-3.5 text-stone-200 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        {/* اختيار التاريخ والوقت بدون إدخال يدوي */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-300 mb-2">تاريخ الجلسة</label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-stone-950 border border-stone-800 rounded-xl px-5 py-3.5 text-stone-200 focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-300 mb-2">مكان الجلسة</label>
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-xl px-5 py-3.5 pr-5 pl-12 text-stone-200 focus:outline-none focus:border-amber-500 appearance-none transition-colors cursor-pointer"
              >
                <option value="center">في مركز السبا</option>
                <option value="home">خدمة منزلية</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-amber-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* اختيار الوقت كأزرار سريعة */}
        <div>
          <label className="block text-sm font-medium text-stone-300 mb-2">الوقت المفضل للجلسة</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {availableTimes.map((time) => (
              <button
                type="button"
                key={time}
                onClick={() => setTimeSlot(time)}
                className={`py-3 px-4 rounded-xl text-xs font-semibold border transition-all ${
                  timeSlot === time
                    ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-md shadow-amber-500/20'
                    : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-amber-500/40'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 text-base mt-4"
        >
          تأكيد الطلب عبر WhatsApp
        </button>
      </form>
    </div>
  );
}

export default function BookingPage() {
  return (
    <main className="py-16 max-w-2xl mx-auto px-4 w-full">
      <Suspense fallback={<div className="text-center text-stone-400 py-12">جاري تحميل نموذج الحجز...</div>}>
        <BookingForm />
      </Suspense>
    </main>
  );
}