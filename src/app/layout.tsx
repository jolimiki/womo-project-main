// [本頁目的]：全域Root Layout

import type { Metadata } from 'next';
import '../styles/global.scss';
import Footer from '@/components/footer/Footer';
import React from 'react';

export const metadata: Metadata = {
  title: 'WOMO(demo)',
  description: '皇冠版',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
