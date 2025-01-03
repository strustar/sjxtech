// pages/about.tsx
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sidebar from '../components/Sidebar';

const Slider = dynamic(() => import('react-slick'), {
  ssr: false
});

export default function About() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderImages = [
    { src: '/images/system-design.png', alt: '시스템 설계 예시' },
    { src: '/images/column-design.png', alt: '기둥 설계 예시' },
    { src: '/images/beam-design.png', alt: '보 설계 예시' },
    { src: '/images/foundation-design.png', alt: '기초 설계 예시' },
  ];

  const cardData = [
    {
      title: '시스템 동바리',
      description: '시스템 비계 설계 자동화',
      icon: '/images/icon1.png',
      url: 'https://support.streamlit.app/'
    },
    {
      title: '기둥 설계',
      description: '구조물 설계 자동화',
      icon: '/images/icon2.png',
      url: 'https://column.streamlit.app/'
    }
  ];

  return (
    <div className="flex w-[1400px] mx-auto">
      {/* 사이드바 */}
      <Sidebar onSelectCategory={() => {}} />

      {/* 메인 콘텐츠 */}
      <main className="flex-1 bg-gray-950/30 p-8">
        <div className="max-w-[1000px] py-4"> {/* 1400 - 400 = 1000px */}
          {/* 메인 타이틀 */}
          <div className="text-center mb-16">
            <h1 className="user-text1">설계 자동화 연구성과</h1>
            <p className="user-text2">혁신적인 설계 도구를 소개합니다</p>
            <p className="text-gray-400">
              최신 기술을 활용한 다양한 도구들을 한눈에 확인하고 사용해보세요
            </p>
          </div>

          {/* 슬라이더 */}
          <div className="mb-16">
            {typeof window !== 'undefined' && (
              <Slider {...sliderSettings}>
                {sliderImages.map((image, index) => (
                  <div key={index} className="px-2">
                    <div className="rounded-lg overflow-hidden h-[500px]"> {/* 높이 500px 고정 */}
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>

          {/* 연구 성과 카드 */}
          <div className="grid grid-cols-2 gap-6">
            {cardData.map((card, index) => (
              <div key={index} className="bg-[#1d2127] rounded-xl p-6 hover:ring-1 hover:ring-blue-500 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-400">{card.description}</p>
                  </div>
                  <Image
                    src={card.icon}
                    alt={`${card.title} 아이콘`}
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </div>
                <Link
                  href={card.url}
                  className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                  target="_blank"
                >
                  <span>웹사이트 방문</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}