// [本頁目的]：首頁 - 店家籌碼推薦區

'use client';

import style from './StorePreview.module.scss';
//元件
import Link from 'next/link';
import Avatar from '../ui/avatar/Avatar';
import Button from '../ui/button/submit/Button';
import SectionUI from '../ui/section/SectionUI';
//libs
import { Stores } from '@/libs/api/stores';

const StorePreview = () => {
  return (
    <section className="mt-10 mb-20">
      <div className={`container-fluid ${style.wrapper}`}>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="h5 fw-bold">品牌聚點</h2>
          <Link href="/">
            <span className={style.link}>探索更多 〉</span>
          </Link>
        </div>
        <SectionUI>
          <div className="row row-cols-lg-3 flex-column flex-lg-row">
            {Stores.slice(0, 3).map((store, index) => (
              <div key={index} className={`${style.coinRecommend}`}>
                <div className="d-flex justify-content-between align-items-center flex-lg-column">
                  <div className="d-flex justify-content-lg-center align-items-center py-5 ">
                    <Avatar src={store.image} href="/"></Avatar>
                    <div className="ms-3">
                      <h2 className="h6 fw-bold">{store.name}</h2>
                      <p className="text-muted">{store.content}</p>
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
                  {/* <div className="gap-2 gap-lg-7 d-flex flex-column flex-lg-row  justify-content-lg-center align-items-end align-items-lg-center">
                    <div className={`${style.btnWrapper} position-relative`}>
                      <Button as="a" href="/" size="small" color="secondary" width="expand">
                        &nbsp; 去哪領
                      </Button>
                      <div className="position-absolute top-50 start-0 translate-middle">
                        <Coin scale={0.4} color="green">
                          <Avatar src={store.coinImg} href="/"></Avatar>
                        </Coin>
                      </div>
                    </div>
                    <div className={`${style.btnWrapper} position-relative`}>
                      <ButtonOutline
                        size="small"
                        width="expand"
                        color="secondary"
                        onClick={() => {}}
                        noUse={store.isReceiveMyCoin}
                      >
                        &nbsp; 領取
                      </ButtonOutline>
                      <div
                        className={`position-absolute top-50 start-0 translate-middle ${
                          store.isReceiveMyCoin ? 'opacity-50' : ''
                        }`}
                      >
                        <Coin scale={0.4} color="green">
                          <Avatar
                            src={store.image}
                            href={store.isReceiveMyCoin ? '/' : undefined}
                          ></Avatar>
                        </Coin>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </SectionUI>
      </div>
    </section>
  );
};

export default StorePreview;
