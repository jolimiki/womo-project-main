// app/(site)/terms/privacy_policy/page.tsx

import { Suspense } from 'react';
import SectionContainer from '@/components/SectionContainer';

export const metadata = {
  title: '隱私權政策規範',
  description: '隱私權政策規範',
};

export default function PrivacyPolicyPage() {
  return (
    <Suspense>
      <SectionContainer>
        <section>
          <h1>隱私權政策規範</h1>
          <p>
            沃萌網絡股份有限公司
            (下稱「本公司」)依據個人資料保護法，向您告知以下隱私權政策規範，若您勾選「
            我同意隱私權政策」，將表示您已同意本公司之隱私權政策，並同意本公司依以下告知事項，就您的個人資料進行蒐集、處理及利用。您可以自由選擇是否提供相關個人資料，若您拒絕，本公司將可能無法執行本告知事項蒐集目的之業務，致無法向您提供相關服務:
          </p>
        </section>
      </SectionContainer>
    </Suspense>
  );
}
