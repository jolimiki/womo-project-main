// [本頁目的]：彈跳視窗 - 送自己籌碼

'use client';

import * as Dialog from '@radix-ui/react-dialog';
import style from './ArStoreListOfEvent.module.scss';
import Image from 'next/image';
// 元件
import Button from '../ui/button/submit/Button';
import Avatar from '../ui/avatar/Avatar';
// icon
import LocationIcon from '../icons/Location';
import ScanIcon from '../icons/Scan';
import MemberIcon from '../icons/Member';
// api
import { Stores } from '@/libs/api/stores';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ArStoreListOfEvent = ({ open, onOpenChange }: Props) => {
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
            <span className="h6 fw-bold ms-2">選空間 → 掃線索圖 → AR打卡</span>
          </Dialog.Title>
          <div className={style.bg}>
            <div className={style.imgWrapper}>
              <Image
                src="https://i.meee.com.tw/8LxL7Xx.png"
                alt="鬼滅之刃"
                fill
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
              <div
                className="d-flex justify-content-center align-items-center position-absolute w-100 bg-dark text-white py-5 bottom-0 fs-6 rounded-bottom "
                style={{ opacity: '0.9' }}
              >
                <span>線索圖</span>
              </div>
            </div>
            <hr />
            <h3 className="fw-bold h6 my-5 text-center">選擇AR空間</h3>
            <div>
              {Stores.slice(3, 6).map((store) => (
                <div key={store.name} className={`${style.section}`}>
                  <div className="d-flex align-items-center">
                    <div>
                      <Avatar src={store.image} />
                    </div>
                    <div className="ms-5">
                      <h3 className="h6 fw-bold">{store.name}</h3>
                      <p className="text-grey-200 fs-sm my-1 d-flex align-items-start">
                        <span>
                          <LocationIcon width={16} />
                        </span>
                        <span className="ms-2">{store.address}</span>
                      </p>
                      <p className="text-grey-200 fs-sm my-1 d-flex align-items-center">
                        <MemberIcon width={16} />
                        <span className="ms-2">AR打卡人數：{store.tagAmount}</span>
                      </p>
                    </div>
                  </div>
                  <div className="text-center mt-5">
                    <Button color="secondary" size="small" width="expand">
                      <div className="d-flex align-items-center justify-content-center">
                        <ScanIcon width={16} />
                        <span className="ms-1">掃圖打卡</span>
                      </div>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ArStoreListOfEvent;
