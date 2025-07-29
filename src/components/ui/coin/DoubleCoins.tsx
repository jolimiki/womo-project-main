// [本頁目的]：雙顆籌碼外框UI

import style from './DoubleCoins.module.scss';
import { ReactNode } from 'react';

type CoinProps = {
  children?: ReactNode;
  scale: number;
};

const DoubleCoins = ({ children, scale }: CoinProps) => {
  const coinBodySize = 100 * scale;
  const coinBodyShadow = 6 * scale;
  const coinDecoSize = 6 * scale;
  const coinDecoRadius = 43 * scale;
  const coinContentSize = 1.2 * scale;

  return (
    <div
      className="d-flex position-relative"
      style={{
        width: `${coinBodySize * 1.5}px`,
        height: `${coinBodySize}px`,
      }}
    >
      <div className="position-absolute">
        <div
          className={`${style.coinBody} ${style.coinBodyLeft}`}
          style={{
            width: `${coinBodySize}px`,
            height: `${coinBodySize}px`,
            backgroundColor: '#00B1B5',
            boxShadow: `${coinBodyShadow}px 0px 0px 0px #00948c`,
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
      </div>
      <div className="position-absolute">
        <div
          className={`${style.coinBody} ${style.coinBodyRight}`}
          style={{
            width: `${coinBodySize}px`,
            height: `${coinBodySize}px`,
            backgroundColor: '#D3745D',
            boxShadow: `${coinBodyShadow}px 0px 0px 0px #B4614A`,
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
      </div>
    </div>
  );
};

export default DoubleCoins;
