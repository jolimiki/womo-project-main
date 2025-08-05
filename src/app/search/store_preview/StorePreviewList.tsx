// [本頁目的]：搜尋 - 店家籌碼列表

'use client';

import { useEffect, useState } from 'react';
import style from '@/components/home/StorePreview.module.scss';
import SectionContainer from '@/components/SectionContainer';
import Avatar from '@/components/ui/avatar/Avatar';
import Button from '@/components/ui/button/submit/Button';
import InfiniteListWithFetch from '@/components/ui/list/InfiniteListWithFetch';
import SkeletonCardGroup from '@/components/ui/skeleton/SkeletonCardGroup';
import { fetchStores, StoreType } from '@/libs/api/fetchStores';

const StorePreviewList = () => {
  const [keyword, setKeyword] = useState('');
  const [debouncedKeyword, setDebouncedKeyword] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword.trim());
    }, 300);
    return () => clearTimeout(timer);
  }, [keyword]);

  const highlightText = (text: string, keyword: string) => {
    if (!keyword) return text;
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <mark key={index} className="fw-bold" style={{ backgroundColor: '#fff2f2' }}>
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <SectionContainer>
      <div className="mb-8">
        <input
          className="form-control shadow-sm rounded-3 border-0 p-4"
          type="text"
          placeholder="請輸入關鍵字"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      <InfiniteListWithFetch<StoreType>
        fetchData={(page) => fetchStores(page, debouncedKeyword)}
        resetKey={debouncedKeyword}
        searchKeyword={debouncedKeyword}
        className="row row-cols-lg-3 flex-column flex-lg-row"
        loadingView={<SkeletonCardGroup />}
        emptyView={
          <div className="message-box-empty w-100 text-center py-5">
            <p>
              <span>
                <img
                  src="https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/icon/icon_no_data2.png"
                  alt="找不到資料"
                  width={80}
                />
              </span>
            </p>
            <h5 className="mt-8">找不到符合「{debouncedKeyword}」的資料</h5>
          </div>
        }
        renderItem={(store, index) => (
          <div key={index} className={`col col-md-4 px-3 border-0 ${style.coinRecommend}`}>
            <div className="d-flex justify-content-between align-items-center flex-lg-column shadow-sm py-6 px-2 mb-md-6 bg-body rounded-3">
              <div className="d-flex justify-content-lg-center align-items-center pb-5">
                <Avatar src={store.image} href="/" />
                <div className="ms-3">
                  <h2 className="h6 fw-bold">{highlightText(store.name, debouncedKeyword)}</h2>
                  <p className="text-muted">{highlightText(store.content, debouncedKeyword)}</p>
                </div>
              </div>
              <div className="gap-2 d-flex flex-column flex-lg-row justify-content-lg-center align-items-end align-items-lg-center">
                <div className={style.btnWrapper}>
                  <Button as="a" href="/" size="small" color="secondary" width="expand">
                    AR打卡
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </SectionContainer>
  );
};

export default StorePreviewList;
