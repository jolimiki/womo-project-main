// [本頁目的]：單顆籌碼外框UI

import style from './Coin.module.scss';
import { ReactNode } from 'react';

type CoinProps = {
  children?: ReactNode;
  scale: number;
  color: 'green' | 'red' | 'yellow';
};

const Coin = ({ children, scale, color }: CoinProps) => {
  const coinBodySize = 100 * scale;
  const coinBodyShadow = 6 * scale;
  const coinDecoSize = 6 * scale;
  const coinDecoRadius = 43 * scale;
  const coinContentSize = 1.25 * scale;
  const coinColor = color == 'green' ? '#5cb2a1' : color == 'red' ? '#ea5848' : '#f0b71a';
  const coinColorShadow = color == 'green' ? '#4a9183' : color == 'red' ? '#b44033' : '#bd9016';

  return (
    <div
      className={style.coinBody}
      style={{
        width: `${coinBodySize}px`,
        height: `${coinBodySize}px`,
        backgroundColor: coinColor,
        boxShadow: `${coinBodyShadow}px 0px 0px 0px ${coinColorShadow}`,
      }}
    >
      {Array.from({ length: 12 }, (_, index) => {
        const angle = index * 30;

        return (
          <div
            key={index}
            className={`${style.coinDeco} ${style[`coinDeco${index + 1}`]}`}
            style={{
              width: `${coinDecoSize}px`,
              height: `${coinDecoSize}px`,
              transform: `
              translate(-50%, -50%)
              rotate(${angle}deg)
              translateY(-${coinDecoRadius}px)
              rotate(-${angle}deg)
            `,
            }}
          ></div>
        );
      })}
      <div
        className={style.coinContent}
        style={{ transform: `translate(-50%, -50%) scale(${coinContentSize})` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Coin;
