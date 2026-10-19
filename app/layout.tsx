import type { Metadata } from 'next';
import { Cairo, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-cairo',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
});

// إعدادات الـ Meta tags والتجربة الشاملة لـ OpenGraph & Meta
export const metadata: Metadata = {
  title: 'Velour Spa & Wellness | خدمات المساج الفاخر والاسترخاء',
  description: 'تجربة استرخاء فريدة ومساج فاخر في المقر أو داخل منزلك مع خبراء Velour Spa. احجز موعدك الآن بسهولة عبر الواتساب.',
  keywords: ['مساج', 'سبا', 'Velour Spa', 'مساج منزلي', 'استرخاء', 'مساج سويدي', 'أحجار ساخنة'],
  authors: [{ name: 'Velour Spa Team' }],
  metadataBase: new URL('https://velour-spa.vercel.app'), // استبدل هذا برابط موقعك الحقيقي بعد الرفع

  openGraph: {
    title: 'Velour Spa & Wellness | تجربة مساج فاخرة واسترخاء تام',
    description: 'احصل على أفضل جلسات المساج السويدي والأحجار الساخنة في المقر أو خدمة منزلية راقية.',
    url: 'https://velour-spa.vercel.app',
    siteName: 'Velour Spa',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Velour Spa & Wellness',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Velour Spa & Wellness | خدمات المساج الفاخر',
    description: 'تجربة استرخاء فريدة ومساج فاخر في المقر أو داخل منزلك.',
    images: ['https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&h=630&auto=format&fit=crop'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${playfair.variable}`}>
      <body className="font-sans bg-stone-950 text-stone-100 antialiased flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}