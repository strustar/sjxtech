// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    // dark 클래스 추가로 다크모드 활성화
    <Html lang="ko" className="dark">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased bg-[#1b1f24] text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
