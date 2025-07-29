'use client';
import { useState } from 'react';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import CheckBtn from '@/components/ui/button/icon/CheckBtn';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import LockIcon from '@/components/icons/Lock';

const AddSecretPost = () => {
  const [coinType, setCoinType] = useState('greenCoins');

  const handleCoinType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoinType(e.target.value);
  };

  return (
    <SectionUI2 title="秘密">
      <div className="d-flex align-items-center mb-8">
        <LockIcon />
        <span className="ms-1">本貼文已上鎖</span>
      </div>
      <span className="text-primary">*</span> 解鎖貼文需要幾顆籌碼
      <div className="d-flex align-items-center my-3">
        <input
          className="form-check-input btn-check"
          type="radio"
          name="coinOption"
          id="greenCoins"
          value="greenCoins"
          onChange={handleCoinType}
        />
        <label className="form-check-label d-flex align-items-center" htmlFor="greenCoins">
          <CheckBtn isActive={coinType === 'greenCoins'} />
        </label>
        <div className="mx-5">
          <Coin color="green" scale={0.5}>
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
        </div>
        <div className="input-group">
          <button
            type="button"
            className={`input-group-text text-white ${
              coinType !== 'greenCoins' ? 'bg-grey-100 ' : 'bg-grey-500'
            }`}
            disabled={coinType !== 'greenCoins'}
          >
            －
          </button>
          <input
            type="text"
            className="form-control"
            id="coinsNumber"
            value={1}
            onChange={() => {}}
            disabled={coinType !== 'greenCoins'}
          />
          <button
            type="button"
            className={`input-group-text text-white ${
              coinType !== 'greenCoins' ? 'bg-grey-100 ' : 'bg-grey-500'
            }`}
            disabled={coinType !== 'greenCoins'}
          >
            ＋
          </button>
        </div>
      </div>
      <div className="d-flex align-items-center my-3">
        <input
          className="form-check-input btn-check"
          type="radio"
          name="coinOption"
          id="redCoins"
          value="redCoins"
          onChange={handleCoinType}
        />
        <label className="form-check-label d-flex align-items-center" htmlFor="redCoins">
          <CheckBtn isActive={coinType === 'redCoins'} />
        </label>
        <div className="mx-5">
          <Coin color="red" scale={0.5}>
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
        </div>
        <div className="input-group">
          <button
            type="button"
            className={`input-group-text text-white ${
              coinType !== 'redCoins' ? 'bg-grey-100 ' : 'bg-grey-500'
            }`}
            disabled={coinType !== 'redCoins'}
          >
            －
          </button>
          <input
            type="text"
            className="form-control"
            id="coinsNumber"
            value={1}
            onChange={() => {}}
            disabled={coinType !== 'redCoins'}
          />
          <button
            type="button"
            className={`input-group-text text-white ${
              coinType !== 'redCoins' ? 'bg-grey-100 ' : 'bg-grey-500'
            }`}
            disabled={coinType !== 'redCoins'}
          >
            ＋
          </button>
        </div>
      </div>
      <div className="my-8">
        <div className="form-floating flex-grow-1 mb-2">
          <input type="text" className="form-control" id="reunionTitle" placeholder="秘密主題" />
          <label htmlFor="reunionTitle">
            <span className="text-primary">*</span> 給這則秘密貼文一個標題
          </label>
        </div>
      </div>
    </SectionUI2>
  );
};

export default AddSecretPost;
