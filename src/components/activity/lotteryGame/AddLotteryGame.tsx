'use client';
import { useState } from 'react';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import CheckBtn from '@/components/ui/button/icon/CheckBtn';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

const AddLotteryGame = () => {
  const [coinType, setCoinType] = useState('greenCoins');

  const handleCoinType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoinType(e.target.value);
  };

  return (
    <SectionUI2 title="樂透">
      <span className="text-primary">*</span> 所有人使用１顆我的籌碼，就能參與樂透抽獎
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
        <div className="mx-5 d-flex align-items-center">
          <Coin color="green" scale={0.5}>
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
          <span className="ms-3 text-secondary fw-bolder fs-4">1</span>
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
        <div className="mx-5 d-flex align-items-center">
          <Coin color="red" scale={0.5}>
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
          <span className="ms-3 text-primary fw-bolder fs-4">1</span>
        </div>
      </div>
      <div className="my-8">
        <div className="form-floating flex-grow-1 mb-2">
          <input type="text" className="form-control" id="reunionTitle" placeholder="秘密主題" />
          <label htmlFor="reunionTitle">
            <span className="text-primary">*</span> 我想抽出的獎品是
          </label>
        </div>
      </div>
      <div className="my-8">
        <div className="form-floating flex-grow-1 mb-2">
          <input type="text" className="form-control" id="reunionDate" placeholder="出團時間" />
          <label htmlFor="reunionDate">
            <span className="text-primary">*</span> 開獎日期
          </label>
        </div>
      </div>
      <label htmlFor="reunionPeople" className="text-muted mb-3">
        <span className="text-primary">*</span> 抽出人數
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

export default AddLotteryGame;
