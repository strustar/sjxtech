// components/Navbar.tsx
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from '@/components/ThemeToggle'

// 메뉴 항목 배열
const NAV_ITEMS = [
  { href: '/', label: '홈' },
  { href: '/appGallery', label: 'App 개발 전시관' },
  { href: '/aiTools', label: 'AI 도구 종합관' },  
  { href: '/about', label: '신년사' },
  // { href: '/company', label: '회사소개' },
  // { href: '/products', label: '제품/서비스' },
  // { href: '/dashboard', label: '대시보드' },
  // { href: '/contact', label: '문의하기' },
]

const Navbar = () => {
  const pathname = usePathname()

  const getLinkClassName = (href: string): string => {
    const baseStyle = 'text-xl font-bold transition-all duration-200'
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
      <div className="max-w-layout mx-auto px-6 h-16 flex items-center justify-between">
        <div className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-xl font-bold text-[#3b82f6] dark:text-[#60a5fa] hover:transition-all duration-200"
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
          <span className="text-sm ml-1 text-gray-300 dark:text-gray-400">
            (에스제이테크)
          </span>
        </div>

        <div className="flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={getLinkClassName(item.href)}>
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
