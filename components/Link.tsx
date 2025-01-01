import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const ChatGptLink: React.FC = () => {
  const [faviconError, setFaviconError] = useState(false);
  const chatGptUrl = 'https://chat.openai.com/';
  const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain_url=${chatGptUrl}`;

  // 파비콘 로드 에러 처리
  const handleFaviconError = () => {
    setFaviconError(true);
    console.error("Failed to load favicon");
  };

  return (
    <div className="flex items-center p-4">
      {/* 파비콘 이미지 */}
      {!faviconError && (
        <Image
          src={faviconUrl}
          alt="ChatGPT Favicon"
          width={32}
          height={32}
          className="mr-2 rounded-full" // Tailwind CSS class: 둥근 테두리
          onError={handleFaviconError}
        />
      )}

      {/* ChatGPT 링크 */}
      <Link href={chatGptUrl} className="text-blue-500 hover:underline font-bold" target="_blank" rel="noopener noreferrer">
          ChatGPT
      </Link>

      {/* 설명 (선택 사항) */}
      <p className="ml-2 text-gray-600"> - OpenAI에서 개발한 대화형 AI</p>
    </div>
  );
};

export default ChatGptLink;