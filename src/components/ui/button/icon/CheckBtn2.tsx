// [本頁目的]：通用型checkbox按鈕

import style from './CheckBtn2.module.scss';
import Check from '@/components/icons/Check';

type Props = {
  color?: 'primary' | 'secondary';
  isActive?: boolean;
};

const CheckBtn2 = ({ color = 'primary', isActive = true }: Props) => {
  const colorMap = {
    primary: '#ca6168',
    secondary: '#00B1B5',
  };

  const activeColor = colorMap[color] ?? '#ca6168';

  return (
    <div
      className={style.btn}
      style={{
        backgroundColor: isActive ? activeColor : '#fff',
        border: `2px solid ${isActive ? activeColor : '#adb5bd'}`,
        color: isActive ? '#fff' : 'transparent',
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.border = `2px solid ${activeColor}`;
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.border = '2px solid #adb5bd';
      }}
    >
      {isActive ? <Check /> : <Check style={{ opacity: '0' }} />}
    </div>
  );
};

export default CheckBtn2;
