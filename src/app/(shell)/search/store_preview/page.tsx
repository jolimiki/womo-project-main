import Header from '@/components/header/Header';
import StorePreviewList from './StorePreviewList';
import { Suspense } from 'react';

const SearchStorePreview = () => {
  return (
    <>
      <Header />

      {/* 店家籌碼推薦區 CSR模式 */}
      <Suspense><StorePreviewList /></Suspense>
      

    </>
  );
};
export default SearchStorePreview;
