// [本頁目的]：首頁 - 主題籌碼

import style from './TopicCoinsPreview.module.scss';
//元件
import Link from 'next/link';
import Coin from '../ui/coin/Coin';
import Avatar from '../ui/avatar/Avatar';
import Button from '../ui/button/submit/Button';
import SectionUI from '../ui/section/SectionUI';
//const
import { TOPIC_COINS } from '@/libs/api/topicCoins/topicCoins';

const TopicCoinsPreview = () => {
  return (
    <section className="mt-10 mb-20">
      <div className={`container-fluid ${style.wrapper}`}>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="h5 fw-bold">主題聚點</h2>
          <Link href="/">
            <span className={style.link}>探索更多 〉</span>
          </Link>
        </div>
        <SectionUI>
          <div className="row row-cols-lg-3 flex-column flex-lg-row">
            {TOPIC_COINS.slice(0, 3).map((topic, index) => (
              <div key={index} className={`${style.coinRecommend}`}>
                <div className="d-flex justify-content-between align-items-center flex-lg-column">
                  <div className="d-flex justify-content-lg-center align-items-center py-5 ">
                    <Coin scale={0.6} color="green">
                      <Avatar src={topic.image} href="/"></Avatar>
                    </Coin>
                    <div className="ms-3">
                      <h2 className="h6 fw-bold">{topic.name}</h2>
                      <p className="text-muted">{topic.content}</p>
                    </div>
                  </div>
                  <div className="gap-2 d-flex flex-column flex-lg-row  justify-content-lg-center align-items-end align-items-lg-center">
                    <div className={style.btnWrapper}>
                      <Button as="a" href="/" size="small" color="secondary" width="expand">
                        AR打卡
                      </Button>
                    </div>
                    {/* <div className={style.btnWrapper}>
                      {topic.status === 1 ? (
                        <Button as="a" href="/" size="small" width="expand">
                          聊心情送籌碼
                        </Button>
                      ) : (
                        <Button as="a" size="small" color="noUse" width="expand">
                          無活動
                        </Button>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionUI>
      </div>
    </section>
  );
};

export default TopicCoinsPreview;
