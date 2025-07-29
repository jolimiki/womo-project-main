// [本頁目的]：個人頭像

import style from './Avatar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type AvatarSrc = {
  src: string;
  href?: string;
  size?: number;
};

const Avatar = ({ src, href, size = 60 }: AvatarSrc) => {
  const avatar = (
    <div className={style.avatarWrapper} style={{ width: `${size}px`, height: `${size}px` }}>
      <Image src={src} alt="頭像" fill className={style.avatarImage} />
    </div>
  );
  return href ? <Link href={href}>{avatar}</Link> : avatar;
};

export default Avatar;
