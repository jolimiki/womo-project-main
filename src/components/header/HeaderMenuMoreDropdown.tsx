'use client';

import style from './Header.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import Avatar from '../ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

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
      className="dropdown-menu dropdown-menu-more border-0 py-2 show"
      data-bs-theme="light"
      style={{ display: 'block', position: 'absolute', right: 0, top: '100%', width: '320px' }}
    >
      <div className={style.menuContainer}>
        <div className={`${style.menuContainerInner} ${showAccountList ? style.slideToLeft : ''}`}>
          {/* 主帳戶資訊頁 */}
          <div className={style.menuPanel}>
            <div className="dropdown-menu-more-my-info">
              <Link href="#" className="dropdown-item dropdown-item-user align-items-start">
                <span className={style.avatar}>
                  <Avatar src={AVATAR_LINK.my} size={28} />
                </span>
                <span className="fw-bold txt">
                  WOMO小姿
                  <br />
                  <button className="btn-switch-account" onClick={handleSwitchAccount}>
                    切換管理帳號
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </button>
                </span>
              </Link>

              <ul className="mt-3">
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
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M5 8v11h14V8h-3v8l-4-2l-4 2V8zm0 13q-.825 0-1.412-.587T3 19V6.525q0-.35.113-.675t.337-.6L4.7 3.725q.275-.35.687-.538T6.25 3h11.5q.45 0 .863.188t.687.537l1.25 1.525q.225.275.338.6t.112.675V19q0 .825-.587 1.413T19 21zm.4-15h13.2l-.85-1H6.25zM10 8v4.75l2-1l2 1V8zM5 8h14z"
                        ></path>
                      </svg>
                    </span>
                    <span className="txt">抖內箱</span>
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
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1m12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5"
                        ></path>
                      </svg>
                    </span>
                    <span className="txt">群發送禮</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M10.5 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6M9 11a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M2 7.25A2.25 2.25 0 0 1 4.25 5h12.5A2.25 2.25 0 0 1 19 7.25v7.5A2.25 2.25 0 0 1 16.75 17H4.25A2.25 2.25 0 0 1 2 14.75zm2.25-.75a.75.75 0 0 0-.75.75V8h.75A.75.75 0 0 0 5 7.25V6.5zm-.75 6h.75a2.25 2.25 0 0 1 2.25 2.25v.75h8v-.75a2.25 2.25 0 0 1 2.25-2.25h.75v-3h-.75a2.25 2.25 0 0 1-2.25-2.25V6.5h-8v.75A2.25 2.25 0 0 1 4.25 9.5H3.5zm14-4.5v-.75a.75.75 0 0 0-.75-.75H16v.75c0 .414.336.75.75.75zm0 6h-.75a.75.75 0 0 0-.75.75v.75h.75a.75.75 0 0 0 .75-.75zm-14 .75c0 .414.336.75.75.75H5v-.75a.75.75 0 0 0-.75-.75H3.5zm.901 3.75A3 3 0 0 0 7 20h10.25A4.75 4.75 0 0 0 22 15.25V10a3 3 0 0 0-1.5-2.599v7.849a3.25 3.25 0 0 1-3.25 3.25z"
                        ></path>
                      </svg>
                    </span>
                    <span className="txt">儲值</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 48 48"
                      >
                        <g fill="none" stroke="currentColor" strokeWidth={4}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M42 24V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h15"
                          ></path>
                          <circle cx={32} cy={32} r={6}></circle>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m37 36l5 4M14 16h20m-20 8h8"
                          ></path>
                        </g>
                      </svg>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3.5 18c0-1.414 0-2.121.44-2.56C4.378 15 5.085 15 6.5 15H7c.943 0 1.414 0 1.707.293S9 16.057 9 17v5H3.5zM15 19c0-.943 0-1.414.293-1.707S16.057 17 17 17h.5c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v2H15zM2 22h20M9 16c0-1.414 0-2.121.44-2.56C9.878 13 10.585 13 12 13s2.121 0 2.56.44c.44.439.44 1.146.44 2.56v6H9zm3.691-13.422l.704 1.42a.87.87 0 0 0 .568.423l1.276.213c.816.137 1.008.734.42 1.323l-.992 1a.88.88 0 0 0-.208.73l.284 1.238c.224.98-.292 1.359-1.152.847l-1.196-.714a.86.86 0 0 0-.792 0l-1.196.714c-.856.512-1.376.129-1.152-.847l.284-1.238a.88.88 0 0 0-.208-.73l-.991-1c-.584-.589-.396-1.186.42-1.323l1.275-.213a.87.87 0 0 0 .564-.424l.704-1.42c.384-.77 1.008-.77 1.388 0"
                        ></path>
                      </svg>
                    </span>
                    <span className="txt">排行榜</span>
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
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path d="M3 3h2l.5 3m0 0L7 15h11l3-9z"></path>
                          <circle cx={8} cy={20} r={1}></circle>
                          <circle cx={17} cy={20} r={1}></circle>
                        </g>
                      </svg>
                    </span>
                    <span className="txt">WoMall</span>
                  </Link>
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
                          d="M384 319.997V85.331H149.333c-11.782 0-21.333 9.551-21.333 21.333v216.975a63.9 63.9 0 0 1 21.333-3.642zM85.333 106.664v298.667c0 35.346 28.654 64 64 64h277.334v-85.334h-21.334v42.667h-256c-11.782 0-21.333-9.551-21.333-21.333v-21.334c0-11.782 9.551-21.333 21.333-21.333h277.334v-320H149.333c-35.346 0-64 28.654-64 64m149.334 170.667v-85.334h42.666v85.334zM256 170.664c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.334-21.333-21.334s-21.333 9.552-21.333 21.334s9.551 21.333 21.333 21.333M149.333 383.997H384v21.334H149.333z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="txt">平台攻略</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdown-item">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.44 4.54c.43-.354.994-.565 1.56-.565c1.217 0 2.34.82 2.34 2.14c0 .377-.078.745-.298 1.1c-.208.339-.513.614-.875.867c-.217.153-.325.257-.379.328c-.038.052-.038.07-.038.089a.75.75 0 0 1-1.5 0c0-.794.544-1.286 1.057-1.645c.28-.196.4-.332.458-.426a.54.54 0 0 0 .075-.312c0-.3-.244-.641-.84-.641a1 1 0 0 0-.608.223c-.167.138-.231.287-.231.418a.75.75 0 0 1-1.5 0c0-.674.345-1.22.78-1.577M8 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                          clipRule="evenodd"
                        ></path>
                      </svg>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h6q.425 0 .713.288T12 20t-.288.713T11 21zm12.175-8H10q-.425 0-.712-.288T9 12t.288-.712T10 11h7.175L15.3 9.125q-.275-.275-.275-.675t.275-.7t.7-.313t.725.288L20.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.712.288t-.713-.313q-.275-.3-.262-.712t.287-.688z"
                        ></path>
                      </svg>
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
              <button onClick={handleBackToInfo}>返回帳戶選單</button>
              <Link href="#" className="dropdown-item dropdown-item-user align-items-start mt-2">
                <span className={style.avatar}>
                  <Avatar src={AVATAR_LINK.my} size={28} />
                </span>
                <span className="fw-bold txt">WOMO小姿1111</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuMoreDropdown;
