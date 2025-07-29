// [本頁目的]：彈跳視窗 - 送自己籌碼

'use client';

import * as Dialog from '@radix-ui/react-dialog';
import style from './GiveMyCoin.module.scss';
import Image from 'next/image';
// 元件
import Coin from '../ui/coin/Coin';
import Avatar from '../ui/avatar/Avatar';
import Button from '../ui/button/submit/Button';
import ButtonOutline from '../ui/button/submit/ButtonOutline';
// const
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const GiveMyCoin = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <div className={style.overlay} />
        <Dialog.Content className={style.modal}>
          <Dialog.Close asChild>
            <button className={style.closeButton} aria-label="關閉">
              ✕
            </button>
          </Dialog.Close>
          <Dialog.Title className={style.title}>
            <Coin scale={0.5} color="green">
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
            <span className="h6 fw-bold ms-2">送我的籌碼給朋友</span>
          </Dialog.Title>
          <div className={style.bg}>
            <div className="d-flex justify-content-between">
              <div className={style.section}>
                <h3 className="fw-bold h6">朋友掃碼</h3>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                  alt="QRcode"
                  width={180}
                  height={180}
                />
                <div>
                  <Button size="small">下載 QR code</Button>
                </div>
              </div>
              <div className={style.section}>
                <h3 className="fw-bold h6 mb-5">轉傳發送</h3>
                <div className="d-flex justify-content-evenly align-items-center mb-5">
                  <div>
                    <Image
                      src="https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/icon/icon_share_social_fb.png"
                      alt="fb"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div>
                    <Image
                      src="https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/icon/icon_share_social_line.png"
                      alt="line"
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value="http://womo_front.dymain.com/user-profile-gallery.php?=get_coin_success"
                  onChange={() => {}}
                />
                <div className="mt-auto">
                  <Button size="small">複製網址</Button>
                </div>
              </div>
            </div>
            <div className={`${style.section} ${style.section_lg} mt-5`}>
              <h3 className="fw-bold h6 mb-5">WOMO站內送</h3>
              <div>
                <div className="d-flex justify-content-between align-items-center my-2">
                  <p>發送給追蹤者</p>
                  <Button size="small">前往</Button>
                </div>
                <div className="d-flex justify-content-between align-items-center my-2">
                  <p>手動發送紀錄</p>
                  <ButtonOutline size="small">查詢</ButtonOutline>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default GiveMyCoin;
