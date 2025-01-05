// components/Card.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

type CardProps = {
  item: {
    title: string;
    description: string;
    url: string;
    imageUrl?: string; // 선택적 이미지 URL
    category?: string; // 선택적 카테고리
  };
  visitButtonPosition?: 'top' | 'bottom'; // 버튼 위치 (위 또는 아래)
  showUrlTopRight?: boolean; // 우측 상단 URL 표시 여부
};

const Card: React.FC<CardProps> = ({
  item,
  visitButtonPosition = 'bottom',
  showUrlTopRight = true, // 기본값: URL 표시
  }) => {
  const [faviconError, setFaviconError] = useState(false);
  const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain_url=${item.url}`;

  return (
    <div className="p-6 rounded-lg border border-gray-700/50 hover:border-blue-500/80 transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
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
                <span className="text-orange-400 text-lg font-bold">{item.title[0]}</span>
              </div>
            )}
          </a>

          <div className="flex-grow min-w-0">
            <div className="flex items-center justify-between mb-2">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-blue-400 hover:text-orange-300 transition-colors"
              >
                {item.title}
              </a>

              {/* 방문하기 버튼 위쪽에 표시 */}
              {visitButtonPosition === 'top' && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-orange-300 transition-colors"
                >
                  방문하기 <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              )}

              {/* URL 표시 여부 */}
              {showUrlTopRight && (
                <span className="text-sm text-gray-400 truncate">
                  {new URL(item.url).hostname}
                </span>
              )}
            </div>

            {/* 2줄 입력 */}
            <p className="text-gray-300">
              {item.description
                .split(' •')
                .slice(0, 2)
                .map((sentence, index) => (
                  <span key={index} className={index !== 0 ? 'block mt-2' : ''}>
                    {sentence.trim()}
                  </span>
                ))}
            </p>
          </div>
        </div>
        
        {/* 이미지 추가 */}
        {item.imageUrl && (
          <div className="w-full h-96 relative rounded-lg overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={`${item.title} 이미지`}
              fill
              quality={100}
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* 카테고리와 방문하기 버튼 (아래쪽에 표시) */}
        <div className="flex justify-between items-center">
          {item.category && (
            <span className="ml-14 px-3 py-1 rounded-full bg-green-500/30 text-blue-400 text-sm">
              {item.category}
            </span>
          )}
          {visitButtonPosition === 'bottom' && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              방문하기 <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
