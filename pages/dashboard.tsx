// pages/dashboard.tsx
import React from 'react'
import Navbar from '@/components/Navbar'

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">실시간 대시보드</h1>
        {/* Streamlit 앱 임베드 */}
        <div className="w-full h-[800px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="YOUR_STREAMLIT_URL"  // 여기에 실제 Streamlit 앱 URL 입력
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  )
}