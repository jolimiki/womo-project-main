// [本頁目的]：首頁 - 個人發佈貼文

'use client';

import style from './PostPublisher.module.scss';
import Link from 'next/link';
import Image from 'next/image';
//元件
import Button from '@/components/ui/button/submit/Button';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '../ui/avatar/Avatar';
import CheckBtn from '../ui/button/icon/CheckBtn';
import GiveMyCoin from '../modal/GiveMyCoin';
import SectionUI from '../ui/section/SectionUI';
//hooks
import { useState } from 'react';
import useScreenSize from '@/hooks/useScreenSize';
import { useRouter } from 'next/navigation';
//constants
import { EMOJI } from '@/constants/emoji';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

const PostPublisherClient = () => {
  const [emojiIndex, setEmojiIndex] = useState(0);
  const router = useRouter();
  const { isMobile, isTablet } = useScreenSize();
  const [giveMyCoinModal, setGiveMyCoinModal] = useState(false);

  const handleEmojiBtn = () => {
    router.push(`/user/create_article?emojiIndex=${emojiIndex}`);
  };

  return (
    <section className={style.bg}>
      <div className={`container ${style.wrapper}`}>
        <div className="d-flex justify-content-between align-items-center">
          <Coin scale={isMobile ? 0.6 : isTablet ? 0.8 : 1} color="green">
            <Avatar href="/" src={AVATAR_LINK.my} />
          </Coin>
          <Button size="large" color="secondary" onClick={() => setGiveMyCoinModal(true)}>
            送籌碼
          </Button>
          <GiveMyCoin open={giveMyCoinModal} onOpenChange={setGiveMyCoinModal} />
        </div>
        <SectionUI>
          <div className={style.contentBar}>
            <Link href="/user/create_article">發心情給擁有你籌碼的朋友</Link>
            <div className={style.contentBtn}>
              <Button size="large" color="primary" onClick={handleEmojiBtn}>
                發佈心情
              </Button>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            {EMOJI.map((img, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setEmojiIndex(index)}
                className={`${style.EmojiOuter} ${
                  emojiIndex == index ? style.EmojiOuterActive : ''
                } `}
              >
                <div className="position-relative text-center">
                  <Image
                    src={img.image}
                    alt={img.name}
                    layout="responsive"
                    width={48}
                    height={48}
                    className={`${style.emojiImg} ${
                      emojiIndex == index ? 'opacity-100' : 'opacity-50'
                    }`}
                  />
                  <div
                    className={`d-md-none position-absolute top-0 start-0 translate-middle ${
                      emojiIndex == index ? 'd-block' : 'd-none'
                    }`}
                  >
                    <CheckBtn />
                  </div>
                </div>
                <div
                  className={`d-none position-absolute top-0 start-0 translate-middle ${
                    emojiIndex == index ? 'd-md-block' : 'd-none'
                  }`}
                >
                  <CheckBtn />
                </div>
              </button>
            ))}
          </div>
        </SectionUI>
      </div>
    </section>
  );
};

export default PostPublisherClient;
