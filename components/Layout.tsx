// components/Layout.tsx
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // 전체 레이아웃을 감싸는 최상위 div
    <div className="user-bg1">
      {/* 네비게이션 바 */}
      <Navbar />
      
      {/* 컨텐츠 영역 */}
      <div className="w-full mx-auto px-4 sm:px-6">        
        {children}        
      </div>
    </div>
  );
}