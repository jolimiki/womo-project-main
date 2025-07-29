'use client';

import { useState } from 'react';
import style from './AddSendCoins.module.scss';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import CheckBtn2 from '@/components/ui/button/icon/CheckBtn2';
import Coin from '@/components/ui/coin/Coin';
import AddIcon from '@/components/icons/Add';

const AddSendCoins = () => {
  const [selectedSendMyCoin, setSelectedSendMyCoin] = useState(false);

  return (
    <SectionUI2 title="贈幣">
      <button
        type="button"
        className="d-flex align-items-center"
        onClick={() => setSelectedSendMyCoin(!selectedSendMyCoin)}
      >
        <CheckBtn2 isActive={selectedSendMyCoin === true} />
        <span className="ms-2">贈送自己的綠籌碼</span>
      </button>
      <div className={style.activityWrapper}>
        <div className="py-5 d-flex flex-column align-items-center justify-content-center">
          <button type="button" className="noText">
            <Coin scale={1} color="green">
              <div className={style.coinBg}>
                <AddIcon />
              </div>
            </Coin>
          </button>
          <span className="py-1 text-secondary fw-bold fs-5">籌碼</span>
          <span className="text-secondary fw-bold fs-3">0</span>
        </div>
        <div className="text-center fs-sm border-top py-5">
          <p>選擇籌碼包內的籌碼，送給留言者</p>
          <p className="text-muted">每位限領一顆，送完為止</p>
        </div>
      </div>
    </SectionUI2>
  );
};

export default AddSendCoins;
