// [本頁目的]：全域置底功能Bar

'use client';

import style from './Footer.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// icons
import CompassIcon from '../icons/CompassIcon';
import WalletIcon from '../icons/WalletIcon';
import GiftIcon from '../icons/GiftIcon';
import IncomeIcon from '../icons/IncomeIcon';
// 元件
import Avatar from '../ui/avatar/Avatar';
// const
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

const Footer = () => {
  const pathName = usePathname();
  return (
    <footer className={`${style.footer} pb-20 pb-md-0`}>
      <div className="p-5 fs-sm-1 d-md-flex justify-content-between">
        <div className={`order-last ${style.mediaSocialIconListBlock}`}>
          <ul className="d-flex align-items-center">
            <li className="pe-2">
              <Link href="https://www.facebook.com/womoid/" target="_blank">
                <i className="bi bi-facebook"></i>
              </Link>
            </li>
            <li className="px-2">
              <Link href="https://www.instagram.com/womo.com.tw/" target="_blank">
                <i className="bi bi-instagram"></i>
              </Link>
            </li>
            <li className="px-2">
              <Link href="https://www.youtube.com/@womo3388" target="_blank">
                <i className="bi bi-youtube"></i>
              </Link>
            </li>
            <li className="px-2">
              <Link href="https://www.threads.com/@womo.com.tw?hl=zh-tw" target="_blank">
                <i className="bi bi-threads"></i>
              </Link>
            </li>
            <li className="px-2">
              <Link href="https://lin.ee/ffCalWJ" target="_blank">
                <i className="bi bi-line"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-copyright text-grey">
          <span className="mt-2 mb-1">© WOMO ALL RIGHTS RESERVED.</span>
          <div className="d-md-inline-block">
            <span className="mx-2 d-none d-md-inline">·</span>
            <Link href="/terms/privacy_policy">隱私權設定</Link>
            <span className="mx-2">·</span>
            <Link href="/terms/services">會員條款</Link>
          </div>
        </div>
      </div>

      <div className={`d-lg-none  ${style.navMobile}`}>
        <ul className={`d-flex justify-content-between`}>
          <li>
            <Link
              href="/"
              className={`d-flex flex-column align-items-center ${
                pathName === '/' ? 'text-brand' : 'text-dark'
              }`}
            >
              <CompassIcon width={24} />
              <span>AR聚點</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="d-flex flex-column align-items-center">
              <WalletIcon width={24} />
              <span>籌碼包</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="d-flex flex-column align-items-center">
              <span className={style.avatar}>
                <Avatar src={AVATAR_LINK.my} size={24} />
              </span>
              <span>瘋碼秀</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="d-flex flex-column align-items-center">
              <GiftIcon width={24} />
              <span>找禮物</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="d-flex flex-column align-items-center">
              <IncomeIcon width={24} />
              <span>籌碼收入</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
