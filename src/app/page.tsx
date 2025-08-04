// [本頁目的]：前台首頁

import Header from '@/components/header/Header';
import PostPublisher from '@/components/home/PostPublisher';
import CoinFriendsPreview from '@/components/home/CoinFriendsPreview';
import TopicCoinsPreview from '@/components/home/TopicCoinsPreview';
import KolPreview from '@/components/home/KolPreview';
import StorePreview from '@/components/home/StorePreview';
import HomeBanner from '@/components/swiper/HomeBannerSwiper';
import HotEventsPreview from '@/components/home/HotEventsPreview';

export default function Home() {
  return (
    <>
      <Header />

      {/* 個人發佈貼文 CSR模式*/}
      <PostPublisher />

      {/* 誰擁有我的籌碼 CSR模式 */}
      <CoinFriendsPreview />

      {/* 首頁輪播banner CSR模式 */}
      <HomeBanner />

      {/* 主題籌碼 CSR模式 */}
      <HotEventsPreview />

      {/* 主題籌碼 SSR模式 */}
      <TopicCoinsPreview />

      {/* 店家籌碼推薦區 CSR模式 */}
      <StorePreview />

      {/* 網紅籌碼推薦區 CSR模式 */}
      <KolPreview />
    </>
  );
}
