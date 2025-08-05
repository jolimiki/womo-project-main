// [本頁目的]：全域置頂功能Bar - UI版型1

'use client';

import style from './Header.module.scss';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// icons
import AddPostIcon from '../icons/AddPost';
import ChatFriendIcon from '../icons/ChatFriend';
import SearchIcon from '../icons/Search';
import BellIcon from '../icons/Bell';
import MenuIcon from '../icons/Menu';
// 元件
import Avatar from '../ui/avatar/Avatar';
// const
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);
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
      if (menuRef.current && !menuRef.current.contains(e.target)) {
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
                <span className="ms-1">籌碼收入</span>
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

              {isDropdownOpen && (
                <ul
                  className="dropdown-menu dropdown-menu-more border-0 py-2 show"
                  data-bs-theme="light"
                  style={{ display: 'block', position: 'absolute', right: 0, top: '100%' }}
                >
                  <li>
                    <Link href="#" className="dropdown-item dropdown-item-user align-items-start">
                      <span className={style.avatar}>
                        <Avatar src={AVATAR_LINK.my} size={28} />
                      </span>
                      <span className="fw-bold txt">
                        WOMO小姿
                        <br />
                        <button className="btn-switch-account">
                          切換管理帳號
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            fill="currentColor"
                            class="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                            />
                          </svg>
                        </button>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="m252.522 469.306l3.478.028a218 218 0 0 1-14.118-.46a215 215 0 0 1-17.38-1.85a213 213 0 0 1-19.919-3.928a212 212 0 0 1-19.18-5.72l-.035-.013a212 212 0 0 1-30.135-13.28a213 213 0 0 1-19.968-12.178a214 214 0 0 1-20.709-16.2a215 215 0 0 1-6.748-6.243C67.643 370.666 42.667 316.25 42.667 256C42.667 138.18 138.18 42.667 256 42.667A213.333 213.333 0 0 1 469.334 256c0 60.252-24.978 114.67-65.144 153.464q-.002.004 0 .012a214.6 214.6 0 0 1-32.954 26.088l-.165.105a209 209 0 0 1-8.15 4.977l-.291.17a214 214 0 0 1-14.764 7.78a227 227 0 0 1-5.935 2.724a225 225 0 0 1-6.272 2.645a225 225 0 0 1-6.155 2.368a224 224 0 0 1-6.29 2.197a222 222 0 0 1-6.245 1.964a219 219 0 0 1-6.677 1.87a218 218 0 0 1-6.552 1.608a217 217 0 0 1-6.584 1.395a213 213 0 0 1-27.179 3.516a216 216 0 0 1-6.81.333l-.044.001a217 217 0 0 1-10.601.089m24.812-127.972h-42.667c-33.983 0-63.704 19.997-77.367 49.236l-1.545 3.542l1.337.989c24.316 17.32 53.367 28.425 84.834 30.994l.13.01l-.13-.01q1.409.115 2.824.207l-2.694-.197q1.375.112 2.756.201l-.062-.004q1.368.09 2.74.157l-2.678-.153q1.425.093 2.858.161l-.18-.008q1.029.05 2.058.088l6.452.12l2.675-.02a173 173 0 0 0 2.95-.07l-2.7.065q1.365-.022 2.725-.067l-.025.001q1.371-.044 2.738-.11l-2.713.11q1.41-.047 2.819-.116l-.106.006q1.424-.07 2.84-.16l-2.734.154q1.387-.067 2.77-.157l-.035.002q1.386-.09 2.766-.201l-2.732.199q1.41-.092 2.817-.206l-.085.007q1.34-.11 2.674-.238l-2.589.23q1.4-.114 2.794-.25l-.205.02c30.416-2.944 58.496-13.872 82.119-30.662l1.461-1.092l-1.522-3.538c-13.065-27.968-40.827-47.484-72.96-49.128zM256 85.334c-94.256 0-170.666 76.41-170.666 170.666c0 40.704 14.249 78.08 38.031 107.41c22.028-38.672 63.62-64.743 111.302-64.743h42.667c47.683 0 89.276 26.073 111.3 64.74c23.783-29.327 38.033-66.703 38.033-107.407c0-94.256-76.41-170.666-170.667-170.666m0 21.333c47.129 0 85.334 38.205 85.334 85.333c0 45.7-35.925 83.01-81.075 85.23l-4.259.104c-47.128 0-85.333-38.205-85.333-85.334c0-45.7 35.925-83.01 81.074-85.229zm0 42.667c-23.564 0-42.666 19.102-42.666 42.666s19.102 42.667 42.666 42.667s42.667-19.103 42.667-42.667s-19.103-42.666-42.667-42.666"
                          ></path>
                        </svg>
                      </span>
                      <span className="txt">個人資料</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                        >
                          <g fill="none">
                            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                            <path
                              fill="currentColor"
                              d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m2.8 9.857a1 1 0 1 1 1.4 1.428A5.98 5.98 0 0 1 12 17a5.98 5.98 0 0 1-4.2-1.715a1 1 0 0 1 1.4-1.428A3.98 3.98 0 0 0 12 15c1.09 0 2.077-.435 2.8-1.143M8.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      <span className="txt">回謝卡</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      <span className="txt">抖內箱</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      <span className="txt">群發送禮</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      <span className="txt">儲值</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      <span className="txt">籌碼存摺</span>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      <span className="txt">排行榜</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      <span className="txt">WoMall</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      <span className="txt">平台攻略</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      <span className="txt">幫助中心</span>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      <span className="txt">登出</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
