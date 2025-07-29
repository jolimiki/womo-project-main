'use client';
import { useState } from 'react';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import CheckBtn from '@/components/ui/button/icon/CheckBtn';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

const AddCollectGame = () => {
  const [coinType, setCoinType] = useState('greenCoins');

  const handleCoinType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoinType(e.target.value);
  };

  return (
    <SectionUI2 title="集點">
      <span className="text-primary">*</span> 所有人蒐集我的籌碼N顆，就能兌換禮物
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
        <div className="ms-5 d-flex align-items-center flex-grow-1">
          <div>
            <Coin color="green" scale={0.5}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
          </div>
          <div className="input-group ms-5">
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
        <div className="ms-5 d-flex align-items-center flex-grow-1">
          <div>
            <Coin color="red" scale={0.5}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
          </div>
          <div className="input-group ms-5">
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
      </div>
      <div className="my-8">
        <div className="form-floating flex-grow-1 mb-2">
          <input type="text" className="form-control" id="reunionDate" placeholder="出團時間" />
          <label htmlFor="reunionDate">
            <span className="text-primary">*</span> 兌換截止日
          </label>
        </div>
      </div>
      <div className="my-8">
        <div className="form-floating flex-grow-1 mb-2">
          <input type="text" className="form-control" id="reunionTitle" placeholder="秘密主題" />
          <label htmlFor="reunionTitle">
            <span className="text-primary">*</span> 我的禮物是
          </label>
        </div>
      </div>
      <label htmlFor="reunionPeople" className="text-muted mb-3">
        <span className="text-primary">*</span> 禮物數量
      </label>
      <div className="input-group mb-3">
        <button type="button" className="input-group-text bg-grey text-white">
          －
        </button>
        <input
          type="text"
          className="form-control"
          id="reunionPeople"
          value={1}
          onChange={() => {}}
        />
        <button type="button" className="input-group-text bg-grey text-white">
          ＋
        </button>
      </div>
    </SectionUI2>
  );
};

export default AddCollectGame;
