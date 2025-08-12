'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './SearchModal.module.scss';
import { useDebounce } from '@/hooks/useDebounce';
import type { SearchItem } from '@/types/search';
import { useRouter } from 'next/navigation';
import { searchItems } from '@/libs/api/search';
import { IconSearch } from '@/components/icons';
export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const debouncedQ = useDebounce(q, 220);
  const [results, setResults] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const router = useRouter();
  const openModal = () => setOpen(true);
  const closeModal = () => {
    setOpen(false);
    setQ('');
    setResults([]);
    setActiveIndex(0);
    setLoading(false);
    setError(null);
  };
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open]);
  // 使用封裝：監聽 debounced 關鍵字 → 呼叫 API（支援取消）
  useEffect(() => {
    if (!open) return;
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const items = await searchItems(debouncedQ, controller.signal);
        setResults(items || []);
        setActiveIndex(0);
      } catch (err: any) {
        if (err.name === 'AbortError') return;
        setError(err.message || '發生錯誤');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => controller.abort();
  }, [debouncedQ, open]);
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, Math.max(0, results.length - 1)));
        scrollActiveIntoView();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        scrollActiveIntoView();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[activeIndex]) selectItem(results[activeIndex]);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, results, activeIndex]);
  function scrollActiveIntoView() {
    const ul = listRef.current;
    if (!ul) return;
    const li = ul.querySelector<HTMLLIElement>('li[aria-selected="true"]');
    if (li) li.scrollIntoView({ block: 'nearest' });
  }
  function selectItem(item: SearchItem) {
    // router.push(`/search?kw=${encodeURIComponent(item.name)}`);
    alert(`你選擇了：「${item.name}」`);
    closeModal();
  }
  const hasQuery = useMemo(() => debouncedQ.trim().length > 0, [debouncedQ]);
  function highlight(text: string, kw: string) {
    if (!kw) return text;
    const parts = text.split(new RegExp(`(${escapeRegExp(kw)})`, 'ig'));
    return parts.map((p, i) =>
      p.toLowerCase() === kw.toLowerCase() ? (
        <mark key={i} className={styles.mark}>
          {p}
        </mark>
      ) : (
        <span key={i}>{p}</span>
      )
    );
  }
  function escapeRegExp(s: string) {
    if (typeof s !== 'string') return '';
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  return (
    <div className={styles.root}>
      <button type="button" aria-label="搜尋" className={styles.trigger} onClick={openModal}>
        <IconSearch width={28} />
      </button>
      {open && (
        <div className={styles.modalRoot} role="dialog" aria-modal="true" aria-label="搜尋視窗">
          <div className={styles.backdrop} onClick={closeModal} />
          <div className={styles.panel} role="document">
            <div className={styles.header}>
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setActiveIndex(0);
                }}
                placeholder="搜尋籌碼名稱..."
                aria-label="搜尋籌碼名稱"
                className={styles.input}
              />
              <button
                type="button"
                className={styles.closeBtn}
                aria-label="關閉搜尋"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
            <ul className={styles.results} ref={listRef} role="listbox">
              {loading &&
                Array.from({ length: 5 }).map((_, idx) => (
                  <li key={`skeleton-${idx}`} className={styles.skeletonRow} aria-hidden>
                    <div className={styles.skeletonName}></div>
                    <div className={styles.skeletonContent}></div>
                  </li>
                ))}
              {!loading && error && <li className={styles.error}>發生錯誤：{error}</li>}
              {!loading && !error && results.length === 0 && (
                <li className={styles.empty}>
                  {hasQuery ? <>找不到符合「{debouncedQ}」的結果</> : <>請輸入關鍵字開始搜尋</>}
                </li>
              )}
              {!loading &&
                !error &&
                results.map((item, idx) => {
                  const selected = idx === activeIndex;
                  return (
                    <li
                      key={item.id}
                      role="option"
                      aria-selected={selected}
                      className={`d-flex align-items-center ${styles.row} ${selected ? styles.rowActive : ''}`}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => selectItem(item)}
                    >
                      <div>
                        {item.image ? (
                          <img
                            src={item.image}
                            width={50}
                            alt={item.name}
                            className="rounded-circle"
                          />
                        ) : (
                          <div className={styles.thumbFallback}>📦</div>
                        )}
                      </div>
                      <div className="ms-3">
                        <div className={styles.name}>{highlight(item.name, debouncedQ)}</div>
                        {item.content && (
                          <div className={styles.content}>
                            {highlight(item.content, debouncedQ)}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
