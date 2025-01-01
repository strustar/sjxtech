import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    // dark 클래스 추가로 다크모드 활성화
    <Html lang="ko" className="dark">
      {/* Head: 모든 페이지에 적용될 head 태그 내용 */}
      <Head>{/* 메타 태그, 폰트, 외부 스크립트 등을 여기에 추가 */}</Head>

      {/* 
        antialiased: 폰트를 부드럽게 렌더링
        bg-[#1b1f24]: 다크모드 배경색
        text-gray-100: 다크모드 텍스트 색상 
      */}
      <body className="antialiased bg-[#1b1f24] text-gray-100">
        {/* Main: 페이지 컴포넌트가 렌더링되는 곳 */}
        <Main />

        {/* NextScript: Next.js 스크립트가 자동으로 주입됨 */}
        <NextScript />
      </body>
    </Html>
  );
}
