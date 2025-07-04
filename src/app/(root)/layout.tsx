// app/layout.tsx
import '@/app/assets/loader.gif';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/shared/header';
import Footer from '@/components/ui/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'A modern ecommerce platform built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className} antialiased flex h-screen flex-col`}>
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}
