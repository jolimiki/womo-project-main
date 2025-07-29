'use client';

import style from './AddExchangeCoins.module.scss';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import Coin from '@/components/ui/coin/Coin';
import AddIcon from '@/components/icons/Add';
import ExchangeIcon from '@/components/icons/Exchange';

const AddExchangeCoins = () => {
  return (
    <SectionUI2 title="交換">
      <div className="d-flex justify-content-evenly align-items-center">
        <div className={`${style.activityWrapper} flex-grow-1`}>
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
            <p>我送出的籌碼</p>
          </div>
        </div>
        <div className="mx-3">
          <ExchangeIcon />
        </div>
        <div className={`${style.activityWrapper} flex-grow-1`}>
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
            <p>想換到的籌碼</p>
          </div>
        </div>
      </div>
    </SectionUI2>
  );
};

export default AddExchangeCoins;
