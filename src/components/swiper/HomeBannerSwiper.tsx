// [本頁目的]：首頁 - Banner輪播

'use client';
import style from './HomeBanner.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';

// 套件
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// libs
import { homeBanner } from '@/libs/api/banner/homeBanner';

const HomeBanner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={`container-fluid ${style.wrapper} mb-20 position-relative`}>
      {/* Navigation按鈕 */}
      <div ref={prevRef} className={style.prevEl}></div>
      <div ref={nextRef} className={style.nextEl}></div>

      {/* swiper主體 */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        loop={true}
        onInit={(swiper) => {
          // 手動綁定 navigation 按鈕
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current!;
            swiper.params.navigation.nextEl = nextRef.current!;
          }
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        pagination={{ clickable: true }}
      >
        {homeBanner.map((pic, index) => (
          <SwiperSlide key={index}>
            <div className={style.imgWrapper}>
              <Link href="#">
                <Image src={pic} alt={`主圖${index + 1}`} fill className={style.img}></Image>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination按鈕 */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default HomeBanner;
