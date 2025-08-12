// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import '@/styles/global.scss';
import React from 'react';

export const metadata: Metadata = {
  title: { default: 'WOMO', template: '%s｜WOMO' },
  description: 'WOMO',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
