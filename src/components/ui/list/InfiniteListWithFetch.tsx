'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type InfiniteListWithFetchProps<T> = {
  fetchData: (page: number) => Promise<{ items: T[]; hasMore: boolean }>;
  renderItem: (item: T, index: number) => React.ReactNode;
  resetKey?: any; // 若變動則清空所有內容重新 fetch
  searchKeyword?: string; // 用於判斷是否要顯示 emptyView
  className?: string;
  loadingView?: React.ReactNode;
  emptyView?: React.ReactNode;
  errorView?: React.ReactNode;
};

function InfiniteListWithFetch<T>({
  fetchData,
  renderItem,
  resetKey,
  searchKeyword = '',
  className = '',
  loadingView = <div className="text-center py-4 text-muted">載入中...</div>,
  emptyView = <div className="text-center py-4 text-muted">查無資料</div>,
  errorView = <div className="text-center py-4 text-danger">載入失敗，請稍後再試</div>,
}: InfiniteListWithFetchProps<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const { ref, inView } = useInView();

  // ✅ 重設關鍵字或條件時，重新開始
  useEffect(() => {
    setItems([]);
    setPage(1);
    setHasMore(true);
    setError(false);
    setInitialLoad(true);
  }, [resetKey]);

  // ✅ 載入資料函式
  const loadMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    setError(false);
    try {
      const result = await fetchData(page);
      setItems((prev) => [...prev, ...result.items]);
      setHasMore(result.hasMore);
      setPage((prev) => prev + 1);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
      setInitialLoad(false);
    }
  };

  // ✅ 初次或 reset 後載入第一頁
  useEffect(() => {
    loadMore();
  }, [page === 1]);

  // ✅ 滾到最底觸發載入下一頁
  useEffect(() => {
    if (inView && hasMore && !loading) {
      loadMore();
    }
  }, [inView]);

  return (
    <div className={className}>
      {/* 已載入資料清單 */}
      {items.map((item, index) => renderItem(item, index))}

      {/* loading skeleton：僅在有資料後顯示 */}
      {items.length > 0 && loading && loadingView}

      {/* lazy trigger：用來觸發載入下一頁 */}
      {hasMore && !loading && !error && <div ref={ref} />}

      {/* 空資料提示：只有搜尋過才顯示 */}
      {searchKeyword && !loading && items.length === 0 && !error && emptyView}

      {/* 載入失敗時的提示 */}
      {error && errorView}
    </div>
  );
}

export default InfiniteListWithFetch;
