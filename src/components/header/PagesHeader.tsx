// [本頁目的]：全域置頂功能Bar - UI版型2

'use client';

import style from './PagesHeader.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// icon
import BackArrowIcon from '../icons/BackArrow';
import CancelIcon from '../icons/Cancel';

const PagesHeader = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 300) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${style.header} ${!showHeader ? style.hidden : ''}`}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-5">
          <button className="btn" onClick={() => router.back()}>
            <BackArrowIcon width={28} />
          </button>
          <Link href="/" className={style.logoWrapper}>
            <Image src="/images/WOMO-LOGO1.png" alt="LOGO" fill className={style.logoImage} />
          </Link>
          <button className="btn" onClick={() => router.back()}>
            <CancelIcon width={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;
