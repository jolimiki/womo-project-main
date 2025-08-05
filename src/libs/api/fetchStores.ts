//  假資料匯入
import { TOPIC_COINS } from '@/libs/api/topicCoins/topicCoins';

//  自動從 Stores 推導每一筆的型別
export type StoreType = (typeof TOPIC_COINS)[number];

export const fetchStores = async (
  page: number,
  keyword: string = '',
  pageSize: number = 6
): Promise<{ items: StoreType[]; hasMore: boolean }> => {
  const filtered = TOPIC_COINS.filter((store) => {
    const lowerKeyword = keyword.toLowerCase();
    return (
      store.name.toLowerCase().includes(lowerKeyword) ||
      store.content.toLowerCase().includes(lowerKeyword)
    );
  });

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const sliced = filtered.slice(start, end);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        items: sliced,
        hasMore: end < filtered.length,
      });
    }, 500);
  });
};
