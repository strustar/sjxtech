import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  className: 'center',
};

const CONTENT_DATA = {
  images: [
    {
      src: '/images/support.png',
      title: '시스템 동바리(비계) 설계 자동화',
      url: 'https://support.streamlit.app',
      description: '시스템 동바리(비계) 설계 검토 보고서',
    },
    {
      src: '/images/beam.png',
      title: '보(Beam) 설계 자동화',
      url: 'https://beam-frp.streamlit.app',
      description: '보 설계 비교 : RC vs. FRP Concrete',
    },
    {
      src: '/images/column.png',
      title: '기둥(Column) 설계 자동화',
      url: 'https://column.streamlit.app',
      description: '기둥 설계 비교 : RC vs. FRP Concrete',
    },
  ],
  videos: [
    {
      src: '/images/support.webm',
      title: '시스템 동바리(비계) 설계 자동화',
      url: 'https://support.streamlit.app',
      description: '시스템 동바리(비계) 설계 검토 보고서',
    },
    {
      src: '/images/beam.webm',
      title: '보(Beam) 설계 자동화',
      url: 'https://beam-frp.streamlit.app',
      description: '보 설계 비교 : RC vs. FRP Concrete',
    },
    {
      src: '/images/column.webm',
      title: '기둥(Column) 설계 자동화',
      url: 'https://column.streamlit.app',
      description: '기둥 설계 비교 : RC vs. FRP Concrete',
    },
  ],
  sections: [
    {
      title: 'AI 기반 업무 자동화',
      messages: [
        'AI로 설계의 한계를 넘어, 새로운 가능성을 열다.',
        '인공지능이 자동화하는 미래, 지금 만나보세요.',
        'AI 기반 자동 설계 솔루션으로 생산성과 혁신을 극대화하세요.',
      ],
    },
    {
      title: 'AI 기반 설계 최적화',
      messages: [
        'AI 기반 최적화 기술로 효율성의 새로운 기준을 제시합니다.',
        '데이터 기반 지능형 최적화, 최고의 결과를 약속합니다.',
        'AI가 찾아내는 최적의 솔루션, 당신의 비즈니스를 혁신합니다.',
      ],
    },
    {
      title: 'AI 기반 업무 혁신',
      messages: [
        'AI와 함께, 업무의 미래를 혁신하세요.',
        '인공지능으로 업무 효율을 극대화하고, 새로운 가치를 창출합니다.',
        'AI 기반 업무 혁신으로 당신의 시간을 더 가치 있게 만들어 드립니다.',
      ],
    },
    {
      title: '파이썬 코딩 (RAG)',
      messages: [
        '파이썬과 AI의 만남, 무한한 가능성을 코드로 구현하다.',
        'AI의 고질적인 문제인 헐루시네이션, 파이썬 RAG로 그 해답을 찾다.',
        '파이썬 기반 AI 솔루션 개발, 미래를 향한 코딩 여정을 함께합니다.',
      ],
    },
  ],
};

const InfoSection = ({ title, messages }: { title: string; messages: string[] }) => (
  <div className="bg-gray-950/30 p-6 rounded-lg border border-gray-500/80">
    <h2 className="text-2xl font-bold text-blue-400 mb-4">{title}</h2>
    {messages.map((message, index) => (
      <p
        key={index}
        className={`text-gray-300 leading-relaxed pl-5 ${
          index !== messages.length - 1 ? 'mb-3' : ''
        }`}
      >
        &ldquo;{message}&rdquo;
      </p>
    ))}
  </div>
);

const ImageSlide = ({ image }: { image: typeof CONTENT_DATA.images[0] }) => (
  <div>
    <div className="px-2 flex justify-center items-center">
      <Image
        src={image.src}
        alt={image.title}
        width={1000}
        height={500}
        className="rounded-lg object-contain"
      />
    </div>
    <div className="mt-4 text-center">
      <h3 className="text-xl font-bold text-gray-100 mb-2">{image.title}</h3>
      <a
        href={image.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 mb-2 block"
      >
        {image.url}
      </a>
      <p className="text-gray-300">{image.description}</p>
    </div>
  </div>
);

const VideoSection = ({ video }: { video: typeof CONTENT_DATA.videos[0] }) => (
  <section className="py-12 border-b border-gray-800/30 last:border-b-0">
    <div className="max-w-[var(--width-max)] mx-auto px-6">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-gray-100">{video.title}</h2>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          ({video.url})
        </a>
      </div>

      <div className="relative w-full pt-[56.25%]">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white" />
        </div>

        <video
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={video.src} type="video/webm" />
        </video>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-1000/90" suppressHydrationWarning>
      <div className="max-w-[var(--width-max)] mx-auto border-b border-gray-800/30 py-12">
        <div className="max-w-[var(--width-max)] mx-auto px-6">
          <div className="pb-12">
            <h1 className="text-center text-5xl font-bold text-white mb-6 tracking-tight">
              AI로 기술의 한계를 넘어
            </h1>
            <p className="text-center text-3xl font-semibold text-orange-400 mb-2">
              새로운 가능성을 열다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
            {CONTENT_DATA.sections.map((section, index) => (
              <InfoSection key={index} title={section.title} messages={section.messages} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[var(--width-max)] mx-auto px-6 py-12">
        <Slider {...SLIDER_SETTINGS}>
          {CONTENT_DATA.images.map((image, index) => (
            <ImageSlide key={index} image={image} />
          ))}
        </Slider>
      </div>

      {CONTENT_DATA.videos.map((video, index) => (
        <VideoSection key={index} video={video} />
      ))}
    </div>
  );
}