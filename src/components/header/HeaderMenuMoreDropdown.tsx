'use client';

import style from './Header.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import Avatar from '../ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

// icons
import {
  IconLucidePlus,
  IconUserProfile,
  IconEmojiOutline,
  IconGetBoxOutline,
  IconGiftOutline,
  IconFluentMoneyOutline,
  IconRecordHistoryOutline,
  IconRankOutline,
  IconCartOutline,
  IconHelpCircleOutline,
  IconGuideOutline,
  IconLogOutOutline,
  IconAddPost,
} from '@/components/icons';

const HeaderMenuMoreDropdown = () => {
  const [showAccountList, setShowAccountList] = useState(false);

  const handleSwitchAccount = () => {
    setShowAccountList(true);
  };

  const handleBackToInfo = () => {
    setShowAccountList(false);
  };

  return (
    <div
      className="dropdown-menu dropdown-menu-more py-2"
      data-bs-theme="light"
      style={{ display: 'block', position: 'absolute', right: 0, top: '100%', width: '320px' }}
    >
      <div className={style.menuContainer}>
        <div className={`${style.menuContainerInner} ${showAccountList ? style.slideToLeft : ''}`}>
          {/* 主帳戶資訊頁 */}
          <div className={style.menuPanel}>
            <div className="dropdown-menu-more-my-info">
              <div className="dropdown-item-user align-items-start p-2 pb-0">
                <Link href="#">
                  <span className={style.avatar}>
                    <Avatar src={AVATAR_LINK.my} size={40} />
                  </span>
                </Link>

                <span className="fw-bold txt ms-2">
                  <span className="d-block">WOMO小姿</span>
                  <button
                    className="btn-switch-account fs-sm-2 text-grey"
                    onClick={handleSwitchAccount}
                  >
                    品牌專頁管理
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </span>
              </div>

              <ul>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon fw-bold">
                      <IconAddPost width={20} />
                    </span>
                    <span className="txt">發佈心情</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon">
                      <IconUserProfile />
                    </span>
                    <span className="txt">個人資料</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon">
                      <IconEmojiOutline />
                    </span>
                    <span className="txt">回謝卡</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon">
                      <IconGetBoxOutline />
                    </span>
                    <span className="txt">抖內箱</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon">
                      <IconGiftOutline />
                    </span>
                    <span className="txt">群發送禮</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon">
                      <IconFluentMoneyOutline />
                    </span>
                    <span className="txt">儲值</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon">
                      <IconRecordHistoryOutline />
                    </span>
                    <span className="txt">籌碼存摺</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon">
                      <IconRankOutline />
                    </span>
                    <span className="txt">排行榜</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon">
                      <IconCartOutline />
                    </span>
                    <span className="txt">WoMall</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon">
                      <IconGuideOutline />
                    </span>
                    <span className="txt">平台攻略</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon">
                      <IconHelpCircleOutline />
                    </span>
                    <span className="txt">幫助中心</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon">
                      <IconLogOutOutline />
                    </span>
                    <span className="txt">登出</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 切換帳號頁 */}
          <div className={style.menuPanel}>
            <div className="dropdown-menu-more-my-account">
              <div className="p-2 pb-0">
                <button onClick={handleBackToInfo}>
                  <span className="icon">
                    <i className="bi bi-chevron-left"></i>
                  </span>
                  <span className="txt ms-2">返回帳戶選單</span>
                </button>
              </div>

              <ul className="">
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="">
                  <Link href="#" className="dropdown-item-user align-items-center">
                    <span className={style.avatar}>
                      <img
                        src={
                          'https://womophoto.s3.amazonaws.com/womo/p/store/fbCjrsuaZRWdogW_1677380125.3'
                        }
                        width={40}
                        className="rounded-circle"
                      />
                    </span>
                    <span className="fw-bold txt ms-2">塔可</span>
                  </Link>
                </li>
                <li className="">
                  <Link href="#" className="dropdown-item-user align-items-center">
                    <span className={style.avatar}>
                      <img
                        src={
                          'https://womophoto.s3.amazonaws.com/womo/p/store/RNt5WXyCBlU6=BL_1748398412.2'
                        }
                        width={40}
                        className="rounded-circle"
                      />
                    </span>
                    <span className="fw-bold txt ms-2">美食</span>
                  </Link>
                </li>
                <li className="">
                  <Link href="#" className="dropdown-item-user align-items-center">
                    <span className={style.avatar}>
                      <img
                        src={
                          'https://womophoto.s3.amazonaws.com/womo/p/store/cllzMyjlsAf6WmY_1672806357.2'
                        }
                        width={40}
                        className="rounded-circle"
                      />
                    </span>
                    <span className="fw-bold txt ms-2">Tacos & Taps</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon fw-bold">
                      <IconLucidePlus width={20} />
                    </span>
                    <span className="txt">創建我的品牌專頁</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuMoreDropdown;
