'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './LazyImage.module.scss';
import Skeleton from '@/components/ui/skeleton/Skeleton';

type Aspect =
  | number // 例如 16/9 = 1.777...
  | `${number}/${number}` // 例如 "16/9"
  | 'auto';

interface LazyImageProps {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
  width?: number | string; // 容器寬
  height?: number | string; // 固定高（若不想用比例）
  aspect?: Aspect; // 比例；給一個就能維持版面穩定
  radius?: number | string; // 外框圓角
  rootMargin?: string; // 觸發載入區間
  threshold?: number; // 觸發臨界值
  skeletonRadius?: number | string;
  onLoad?: () => void;
}

const parseAspect = (aspect: Aspect | undefined) => {
  if (!aspect || aspect === 'auto') return null;
  if (typeof aspect === 'number') return aspect;
  const [w, h] = aspect.split('/').map(Number);
  if (!w || !h) return null;
  return w / h;
};

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt = '',
  className,
  imgClassName,
  style,
  imgStyle,
  width = '100%',
  height,
  aspect = 'auto',
  radius = 8,
  rootMargin = '200px',
  threshold = 0.01,
  skeletonRadius,
  onLoad,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const ratio = parseAspect(aspect);
  const paddingTop = ratio ? `${100 / ratio}%` : undefined;

  useEffect(() => {
    if (shouldLoad) return;

    const el = wrapperRef.current;
    if (!el) return;

    // 若瀏覽器不支援 IO，直接載入
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first && first.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { root: null, rootMargin, threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, threshold, shouldLoad]);

  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${className || ''}`}
      style={{ width, height, borderRadius: radius, ...style }}
    >
      {/* 比例占位，避免 CLS */}
      {ratio && !height && <div style={{ paddingTop }} />}

      {/* 圖片 */}
      {shouldLoad && (
        <img
          className={`${styles.img} ${loaded ? styles.loaded : ''} ${imgClassName || ''}`}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={imgStyle}
          onLoad={() => {
            setLoaded(true);
            onLoad?.();
          }}
        />
      )}

      {/* 骨架覆蓋，直到 loaded 才淡出 */}
      {!loaded && (
        <div className={styles.skeletonOverlay}>
          <Skeleton radius={skeletonRadius ?? radius} />
        </div>
      )}
    </div>
  );
};

export default LazyImage;
