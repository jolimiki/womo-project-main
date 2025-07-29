// [本頁目的]：首頁 - 誰擁有我的籌碼

'use client';

import style from './CoinFriendsPreview.module.scss';
import Image from 'next/image';
//ui
import Avatar from '../ui/avatar/Avatar';
import Button from '../ui/button/submit/Button';
import DoubleCoins from '../ui/coin/DoubleCoins';
import SectionUI from '../ui/section/SectionUI';
//hooks
import { useRouter } from 'next/navigation';
//libs
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

const CoinFriendsPreview = () => {
  const router = useRouter();

  return (
    <section className="mt-10 mb-20">
      <div className={`container-fluid ${style.wrapper}`}>
        {AVATAR_LINK.others.length > 0 ? (
          <>
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="h5 fw-bold">
                共 <span className="fs-2 text-primary">66</span> 人擁有我的籌碼
              </h2>
              <Button size="small" color="secondary" onClick={() => router.push('/')}>
                +發起籌碼應援
              </Button>
            </div>
            <SectionUI>
              <div className="row row-cols-lg-3 flex-column flex-lg-row">
                {AVATAR_LINK.others.map((user, index) => (
                  <div key={index} className={`${style.coinFriend}`}>
                    <div className="d-flex justify-content-lg-center align-items-center py-5 ">
                      <Avatar src={user.image} href="/" />
                      <div className="ms-3">
                        <h2 className="h6 fw-bold">{user.name}</h2>
                        <div className="d-flex align-items-center mt-1">
                          <span>擁有</span>
                          <div className="px-2">
                            <DoubleCoins scale={0.3}>
                              <Avatar src={AVATAR_LINK.my} />
                            </DoubleCoins>
                          </div>
                          <span className="text-primary fw-bold">123</span>
                          <span>顆</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button as="a" href="/" size="small" color="muted" width="expand">
                  查看更多 〉
                </Button>
              </div>
            </SectionUI>
          </>
        ) : (
          <SectionUI align="center">
            <Image
              src="https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/icon/icon_no_user_list.png"
              alt="尚無內容"
              width={80}
              height={0}
              style={{ height: 'auto' }}
            ></Image>
            <p>
              目前沒有朋友擁有您的籌碼，立即送籌碼給朋友 &nbsp;{' '}
              <Button size="small" color="secondary" onClick={() => {}}>
                送籌碼
              </Button>
            </p>
          </SectionUI>
        )}
      </div>
    </section>
  );
};

export default CoinFriendsPreview;
