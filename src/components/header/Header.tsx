// [本頁目的]：全域置頂功能Bar - UI版型1

'use client';

import style from './Header.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// icons
import CompassIcon from '../icons/Compass';
import WalletIcon from '../icons/Wallet';
import GiftIcon from '../icons/Gift';
import IncomeIcon from '../icons/Income';
import AddPostIcon from '../icons/AddPost';
import ChatFriendIcon from '../icons/ChatFriend';
import SearchIcon from '../icons/Search';
import BellIcon from '../icons/Bell';
import MenuIcon from '../icons/Menu';
// 元件
import Avatar from '../ui/avatar/Avatar';
// const
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathName = usePathname();

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
        <div className="d-flex justify-content-between align-items-center">
          <Link href="/" className={style.logoWrapper}>
            <Image src="https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/logo.png" alt="LOGO" fill className={style.logoImage} />
          </Link>
          <ul className={`d-none d-lg-flex justify-content-between `}>
            <li className="">
              <Link
                href="#"
                className={`d-flex align-items-center ${style.headerNavLink} ${
                  pathName === '/' ? `${style.active} text-brand` : 'text-dark'
                }`}
              >
                <span className={`${style.icon} ${style.iconHome}`}></span>
                <span className="ms-1">AR聚點</span>
              </Link>
            </li>
            <li className="">
              <Link href="#" className={`d-flex align-items-center ${style.headerNavLink}`}>
                <span className={`${style.icon} ${style.iconWallet}`}></span>
                <span className="ms-1">籌碼包</span>
              </Link>
            </li>
            <li className="">
              <Link href="#" className={`d-flex align-items-center ${style.headerNavLink}`}>
                <span className={style.avatar}>
                  <Avatar src={AVATAR_LINK.my} size={28} />
                </span>
                <span className="ms-1">瘋碼秀</span>
              </Link>
            </li>
            <li className="">
              <Link href="#" className={`d-flex align-items-center ${style.headerNavLink}`}>
                <span className={`${style.icon} ${style.iconGift}`}></span>
                <span className="ms-1">找禮物</span>
              </Link>
            </li>
            <li className="">
              <Link href="#" className={`d-flex align-items-center ${style.headerNavLink}`}>
                <span className={`${style.icon} ${style.iconIncome}`}></span>
                <span className="ms-1">籌碼收入</span>
              </Link>
            </li>
          </ul>
          <ul className={`d-flex py-3 ${style.headerNavUtility}`}>
            <li className="">
              <Link href="#">
                <AddPostIcon width={30} />
              </Link>
            </li>
            <li className="">
              <Link href="#">
                <ChatFriendIcon width={28} />
              </Link>
            </li>
            <li className="">
              <Link href="#">
                <SearchIcon width={28} />
              </Link>
            </li>
            <li className="">
              <Link href="#">
                <BellIcon width={28} />
              </Link>
            </li>
            <li className="">
              <Link href="#">
                <MenuIcon width={28} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
