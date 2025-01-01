// components/Layout.tsx - 공통 레이아웃 컴포넌트
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#191B1F]">
      <Navbar />
      {children}
    </div>
  );
}
