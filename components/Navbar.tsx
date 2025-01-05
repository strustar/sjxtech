// components/Navbar.tsx
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' // 햄버거 메뉴와 닫기 아이콘
import ThemeToggle from '@/components/ThemeToggle'

const NAV_ITEMS = [
  { href: '/', label: '홈' },
  { href: '/appGallery', label: 'App 개발 전시관' },
  { href: '/aiTools', label: 'AI 도구 종합관' },  
  { href: '/newYear', label: '신년사' },
]

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const getLinkClassName = (href: string): string => {
    const baseStyle = 'text-base sm:text-xl font-bold transition-all duration-200'
    const defaultColors = 'text-[#374151] dark:text-[#d1d5db]'
    const hoverColors = 'hover:text-[#2563eb] dark:hover:text-[#FFA500] hover:underline'
    const activeColors = 'text-[#10B981] dark:text-[#34D399] underline'

    return [
      baseStyle,
      pathname === href ? activeColors : defaultColors,
      hoverColors,
    ].join(' ')
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-layout mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* 로고 영역 */}
        <div className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-lg sm:text-xl font-bold text-[#3b82f6] dark:text-[#60a5fa] hover:transition-all duration-200"
          >
            <Image
              src="/favicon_gold.png"
              alt="SJ TECH 로고"
              width={24}
              height={24}
              className="mr-2"
            />
            SJ TECH
          </Link>
          <span className="text-xs sm:text-sm ml-1 text-gray-300 dark:text-gray-400">
            (에스제이테크)
          </span>
        </div>

        {/* 데스크톱 메뉴 */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={getLinkClassName(item.href)}>
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* 모바일 메뉴 버튼 */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-4 p-2 text-gray-600 dark:text-gray-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-3 bg-white dark:bg-gray-900 shadow-lg">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block ${getLinkClassName(item.href)}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar