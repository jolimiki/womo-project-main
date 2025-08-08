// [本頁目的]：全域置頂功能Bar - UI版型1

'use client';

import style from './Header.module.scss';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// icons
import AddPostIcon from '../icons/AddPostIcon';
import ChatFriendIcon from '../icons/ChatFriendIcon';
import SearchIcon from '../icons/SearchIcon';
import BellIcon from '../icons/BellIcon';
import MenuIcon from '../icons/MenuIcon';

// 元件
import Avatar from '../ui/avatar/Avatar';
import HeaderMenuMoreDropdown from './HeaderMenuMoreDropdown';

// const
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);
  const pathName = usePathname();

  // 隱藏 header on scroll down
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

  // Menu icon dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && e.target instanceof Node && !menuRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className={`${style.header} ${!showHeader ? style.hidden : ''}`}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <Link href="/" className={style.logoWrapper}>
            <Image
              src="https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/logo.png"
              alt="LOGO"
              fill
              className={style.logoImage}
            />
          </Link>

          <ul className="d-none d-lg-flex justify-content-between">
            <li>
              <Link
                href="#"
                className={`d-flex align-items-center ${style.headerNavLink} ${
                  pathName === '/' ? `${style.active} text-brand` : 'text-dark'
                }`}
              >
                <span className={`${style.icon} ${style.iconHome}`} />
                <span className="ms-1">AR聚點</span>
              </Link>
            </li>
            <li>
              <Link href="#" className={`d-flex align-items-center ${style.headerNavLink}`}>
                <span className={`${style.icon} ${style.iconWallet}`} />
                <span className="ms-1">籌碼包</span>
              </Link>
            </li>
            <li>
              <Link href="#" className={`d-flex align-items-center ${style.headerNavLink}`}>
                <span className={style.avatar}>
                  <Avatar src={AVATAR_LINK.my} size={28} />
                </span>
                <span className="ms-1">瘋碼秀</span>
              </Link>
            </li>
            <li>
              <Link href="#" className={`d-flex align-items-center ${style.headerNavLink}`}>
                <span className={`${style.icon} ${style.iconGift}`} />
                <span className="ms-1">找禮物</span>
              </Link>
            </li>
            <li>
              <Link href="#" className={`d-flex align-items-center ${style.headerNavLink}`}>
                <span className={`${style.icon} ${style.iconIncome}`} />
                <span className="ms-1">玩斜槓</span>
              </Link>
            </li>
          </ul>

          <ul className={`d-flex py-3 ${style.headerNavUtility}`}>
            <li>
              <Link href="#">
                <AddPostIcon width={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <ChatFriendIcon width={28} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <SearchIcon width={28} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <BellIcon width={28} />
              </Link>
            </li>
            <li className="nav-item dropdown" ref={menuRef}>
              <button
                onClick={toggleDropdown}
                className="btn p-0 border-0"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <MenuIcon width={28} />
              </button>

              {isDropdownOpen && <HeaderMenuMoreDropdown />}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
