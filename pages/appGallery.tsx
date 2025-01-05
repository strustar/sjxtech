// pages/appGallery.tsx
import React from 'react';
import CategorySection from '../components/CategorySection';
import { getContentData } from '../utils/data';

const appContentData = getContentData();

export default function OptimizedPage() {
  return (
    <div className="max-w-[2000px] overflow-x-auto mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="user-text1">App 개발 연구성과</h1>
        <p className="user-text2 mb-4">최신 App 연구 성과를 이용하세요</p>
        <p className="text-gray-900 max-w-2xl mx-auto">
          AI 기술을 활용한 혁신 연구성과들을 한눈에 확인하고 사용해보세요
        </p>
      </div>

      <CategorySection
        title="✤ 설계 자동화 App"
        items={appContentData.designs}
        visitButtonPosition="top"
        showUrlTopRight={false} // URL 숨김
      />
      <CategorySection
        title="✤ 입찰 관련 App"
        items={appContentData.bids}
        visitButtonPosition="top"
        showUrlTopRight={false} // URL 숨김
      />
      <CategorySection
        title="✤ 기타 App"
        items={appContentData.etc}
        visitButtonPosition="top"
        showUrlTopRight={false} // URL 숨김
      />
    </div>
  );
}
