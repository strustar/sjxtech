// pages/ai_app.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { getDataAI } from '../utils/dataAI';

const aiContentData = getDataAI();

type AICardProps = {
  item: {
    title: string;
    description: string;
    url: string;
    category: string;
  };
};

const AICard: React.FC<AICardProps> = ({ item }) => {
  const [faviconError, setFaviconError] = useState(false);
  const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain_url=${item.url}`;

  return (
    <div className="bg-gray-950/20 p-6 rounded-lg border border-gray-700/50 hover:border-blue-500/80 transition-all duration-300">
      <div className="flex items-start gap-4">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          {!faviconError ? (
            <Image
              src={faviconUrl}
              alt={`${item.title} 로고`}
              width={40}
              height={40}
              className="rounded-lg hover:scale-110 transition-transform"
              onError={() => setFaviconError(true)}
            />
          ) : (
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <span className="text-blue-400 text-lg font-bold">{item.title[0]}</span>
            </div>
          )}
        </a>

        <div className="flex-grow min-w-0">
          <div className="flex items-center justify-between mb-2">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              {item.title}
            </a>
            <span className="text-sm text-gray-400 truncate">
              {new URL(item.url).hostname}
            </span>
          </div>

          {/* 2줄 표시 */}
          <p className="text-gray-300 mb-3">
            {item.description
              .split('. ')
              .slice(0, 2) // 첫 두 문장만 가져오기
              .map((sentence, index) => (
                <span key={index} className={index !== 0 ? 'block mt-1' : ''}>
                  {sentence.trim()}
                  {index < 1 && '.'} {/* 마침표 추가 */}
                </span>
              ))}
          </p>

          <div className="flex justify-between items-center">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
              {item.category}
            </span>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              방문하기 <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


type CategorySectionProps = {
  title: string;
  items: AICardProps['item'][];
};

const CategorySection: React.FC<CategorySectionProps> = ({ title, items }) => (
  <div className="mb-2">
    <h2 className="text-3xl font-bold text-green-500 mb-4">
      {title}
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-900/30 p-4 rounded-lg border border-gray-700/50 hover:border-red-500/90 transition-all duration-300">
      {items.map((item, index) => (
        <AICard key={index} item={item} />
      ))}
    </div>
  </div>
);

export default function AiApp() {
  return (
    <div className="user-bg1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="user-text1"> AI 도구 모음 </h1>
          <p className="user-text2 mb-4"> 혁신적인 AI 도구들을 만나보세요 </p>
          <p className="text-gray-900 max-w-2xl mx-auto">
            최신 AI 기술을 활용한 다양한 도구들을 한눈에 확인하고 사용해보세요
          </p>
        </div>
        <CategorySection title="AI 챗봇" items={aiContentData.chatbots} />
        <CategorySection title="비디오 생성 AI" items={aiContentData.videoAI} />
        <CategorySection title="이미지 생성 AI" items={aiContentData.imageAI} />
        <CategorySection title="PPT 생성 AI" items={aiContentData.presentationAI} />
        <CategorySection title="기타 AI" items={aiContentData.etcAI} />
      </div>
    </div>
  );
}
