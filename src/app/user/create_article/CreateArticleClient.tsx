// [本頁目的]：個人貼文新增內頁 CSR模式

'use client';
import { useState } from 'react';
import style from './CreateArticleClient.module.scss';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
// libs
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
// 元件
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import PagesHeader from '@/components/header/PagesHeader';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import CheckBtn from '@/components/ui/button/icon/CheckBtn';
import Button from '@/components/ui/button/submit/Button';
import AddSendCoins from '@/components/activity/sendCoins/AddSendCoins';
import AddWishCoins from '@/components/activity/wishCoins/AddWishCoins';
import AddExchangeCoins from '@/components/activity/exchangeCoins/AddExchangeCoins';
import AddReunionPost from '@/components/activity/reunionPost/AddReunionPost';
import AddSecretPost from '@/components/activity/secretPost/AddSecretPost';
import AddLotteryGame from '@/components/activity/lotteryGame/AddLotteryGame';
import AddCollectGame from '@/components/activity/collectGame/AddCollectGame';
// const
import { EMOJI } from '@/constants/emoji';
import { ACTIVITY } from '@/constants/activity';
// icon
import PhotoIcon from '@/components/icons/Photo';
import MicrophoneIcon from '@/components/icons/Microphone';
import VideoIcon from '@/components/icons/Video';
import YoutubeIcon from '@/components/icons/Youtube';
import ArrowIcon from '@/components/icons/Arrow';
import LocationIcon from '@/components/icons/Location';
import CancelIcon from '@/components/icons/Cancel';

const CreateArticleClient = () => {
  const searchParams = useSearchParams();
  const emojiParams = searchParams.get('emojiIndex');
  const [emojiIndex, setEmojiIndex] = useState(emojiParams ?? 0);
  const [selectedActivity, setSelectedActivity] = useState('');
  const [isShowAllActivity, setIsShowAllActivity] = useState(false);

  const handleActivityOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedActivity(e.target.value);
    setIsShowAllActivity(false);
  };

  return (
    <>
      <PagesHeader />
      <div className={`container-fluid ${style.wrapper} mt-5`}>
        <div className="d-flex align-items-center">
          <Coin color="green" scale={0.8}>
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
          <p className="text-muted fw-bold ms-5">
            您正在
            <LocationIcon width={16} className="text-secondary" />
            <Link href="#" className="text-secondary text-decoration-underline">
              森林小樹屋度假村
            </Link>
            打卡
          </p>
        </div>

        <form action="" className="mb-20">
          <SectionUI2 title="今日的心情標籤是什麼...">
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
                      className={`${style.emojiImg}  ${
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
          </SectionUI2>

          <SectionUI2 title="想說些什麼呢？">
            <div className="form-floating mb-5">
              <textarea
                className={`form-control ${style.formControl}`}
                placeholder="Leave a comment here"
                id="floatingTextarea"
                style={{
                  height: '240px',
                  resize: 'none',
                }}
              ></textarea>
              <label htmlFor="floatingTextarea">我想說...</label>
            </div>
            <div>
              <button className="mx-1">
                <PhotoIcon width={32} />
              </button>
              <button className="mx-1">
                <MicrophoneIcon width={32} />
              </button>
              <button className="mx-1">
                <VideoIcon width={32} />
              </button>
              <button className="mx-1">
                <YoutubeIcon width={32} />
              </button>
            </div>
          </SectionUI2>

          {!selectedActivity && (
            <SectionUI2 title={`添加互動 ${selectedActivity && ': ' + selectedActivity}`}>
              {ACTIVITY.map((act, index) => {
                return (
                  <div
                    key={act.title}
                    className={`form-check my-3 ${style.formCheck} ${
                      !isShowAllActivity && index >= 3 ? 'd-none' : ''
                    }`}
                  >
                    <input
                      className="form-check-input btn-check"
                      type="radio"
                      name="activityOption"
                      id={`option${index + 1}`}
                      value={act.title}
                      onChange={handleActivityOption}
                    />
                    <div className="d-flex align-items-center">
                      <label
                        className="form-check-label d-flex align-items-center"
                        htmlFor={`option${index + 1}`}
                      >
                        <CheckBtn isActive={selectedActivity === `${act.title}`} />
                      </label>
                      <span className={`${style.actTitle}  ${index === 0 ? style.firstTitle : ''}`}>
                        {act.title}
                      </span>
                      <p>{act.desc}</p>
                    </div>
                  </div>
                );
              })}

              <div className="w-100 text-center fs-sm">
                <button type="button" onClick={() => setIsShowAllActivity(!isShowAllActivity)}>
                  {isShowAllActivity ? '隱藏更多' : '更多互動'} &nbsp;
                  <span
                    style={{
                      transform: `${isShowAllActivity ? 'rotate(0deg)' : 'rotate(180deg)'}`,
                    }}
                  >
                    <ArrowIcon width={16} />
                  </span>
                </button>
              </div>
            </SectionUI2>
          )}

          {selectedActivity === '贈幣' && (
            <div className="position-relative">
              <AddSendCoins />
              <button
                type="button"
                className={style.cancelBtn}
                onClick={() => setSelectedActivity('')}
              >
                <CancelIcon />
              </button>
            </div>
          )}

          {selectedActivity === '許願' && (
            <div className="position-relative">
              <AddWishCoins />
              <button
                type="button"
                className={style.cancelBtn}
                onClick={() => setSelectedActivity('')}
              >
                <CancelIcon />
              </button>
            </div>
          )}

          {selectedActivity === '交換' && (
            <div className="position-relative">
              <AddExchangeCoins />
              <button
                type="button"
                className={style.cancelBtn}
                onClick={() => setSelectedActivity('')}
              >
                <CancelIcon />
              </button>
            </div>
          )}

          {selectedActivity === '湊咖' && (
            <div className="position-relative">
              <AddReunionPost />
              <button
                type="button"
                className={style.cancelBtn}
                onClick={() => setSelectedActivity('')}
              >
                <CancelIcon />
              </button>
            </div>
          )}

          {selectedActivity === '秘密' && (
            <div className="position-relative">
              <AddSecretPost />
              <button
                type="button"
                className={style.cancelBtn}
                onClick={() => setSelectedActivity('')}
              >
                <CancelIcon />
              </button>
            </div>
          )}

          {selectedActivity === '樂透' && (
            <div className="position-relative">
              <AddLotteryGame />
              <button
                type="button"
                className={style.cancelBtn}
                onClick={() => setSelectedActivity('')}
              >
                <CancelIcon />
              </button>
            </div>
          )}

          {selectedActivity === '集點' && (
            <div className="position-relative">
              <AddCollectGame />
              <button
                type="button"
                className={style.cancelBtn}
                onClick={() => setSelectedActivity('')}
              >
                <CancelIcon />
              </button>
            </div>
          )}

          <div className="py-5 text-center">
            <Button size="small" width="expand">
              發布 〉
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateArticleClient;
