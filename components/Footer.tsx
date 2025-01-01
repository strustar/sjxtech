// components/Footer.tsx
import Link from 'next/link'; // 이 줄을 추가해주세요

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">대우건설</h3>
            <p className="text-sm">서울특별시 중구 을지로 170</p>
            <p className="text-sm">대표전화: 02-2288-3114</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm hover:text-gray-300">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-gray-300">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">SNS</h3>
            <div className="flex space-x-4">{/* SNS 링크들 */}</div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400">
            © 2024 DAEWOO E&C. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
