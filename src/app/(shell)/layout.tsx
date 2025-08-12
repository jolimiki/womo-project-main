// app/(site)/layout.tsx
import HeaderSite from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import '@/styles/global.scss';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderSite />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
