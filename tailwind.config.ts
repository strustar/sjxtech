// tailwind.config.js
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        layout: '1400px', // 최대 넓이 설정
      },
      fontFamily: {
        nanumGothic: ['Nanum Gothic', 'sans-serif'],
      },
      screens: { // 브레이크포인트 설정
        sm: '640px',  // 모바일
        md: '768px',  // 태블릿
        lg: '1024px', // 작은 데스크톱
        xl: '1280px', // 큰 데스크톱
        '2xl': '1536px', // 큰 데스크톱
        '3xl': '1920px', // 큰 데스크톱
      },
    },
  },
  plugins: [],
}

export default config