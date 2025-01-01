// components/Header.tsx
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="w-full bg-[#1b1f24]">
      <div className="w-full border-b border-gray-700/50">
        <div className="max-w-[1800px] h-16 mx-auto px-6 flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-blue-400 font-bold text-xl">SJ TECH</span>
            </Link>
            <span className="text-gray-500 ml-2 text-sm">(엑스게이티크)</span>
          </div>

          {/* Right side */}
          <nav className="flex items-center space-x-8">
            <Link
              href="/documentation"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Documentation
            </Link>
            <Link
              href="/info"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              정보/소개
            </Link>
            <Link
              href="/products"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              제품/서비스
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              대시보드
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              문의하기
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white rounded-full hover:bg-gray-800/50 transition-colors"
            >
              <ThemeToggle />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
