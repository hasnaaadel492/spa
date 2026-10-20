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

// تحديث رابط Vercel الفعلي لضمان قراءة الصورة على WhatsApp
const siteUrl = 'https://spa-81v2.vercel.app';
const imageUrl = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&h=630&auto=format&fit=crop&v=2';
export const metadata: Metadata = {
  title: 'Velour Spa & Wellness | تجربة مساج فاخرة واسترخاء تام',
  description: 'احصل على أفضل جلسات المساج السويدي والأحجار الساخنة في المقر أو خدمة منزلية راقية.',
  keywords: ['مساج', 'سبا', 'Velour Spa', 'مساج منزلي', 'استرخاء'],
  authors: [{ name: 'Velour Spa Team' }],
  metadataBase: new URL(siteUrl),

  openGraph: {
    title: 'Velour Spa & Wellness | تجربة مساج فاخرة واسترخاء تام',
    description: 'احصل على أفضل جلسات المساج السويدي والأحجار الساخنة في المقر أو خدمة منزلية راقية.',
    url: siteUrl,
    siteName: 'Velour Spa',
    images: [
      {
        url: imageUrl,
        secureUrl: imageUrl,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Velour Spa & Wellness',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Velour Spa & Wellness | تجربة مساج فاخرة واسترخاء تام',
    description: 'احصل على أفضل جلسات المساج السويدي والأحجار الساخنة في المقر أو خدمة منزلية راقية.',
    images: [imageUrl],
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