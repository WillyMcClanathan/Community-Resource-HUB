import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import siteData from '@/data/site.json';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: siteData.siteTitle,
  description: siteData.siteDescription,
  keywords: ['community resources', 'South Snohomish County', 'Washington', 'social services', 'food banks', 'housing assistance'],
  openGraph: {
    title: siteData.siteTitle,
    description: siteData.siteDescription,
    url: siteData.siteUrl,
    siteName: siteData.siteTitle,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
