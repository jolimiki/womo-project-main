'use client';

import { useState } from 'react';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import CheckBtn2 from '@/components/ui/button/icon/CheckBtn2';

const AddReunionPost = () => {
  const [isDateOnChat, setIsDateOnChat] = useState(false);

  return (
    <SectionUI2 title="湊咖">
      <div className="mb-8">
        <div className="form-floating flex-grow-1 mb-2">
          <input type="text" className="form-control" id="reunionTitle" placeholder="開團主題" />
          <label htmlFor="reunionTitle">
            <span className="text-primary">*</span> 開團主題
          </label>
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            onClick={() => {}}
            className="fs-sm text-secondary text-decoration-underline fw-bold"
          >
            找優惠團
          </button>
        </div>
      </div>

      <div className="my-8">
        <div className="form-floating flex-grow-1 mb-2">
          <input type="text" className="form-control" id="reunionLocation" placeholder="出團地點" />
          <label htmlFor="reunionLocation">
            <span className="text-primary">*</span> 出團地點
          </label>
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            onClick={() => {}}
            className="fs-sm text-secondary text-decoration-underline fw-bold"
          >
            地圖定位
          </button>
        </div>
      </div>

      <div className="my-8">
        <div className="form-floating flex-grow-1 mb-2">
          <input type="text" className="form-control" id="reunionDate" placeholder="出團時間" />
          <label htmlFor="reunionDate">
            <span className="text-primary">*</span> 出團時間
          </label>
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="d-flex align-items-center"
            onClick={() => setIsDateOnChat(!isDateOnChat)}
          >
            <CheckBtn2 isActive={isDateOnChat} color="secondary" />
            <span className="ms-2 fs-sm text-secondary fw-bold">留言版約時間</span>
          </button>
        </div>
      </div>

      <label htmlFor="reunionPeople" className="text-muted mb-3">
        <span className="text-primary">*</span> 出團人數
      </label>
      <div className="input-group mb-3">
        <button type="button" className="input-group-text bg-grey text-white">
          －
        </button>
        <input
          type="text"
          className="form-control"
          id="reunionPeople"
          value={2}
          onChange={() => {}}
        />
        <button type="button" className="input-group-text bg-grey text-white">
          ＋
        </button>
      </div>
    </SectionUI2>
  );
};

export default AddReunionPost;
