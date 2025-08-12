import type { SearchItem } from '@/types/search';
/**
 * 前端共用的搜尋 API 呼叫封裝
 * - 在客戶端使用，呼叫 Next.js 內建端點 `/api/search`
 * - 可傳入 AbortSignal 以支援取消請求（快速輸入時很有用）
 */
export async function searchItems(q: string, signal?: AbortSignal): Promise<SearchItem[]> {
  const res = await fetch(`/api/search?q=${encodeURIComponent(q || '')}`, { signal });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json: { items: SearchItem[] } = await res.json();
  return json.items ?? [];
}
