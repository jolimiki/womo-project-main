'use client';

import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type InfiniteListWithFetchProps<T> = {
  fetchData: (page: number) => Promise<{ items: T[]; hasMore: boolean }>;
  renderItem: (item: T, index: number) => React.ReactNode;
  resetKey?: unknown; // ✅ 避免 any
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
  const { ref, inView } = useInView();

  // ✅ 重設關鍵字或條件時，清空並回到第一頁
  useEffect(() => {
    setItems([]);
    setPage(1);
    setHasMore(true);
    setError(false);
  }, [resetKey]);

  // ✅ 載入資料（包成 useCallback，讓相依陣列可正確追蹤）
  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    setError(false);
    try {
      const result = await fetchData(page);
      setItems((prev) => [...prev, ...result.items]);
      setHasMore(result.hasMore);
      setPage((prev) => prev + 1);
    } catch (_err) {
      // ✅ 避免未使用參數
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [fetchData, hasMore, loading, page]);

  // ✅ 初次或 reset 後載入第一頁
  useEffect(() => {
    if (page === 1 && items.length === 0 && !loading) {
      loadMore();
    }
  }, [page, items.length, loading, loadMore]);

  // ✅ 滾到最底觸發載入下一頁
  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);

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
