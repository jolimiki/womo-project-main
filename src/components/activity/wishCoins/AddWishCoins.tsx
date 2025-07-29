'use client';

import style from './AddWishCoins.module.scss';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import Coin from '@/components/ui/coin/Coin';
import AddIcon from '@/components/icons/Add';

const AddWishCoins = () => {
  return (
    <SectionUI2 title="許願">
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
          <p>選擇想要的籌碼，跟所有人許願</p>
        </div>
      </div>
    </SectionUI2>
  );
};

export default AddWishCoins;
