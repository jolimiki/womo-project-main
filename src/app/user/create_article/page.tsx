// [本頁目的]：個人貼文新增內頁 SSR包CSR
import CreateArticleClient from './CreateArticleClient';
import { Suspense } from 'react';

const CreateArticle = () => {
  return (
    <>
      <Suspense>
        <CreateArticleClient />;
      </Suspense>
    </>
  );
};

export default CreateArticle;
