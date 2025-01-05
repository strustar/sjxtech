// pages/aiTools.tsx
import React from 'react';
import CategorySection from '../components/CategorySection';
import { getDataAI } from '../utils/dataAI';

const aiContentData = getDataAI();

export default function AiApp() {
  return (
    // <div className="user-bg1">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="user-text1"> AI 도구 모음 </h1>
          <p className="user-text2 mb-4"> 혁신적인 AI 도구들을 만나보세요 </p>
          <p className="text-gray-900 max-w-2xl mx-auto">
            최신 AI 기술을 활용한 다양한 도구들을 한눈에 확인하고 사용해보세요
          </p>
        </div>

        <CategorySection title="✨ AI 챗봇" items={aiContentData.chatbots} />
        <CategorySection title="✨ 비디오 생성 AI" items={aiContentData.videoAI} />
        <CategorySection title="✨ 이미지 생성 AI" items={aiContentData.imageAI} />
        <CategorySection title="✨ PPT 생성 AI" items={aiContentData.presentationAI} />
        <CategorySection title="✨ 기타 AI" items={aiContentData.etcAI} />
      </div>
    // </div>
  );
}
